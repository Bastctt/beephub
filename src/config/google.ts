export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
export const GOOGLE_REDIRECT_URI =
    "http://localhost:3000/api/auth/google/callback";
export const GOOGLE_SCOPES = [
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/userinfo.email",
].join(" ");
