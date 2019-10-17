import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-module',
  templateUrl: './property-module.component.html',
  styleUrls: ['./property-module.component.scss']
})
export class PropertyModuleComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
