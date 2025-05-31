/*
    Circuit Breaker
    - Prevent cascading failures by "breaking the circuit" temporarily.
    - Real World Analogy:
    - Think of a circuit breaker in your house—when there’s too much current (overload), 
        it trips to prevent a fire. Similarly, in software, it prevents calling a failing service again and again.
    - It allows the system to recover and prevents further damage.
    - It can be reset after a certain time or manually.
*/

enum CircuitState {
    CLOSED = 'CLOSED',
    OPEN = 'OPEN',
    HALF_OPEN = 'HALF_OPEN'
}

class CircuitBreaker {
    private failureCount = 0;
    private successCount = 0;
    private state = CircuitState.CLOSED;
    private lastFailureTime = 0;

    constructor(
        private threshold: number,              // max failures before tripping
        private cooldownTime: number,           // time before trying again (ms)
        private successThreshold: number        // successes needed to close from HALF_OPEN
    ) {}

    async call(requestFn: () => Promise<any>): Promise<any> {
        const now = Date.now();

        if (this.state === CircuitState.OPEN) {
            if (now - this.lastFailureTime > this.cooldownTime) {
                this.state = CircuitState.HALF_OPEN;
                console.log('Circuit breaker state: HALF_OPEN');
            } else {
                throw new Error('Circuit is OPEN. Request denied.');
            }
        }

        try {
            const resposne = await requestFn();

            if (this.state === CircuitState.HALF_OPEN) {
                this.successCount++;
                if (this.successCount >= this.successThreshold) {
                    this.state = CircuitState.CLOSED;
                    this.successCount = 0;
                    this.failureCount = 0;
                    console.log('Circuit breaker state: CLOSED');
                }
            }
            return resposne;
        } catch (error) {
            this.failureCount++;
            this.lastFailureTime = now;

            if (this.failureCount >= this.threshold) {
                this.state = CircuitState.OPEN;
                console.log('Circuit breaker state: OPEN');
            }

            let errorMessage = 'Unknown error';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            throw new Error(`Request failed. Circuit breaker tracking failure: ${errorMessage}`);
        }
    }
}

const circuitBreaker = new CircuitBreaker(3, 5000, 2);

let failToggle = false;

async function unreliableService() {
    if (failToggle) {
        failToggle = false;
        throw new Error('Service failure');
    }
    return 'Service success';
}

async function makeRequest() {
    for (let i = 0; i <= 20; i++) {
        if (i%5 === 0) {
            failToggle = true; // toggle failure every 3 requests
        }
        try {
            const result = await circuitBreaker.call(unreliableService);
            console.log(result);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(error);
            }
        }

        await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 second before next request
        
    }
}

makeRequest().catch(console.error);