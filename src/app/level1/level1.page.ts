import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.page.html',
  styleUrls: ['./level1.page.scss'],
})
export class Level1Page implements OnInit {

  public cardsTotal = 12; // Total cards to Match (divided by 2)
  public cardsArray = []; // Store all card pairs
  public userLife = 4;  // Total amount of tries user gets
  public imageDir = '../../assets/img/food/';
  public images = ['biryani', 'burger', 'dosa', 'idly', 'pizza'];

  public selectCard1pos = -1; // Selected card #1 position
  public selectCard1val = -1; // Selected card #1 value
  public selectCard2pos = -1; // Selected card #2 position
  public selectCard2val = -1; // Selected card #2 value

  public debugText = "Debug goes here";

  constructor() { }

  ngOnInit() {
    this.populateCards();
    this.shuffle(this.cardsArray);
    this.shuffle(this.images);
  }

  // Function to populate cards array with position and value pairs from 0 to 6
  populateCards() {
    this.cardsArray = [];
    let x = 0;
    let y = 0;
    for (let i = 0; i < this.cardsTotal; i++) {
      //Push card to array and asign value
      this.cardsArray.push({ pos: i, val: y });
      // Flip x to assign next card same value
      if (x == 0) x = 1;
      else { x = 0; y++ }
    }
  }

  // Function to select a card
  selectCard(pos, val) {
    // Code to select de first card
    this.selectCard1pos = pos;
    this.selectCard1val = val;

    this.debugText = "Pos: " + pos + " and val: " + val
  }

  // Function to shuffle an array
  shuffle(a) {
    let j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
  }

  // Function to reset selected cards
  resetSelects() {
    this.selectCard1pos = -1;
    this.selectCard1val = -1;
    this.selectCard2pos = -1;
    this.selectCard2val = -1;
  }
}
