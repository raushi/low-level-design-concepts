/*
    ⏱ Timeout Pattern – Overview
    - The Timeout pattern sets a maximum time limit for operations (like API calls, DB queries, or function execution). 
    - If the operation doesn’t complete within this time, it is aborted or treated as failed.
    - This avoids tying up resources waiting forever, especially in distributed systems.

    🧠 Real-World Analogy
    - Think of ordering food at a restaurant:
    - If it takes too long, you cancel the order and leave.
    - You’d rather have no food than wait endlessly.
    - Similarly, in software, you'd rather fail fast and try fallback logic or retries.

    ✅ Why Use It?
    - Prevents resource starvation.
    - Enables fail-fast behavior.
    - Helps avoid cascading latency in distributed systems.
*/

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("Operation timed out"));
        }, timeoutMs);

        promise
            .then((res) => {
                clearTimeout(timer);
                resolve(res);
            })
            .catch((err) => {
                clearTimeout(timer);
                reject(err);
            });
    });
}

function slowOperation(): Promise<string> {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Done!"), 3000) // 3s delay
    );
}

withTimeout(slowOperation(), 2000) // 2s timeout
    .then(console.log)
    .catch((err) => console.error("Failed:", err.message));

