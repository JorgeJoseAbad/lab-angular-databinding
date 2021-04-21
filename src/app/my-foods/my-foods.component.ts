import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-my-foods',
  templateUrl: './my-foods.component.html',
  styleUrls: ['./my-foods.component.css']
})
export class MyFoodsComponent implements OnInit {

  foods:Object[];
  newFood:Object={};
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }


  newFoods(){
    console.log('botton new food tocado');

    this.foods.push(this.newFood);
    this.newFood={};
    this.submitted = true;

  }
}
