import {Injectable} from '@angular/core';
import {Book} from "./models/book.model";

const booksList = [
  new Book(
    1,
    'Thinking with Type, 2nd revised and expanded edition: A Critical Guide for Designers, Writers, Editors, &amp; Students',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book1-600.jpg',
    [],
    '',
    'Ellen Lupton',
    'Our all time best selling book is now available in a revised and expanded second edition. Thinking with Type is the definitive guide to using typography in visual communication, from the printed page to the computer screen. This revised edition includes forty-eight pages of new content, including the latest information on style sheets for print and the web, the use of ornaments and captions, lining and non-lining numerals, the use of small caps and enlarged capitals, as well as information on captions, font licensing, mixing typefaces, and hand lettering. Throughout the book, visual examples show how to be inventive within systems of typographic form—what the rules are and how to break them. Thinking with Type is a type book for everyone: designers, writers, editors, students, and anyone else who works with words. The popular online companion to Thinking with Type (www.thinkingwithtype.com) has been revised to reflect the new material in the second edition.',
    ['HTML5'],
    false,
    false,
    true,
    '',
    900,
    950
  ),
  new Book(
    2,
    "Above the Fold: Understanding the Principles of Successful Web Site Design",
    "http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-600x500.jpg",
    ["//tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-80x80.jpg 80w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-150x150.jpg 150w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-100x100.jpg 100w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-136x136.jpg 136w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book12-300-45x45.jpg 45w"],
    "",
    "Brian Miller",
    "Above the Fold is a book about the fundamentals of effective graphic communication set in the context of Web design. Unlike other books that focus on the intersection of design and technology, Above the Fold explores the relationship between the stakeholders of a Web project– the designer, the user and the client — and how this continuous cycle affects the decisions made by successful Web designers. Above the Fold is not technical manual or a how-to book, nor is it about timely trends; it’s about the timeless fundamentals of layout, usability and measurement that lead to a successful digital product.",
    ["Programming", "Web Design"],
    false,
    true,
    false,
    "In Stock",
    100
  ),
  new Book(
    3,
    "100 Things Every Designer Needs to Know About People (Voices That Matter)",
    "http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-600x500.jpg",
    ["//tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-80x80.jpg 80w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-150x150.jpg 150w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-100x100.jpg 100w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-136x136.jpg 136w, //tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book16-300-45x45.jpg 45w"],
    "",
    "Tim Kadlec",
    "We design to elicit responses from people. We want them to buy something, read more, or take action of some kind. Designing without understanding what makes people act the way they do is like exploring a new city without a map: results will be haphazard, confusing, and inefficient. This book combines real science and research with practical examples to deliver a guide every designer needs. With it you’ll be able to design more intuitive and engaging work for print, websites, applications, and products that matches the way people think, work, and play.",
    ["HTML5", "Web Application", "Web Design"],
    false,
    true,
    false,
    "In Stock",
    99.99
  ),
  new Book(
    4,
    'Professional JavaScript for Web Developers',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book3-300-600x500.jpg',
    [],
    '',
    'Nicholas C. Zakas',
    'Professional JavaScript for Web Developers, 2nd Edition, provides a developer-level introduction along with the more advanced and useful features of JavaScript.',
    ['Javascript', 'Programming', 'Web Design'],
    false,
    false,
    true,
    '',
    9.99,
    100
  ),
  new Book(
    5,
    'The Principles of Object-Oriented JavaScript',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book5-300.jpg',
    [],
    '',
    'Nicholas C. Zakas',
    'If you’ve used a more traditional object-oriented language, such as C++ or Java, JavaScript probably doesn’t seem object-oriented at all. It has no concept of classes, and you don’t even need to define any objects in order to write code. But don’t be fooled—JavaScript is an incredibly powerful and expressive object-oriented language that puts many design decisions right into your hands.',
    ['Programming', 'Web Design'],
    false,
    false,
    false,
    '',
    100,
  ),
  new Book(
    6,
    'Professional JavaScript for Web Developers',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book7-300.jpg',
    [],
    '',
    'Nicholas C. Zakas',
    'This book provides a developer-level introduction along with more advanced and useful features of JavaScript.',
    ['Programming', 'Web Design'],
    false,
    false,
    true,
    '',
    545,
    556.43,
  ),
  new Book(
    7,
    'Maintainable JavaScript',
    "http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book4-300-600x500.jpg",
    [],
    '',
    'Nicholas C. Zakas',
    'You may have definite ideas about writing code when working alone, but team development requires that everyone use the same approach. With the JavaScript practices in this book—including code style, programming tips, and automation—you will learn how to write maintainable code that other team members can easily understand, adapt, and extend.',
    ['Javascript, Programming, Web Design'],
    false,
    true,
    true,
    '',
    9.99,
    10
  ),
  new Book(
    8,
    'Don’t Make Me Think: A Common Sense Approach to Web Usability, 2nd Edition',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book11-300-600x500.jpg',
    [],
    '',
    'Steve Krug',
    'Five years and more than 100,000 copies after it was first published, it’s hard to imagine anyone working in Web design who hasn’t read Steve Krug’s “instant classic” on Web usability, but people are still discovering it every day.',
    ['SEO, Programming, Web Design'],
    false,
    false,
    true,
    '',
    515,
    540
  ),
  new Book(
    9,
    'The Hospitality Industry: A Dynamic Experience',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book10-300-600x500.jpg',
    [],
    '',
    'Brian Miller',
    'Discover how you can easily create engaging, responsive websites with minimum hassle!',
    ['Programming', 'Web Design'],
    false,
    false,
    true,
    '',
    100
  ),
  new Book(
    10,
    'Indie Publishing: How to Design and Publish Your Own Book',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book9-300-600x500.jpg',
    [],
    '',
    'Ellen Lupton',
    'Once referred to derisively as “vanity publishing,” self-published books are finally taking their place alongside moreaccepted indie categories such as music, film, and theater. Indie Publishing is a practical guide to creating and distributing printed books regardless of your background, skill set, or ambition. It will help you realize projects of every scale and budget, from the traditional bookmaking techniques used to create zines to the more ambitious industrial production methods required to produce hardcover books in large quantity.',
    ['Javascript, Programming, Web Design'],
    false,
    false,
    true,
    '',
    365,
    380
  ),
  new Book(
    11,
    'How to Get People to Do Stuff: Master the art and science of persuasion and motivation',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book8-300-600x500.jpg',
    [],
    '',
    'Susan Weinschenk',
    'We all want people to do stuff. Whether you want your customers to buy from you, vendors to give you a good deal, your employees to take more initiative, or your spouse to make dinner—a large amount of everyday is about getting the people around you to do stuff. Instead of using your usual tactics that sometimes work and sometimes don’t, what if you could harness the power of psychology and brain science to motivate people to do the stuff you want them to do – even getting people to want to do the stuff you want them to do.',
    ['Programming, Web Design'],
    false,
    false,
    true,
    '',
    650,
    670
  ),
  new Book(
    12,
    'You Don’t Know JS: Scope & Closures',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book2-300-600x500.jpg',
    [],
    '',
    'Kyle Simpson',
    'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.',
    ['Javascript, Programming, Web Design'],
    false,
    false,
    false,
    '',
    100
  ),
  new Book(
    13,
    'HTML5 Cookbook (Oreilly Cookbooks)',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book3-300-600x500.jpg',
    [],
    '',
    'Kyle Simpson',
    "With scores of practical recipes you can use in your projects right away, this cookbook helps you gain hands-on experience with HTML5’s versatile collection of elements. You get clear solutions for handling issues with everything from markup semantics, web forms, and audio and video elements to related technologies such as geolocation and rich JavaScript APIs.",
    ['HTML5, Javascript, Web Application'],
    false,
    false,
    false,
    '',
    100
  ),
  new Book(
    14,
    'Don’t Make Me Think, Revisited: A Common Sense Approach to Web Usability (3rd Edition) (Voices That Matter)',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book15-300.jpg',
    [],
    '',
    'Thoriq Firdaus',
    "Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most recommended books on the subject.",
    ['Javascript, Programming, Web Design'],
    false,
    false,
    false,
    '',
    100
  ),
  new Book(
    15,
    'High Performance JavaScript (Build Faster Web Application Interfaces)',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book6-300.jpg',
    [],
    '',
    'Nicholas C. Zakas',
    "If you’re like most developers, you rely heavily on JavaScript to build interactive and quick-responding web applications. The problem is that all of those lines of JavaScript code can slow down your apps. This book reveals techniques and strategies to help you eliminate performance bottlenecks during development. You’ll learn how to improve execution time, downloading, interaction with the DOM, page life cycle, and more.",
    ['Programming, Web Design'],
    false,
    false,
    false,
    '',
    650.50,
    750.50
  ),
  new Book(
    16,
    'Steal Like an Artist: 10 Things Nobody Told You About Being Creative',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book14-300-600x500.jpg',
    [],
    '',
    'Austin Kleon',
    'You don’t need to be a genius, you just need to be yourself. That’s the message from Austin Kleon, a young writer and artist who knows that creativity is everywhere, creativity is for everyone. A manifesto for the digital age, Steal Like an Artist is a guide whose positive message, graphic look and illustrations, exercises, and examples will put readers directly in touch with their artistic side.',
    ['Programming, Web Design'],
    false,
    false,
    false,
    '',
    100
  ),
  new Book(
    17,
    'Implementing Responsive Design: Building sites for an anywhere, everywhere web (Voices That Matter)',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2013/06/book14-300-600x500.jpg',
    [],
    '',
    'Tim Kadlec',
    'New devices and platforms emerge daily. Browsers iterate at a remarkable pace. Faced with this volatile landscape we can either struggle for control or we can embrace the inherent flexibility of the web. Responsive design is not just another technique–it is the beginning of the maturation of a medium and a fundamental shift in the way we think about the web.',
    ['Programming', 'Web Design'],
    false,
    false,
    false,
    '',
    625.50,
    650.80
  ),
  new Book(
    18,
    '100 Things Every Designer Needs to Know About People (Voices That Matter)',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2012/12/book2-300-600x500.jpg',
    [],
    '',
    'Thoriq Firdaus',
    'We design to elicit responses from people. We want them to buy something, read more, or take action of some kind. Designing without understanding what makes people act the way they do is like exploring a new city without a map: results will be haphazard, confusing, and inefficient. This book combines real science and research with practical examples to deliver a guide every designer needs. With it you’ll be able to design more intuitive and engaging work for print, websites, applications, and products that matches the way people think, work, and play.',
    ['Programming', 'Web Design'],
    false,
    false,
    false,
    '',
    100.80
  ),
  new Book(
    19,
    'The Web Designer’s Idea Book, Volume 3: Inspiration from Today’s Best Web Design Trends, Themes and Styles',
    'http://tokokoodemo.us/papirus/books/wp-content/uploads/sites/2/2014/05/book13-300-600x500.jpg',
    [],
    '',
    'Patrick McNeil',
    'Quick Inspiration for Web Designers\n' + 'Featuring more than 650 examples, this third volume of The Web Designer’s Idea Book is packed with visual inspiration for creating top-notch web design. Web design expert Patrick McNeil, author of the popular Web Designer’s Idea Book series, is back with the latest examples of the best design on the web today.',
    ['Programming', 'Web Design'],
    false,
    false,
    false,
    '',
    600,
    700
  ),
];

const bookListPromise = Promise.resolve(booksList);

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
  }

  getBooks(): Promise<Book[]> {
    return bookListPromise
  }

  getBooksBy(condition: Map<string, string>): Promise<Book[]> {
    //TODO сейчас это заглушка. нужно сделать решение фильтрации по условию key|value
    return bookListPromise;
  }

  getBook(id: number | string): Promise<Book> {
    return this.getBooks()
      .then(books => books.find(book => book.id === +id))
      .catch(() => Promise.reject('Error in getBook() method'))
  }

  addBook(book: Book): void {
    booksList.push(book);
  }

  updateBook(book: Book): void {
    const i = booksList.findIndex(t => t.id === book.id);
    if (i > -1) {
      booksList.splice(i, 1, book);
    }
  }
}
