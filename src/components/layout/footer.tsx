"use client";

import { cn } from "@/lib/utils";

export function Footer() {
    return (
        <footer
            className={cn(
                "border-t py-4",
                "bg-gradient-to-r",
                "from-[rgba(255,255,255,0.9)] to-[rgba(240,240,240,0.9)]",
                "dark:from-[rgba(17,18,20,0.75)] dark:to-[rgba(12,13,15,0.9)]",
                "dark:border-opacity-10 border-opacity-50"
            )}
        >
            <div className="container mx-auto flex flex-wrap text-sm sm:flex-col sm:items-center sm:space-y-4 md:flex-row md:justify-between md:space-y-0">
                <div className="w-full text-center sm:w-auto md:text-left">
                    <p>&copy; {new Date().getFullYear()} BeepHub. All rights reserved.</p>
                </div>
                <div className="w-full text-center sm:w-auto">
                    <p>Built with ❤️ by the BeepHub team.</p>
                </div>
                <div className="flex space-x-4 justify-center w-full sm:w-auto md:justify-end">
                    <a
                        href="/privacy-policy"
                        className="hover:text-muted-foreground transition-colors"
                    >
                        Privacy Policy
                    </a>
                    <span></span>
                    <a
                        href="/terms-of-service"
                        className="hover:text-muted-foreground transition-colors"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}