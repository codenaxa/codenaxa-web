import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-background selection:bg-indigo-100 selection:text-indigo-900">
            <Header />
            <main id="main-content" className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
