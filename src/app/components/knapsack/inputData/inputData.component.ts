import { Component, OnInit } from '@angular/core';
import { KnapsackService } from '../../../services/knapsack.service';
import { KnapsackItem } from '../../../structures/knapsack/KnapsackItem';



/**
* Loading, removing and displaying input data
*/
@Component({
  selector: 'app-inputData',
  templateUrl: './inputData.component.html',
  styleUrls: ['./inputData.component.css']
})
export class InputDataComponent implements OnInit {
  knapsackSize:number;
  new_item:KnapsackItem = new KnapsackItem();

  //----------------------------------------------------------------------------

  constructor(private knapsackService:KnapsackService) {}
  ngOnInit() {
    this.knapsackSize = this.knapsackService.size();
  }

  //----------------------------------------------------------------------------

  addItem() {
    this.knapsackService.push(this.new_item);
    this.update();
  }


  clearAll() {
    this.knapsackService.clear();
  }


  update() {
    this.knapsackService.setSize(this.knapsackSize);
    this.knapsackService.sort()
    this.knapsackService.solve();
  }


  removeItem(item:KnapsackItem) {

    let index = this.knapsackService.items().indexOf(item);
    if (index > -1) {
      this.knapsackService.items().splice(index, 1);
      console.dir(this.knapsackService.items());
    }
    this.update();
  }

}
