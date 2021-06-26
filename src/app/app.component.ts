import { Component, Input } from '@angular/core';
import { SidebarsService } from './services/sidebars.service';

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
  @Input() closePane: boolean = false;

  // stores and forwards the value sent by leftPane to centerPane
  sendTabValueFromLeftPane($event: any): void {
    this.tabValueFromLeftPane = $event;
  }

  get isLeftpaneVisible(): boolean {
    return this.sidebarsService.displayLeftPane;
  }

  constructor(private sidebarsService: SidebarsService) {}

  ngOnInit(): void {
    // Display leftpane on desktop
    if (window.screen.width > 1200) {
      this.sidebarsService.displayLeftPane = true;
    } else {
      this.sidebarsService.displayLeftPane = false;
    }
  }
}
