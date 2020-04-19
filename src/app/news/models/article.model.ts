export class Article {

  constructor(public id: number,
              public headline: string,
              public articleBackgroundImageLink: string,
              public datePublished: number,
              public dateModified: number,
              public categoryId: number,
              public authorId: number,
              public articleText?: string
              ) {
  }
}
