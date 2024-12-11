'use client';

import { Navigation } from "@/components/navigation";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-grow flex flex-col items-center justify-center space-y-8 px-8">
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Welcome to BeepHub</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Connect your messaging platforms and manage all your communications in one place.
                    </p>
                </section>
            </main>
        </div>
    );
}
