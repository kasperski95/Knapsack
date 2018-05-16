import { Injectable } from '@angular/core';
import { knapsackData } from '../data/knapsack/knapsackData';
import { Observatable, Observer } from '../interfaces/patterns/observer';
import { solveKnapsackProblem } from '../logic/knapsack/nonRecursiveGreedyAlg';
import { KnapsackItem } from '../structures/knapsack/KnapsackItem';


/**
* Controller
*/
@Injectable({
  providedIn: 'root'
})
export class KnapsackService implements Observatable {

  // elements to be notified
  observers : Observer[] = [];

  //----------------------------------------------------------------------------

  constructor() {}

  //----------------------------------------------------------------------------
  // OBSERVER PATTERN:

  attach(observer:Observer) {
    this.observers.push(observer);
  }


  detach(observer:Observer) {
    /*not necessary yet*/
  }


  _notify() {
    for(let i=0; i < this.observers.length; ++i) {
      this.observers[i].update();
    }
  }

  //----------------------------------------------------------------------------
  // METHODS:

  clear() {
    knapsackData.items = [];
    knapsackData.solution = [];
  }


  items() {
    return knapsackData.items;
  }


  push(new_item : KnapsackItem) {
    knapsackData.pushItemByValue(new_item);
  }


  setSize(newSize:number) {
    knapsackData.knapsackSize = newSize;
  }


  size() {
    return knapsackData.knapsackSize;
  }


  solve() {
    knapsackData.solution = solveKnapsackProblem(this.items(), this.size());
    knapsackData.solution.sort(function(x,y) {
      if (x.weight < y.weight) return 1;
      if (x.weight == y.weight) return 0;
      if (x.weight > y.weight) return -1;
    })
    this._notify();
  }


  solution() {
    return knapsackData.solution;
  }


  sort() {
    knapsackData.sortByRatio();
  }

}
