/*
🎯 Purpose of Proxy Pattern
    The Proxy Pattern provides a substitute or placeholder for another object to control access to it. This is useful in cases like:
        Lazy initialization
        Access control
        Logging
        Remote proxies (RPC)
        Caching or rate-limiting

✅ Example Scenario
    Let’s say you have a VideoDownloader service that downloads videos.
    You don’t want to make repeated heavy requests to the server, so you add a proxy that caches responses.
*/

interface CommandExecutor {
    runCommand(command: string): void;
}

class RealCommandExecutor implements CommandExecutor {
    runCommand(command: string): void {
        console.log(`Executing command - ${command}`);
    }
}

class CommandExecutorProxy implements CommandExecutor {
    private executor: RealCommandExecutor = new RealCommandExecutor();
    private isAdmin: boolean = false;

    constructor(user: string, password: string) {
        this.isAdmin = user === 'admin' && password === 'admin123';
    }
    runCommand(command: string): void {
        if (this.isAdmin) {
            this.executor.runCommand(command);
        } else {
            console.log('Access Denied!! You are not authorised to run commands.');
        }
    }
}

const adminExecutor = new CommandExecutorProxy('admin', 'admin123');
adminExecutor.runCommand('take a screenshot!');

const guestExecutor = new CommandExecutorProxy('guest', 'guest123');
guestExecutor.runCommand('take a screenshot!')