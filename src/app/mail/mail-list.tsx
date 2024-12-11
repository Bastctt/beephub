import { getGmailMessages } from "@/lib/gmail";
import { ConnectAccounts } from "./connect-accounts";
import { Card } from "@/components/ui/card";

export async function MailList() {
    try {
        const emails = await getGmailMessages();

        return (
            <div className="space-y-4">
                {emails.map((email) => (
                    <Card key={email.id} className="p-4">
                        <h3 className="font-medium">
                            {
                                email.payload?.headers?.find(
                                    (h) => h.name === "Subject"
                                )?.value
                            }
                        </h3>
                        <p className="text-sm text-gray-500">
                            {
                                email.payload?.headers?.find(
                                    (h) => h.name === "From"
                                )?.value
                            }
                        </p>
                    </Card>
                ))}
            </div>
        );
    } catch (error: any) {
        // If no access token is found, show the connect accounts component
        if (error.message.includes("No access token found")) {
            return <ConnectAccounts />;
        }

        // For other errors, show an error message
        return (
            <Card className="p-4">
                <p className="text-red-600">
                    Error loading emails: {error.message}
                </p>
            </Card>
        );
    }
}
