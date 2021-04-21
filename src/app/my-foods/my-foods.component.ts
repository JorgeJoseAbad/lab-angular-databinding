import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-my-foods',
  templateUrl: './my-foods.component.html',
  styleUrls: ['./my-foods.component.css']
})
export class MyFoodsComponent implements OnInit {

  foods:Object[];
  newFood = {
    name: "",
    calories: 0,
    quantity: 0,
    image:""
  };
  submitted = false;
  cantidad: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }


  newFoods(){
    console.log('botton new food tocado');

    let myFood = {
      name: this.newFood.name,
      calories: +this.newFood.calories,
      quantity: +this.newFood.quantity,
      image: this.newFood.image
    };

    this.foods.push(myFood);
    this.newFood={
      name: "",
      calories: 0,
      quantity: 0,
      image: ""
    };
    this.submitted = true;

  }
}
