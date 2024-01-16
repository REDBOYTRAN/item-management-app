import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'http://localhost:3000/items';

  getItems() {
    return this.http.get<Item[]>(this.baseUrl);
  }

  getById(itemId: number) {
    return this.http.get<Item>(`${this.baseUrl}/${itemId}`);
  }

  addItem(item: Item) {
    return this.http.post(this.baseUrl, item);
  }

  updateItem(item: Item) {
    return this.http.put(`${this.baseUrl}/${item.id}`, item);
  }
}