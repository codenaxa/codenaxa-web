import { Box, Container, Typography, Breadcrumbs } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import connectDB from "@/lib/mongodb";
import Post from "@/models/Post";

export const revalidate = 300;

const allowedImageHosts = [
  "codenaxa.in",
  "www.codenaxa.in",
  "firebasestorage.googleapis.com",
  "storage.googleapis.com",
  "codenaxaauth.firebasestorage.app",
];

function isAllowedImageSource(src: string) {
  if (!src.startsWith("http")) return true;
  try {
    const url = new URL(src);
    return allowedImageHosts.includes(url.hostname);
  } catch {
    return false;
  }
}

type PageParams = Promise<{
  slug: string;
}>;

type PostRecord = {
  title: string;
  slug: string;
  content: string;
  coverImage?: string;
  excerpt?: string;
  createdAt: Date;
  updatedAt?: Date;
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

async function getPost(slug: string): Promise<PostRecord | null> {
  try {
    await connectDB();
    const post = await Post.findOne({ slug, published: true }).lean();
    return post as PostRecord | null;
  } catch (error) {
    console.error("Failed to load post:", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | codenaxa",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = post.excerpt || stripHtml(post.content).slice(0, 160);
  const canonical = `/blog/${post.slug}`;

  return {
    title: `${post.title} | codenaxa`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: canonical,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: post.coverImage ? "summary_large_image" : "summary",
      title: post.title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const description = post.excerpt || stripHtml(post.content).slice(0, 160);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    author: {
      "@type": "Person",
      name: "codenaxa",
    },
    image: post.coverImage ? [post.coverImage] : undefined,
  };

  return (
    <Box sx={{ py: { xs: 12, md: 16 }, minHeight: "100vh", bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 6 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link href="/blog" style={{ textDecoration: "none" }}>
            Blog
          </Link>
          <Typography color="text.primary">{post.title}</Typography>
        </Breadcrumbs>

        <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: "2.25rem", md: "3.5rem" }, lineHeight: 1.2, mb: 4 }}>
          {post.title}
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 8, color: "text.secondary" }}>
          <Typography variant="body2">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
          |
          <Typography variant="body2">By Codenaxa</Typography>
        </Box>

        {post.coverImage && (
          <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 6, overflow: "hidden", mb: 8 }}>
            {isAllowedImageSource(post.coverImage) ? (
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 900px) 100vw, 800px"
                className="object-cover"
              />
            ) : (
              <img
                src={post.coverImage}
                alt={post.title}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </Box>
        )}

        <Box
          sx={{
            fontSize: "1.15rem",
            lineHeight: 1.9,
            color: "text.primary",
            "& h1, & h2, & h3, & h4": { fontWeight: 800, mt: 6, mb: 3 },
            "& p": { mb: 4, color: "text.secondary" },
            "& img": { maxWidth: "100%", borderRadius: 4, my: 4 },
            "& a": { color: "primary.main" },
            "& ul, & ol": { mb: 4, pl: 4, color: "text.secondary" },
          }}
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </Container>
    </Box>
  );
}
