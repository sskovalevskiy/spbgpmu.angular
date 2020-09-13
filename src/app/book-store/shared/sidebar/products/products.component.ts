import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() title: string;
  @Input() searchType: string; //Тип поиска: 'Bestsellers', 'Top Rated', 'Sale', 'Random Book', 'Random Journal',

  constructor() { }

  ngOnInit() {
  }

}
