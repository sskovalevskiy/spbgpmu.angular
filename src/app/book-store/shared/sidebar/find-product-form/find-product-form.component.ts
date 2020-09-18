import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../services/models/category.model";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-find-product-form',
  templateUrl: './find-product-form.component.html',
  styleUrls: ['./find-product-form.component.css']
})
export class FindProductFormComponent implements OnInit {

  @Input() title?: string[] = ["Find","Product"];

  categories: Array<Category>;

  authors: string[] = ["Thoriq Firdaus", "Tim Kadlec", "Steve Krug", "Susan Weinschenk", "Austin Kleon", "Ellen Lupton",
    "Patrick McNeil", "Brian Miller", "Kyle Simpson","Nicholas C. Zakas"]

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getCategories().catch(err => console.log(err));
  }

  private async getCategories(){
    this.categories = await this.categoryService.getCategories();
  }

}
