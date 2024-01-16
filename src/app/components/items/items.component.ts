import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  item!: Item;
  sortedColumn: string = '';
  isDesc: boolean = false;
  filteredItems: Item[] = [];
  searchQuery: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.apiService.getItems().subscribe((items) => {
      //Only get items that are active
      this.items = items.filter((item) => {
        return item.isActive === true;
      });
      this.filteredItems = [...this.items];
    })
  }

  navigateToNewItem() {
    this.router.navigate(['/newItem']);
  }

  navigateToEditItem(itemId: string) {
    this.router.navigate(['/items', parseInt(itemId)]);
  }

  sortColumn(colName: string) {
    if (this.sortedColumn === colName) {
      this.isDesc = !this.isDesc;
      this.filteredItems.reverse();
    } else {
      this.sortedColumn = colName;
      this.filteredItems.sort((a: any, b: any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
    }
  }

  onSearch(): void {
    const searchFields: (keyof Item)[] = ['name', 'type', 'category', 'price'];

    this.filteredItems = this.items.filter((item) => {
      return searchFields.some((field) =>
        item[field].toString().toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }
}
