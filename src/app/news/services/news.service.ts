import {Injectable} from '@angular/core';
import {Article} from '../models/article.model';
import {Category} from '../models/category.model';
import {Author} from '../models/author.model';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

const newsList: Array<Article> = [
  new Article(1,
    'Thor, the Nordic God',
    'thor-the-thunder-god',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1519125478587-9e2e97231d2c?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=f555c229fd7926ccd7b3c41a288a2f54',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'History', 'Posts full of historic value and useful information.', 'history'),
    new Author(1, 'Diego Balmaceda', ''),
    // tslint:disable-next-line:max-line-length
    'Thor is a prominently mentioned god throughout the recorded history of the Germanic peoples, from the Roman occupation of regions of Germania, to the tribal expansions of the Migration Period...'),
  new Article(2,
    'A peek into Scandinavia\'s origin',
    'a-peak-into-scandinavias-origin',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=d04cc88e0936763c6eb1d5cf268f6df2',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Science', 'Posts for the most curious ones..', 'science'),
    new Author(1, 'Diego Balmaceda', ''),
    // tslint:disable-next-line:max-line-length
    'The term Scandinavia in local usage covers the three kingdoms of Denmark, Norway, and Sweden. However, in English usage, the term also sometimes refers to the Scandinavian Peninsula...'),
  new Article(3,
    'Astronomers announce discovering ten tiny Jovian satellites',
    'astronomers-announce-discovering-ten-tiny-jovian-satellites',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1503662549813-28954e75f215?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=85b1b1454e149b001e2415a1d98da039',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Science', 'Posts for the most curious ones..', 'science'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(4,
    'Fossil genome shows hybrid of two extinct species of human',
    'fossil-genome',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=a7dfe365d0259a816ca47b35f5559948',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Science', 'Posts for the most curious ones..', 'science'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(5, 'Manchester City beats Chelsea 2-0',
    'manchester-city-beats-chelsea-2-0',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1516565340510-21016b8fc86c?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=644205802c249276155f94a757ef7446',
    '2018-03-16',
    '2018-03-16',
    new Category(2, 'Sports', 'All about that game last night.', 'sports'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(6, 'A quick look to Iceland landscapes',
    'ireland',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1528837516156-0a7225a43641?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=51b36662ea68d328215bd0043adc5090',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Travel', 'Everything you need to know for your next trip.', 'travel'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(7, 'Everything you need to know about Valkyries',
    'everything-you-need-to-know-about-valkyries',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1536567901538-b873c1915f79?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=128e33d79dc67a5e718420a296f6ef84',
    '2018-03-16',
    '2018-03-16',
    new Category(3, 'History', 'Posts full of historic value and useful information.', 'history'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(8, 'Welcome to Ghost',
    'welcome',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1505504506221-02359e1e5812?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=134aea98d59b9fe66e4d3cc1f4569f89',
    '2018-03-16',
    '2018-03-16',
    new Category(4, 'Getting Started', 'Learn to use Ghost.', 'getting-started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(9, 'Using the Ghost editor',
    'the-editor',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ&amp;s=808c7e1dc18dbd4eb70bcb8e5aee3131',
    '2018-03-16',
    '2018-03-16',
    new Category(4, 'Getting Started', 'Learn to use Ghost.', 'getting-started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(10, 'Organising your content with tags',
    'using-tags',
    'https://casper.ghost.org/v1.0.0/images/tags.jpg',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Getting Started', 'Learn to use Ghost.', 'getting-started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(11, 'Managing Ghost users',
    'managing-users',
    'https://casper.ghost.org/v1.0.0/images/team.jpg',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Getting Started', 'Learn to use Ghost.', 'getting-started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(12, 'Managing Ghost users',
    'managing-users',
    'https://casper.ghost.org/v1.0.0/images/team.jpg',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Getting Started', 'Learn to use Ghost.', 'getting-started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(13, 'Managing Ghost users',
    'managing-users',
    'https://casper.ghost.org/v1.0.0/images/team.jpg',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Getting Started', 'Learn to use Ghost.', 'getting-started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(14, 'Managing Ghost users',
    'managing-users',
    'https://casper.ghost.org/v1.0.0/images/team.jpg',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Getting Started', 'Learn to use Ghost.', 'getting-started'),
    new Author(1, 'Diego Balmaceda', ''))
];

const newsListObservable: Observable<Array<Article>> = of(newsList);

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  getNews(): Observable<Article[]> {
    return newsListObservable;
  }

  getArticle(id: number | string): Observable<Article> {
    return this.getNews()
      .pipe(
        map((news: Array<Article>) => news.find(article => article.id === +id)),
        catchError(err => Observable.throw('Error in getArticle method'))
      );
  }
}
