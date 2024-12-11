import { NextRequest } from "next/server";
import { google } from "googleapis";
import { cookies } from "next/headers";
import {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
} from "@/config/google";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get("code");

    if (!code) {
        return Response.redirect("/error");
    }

    try {
        const oauth2Client = new google.auth.OAuth2(
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET,
            GOOGLE_REDIRECT_URI
        );

        const { tokens } = await oauth2Client.getToken(code);

        // Store tokens in a secure HTTP-only cookie
        // In production, you should encrypt these
        cookies().set("gmail_access_token", tokens.access_token!, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 3600, // 1 hour
        });

        if (tokens.refresh_token) {
            cookies().set("gmail_refresh_token", tokens.refresh_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });
        }

        return Response.redirect("/mail");
    } catch (error) {
        console.error("OAuth callback error:", error);
        return Response.redirect("/error");
    }
}
