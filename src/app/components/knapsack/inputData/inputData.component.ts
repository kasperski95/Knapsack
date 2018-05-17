import { Component, OnInit } from '@angular/core';
import { KnapsackService } from '../../../services/knapsack.service';
import { KnapsackItem } from '../../../structures/knapsack/KnapsackItem';



/**
* Loading, removing and displaying input data.
* Displaying results by highlighing.
*/
@Component({
  selector: 'app-inputData',
  templateUrl: './inputData.component.html',
  styleUrls: ['./inputData.component.css']
})
export class InputDataComponent implements OnInit {
  knapsackSize:number;
  newItem:KnapsackItem = new KnapsackItem();

  //----------------------------------------------------------------------------

  constructor(private knapsackService:KnapsackService) {}
  ngOnInit() {
    this.knapsackSize = this.knapsackService.size();
  }

  //----------------------------------------------------------------------------

  addItem() {
    if (this._validate()) {
      this.knapsackService.insert(this.newItem);
      this.newItem.clear();
      this.update();
    }
  }


  clearAll() {
    this.knapsackService.clear();
  }


  update() {
    this.knapsackService.setSize(this.knapsackSize);
    this.knapsackService.solve();
  }


  removeItem(item:KnapsackItem) {
    this.knapsackService.remove(item);
    this.update();
  }


  //----------------------------------------------------------------------------

  _validate() {
    return (
      this.newItem.name != null &&
      this.newItem.name.length > 0 &&
      this.newItem.weight != 0 &&
      this.newItem.value != 0
    )
  }

}
