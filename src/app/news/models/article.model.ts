import {Category} from './category.model';
import {Author} from './author.model';

export class Article {

  constructor(public id: number,
              public headline: string,
              public articleLink: string,
              public articleBackgroundImageLink: string,
              public datePublished: string,
              public dateModified: string,
              public categoryId: number,
              public author: Author,
              public articleText?: string
              ) {
  }
}
