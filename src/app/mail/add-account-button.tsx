"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function AddAccountButton() {
    const handleGoogleLogin = () => {
        window.location.href = "/api/auth/google";
    };

    return (
        <Button onClick={handleGoogleLogin} className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Connect Gmail Account
        </Button>
    );
}
