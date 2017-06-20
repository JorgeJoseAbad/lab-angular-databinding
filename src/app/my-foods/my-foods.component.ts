import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-my-foods',
  templateUrl: './my-foods.component.html',
  styleUrls: ['./my-foods.component.css']
})
export class MyFoodsComponent implements OnInit {
  foods:Object[];

  constructor() { }

  ngOnInit() {
    this.foods=foods;
  }

  /* anado aqui el array con comidas*/


}
