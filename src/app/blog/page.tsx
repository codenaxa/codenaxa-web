import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import type { Metadata } from "next";
import connectDB from "@/lib/mongodb";
import Post from "@/models/Post";

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

export const metadata: Metadata = {
  title: "Blog | codenaxa",
  description:
    "Insights and tutorials about scalable web systems, SaaS architecture, and performance-focused engineering from codenaxa.",
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 300;

type PostSummary = {
  _id: unknown;
  slug: string;
  title: string;
  excerpt?: string;
  coverImage?: string;
  createdAt: Date;
};

async function getPosts(): Promise<PostSummary[]> {
  try {
    await connectDB();
    const posts = await Post.find({ published: true })
      .sort({ createdAt: -1 })
      .lean();
    return posts as PostSummary[];
  } catch (error) {
    console.error("Failed to load posts:", error);
    return [];
  }
}

export default async function BlogPublicIndex() {
  const posts = await getPosts();

  return (
    <Box sx={{ py: { xs: 12, md: 16 }, minHeight: "100vh", bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="caption"
          sx={{
            fontWeight: 800,
            color: "secondary.main",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "block",
            mb: 2,
          }}
        >
          Insights & Updates
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: "2.5rem", md: "4rem" }, mb: 4 }}>
          Codenaxa <span style={{ color: "var(--mui-palette-secondary-main)" }}>Blog</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            mb: 8,
            maxWidth: 600,
            lineHeight: 1.8,
          }}
        >
          Discover tutorials, architecture insights, and deep dives into scalable web systems from my experience running
          a full-stack engineering consultancy.
        </Typography>

        <Grid container spacing={4}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={(post._id as any)?.toString?.() ?? post.slug}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    border: "1px solid",
                    borderColor: "divider",
                    boxShadow: "none",
                    transition: "transform 0.2s",
                    "&:hover": { transform: "translateY(-6px)", borderColor: "secondary.main" },
                  }}
                >
                  {post.coverImage && (
                    <Box sx={{ width: "100%", aspectRatio: "16/9", position: "relative", overflow: "hidden" }}>
                      {isAllowedImageSource(post.coverImage) ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <CardContent sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, color: "text.secondary", fontSize: "0.85rem" }}>
                      <Calendar size={14} />
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </Box>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 800, mb: 2 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 4, flexGrow: 1 }}>
                      {post.excerpt || "Read the full article inside..."}
                    </Typography>
                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                      <Button
                        variant="text"
                        color="primary"
                        sx={{ alignSelf: "flex-start", p: 0, "&:hover": { bgcolor: "transparent", textDecoration: "underline" } }}
                        endIcon={<ArrowRight size={18} />}
                      >
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid size={{ xs: 12 }}>
              <Typography color="text.secondary">No articles have been published yet. Check back later!</Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
