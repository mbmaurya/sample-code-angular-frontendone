import { Component, OnInit } from '@angular/core';
import { SidebarsService } from '../services/sidebars.service';

@Component({
  selector: 'app-rightpane',
  templateUrl: './rightpane.component.html',
  styleUrls: ['./rightpane.component.css'],
})
export class RightpaneComponent implements OnInit {
  constructor(private sidebarsService: SidebarsService) {}

  ngOnInit(): void {}
}
