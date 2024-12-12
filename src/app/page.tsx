"use client";

import { Navigation } from "@/components/navigation";
import { UserMenu } from "@/components/layout/user-menu";
import { Footer } from "@/components/layout/footer";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-grow flex items-center justify-center px-8">
                <div className="flex flex-col items-center space-y-8">
                    <section className="text-center space-y-4 mb-5">
                        <h1 className="text-4xl font-bold tracking-tight">Welcome to BeepHub</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Connect your messaging platforms and manage all your communications in one place.
                        </p>
                    </section>

                    <div className="mt-8 text-center">
                        <UserMenu />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
