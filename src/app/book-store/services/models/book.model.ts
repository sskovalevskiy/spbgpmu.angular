export class Book {
  constructor(
    public id: number = null,
    public title: string = '',
    public imgSrc: string = '',
    public imgAlt: string = '',
    public author: string = '',
    public description: string = '',
    public category: string[],
    public isInCart: boolean = false,
    public isInWishlist: boolean = false,
    public sale: boolean = false,
    public price: number = 0,
    public oldPrice?: number
  ) {
    this.oldPrice = oldPrice || null
  }
}
