import { Component } from '@angular/core';

@Component({
  selector: 'category-list',
  imports: [],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  public isChildVisible: boolean = false;

  openchild() {
    this.isChildVisible = !this.isChildVisible
  }

}
