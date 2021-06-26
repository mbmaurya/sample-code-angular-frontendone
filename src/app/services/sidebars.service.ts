import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarsService {
  displayLeftPane: boolean = false;

  toggleLeftPane() {
    this.displayLeftPane = !this.displayLeftPane;
    return this.displayLeftPane;
  }

  constructor() {}
}
