import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-update',
  templateUrl: './svg-update.component.html',
  styleUrls: ['./svg-update.component.css']
})
export class SvgUpdateComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
