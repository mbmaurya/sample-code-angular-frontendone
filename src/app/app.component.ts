import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // stores the tab value passes by leftpane on button click
  tabValueFromLeftPane: string = "";

  // stores and forwards the value sent by leftPane to centerPane
  sendTabValueFromLeftPane($event: any): void {
    this.tabValueFromLeftPane = $event;
  }
}
