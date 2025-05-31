/*
    🚦 Rate Limiter Design Pattern – Overview
    - The Rate Limiter pattern controls how frequently a user or service can access a resource within a specific time window. 
    - It helps prevent system overload, abuse, or misuse (e.g., from bots or high-frequency users).

    🧠 Real-World Analogy
    - Think of a turnstile at a subway station.
    - Only one person can enter at a time, and there's a delay between each entry. 
    - Or a speed gate limiting how many people pass in a minute.

    ✅ Use Cases
    - API gateways to throttle traffic
    - Preventing brute-force attacks (login attempts)
    - Fair usage in public services (e.g., GitHub API)
    - Protecting downstream services from overuse

    💡 Key Techniques
    - Fixed Window: Allow X requests per fixed time window (e.g., 10/min).
    - Sliding Window: Tracks requests over a rolling window for better smoothing.
    - Token Bucket: Tokens are added at fixed intervals; each request consumes a token.
    - Leaky Bucket: Like token bucket but processes requests at a steady rate.
*/

// Token Bucket Algorithm
class RateLimiter {
    private tokens: number;
    private readonly capacity: number;
    private readonly refillInterval: number;
    private readonly refillAmount: number;

    constructor(capacity: number, refillInterval: number, refillAmount: number) {
        this.capacity = capacity;
        this.tokens = capacity;
        this.refillInterval = refillInterval;
        this.refillAmount = refillAmount;

        setInterval(() => this.refill(), refillInterval);
    }

    private refill() {
        this.tokens = Math.min(this.capacity, this.tokens + this.refillAmount);
    }

    public tryConsume(): boolean {
        if (this.tokens > 0) {
            this.tokens--;
            return true;
        }
        return false;
    }
}

const limiter = new RateLimiter(5, 1000, 1); // 5 tokens max, 1 token per second

// uncomment to simulate API calls for testing of token bucket rate limiter
// setInterval(() => {
//     if (limiter.tryConsume()) {
//         console.log("API call allowed at", new Date().toISOString());
//     } else {
//         console.log("Rate limit exceeded at", new Date().toISOString());
//     }
// }, 300); // Try every 300ms


// Leaky Bucket Algorithm
class LeakyBucketRateLimiter {
    private queue: (() => void)[] = [];
    private readonly maxCapacity: number;
    private readonly leakInterval: number;

    constructor(maxCapacity: number, leakInterval: number) {
        this.maxCapacity = maxCapacity;
        this.leakInterval = leakInterval;

        setInterval(() => this.processQueue(), this.leakInterval);
    }

    private processQueue(): void {
        if (this.queue.length > 0) {
            const job = this.queue.shift();
            job?.();
        }
    }

    public tryAddRequest(task: () => void): boolean {
        if (this.queue.length < this.maxCapacity) {
            this.queue.push(task);
            return true;
        } else {
            console.log('Request dropped: Bucket full');
            return false;
        }
    }
}


const leakyBucketLimiter = new LeakyBucketRateLimiter(5, 1000); // Max 5 queued tasks, 1 task per second

// Uncomment to simulate API calls for testing of leaky bucket rate limiter
// async function processRequests() {
//     for (let i = 1; i <= 10; i++) {
//         const accepted = leakyBucketLimiter.tryAddRequest(() => {
//             console.log(`Processing request ${i} at`, new Date().toISOString());
//         });

//         if (!accepted) {
//             console.log(`Request ${i} rejected`);
//         }
//         await new Promise(resolve => setTimeout(resolve, 300)); // Simulate some delay between requests
//     }
// }
// processRequests().catch(console.error);

