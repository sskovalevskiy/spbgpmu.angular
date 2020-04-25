import {Injectable} from '@angular/core';
import {Article} from '../models/article.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getNews(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>('./assets/news.json');
  }

  // TODO Переделать на использование news2.json
  // Не работающая по непонятной причине ошибка
  // getNews(): Observable<Array<Article>> {
  // return this.http.get('./assets/news2.json').pipe(
  //   map(data => {
  //     const newsList = data['newsList'];
  //     return newsList.map(function(article: any) {
  //       return {
  //         id: article.id,
  //         headline: article.headline,
  //         articleBackgroundImageLink: article.articleBackgroundImageLink,
  //         datePublished: article.datePublished,
  //         dateModified: article.dateModified,
  //         categoryId: article.categoryId,
  //         authorId: article.authorId,
  //         articleText: article.articleText
  //       };
  //     });
  //   })
  // );
  // }

  getArticle(id: number | string): Observable<Article> {
    return this.getNews()
      .pipe(
        map((news: Array<Article>) => news.find(article => article.id === +id)),
        catchError(err => Observable.throw('Error in getArticle method'))
      );
  }
}
