import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Author} from '../models/author.model';
import {AuthorsService} from '../services/authors.service';
import {Page} from "../models/page.model";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  pageAuthors: Page = new Page(
    'Our Authors',
    'Incredible people, incredible stories',
    'https://images.unsplash.com/photo-1538667360417-86635364e683?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=411b9525298072836405d724ab448f8d');

  authors$: Observable<Array<Author>>;

  constructor(private authorsService: AuthorsService) {
  }

  ngOnInit() {
    this.authors$ = this.authorsService.getAuthors();
  }

}
