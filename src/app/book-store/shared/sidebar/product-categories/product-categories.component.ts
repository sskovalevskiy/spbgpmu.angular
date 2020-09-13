import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  categories: string[] = ["Programming","Javascript","Web Application", "HTML5", "SEO", "Web Design"];

  constructor() { }

  ngOnInit() {
  }

}
