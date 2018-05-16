import { Injectable } from '@angular/core';
import { Item } from './Knapsack';
import { Observatable, Observer } from './interfaces/Observer';
import { solveKnapsackProblem } from './Knapsack';

@Injectable({
  providedIn: 'root'
})
export class DataService implements Observatable {
  // initial knapsack's size
  knapsackSize = 20;

  // initial items
  items : Item[] = [
    new Item ('T-Shirt', 7, 75),
    new Item ('Trousers', 8, 150),
    new Item ('Sweatshirt', 6, 250),
    new Item ('Hat', 4, 35),
    new Item ('Scarf', 3, 10),
    new Item ('Shoes', 9, 100)
  ];

  // pre-calculated initial solution
  solution : Item[] = [
    this.items[1],
    this.items[0],
    this.items[3]
  ];


  observers : Observer[] = [];

  constructor() {}

  attach(observer:Observer){
    this.observers.push(observer);
  }

  detach(observer:Observer){/*not required yet*/}

  _notify(){
    for(let i=0; i < this.observers.length; ++i){
      this.observers[i].update();
    }
  }

  getItems() : Item[] {
    return this.items;
  }

  getSolution():Item[]{
    return this.solution;
  }

  push(new_item : Item) {
    let tmp_item = new Item();
    tmp_item.copy(new_item);
    this.items.push(tmp_item);
  }

  sort() {
    this.items.sort((x,y) => {
      if (x.ratio < y.ratio) return 1;
      if (x.ratio == y.ratio) return 0;
      if (x.ratio > y.ratio) return -1;
    });
  }

  solve() {
    this.solution = solveKnapsackProblem(this);
    this.solution.sort(function(x,y) {
      if (x.weight < y.weight) return 1;
      if (x.weight == y.weight) return 0;
      if (x.weight > y.weight) return -1;
    })
    this._notify();
  }

  clear() {
    this.items = [];
  }

  size() : number {
    return this.items.length;
  }
}
