import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../services/models/category.model";
import {CategoryService} from "../../../services/category.service";
import {Author} from "../../../services/models/author.model";
import {AuthorService} from "../../../services/author.service";

@Component({
  selector: 'app-find-product-form',
  templateUrl: './find-product-form.component.html',
  styleUrls: ['./find-product-form.component.css']
})
export class FindProductFormComponent implements OnInit {

  @Input() title?: string[] = ["Find", "Product"];

  categories: Array<Category>;
  authors: Array<Author>;

  constructor(private categoryService: CategoryService,
              private authorService: AuthorService) {
  }

  ngOnInit() {
    this.getCategories().catch(err => console.log(err));
    this.getAuthors().catch(err => console.log(err));
  }

  private async getCategories() {
    this.categories = await this.categoryService.getCategories();
  }

  private async getAuthors() {
    this.authors = await this.authorService.getAuthors();
  }

}
