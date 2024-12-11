import { NextRequest } from "next/server";
import {
    GOOGLE_CLIENT_ID,
    GOOGLE_REDIRECT_URI,
    GOOGLE_SCOPES,
} from "@/config/google";

export async function GET(request: NextRequest) {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=${GOOGLE_SCOPES}&access_type=offline&prompt=consent`;

    return Response.redirect(authUrl);
}
