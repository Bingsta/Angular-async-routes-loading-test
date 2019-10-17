import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-html',
  templateUrl: './generic-html.component.html',
  styleUrls: ['./generic-html.component.scss']
})
export class GenericHTMLComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
