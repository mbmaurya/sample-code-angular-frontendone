import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.css'],
})
export class LeftpaneComponent implements OnInit {
  // variable to store value of the tab button clicked
  tab: string = 'dashboard';

  // Creates an instance of eventemitter and broadcasts to parent component
  @Output() passTabValue = new EventEmitter<any>();

  @Input() displayNav: any;

  // data recived after toggle button click
  @Input() showPane: any;

  // Sends the value of tab variable whenever it changes
  sendTabValue(value: string): void {
    this.tab = value;
    this.passTabValue.emit(this.tab);
  }

  constructor() {}

  ngOnInit(): void {}
}
