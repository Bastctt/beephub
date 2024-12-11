"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

export function ConnectAccounts() {
    const handleGoogleLogin = () => {
        window.location.href = "/api/auth/google";
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Connect Your Email Accounts</CardTitle>
                <CardDescription>
                    Get started by connecting your email accounts to Mail Hub
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-2"
                >
                    <Mail className="h-4 w-4" />
                    Connect Gmail Account
                </Button>
                {/* Add more providers here */}
            </CardContent>
        </Card>
    );
}
