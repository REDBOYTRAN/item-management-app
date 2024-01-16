// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: 'items', component: ItemsComponent },
    { path: 'items/:id', component: ItemComponent },
    { path: 'newItem', component: ItemComponent },
    { path: '**', redirectTo: '/items', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule],
    exports: [RouterModule, FormsModule],
})
export class AppRoutingModule { }
