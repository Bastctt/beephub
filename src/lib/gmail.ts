import { google } from "googleapis";
// import { cookies } from "next/headers";

// export async function getGmailMessages() {
//     const accessToken = {/*cookies().get("gmail_access_token")?.value*/ || null};

//     if (!accessToken) {
//         throw new Error("No access token found");
//     }

//     const oauth2Client = new google.auth.OAuth2();
//     oauth2Client.setCredentials({ access_token: accessToken });

//     const gmail = google.gmail({ version: "v1", auth: oauth2Client });

//     try {
//         const response = await gmail.users.messages.list({
//             userId: "me",
//             maxResults: 20,
//         });

//         const emails = await Promise.all(
//             response.data.messages?.map(async (message) => {
//                 const email = await gmail.users.messages.get({
//                     userId: "me",
//                     id: message.id!,
//                 });
//                 return email.data;
//             }) || []
//         );

//         return emails;
//     } catch (error) {
//         console.error("Error fetching emails:", error);
//         throw error;
//     }
// }
