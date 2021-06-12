import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // stores the tab value passes by leftpane on button click
  tabValueFromLeftPane: string = '';

  // stores toggle button click value send from center pane
  displayLeftPane: boolean = true;
  toggleBtnClick: boolean = false;

  // stores and forwards the value sent by leftPane to centerPane
  sendTabValueFromLeftPane($event: any): void {
    this.tabValueFromLeftPane = $event;
  }

  constructor() {
    console.log(this.toggleBtnClick);
  }

  ngOnInit(): void {
    // Display leftpane on desktop
    if (window.screen.width > 1200) {
      this.toggleBtnClick = true;
    }
  }
}
