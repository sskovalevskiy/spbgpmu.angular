import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-find-product-form',
  templateUrl: './find-product-form.component.html',
  styleUrls: ['./find-product-form.component.css']
})
export class FindProductFormComponent implements OnInit {

  @Input() title: string[];
  constructor() { }

  ngOnInit() {
  }

}
