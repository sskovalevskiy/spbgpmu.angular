import { Injectable } from '@angular/core';
import {Category} from "./models/category.model";

const categories = [
  new Category(1,"Анестезиология"),
  new Category(2,"Акушерство и гинекология"),
  new Category(3,"Аллергология"),
  new Category(4,"Анестезиология"),
  new Category(5,"Биохимия"),
  new Category(6,"Венерология"),
  new Category(7,"Дерматология"),
  new Category(8,"Диетология"),
  new Category(9,"Кардиология"),
  new Category(10,"Нейрохирургия"),
  new Category(11,"Нейрофизиология"),
  new Category(12,"Неонатология"),
  new Category(13,"Нефрология"),
  new Category(14,"Травматологи и ортопедия"),
  new Category(15,"Педиатрия")
]

const categoryPromise = Promise.resolve(categories);

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories():Promise<Category[]>{
    return categoryPromise;
  }

  getCategory(id: number | string): Promise<Category>{
    return this.getCategories()
      .then(categories => categories.find(category => category.id === +id))
      .catch(() => Promise.reject('Error in getCategory() method'))
  }
}
