"use client";

import { Logo } from './layout/logo';
import { Button } from './ui/button';
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
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
                className="shadow rounded-lg mx-4 my-2"
                style={{
                    background: 'linear-gradient(137deg, rgba(17, 18, 20, 0.75) 4.87%, rgba(12, 13, 15, 0.9) 75.88%)',
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    width: "80%"
                }}
            >
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-[#9c9c9d] hover:text-gray-50 text-[14px] font-medium leading-normal tracking-[0.2px] px-[var(--spacing-1)] py-[var(--spacing-1-5)] whitespace-nowrap rounded-[var(--rounding-sm)] transition-all duration-200 ease-in-out">
                            Store
                        </a>
                        <a href="#" className="text-[#9c9c9d] hover:text-gray-50 text-[14px] font-medium leading-normal tracking-[0.2px] px-[var(--spacing-1)] py-[var(--spacing-1-5)] whitespace-nowrap rounded-[var(--rounding-sm)] transition-all duration-200 ease-in-out">
                            Pro
                        </a>
                        <a href="#" className="text-[#9c9c9d] hover:text-gray-50 text-[14px] font-medium leading-normal tracking-[0.2px] px-[var(--spacing-1)] py-[var(--spacing-1-5)] whitespace-nowrap rounded-[var(--rounding-sm)] transition-all duration-200 ease-in-out">
                            Teams
                        </a>
                        <a href="#" className="text-[#9c9c9d] hover:text-gray-50 text-[14px] font-medium leading-normal tracking-[0.2px] px-[var(--spacing-1)] py-[var(--spacing-1-5)] whitespace-nowrap rounded-[var(--rounding-sm)] transition-all duration-200 ease-in-out">
                            Developers
                        </a>
                    </div>


                    {/* Right: Action Buttons */}
                    <div className="flex items-center space-x-4">
                        <Button variant="outline">Log in</Button>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </div>
    );
}
