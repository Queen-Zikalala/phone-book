import { AlertType } from './alert-type';

class Alert {
    type!: AlertType;
    message!: string;
    duration!: number;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export {
    AlertType,
    Alert
};
