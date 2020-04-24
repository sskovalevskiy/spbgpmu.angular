import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Author} from "../../models/author.model";
import {AuthorsService} from "../../services/authors.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: string;
  author$: Observable<Author>;

  constructor(private router: Router,
              private authorsService: AuthorsService) {
  }

  ngOnInit() {
    this.author = this.router.url.split('/').pop();
    this.author$ = this.authorsService.getAuthor(this.author);
  }

}
