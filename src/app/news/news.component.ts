import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Page} from './models/page.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public href: string;
  pageTags: Page = new Page(
    'Tag: Travel',
    'Everything you need to know for your next trip.',
    'https://images.unsplash.com/photo-1538667360417-86635364e683?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=411b9525298072836405d724ab448f8d');

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.href = this.router.url.split('/')[1];
  }
}
