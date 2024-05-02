import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { Item } from './item';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ItemComponent],
})
export class AppComponent {
  allItems: any = [];

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  toggle(item: Item) {
    this.allItems[this.allItems.indexOf(item)].done =
      !this.allItems[this.allItems.indexOf(item)].done;
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.push({
      description,
      done: false,
    });
  }

  get items() {
    return this.allItems;
  }
}
