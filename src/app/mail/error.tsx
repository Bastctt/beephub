"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="p-4">
            <h2>Something went wrong!</h2>
            <pre>{error.message}</pre>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
