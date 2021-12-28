import {Entity} from "@/interfaces/entity";

export class OrderItem implements Entity {
    id: number;
    product_title: string;
    product_price: number;
    quantity: number;

    constructor(id = 0, product_title = '', product_price = 0, quantity = 0) {
        this.id = id;
        this.product_title = product_title;
        this.product_price = product_price;
        this.quantity = quantity;
    }
}
