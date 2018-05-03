import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  isLaunched = false;
  fillerContent = Array(30);
  fixed = false;
  coverHeader = false;
  showHeader = false;
  showFooter = false;
  modeIndex = 0;
  constructor() { }

  ngOnInit() {
  }
  get mode() { return ['side', 'over', 'push'][this.modeIndex]; }
  get fixedTop() { return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0; }
  get fixedBottom() { return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0; }
}

