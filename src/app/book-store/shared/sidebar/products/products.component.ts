import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() title: string;
  @Input() searchType: string; //Тип поиска: 'Bestsellers', 'Top Rated', 'Sale', 'Random Book', 'Random Journal',
  //TODO сделать передачу параметра с требуемым количеством книг (в widget - 3, footer - 4, sidebar - 5)
  // @Input() booksAmount: number;

  constructor() { }

  ngOnInit() {
  }

}
