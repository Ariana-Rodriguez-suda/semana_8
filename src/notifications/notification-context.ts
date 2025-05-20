import { NotificationStrategy } from "./notification-strategy.interface";

export class NotificationContext {
    private strategy: NotificationStrategy;

    setStrategy(strategy:NotificationStrategy) {
        this.strategy = strategy;
    }

    executeStrategy(message: string) {
        this.strategy.send(message);
    }
}