import { randomUUID } from 'crypto';

export class Product {
    constructor(id = randomUUID()) {
        this.id = id
    }
}