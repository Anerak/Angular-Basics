import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css'],
})
export class StructureComponent implements OnInit {
  shown: boolean = true;

  emptyPerson = this.resetEmpty();
  isNew: boolean = true;
  currIndex: number = -1;

  people: Array<any> = [
    {
      name: 'Joe',
      lastName: 'Employee',
      age: '38',
      position: 'Dog',
      wfh: false,
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/builder_worker_helmet-128.png',
    },
    {
      name: 'Beth',
      lastName: 'Anglin',
      age: '28',
      position: 'ITIL Admin',
      wfh: true,
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/anime_spirited_away_no_face_nobody-128.png',
    },
    {
      name: 'David',
      lastName: 'Loo',
      age: '35',
      position: 'Executive',
      wfh: true,
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/chaplin_comedy_actor_man-128.png',
    },
    {
      name: 'Abel',
      lastName: 'Tuter',
      age: '42',
      position: 'Manager',
      wfh: false,
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/cactus_cacti_avatar_pirate-128.png',
    },
    {
      name: 'Walter',
      lastName: 'Clement',
      age: '45',
      position: 'Cool guy',
      wfh: true,
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/cloud_crying_rain_avatar-128.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  resetEmpty() {
    return {
      name: null,
      lastName: null,
      age: null,
      position: null,
      wfh: null,
      avatar: null,
    };
  }

  editPerson(index: number) {
    this.currIndex = index;
    this.emptyPerson = this.people[this.currIndex];
    this.isNew = false;
  }

  savePerson() {
    if (this.isNew) {
      this.people.push(this.emptyPerson);
    } else {
      this.people[this.currIndex] = this.emptyPerson;
    }

    this.isNew = true;
    this.currIndex = -1;
    this.emptyPerson = this.resetEmpty();
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
  }

  countWfh() {
    const amount = this.people.filter((p) => p.wfh).length;
    return {
      all: amount === this.people.length,
      count: this.people.length,
      empty: this.people.length === 0,
      none: amount === 0,
      some: amount < this.people.length,
      wfh: amount,
    };
  }
}
