'use client';

import { Logo } from './layout/logo';
import { UserMenu } from './layout/user-menu';
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
    return (
        <nav className="border-b shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center">
                <div className="flex-1 flex justify-start">
                    <Logo />
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="hidden lg:flex">
                        <UserMenu />
                    </div>
                </div>

                <div className="flex-1 flex justify-end items-center space-x-4">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
