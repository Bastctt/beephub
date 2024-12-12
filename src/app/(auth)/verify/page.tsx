"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function EmailConfirmationPage() {
    const [email, setEmail] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const supabase = createClientComponentClient();

    useEffect(() => {
        // Get the email from the session
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            if (session?.user?.email) {
                setEmail(session.user.email);
            }
        };
        getSession();
    }, []);

    const handleResendEmail = async () => {
        if (!email) return;

        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.resend({
                type: "signup",
                email: email,
                options: {
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                },
            });

            if (error) {
                setError(error.message);
            }
        } catch (err) {
            setError("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <Mail className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <CardTitle>Check your email</CardTitle>
                    <CardDescription className="mt-2">
                        We sent a verification link to
                        {email && (
                            <span className="font-medium text-foreground">
                                {" "}
                                {email}
                            </span>
                        )}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                        <p className="font-medium mb-2">What happens next?</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Click the link in the email we sent you</li>
                            <li>The link will verify your email address</li>
                            <li>
                                You'll be redirected to sign in to your account
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 text-center">
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={handleResendEmail}
                            disabled={loading}
                        >
                            {loading
                                ? "Sending..."
                                : "Resend verification email"}
                        </Button>

                        <p className="text-sm text-muted-foreground">
                            Wrong email?{" "}
                            <Link
                                href="/register"
                                className="text-primary hover:underline"
                            >
                                Try another email
                            </Link>
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-primary hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
