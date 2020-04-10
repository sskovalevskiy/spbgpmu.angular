import {Category} from './category.model';
import {Author} from './author.model';

export class Article {

  constructor(public id: number,
              public title: string,
              public articleLink: string,
              public articleBackgroundImageLink: string,
              public articlePublishDate: string,
              public articleLastUpdateDate: string,
              public category: Category,
              public author: Author,
              public articleText?: string
              ) {
  }
}
