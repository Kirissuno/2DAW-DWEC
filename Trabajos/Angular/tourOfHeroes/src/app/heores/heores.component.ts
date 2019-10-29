import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroe';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.css']
})

export class HeoresComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}