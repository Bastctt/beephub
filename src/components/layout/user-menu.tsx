"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle, Mail, Twitter } from "lucide-react";

export function UserMenu() {
    const router = useRouter();

    const handleGoogleNavigation = () => {
        router.push("/mail");
    };

    return (
        <div className="flex items-center space-x-4">
            <Button
                onClick={handleGoogleNavigation}
                variant="outline"
                className="hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105"
            >
                <MessageCircle size={20} className="mr-2" />
                Google
            </Button>
            <Button variant="outline" className="hover:bg-pink-500 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
                <Instagram size={20} className="mr-2" />
                Instagram
            </Button>
            <Button variant="outline" className="hover:bg-blue-700 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
                <Linkedin size={20} className="mr-2" />
                LinkedIn
            </Button>
            <Button variant="outline" className="hover:bg-green-500 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
                <Mail size={20} className="mr-2" />
                WhatsApp
            </Button>
            <Button variant="outline" className="hover:bg-sky-500 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
                <Twitter size={20} className="mr-2" />
                Twitter
            </Button>
        </div>
    );
}
