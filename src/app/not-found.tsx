import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BackToHomeButton from './_components/back-to-home-button';

export const metadata = {
    title: 'Page Not Found | codenaxa',
    description: 'The requested page could not be found.',
};

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center text-center p-6 pt-32 pb-20">
                <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 font-satoshi mb-4">404</h1>
                <h2 className="text-3xl font-bold mb-4 font-satoshi">Page Not Found</h2>
                <p className="text-gray-500 mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <BackToHomeButton />
            </main>
            <Footer />
        </div>
    );
}
