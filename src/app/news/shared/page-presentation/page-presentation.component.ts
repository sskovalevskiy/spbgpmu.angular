import {Component, Input, OnInit} from '@angular/core';
import {Page} from '../../models/page.model';

@Component({
  selector: 'app-page-presentation',
  templateUrl: './page-presentation.component.html',
  styleUrls: ['./page-presentation.component.css']
})
export class PagePresentationComponent implements OnInit {

  @Input() page: Page;

  constructor() {
  }

  ngOnInit() {
  }

}
