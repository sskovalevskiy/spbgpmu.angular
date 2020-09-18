import { Component, OnInit } from '@angular/core';
import {Category} from "../../../services/models/category.model";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  categories: Array<Category>;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getCategories().catch(err => console.log(err));
  }

  private async getCategories(){
    this.categories = await this.categoryService.getCategories();
  }

}
