import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SidebarsService } from '../services/sidebars.service';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.css'],
})
export class LeftpaneComponent implements OnInit {
  // variable to store value of the tab button clicked
  tab: string = 'dashboard';

  closePane: boolean = true;

  // Creates an instance of eventemitter and broadcasts to parent component
  @Output() passTabValue = new EventEmitter<any>();
  displayNav: boolean = false;
  // @Output() passCloseState = new EventEmitter<any>();

  // @Input() displayNav: any;

  // // data recived after toggle button click
  // @Input() showPane: any;

  // Sends the value of tab variable whenever it changes
  sendTabValue(value: string): void {
    this.tab = value;
    this.passTabValue.emit(this.tab);
  }

  functionClosePane(): void {
    this.sidebarsService.displayLeftPane = false;
  }

  constructor(private sidebarsService: SidebarsService) {}

  ngOnInit(): void {
    this.displayNav = this.sidebarsService.displayLeftPane;
  }
}
