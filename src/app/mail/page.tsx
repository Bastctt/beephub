"use client";

import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { MailList } from "./mail-list";
import { ArrowLeft } from "lucide-react";

export default async function MailPage() {
    const router = useRouter();

    return (
        <div className="max-w-4xl mx-auto p-6 animate-fade-in">
            <div className="flex items-center mb-6">
                <button
                    onClick={() => router.push("/")}
                    className="flex items-center text-blue-500 hover:text-blue-700 transition"
                >
                    <ArrowLeft className="h-6 w-6" />
                    <span className="ml-2">Back</span>
                </button>

                <h1 className="text-2xl font-bold flex-grow text-center">
                    Google connexion
                </h1>
            </div>

            <Suspense
                fallback={
                    <div className="flex items-center justify-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
                    </div>
                }
            >
                <MailList />
            </Suspense>
        </div>
    );
}
