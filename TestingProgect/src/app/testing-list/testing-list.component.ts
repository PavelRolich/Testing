import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-list',
  templateUrl: './testing-list.component.html',
  styleUrls: ['./testing-list.component.scss']
})
export class TestingListComponent implements OnInit {
  answerList = ['question', 'question', 'question', 'question'];

  constructor() { }

  ngOnInit() {
  }

}
