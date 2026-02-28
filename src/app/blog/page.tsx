"use client";

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function BlogPublicIndex() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPublishedPosts() {
            try {
                const res = await fetch('/api/posts');
                const data = await res.json();
                const published = Array.isArray(data) ? data.filter((p: any) => p.published) : [];
                setPosts(published);
            } catch (e) {
                console.error("Failed to load posts", e);
            } finally {
                setLoading(false);
            }
        }
        fetchPublishedPosts();
    }, []);

    return (
        <Box sx={{ py: { xs: 12, md: 16 }, minHeight: '100vh', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="caption" sx={{ fontWeight: 800, color: "secondary.main", letterSpacing: "0.1em", textTransform: "uppercase", display: 'block', mb: 2 }}>
                    Insights & Updates
                </Typography>
                <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: "2.5rem", md: "4rem" }, mb: 4 }}>
                    Codenaxa <span style={{ color: 'var(--mui-palette-secondary-main)' }}>Blog</span>
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem", mb: 8, maxWidth: 600, lineHeight: 1.8 }}>
                    Discover tutorials, architecture insights, and deep dives into scalable web systems from my experience running a full-stack engineering consultancy.
                </Typography>

                <Grid container spacing={4}>
                    {loading ? (
                        <Grid size={{ xs: 12 }}><Typography>Loading insights...</Typography></Grid>
                    ) : posts.length > 0 ? (
                        posts.map((post) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={post._id}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, border: '1px solid', borderColor: 'divider', boxShadow: 'none', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', borderColor: 'secondary.main' } }}>
                                    {post.coverImage && (
                                        <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                                            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                                        </Box>
                                    )}
                                    <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: 'text.secondary', fontSize: '0.85rem' }}>
                                            <Calendar size={14} />
                                            {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </Box>
                                        <Typography variant="h5" component="h2" sx={{ fontWeight: 800, mb: 2 }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 4, flexGrow: 1 }}>
                                            {post.excerpt || 'Read the full article inside...'}
                                        </Typography>
                                        <Button component={Link} href={`/blog/${post.slug}`} variant="text" color="primary" sx={{ alignSelf: 'flex-start', p: 0, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }} endIcon={<ArrowRight size={18} />}>
                                            Read Article
                                        </Button>
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
