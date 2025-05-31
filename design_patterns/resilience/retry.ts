/*
    🔁 Retry Design Pattern – Overview
    - The Retry pattern automatically retries a failed operation a limited number of times before giving up. 
    - It's particularly useful in distributed systems where transient failures 
        (like network issues, timeouts, or temporary unavailability) may succeed if tried again.

    🧠 Real-World Analogy
    - Think of trying to send a text message. 
    - If it fails due to no signal, your phone retries automatically after a short delay — assuming the failure is temporary.

    ✅ Use Cases
    - Calling unreliable remote APIs
    - Database connections
    - File system operations
    - Message queue retries

    💡 Key Concepts
    - Max attempts: Number of retries before giving up
    - Delay strategy: Fixed or exponential backoff between attempts
    - Error filtering: Retry only for certain error types (e.g., 5xx errors)
*/

type RetryOptions = {
    maxAttempts: number;
    delayMs: number;
    exponentialBackoff?: boolean;
};

async function retry(
    operation: () => Promise<any>,
    options: RetryOptions
): Promise<any> {
    let attempts = 0;
    let delay = options.delayMs;

    while (attempts < options.maxAttempts) {
        try {
            return await operation(); // Attempt operation
        } catch (error) {
            attempts++;
            if (attempts >= options.maxAttempts) {
                throw new Error(`Operation failed after ${attempts} attempts.`);
            }
            console.warn(`Attempt ${attempts} failed. Retrying in ${delay}ms...`);

            await new Promise(res => setTimeout(res, delay));
            if (options.exponentialBackoff) {
                delay *= 2; // Exponential backoff
            }
        }
    }

    throw new Error('Should not reach here'); // for safety
}

let toggleFail = true;

async function flakyApiCall() {
    if (toggleFail) {
        // toggleFail = false; // Uncomment to simulate a successful call after the first failure
        throw new Error("Temporary API failure");
    }
    return "Success on retry!";
}

retry(flakyApiCall, {
    maxAttempts: 6,
    delayMs: 1000,
    exponentialBackoff: true
}).then(console.log)
  .catch(console.error);
