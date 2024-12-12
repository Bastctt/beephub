"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faWhatsapp, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export function UserMenu() {
    const router = useRouter();

    const handleGoogleNavigation = () => {
        router.push("/mail");
    };

    return (
        <div className="flex items-center space-x-4">
            <Button
                onClick={handleGoogleNavigation}
                variant="outline"
                className="hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105"
            >
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Google
            </Button>
            <Button variant="outline" className="hover:bg-pink-500 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                Instagram
            </Button>
            <Button variant="outline" className="hover:bg-blue-700 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
            </Button>
            <Button variant="outline" className="hover:bg-green-500 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                WhatsApp
            </Button>
            <Button variant="outline" className="hover:bg-sky-500 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
                <FontAwesomeIcon icon={faXTwitter} className="mr-2" />
                X
            </Button>
        </div>
    );
}
