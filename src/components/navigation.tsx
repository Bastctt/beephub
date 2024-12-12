"use client";

import { Logo } from './layout/logo';
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
    return (
        <nav>
            <div className="container mx-auto px-4 h-16 flex items-center">
                <div className="flex justify-center">
                    <Logo />
                </div>

                <div className="flex-1 flex justify-end items-center">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
