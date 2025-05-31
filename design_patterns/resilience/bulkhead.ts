/*
    🧱 Bulkhead Pattern – Overview
    - The Bulkhead pattern is a resilience design pattern that isolates components or resources into independent compartments,
        so a failure in one does not cascade to others.
    - This is inspired by bulkheads in a ship—watertight walls that prevent flooding in one compartment from sinking the whole vessel.

    🧠 Real-World Analogy
    - Imagine a ship divided into separate sealed compartments:
    - If one compartment floods, the others remain dry.
    - This prevents total failure due to localized damage.
    - In software:
        - Think of isolating requests by service, customer type, or function.
        - If one component (like file uploads) fails, it won’t take down login or search functionality.

    ✅ Why Use It?
    - Prevent resource exhaustion.
    - Contain failures to a single service or operation type.
    - Increase fault tolerance and graceful degradation.
*/

class Bulkhead {
    private currentCount: number = 0;

    constructor(
        private readonly maxConcurrent: number,
        private readonly name: string
    ) {}

    public async execute<T>(fn: () => Promise<T>): Promise<T | null> {
        if (this.currentCount >= this.maxConcurrent) {
            console.log(`[${this.name}] Bulkhead limit reached. Rejecting request.`);
            return null;
        }

        this.currentCount++;
        console.log(`[${this.name}] Executing... Current: ${this.currentCount}`);

        try {
            return await fn();
        } catch (err) {
            console.log(`[${this.name}] Error:`, err);
            return null;
        } finally {
            this.currentCount--;
            console.log(`[${this.name}] Completed. Current: ${this.currentCount}`);
        }
    }
}

const uploadBulkhead = new Bulkhead(2, "UploadService");
const loginBulkhead = new Bulkhead(5, "LoginService");

async function simulateRequest(name: string, delay: number) {
    return new Promise<string>((resolve) =>
        setTimeout(() => {
            console.log(`${name} request done`);
            resolve(`${name} OK`);
        }, delay)
    );
}

// Simulate multiple upload requests (will exceed limit)
for (let i = 1; i <= 5; i++) {
    uploadBulkhead.execute(() => simulateRequest(`Upload ${i}`, 2000));
}

// Simulate login requests
for (let i = 1; i <= 5; i++) {
    loginBulkhead.execute(() => simulateRequest(`Login ${i}`, 1000));
}
