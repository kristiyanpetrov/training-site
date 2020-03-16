import { Component, OnInit } from '@angular/core';
import { latestNews } from '../../mocks/mock-latest-news';
import { programRating } from '../../mocks/mock-program-rating';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  latestNews: any = {};
  programRating: any = {};

  constructor() { }

  ngOnInit(): void {
    this.news();
    this.workoutRating();
  }

  news() {
    this.latestNews = latestNews.data;
  }

  workoutRating() {
    this.programRating = programRating.data;
  }

}
