import { Metadata } from "next";
import AdminGuard from "./admin-guard";

export const metadata: Metadata = {
    title: "Admin Dashboard | Codenaxa",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <AdminGuard>{children}</AdminGuard>;
}
