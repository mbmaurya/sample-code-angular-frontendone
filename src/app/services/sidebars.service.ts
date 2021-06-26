import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarsService {
  displayLeftPane: boolean = false;

  displayRightPane: boolean = false;

  toggleLeftPane() {
    this.displayLeftPane = !this.displayLeftPane;
    return this.displayLeftPane;
  }

  toggleRightPane() {
    this.displayRightPane = !this.displayRightPane;
    return this.displayRightPane;
  }

  constructor() {}
}
