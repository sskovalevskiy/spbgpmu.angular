import {Component, OnInit} from '@angular/core';
import {Category} from '../models/category.model';
import {Observable} from 'rxjs';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Array<Category>>;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.getCategories();
  }

}
