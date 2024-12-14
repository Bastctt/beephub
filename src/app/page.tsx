"use client";

import { Navigation } from "@/components/navigation";
import { UserMenu } from "@/components/layout/user-menu";
import AnimatedGradientBackground from "@/components/gradient-background";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <AnimatedGradientBackground />
            <Navigation />
            <main className="flex-grow flex items-center justify-center px-4 sm:px-8">
                <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                    <section className="text-center space-y-4 mb-12 sm:mb-16 flex flex-col w-full gap-10">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight break-words whitespace-pre-wrap"
                            style={{ maxWidth: "100%", lineHeight: "0.5" }}
                        >
                            Your app to{"\n\n"}connect everything.
                        </h1>
                        <p className="text-base sm:text-lg max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
                            Connect your messaging platforms and manage all your communications in one place.
                        </p>
                    </section>

                    <div className="mt-12 sm:mt-16 text-center">
                        <UserMenu />
                    </div>
                </div>
            </main>
        </div>
    );
}
