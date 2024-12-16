"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
    Mail,
    MessageSquare,
    ChevronDown,
    X,
    Inbox,
    Send,
    Trash,
    Star,
    Plus,
    Loader2,
} from "lucide-react";
import AnimatedGradientBackground from "@/components/gradient-background";

interface EmailAccount {
    id: string;
    type: string;
    email: string;
    unread: number;
}

interface EmailTab {
    id: string;
    accountId: string;
    title: string;
    type: "inbox" | "sent" | "starred" | "trash";
}

export default function Dashboard() {
    // Sample email accounts - in real app, fetch from API
    const [emailAccounts, setEmailAccounts] = useState<EmailAccount[]>([
        { id: "1", type: "gmail", email: "user@gmail.com", unread: 3 },
        { id: "2", type: "outlook", email: "user@outlook.com", unread: 5 },
    ]);

    const [activeSection, setActiveSection] = useState<"email" | "messages">(
        "email"
    );
    const [expandedAccounts, setExpandedAccounts] = useState<string[]>([]);
    const [openTabs, setOpenTabs] = useState<EmailTab[]>([]);
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const toggleAccountExpanded = (accountId: string) => {
        setExpandedAccounts((prev) =>
            prev.includes(accountId)
                ? prev.filter((id) => id !== accountId)
                : [...prev, accountId]
        );
    };

    const openNewTab = (accountId: string, type: EmailTab["type"]) => {
        const account = emailAccounts.find((acc) => acc.id === accountId);
        if (!account) return;

        const newTab: EmailTab = {
            id: `${accountId}-${type}-${Date.now()}`,
            accountId,
            title: `${account.email} - ${type}`,
            type,
        };

        setOpenTabs((prev) => [...prev, newTab]);
        setActiveTab(newTab.id);
    };

    const closeTab = (tabId: string) => {
        setOpenTabs((prev) => prev.filter((tab) => tab.id !== tabId));
        if (activeTab === tabId) {
            const remainingTabs = openTabs.filter((tab) => tab.id !== tabId);
            setActiveTab(remainingTabs[remainingTabs.length - 1]?.id || null);
        }
    };

    return (
        <div className="h-screen flex">
            <AnimatedGradientBackground>
                {/* Sidebar */}
                <div className="w-64 bg-background border-r flex flex-col">
                    <div className="p-4 font-semibold text-lg">
                        Mail & Message Hub
                    </div>
                    <Separator />

                    {/* Navigation */}
                    <ScrollArea className="flex-1">
                        <div className="p-2 space-y-2">
                            {/* Section Toggles */}
                            <div className="space-y-1">
                                <Button
                                    variant={
                                        activeSection === "email"
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    className="w-full justify-start"
                                    onClick={() => setActiveSection("email")}
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email
                                </Button>
                                <Button
                                    variant={
                                        activeSection === "messages"
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    className="w-full justify-start"
                                    onClick={() => setActiveSection("messages")}
                                >
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Messages
                                </Button>
                            </div>

                            <Separator />

                            {/* Email Accounts */}
                            {activeSection === "email" && (
                                <div className="space-y-1">
                                    {emailAccounts.map((account) => (
                                        <div key={account.id}>
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-between"
                                                onClick={() =>
                                                    toggleAccountExpanded(
                                                        account.id
                                                    )
                                                }
                                            >
                                                <span className="flex items-center">
                                                    <Mail className="mr-2 h-4 w-4" />
                                                    {account.email}
                                                </span>
                                                <ChevronDown
                                                    className={`h-4 w-4 transition-transform ${
                                                        expandedAccounts.includes(
                                                            account.id
                                                        )
                                                            ? "transform rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </Button>

                                            {expandedAccounts.includes(
                                                account.id
                                            ) && (
                                                <div className="ml-4 space-y-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full justify-start"
                                                        onClick={() =>
                                                            openNewTab(
                                                                account.id,
                                                                "inbox"
                                                            )
                                                        }
                                                    >
                                                        <Inbox className="mr-2 h-4 w-4" />
                                                        Inbox
                                                        {account.unread > 0 && (
                                                            <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                                                                {account.unread}
                                                            </span>
                                                        )}
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full justify-start"
                                                        onClick={() =>
                                                            openNewTab(
                                                                account.id,
                                                                "sent"
                                                            )
                                                        }
                                                    >
                                                        <Send className="mr-2 h-4 w-4" />
                                                        Sent
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full justify-start"
                                                        onClick={() =>
                                                            openNewTab(
                                                                account.id,
                                                                "starred"
                                                            )
                                                        }
                                                    >
                                                        <Star className="mr-2 h-4 w-4" />
                                                        Starred
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="w-full justify-start"
                                                        onClick={() =>
                                                            openNewTab(
                                                                account.id,
                                                                "trash"
                                                            )
                                                        }
                                                    >
                                                        <Trash className="mr-2 h-4 w-4" />
                                                        Trash
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full justify-start mt-2"
                                    >
                                        <Plus className="mr-2 h-4 w-4" />
                                        Add Email Account
                                    </Button>
                                </div>
                            )}

                            {/* Messages Section Placeholder */}
                            {activeSection === "messages" && (
                                <div className="p-4 text-center text-muted-foreground">
                                    Messages section coming soon...
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Tabs */}
                    {openTabs.length > 0 && (
                        <div className="border-b bg-background">
                            <ScrollArea
                                className="w-full"
                                orientation="horizontal"
                            >
                                <div className="flex">
                                    {openTabs.map((tab) => (
                                        <div
                                            key={tab.id}
                                            className={`flex items-center px-4 py-2 border-r cursor-pointer ${
                                                activeTab === tab.id
                                                    ? "bg-secondary"
                                                    : "hover:bg-secondary/50"
                                            }`}
                                            onClick={() => setActiveTab(tab.id)}
                                        >
                                            <span className="max-w-[200px] truncate">
                                                {tab.title}
                                            </span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    closeTab(tab.id);
                                                }}
                                                className="ml-2 p-1 hover:bg-destructive/10 rounded-sm"
                                            >
                                                <X className="h-4 w-4 hover:text-destructive" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                    )}

                    {/* Content Area */}
                    <div className="flex-1 p-4 bg-background/50">
                        {activeTab ? (
                            <EmailContent
                                tab={openTabs.find(
                                    (tab) => tab.id === activeTab
                                )}
                            />
                        ) : (
                            <div className="h-full flex items-center justify-center text-muted-foreground">
                                Select an email folder to get started
                            </div>
                        )}
                    </div>
                </div>
            </AnimatedGradientBackground>
        </div>
    );
}

// Placeholder Email Content Component
function EmailContent({ tab }: { tab?: EmailTab }) {
    if (!tab) return null;

    return (
        <Card className="h-full p-4">
            <div className="h-full flex items-center justify-center text-muted-foreground">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading {tab.type} for {tab.title}...
            </div>
        </Card>
    );
}
