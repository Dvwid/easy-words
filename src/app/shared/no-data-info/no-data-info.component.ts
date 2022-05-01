import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-no-data-info',
  templateUrl: './no-data-info.component.html',
  styleUrls: ['./no-data-info.component.css']
})
export class NoDataInfoComponent implements OnInit {

  @Input() header: string;
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
