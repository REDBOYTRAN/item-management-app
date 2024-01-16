import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ItemsComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
})
export class ItemListModule { }
