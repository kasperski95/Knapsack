import { Component, OnInit } from '@angular/core';
import { Observer } from '../../../interfaces/patterns/observer';
import { KnapsackService } from '../../../services/knapsack.service';


/**
* Display solution
*/
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, Observer {
  constructor(private knapsackService:KnapsackService) {
    knapsackService.attach(this);
  }
  ngOnInit() {}

  //----------------------------------------------------------------------------

  update() {
    // angular updates results
    // observer pattern requires this method
  };

}
