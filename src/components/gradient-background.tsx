interface GradientCircleProps {
    color: string;
    position: string;
    animationDelay?: string;
}

interface AnimatedGradientBackgroundProps {
    children?: React.ReactNode;
}

const GradientCircle: React.FC<GradientCircleProps> = ({
    color,
    position,
    animationDelay,
}) => (
    <div
        className={`absolute ${position} w-96 h-96 ${color} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${
            animationDelay || ""
        }`}
    />
);

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
    children,
}) => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            {/* Main container for the gradient animation */}
            <div className="absolute inset-0">
                {/* Animated gradient circles */}
                <GradientCircle
                    color="bg-blue-400"
                    position="top-1/4 left-1/4"
                />
                <GradientCircle
                    color="bg-purple-400"
                    position="top-1/3 right-1/4"
                    animationDelay="animation-delay-2000"
                />
                <GradientCircle
                    color="bg-pink-400"
                    position="bottom-1/4 left-1/3"
                    animationDelay="animation-delay-4000"
                />
            </div>

            {/* Content container */}
            <div className="relative z-10">{children}</div>

            {/* Tailwind animation keyframes - added to global styles */}
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
