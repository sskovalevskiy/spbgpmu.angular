import {Article} from './article.model';
import {Category} from './category.model';
import {Author} from './author.model';

describe('News', () => {
  it('should create an instance', () => {
    expect(new Article(1, '', '', '', '', '', new Category(1, ''), new Author(1, '', ''))).toBeTruthy();
  });
});
