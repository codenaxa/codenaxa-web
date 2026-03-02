"use client";

import dynamic from "next/dynamic";

// Skeleton placeholder shown while each section's JS chunk is downloading
function SectionSkeleton({ height = "400px" }: { height?: string }) {
    return (
        <div
            style={{ height, width: "100%" }}
            className="animate-pulse bg-neutral-100 dark:bg-neutral-900"
            aria-hidden="true"
        />
    );
}

// Keep sections dynamically split while still allowing SSR for SEO and faster first paint.
// Emotion cache is configured at the app root to avoid hydration mismatches.

const AboutSection = dynamic(() => import("@/components/sections/about"), {
    loading: () => <SectionSkeleton height="480px" />,
});
const ServicesSection = dynamic(() => import("@/components/sections/services"), {
    loading: () => <SectionSkeleton height="520px" />,
});
const ProjectsSection = dynamic(() => import("@/components/sections/projects"), {
    loading: () => <SectionSkeleton height="520px" />,
});
const WorkPackages = dynamic(() => import("@/components/sections/work-packages"), {
    loading: () => <SectionSkeleton height="600px" />,
});
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials"), {
    loading: () => <SectionSkeleton height="400px" />,
});
const FAQSection = dynamic(() => import("@/components/sections/faq"), {
    loading: () => <SectionSkeleton height="400px" />,
});
const ContactSection = dynamic(() => import("@/components/sections/contact"), {
    loading: () => <SectionSkeleton height="480px" />,
});
const Footer = dynamic(() => import("@/components/layout/footer"), {
    loading: () => <SectionSkeleton height="200px" />,
});

export default function BelowFold() {
    return (
        <>
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <WorkPackages />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </>
    );
}
