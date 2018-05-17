import { KnapsackItem } from '../../structures/knapsack/KnapsackItem';



class KnapsackData {
  // inital knapsack's size
  knapsackSize:number = 20;

  // inital data
  items:KnapsackItem[] = [
    new KnapsackItem ('Sweatshirt', 6, 250),
    new KnapsackItem ('Trousers', 8, 150),
    new KnapsackItem ('Shoes', 9, 100),
    new KnapsackItem ('T-Shirt', 7, 75),
    new KnapsackItem ('Hat', 4, 35),
    new KnapsackItem ('Scarf', 3, 10)

  ];

  // pre-calculated initial solution
  solution:KnapsackItem[] = [
    this.items[0],
    this.items[1],
    this.items[4]
  ];


  pushItemByValue(newItem:KnapsackItem) {
    let tmpItem = new KnapsackItem();
    tmpItem.copy(newItem);
    this.items.push(tmpItem);
  }

  removeItem(item:KnapsackItem) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  sortByRatio() {
    this.items.sort((x,y) => {
      if (x.ratio < y.ratio) return 1;
      if (x.ratio == y.ratio) return 0;
      if (x.ratio > y.ratio) return -1;
    });
  }

}

export var knapsackData = new KnapsackData();
