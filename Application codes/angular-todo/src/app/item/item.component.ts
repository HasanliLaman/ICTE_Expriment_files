import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();
  @Output() toggle = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;

    this.item.description = description;
  }
}
