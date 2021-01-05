import { Component, OnInit } from '@angular/core';
import { People } from '../model';
import { morePeople } from '../people-list';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  listPeople = morePeople;

  selectedPeople!: People;

  onSelect(people: People): void {
    this.selectedPeople = people;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
