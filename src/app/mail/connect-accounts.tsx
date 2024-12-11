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
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Connect Your Email Accounts</CardTitle>
                <CardDescription>
                    Get started by connecting your email accounts to Mail Hub
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Button
                    onClick={handleGoogleLogin}
                    className="w-auto min-w-[250px] px-10 flex items-center justify-center gap-2"
                >
                    <Mail className="h-4 w-4" />
                    Connect Gmail Account
                </Button>
            </CardContent>
        </Card>
    );
}
