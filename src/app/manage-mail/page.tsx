"use client";
import React, { useState } from "react";
import { Plus, Mail, Trash2 } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const MailHub = () => {
    const [emails, setEmails] = useState([]);
    const [newEmail, setNewEmail] = useState("");
    const [emailProvider, setEmailProvider] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleAddEmail = () => {
        if (newEmail && emailProvider) {
            setEmails([
                ...emails,
                { address: newEmail, provider: emailProvider },
            ]);
            setNewEmail("");
            setEmailProvider("");
            setIsOpen(false);
        }
    };

    const handleRemoveEmail = (index) => {
        const updatedEmails = emails.filter((_, i) => i !== index);
        setEmails(updatedEmails);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Mail Hub</CardTitle>
                    <CardDescription>
                        Manage all your email accounts in one place
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {emails.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                No email accounts added yet
                            </div>
                        ) : (
                            emails.map((email, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 border rounded-lg"
                                >
                                    <div className="flex items-center space-x-4">
                                        <Mail className="h-5 w-5 text-gray-500" />
                                        <div>
                                            <p className="font-medium">
                                                {email.address}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {email.provider}
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleRemoveEmail(index)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
                <CardFooter>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button className="w-full">
                                <Plus className="mr-2 h-4 w-4" /> Add Email
                                Account
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Email Account</DialogTitle>
                                <DialogDescription>
                                    Enter your email address and select your
                                    provider
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={newEmail}
                                        onChange={(e) =>
                                            setNewEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="provider">
                                        Email Provider
                                    </Label>
                                    <Select
                                        value={emailProvider}
                                        onValueChange={setEmailProvider}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select provider" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="gmail">
                                                Gmail
                                            </SelectItem>
                                            <SelectItem value="outlook">
                                                Outlook
                                            </SelectItem>
                                            <SelectItem value="yahoo">
                                                Yahoo
                                            </SelectItem>
                                            <SelectItem value="other">
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={handleAddEmail}>
                                    Add Account
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </Card>
        </div>
    );
};

export default MailHub;
