import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Author} from '../models/author.model';
import {AuthorsService} from '../services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors$: Observable<Array<Author>>;

  constructor(private authorsService: AuthorsService) {
  }

  ngOnInit() {
    this.authors$ = this.authorsService.getAuthors();
  }

}
