
/*  
    🧯 Fallback Pattern – Overview
    - The Fallback pattern is used to provide an alternative response or logic when a service or operation fails. 
    - Instead of propagating the error, your system “falls back” to a predefined default behavior to maintain availability and user experience.

    🧠 Real-World Analogy
    - Imagine you're ordering coffee, but your favorite brand is out of stock.
    - Instead of leaving empty-handed, the barista offers you a substitute.
    - Similarly, in software, fallback means: “If this fails, then do this instead.”

    ✅ Why Use It?
    - Prevents user-facing failures
    - Ensures graceful degradation
    - Improves fault tolerance
*/

async function fetchUserData(): Promise<string> {
    // Simulate API call failure
    throw new Error("User service unavailable");
}

async function fallbackUserData(): Promise<string> {
    return "Default User";
}

async function getUserDataWithFallback(): Promise<string> {
    try {
        return await fetchUserData();
    } catch (error) {
        console.warn("Primary call failed. Using fallback.");
        return await fallbackUserData();
    }
}

getUserDataWithFallback().then(console.log);

