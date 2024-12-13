"use client";

import { FC } from "react";

const AnimatedGradientBackground: FC = () => {
    return (
        <div className="fixed inset-0 -z-10">
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                aria-hidden="true"
            />
            <div
                className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
                aria-hidden="true"
            />

            <style jsx global>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default AnimatedGradientBackground;