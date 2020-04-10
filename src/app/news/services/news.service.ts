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
    'https://images.unsplash.com/photo-1519125478587-9e2e97231d2c',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'History'),
    new Author(1, 'Diego Balmaceda', ''),
    // tslint:disable-next-line:max-line-length
    'Thor is a prominently mentioned god throughout the recorded history of the Germanic peoples, from the Roman occupation of regions of Germania, to the tribal expansions of the Migration Period...'),
  new Article(2,
    'Astronomers announce discovering ten tiny Jovian satellites',
    'astronomers-announce-discovering-ten-tiny-jovian-satellites',
    'https://images.unsplash.com/photo-1503662549813-28954e75f215',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Science'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(3,
    'Astronomers announce discovering ten tiny Jovian satellites',
    'astronomers-announce-discovering-ten-tiny-jovian-satellites',
    'https://images.unsplash.com/photo-1503662549813-28954e75f215',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Science'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(4,
    'Fossil genome shows hybrid of two extinct species of human',
    'fossil-genome',
    'https://images.unsplash.com/photo-1527409335569-f0e5c91fa707',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Science'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(5, 'Manchester City beats Chelsea 2-0',
    'manchester-city-beats-chelsea-2-0',
    'https://images.unsplash.com/photo-1516565340510-21016b8fc86c',
    '2018-03-16',
    '2018-03-16',
    new Category(2, 'Sports'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(6, 'A quick look to Iceland landscapes',
    'ireland',
    'https://images.unsplash.com/photo-1528837516156-0a7225a43641',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Travel'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(7, 'Everything you need to know about Valkyries',
    'everything-you-need-to-know-about-valkyries',
    'https://images.unsplash.com/photo-1536567901538-b873c1915f79',
    '2018-03-16',
    '2018-03-16',
    new Category(3, 'History'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(8, 'Welcome to Ghost',
    'welcome',
    'https://images.unsplash.com/photo-1505504506221-02359e1e5812',
    '2018-03-16',
    '2018-03-16',
    new Category(4, 'Getting Started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(9, 'Using the Ghost editor',
    'the-editor',
    'https://images.unsplash.com/photo-1535224206242-487f7090b5bb',
    '2018-03-16',
    '2018-03-16',
    new Category(4, 'Getting Started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(10, 'Organising your content with tags',
    'using-tags',
    'https://casper.ghost.org/v1.0.0/images/tags.jpg',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Getting Started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(11, 'Managing Ghost users',
    'managing-users',
    'https://casper.ghost.org/v1.0.0/images/team.jpg',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Getting Started'),
    new Author(1, 'Diego Balmaceda', '')),
  new Article(12, 'Managing Ghost users',
    'managing-users',
    'https://casper.ghost.org/v1.0.0/images/team.jpg',
    '2018-03-16',
    '2018-03-16',
    new Category(1, 'Getting Started'),
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
