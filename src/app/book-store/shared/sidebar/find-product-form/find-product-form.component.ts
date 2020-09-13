import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-find-product-form',
  templateUrl: './find-product-form.component.html',
  styleUrls: ['./find-product-form.component.css']
})
export class FindProductFormComponent implements OnInit {

  @Input() title?: string[] = ["Find","Product"];

  categories: string[] = ["Programming","Javascript","Web Application", "HTML5", "SEO", "Web Design"];

  authors: string[] = ["Thoriq Firdaus", "Tim Kadlec", "Steve Krug", "Susan Weinschenk", "Austin Kleon", "Ellen Lupton",
    "Patrick McNeil", "Brian Miller", "Kyle Simpson","Nicholas C. Zakas"]

  constructor() {
  }

  ngOnInit() {
  }

}
