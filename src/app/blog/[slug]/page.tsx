"use client";

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';

export default function BlogPostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await fetch(`/api/posts/${slug}`);
                if (!res.ok) {
                    if (res.status === 404) notFound();
                    throw new Error('Failed to fetch');
                }
                const data = await res.json();
                setPost(data);
            } catch (e) {
                console.error("Error loading specific post", e);
            } finally {
                setLoading(false);
            }
        }
        if (slug) fetchPost();
    }, [slug]);

    if (loading) return <Box sx={{ py: 20, textAlign: 'center' }}><Typography>Loading article...</Typography></Box>;
    if (!post) return null;

    return (
        <Box sx={{ py: { xs: 12, md: 16 }, minHeight: '100vh', bgcolor: 'background.default' }}>
            <Container maxWidth="md">

                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 6 }}>
                    <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>Home</Link>
                    <Link href="/blog" color="inherit" style={{ textDecoration: 'none' }}>Blog</Link>
                    <Typography color="text.primary">{post.title}</Typography>
                </Breadcrumbs>

                <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: "2.25rem", md: "3.5rem" }, lineHeight: 1.2, mb: 4 }}>
                    {post.title}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 8, color: 'text.secondary' }}>
                    <Typography variant="body2">{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
                    •
                    <Typography variant="body2">By Codenaxa</Typography>
                </Box>

                {post.coverImage && (
                    <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 6, overflow: 'hidden', mb: 8 }}>
                        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                    </Box>
                )}

                <Box
                    sx={{
                        fontSize: '1.15rem',
                        lineHeight: 1.9,
                        color: 'text.primary',
                        '& h1, & h2, & h3, & h4': { fontWeight: 800, mt: 6, mb: 3 },
                        '& p': { mb: 4, color: 'text.secondary' },
                        '& img': { maxWidth: '100%', borderRadius: 4, my: 4 },
                        '& a': { color: 'primary.main' },
                        '& ul, & ol': { mb: 4, pl: 4, color: 'text.secondary' }
                    }}
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

            </Container>
        </Box>
    );
}
