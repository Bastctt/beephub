"use client";

import { Logo } from './layout/logo';
import { useRouter } from "next/navigation";
import { Button } from './ui/button';
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
    const router = useRouter();

    const handleGoogleNavigation = () => {
        router.push("/register");
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: '50%',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: 'var(--spacing-2) calc(var(--spacing-2) + var(--removed-body-scroll-bar-size)) 0 var(--spacing-2)',
            overscrollBehavior: 'contain',
            transform: 'translateX(-50%)'
        }}>
            <nav
                className="shadow rounded-lg mx-4 my-2
                bg-gradient-to-r
                from-[hsl(var(--background))] to-[hsl(var(--background))]
                dark:from-[hsl(var(--background))] dark:to-[hsl(var(--background))]
                border border-opacity-10
                dark:border-white dark:border-opacity-10
                border-gray-300"
                style={{ width: "70%" }}
            >
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    <div className="hidden md:flex space-x-12">
                        <a href="#" className="text-[#9c9c9d] dark:hover:text-gray-50 hover:text-gray-700 text-[14px] font-medium leading-normal tracking-[0.2px] px-[var(--spacing-1)] py-[var(--spacing-1-5)] whitespace-nowrap rounded-[var(--rounding-sm)] transition-all duration-200 ease-in-out">
                            Store
                        </a>
                        <a href="#" className="text-[#9c9c9d] dark:hover:text-gray-50 hover:text-gray-700 text-[14px] font-medium leading-normal tracking-[0.2px] px-[var(--spacing-1)] py-[var(--spacing-1-5)] whitespace-nowrap rounded-[var(--rounding-sm)] transition-all duration-200 ease-in-out">
                            Pro
                        </a>
                        <a href="#" className="text-[#9c9c9d] dark:hover:text-gray-50 hover:text-gray-700 text-[14px] font-medium leading-normal tracking-[0.2px] px-[var(--spacing-1)] py-[var(--spacing-1-5)] whitespace-nowrap rounded-[var(--rounding-sm)] transition-all duration-200 ease-in-out">
                            Teams
                        </a>
                        <a href="#" className="text-[#9c9c9d] dark:hover:text-gray-50 hover:text-gray-700 text-[14px] font-medium leading-normal tracking-[0.2px] px-[var(--spacing-1)] py-[var(--spacing-1-5)] whitespace-nowrap rounded-[var(--rounding-sm)] transition-all duration-200 ease-in-out">
                            Developers
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="default" onClick={handleGoogleNavigation}>Log in</Button>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </div>
    );
}