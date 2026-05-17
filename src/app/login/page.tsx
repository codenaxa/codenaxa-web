import { Metadata } from "next";
import LoginForm from "./login-form";

export const metadata: Metadata = {
    title: "Admin Login | Codenaxa",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export default function LoginPage() {
    return <LoginForm />;
}
