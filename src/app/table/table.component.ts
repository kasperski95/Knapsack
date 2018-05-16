import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../Knapsack';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  new_item : Item = new Item();

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }


  addItem(){
    // by default objects in js are pushed by reference
    this.data.push(this.new_item);
    this.data.sort();
    this.data.solve();
  }

  clearAll(){
    this.data.clear();
  }
}
