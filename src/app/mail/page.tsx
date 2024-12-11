import { Suspense } from "react";
import { MailList } from "./mail-list";

export default async function MailPage() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Mail Hub</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <MailList />
            </Suspense>
        </div>
    );
}
