import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SidebarsService } from '../services/sidebars.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
})
export class CenterComponent implements OnInit {
  @Input() tabValueFromLeftPane: string = '';

  // // Event emitter to output on toggle button click
  // @Output() clickEvent = new EventEmitter<any>();

  // display toggle button when true
  displayToggleBtn: boolean = false;

  // display the navigation menu when set to true on mobile devices
  displayNav: boolean = false;

  // get's today's date
  todaysDate: Date = new Date();

  // checks the screen width and sets the displayToggle variable
  checkScreenWidth() {
    if (window.screen.width <= 1200) {
      this.displayToggleBtn = true;
    } else if (window.screen.width > 1200) {
      this.displayToggleBtn = false;
    }
  }

  // toggles navigation menu on left pane
  toggleNav() {
    this.displayNav = this.sidebarsService.toggleLeftPane();
    console.log(this.displayNav);
  }

  constructor(private sidebarsService: SidebarsService) {}

  ngOnInit(): void {
    // runs checkScreenWidth function to check the current screen width and set displayToggle variable on load
    this.checkScreenWidth();
  }
}
