import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  @Input() tabValueFromLeftPane: string = "";

  todaysDate: Date = new Date();


  constructor() {
    
   }

  ngOnInit(): void {
      console.log(this.todaysDate);
  }

}
