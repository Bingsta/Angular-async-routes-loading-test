import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../services/page.service';
import PageSummary from '../types/PageSummary.type';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.scss']
})
export class PropertySearchComponent implements OnInit {
  pageSummary: PageSummary;

  constructor(private route: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.pageSummary = this.route.snapshot.data as PageSummary;
    console.log(this.pageSummary);
  }

}
