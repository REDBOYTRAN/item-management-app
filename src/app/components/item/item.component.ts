import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  items: Item[] = [];
  item: Item = { id: '', name: '', type: '', category: '', price: 0, isActive: false };


  ngOnInit(): void {

    const itemId = this.route.snapshot.paramMap.get('id');
    this.getItems();
    if (itemId) {
      this.apiService.getById(parseInt(itemId)).subscribe((item) => {
        this.item = item;
      });
    }
  }

  getItems() {
    this.apiService.getItems().subscribe((items) => {
      this.items = items;
    })
  }

  onSubmit(): void {
    if (!this.item.id) {

      this.item.id = (this.items.length + 1).toString();
      this.apiService.addItem(this.item).subscribe(() => {
        this.items.push(this.item);
        this.router.navigate(['/items', this.item.id]);
      });
    } else {
      this.apiService.updateItem(this.item).subscribe(() => {
        this.router.navigate(['/items', this.item.id]);
      })
    }
  }

  goBack() {
    this.location.back();
  }
}
