import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = [];

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((miItem) => miItem.menuItem.id === item.id);
        if (foundItem) {
            foundItem.quantity += 1;
        } else {
            this.items.push(new CartItem(item));
        }
    }

    removerItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);            
    }
}