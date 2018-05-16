import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Observer } from '../interfaces/Observer'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, Observer {

  constructor(private data:DataService){
    data.attach(this);
  }
  ngOnInit() {}

  update(){
    // for(let i = 0; i < this.data.getSolution().length; ++i)
    // {
    //
    // }
  };

}
