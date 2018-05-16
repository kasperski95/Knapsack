import { KnapsackItem } from '../../structures/knapsack/KnapsackItem'



// (I didn't use class & constructor implementation technique to remind myself that this is JS not C++)
/**
* Node of tree like data structure, used by greedy knapsack algorithm
*/
export var Node = function(
  knapsackLeftSize:number,
  knapsackValue:number = 0,
  packed:boolean = false,
  parent:Node = null,
  item:KnapsackItem = null) {
    this.parent = parent;
    this.item = item;
    this.knapsackValue = knapsackValue;
    this.knapsackLeftSize = knapsackLeftSize;
    this.packed = packed;
};
