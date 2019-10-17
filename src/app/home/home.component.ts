import { Component, OnInit, NgModule } from '@angular/core';
import { PageConfig, PageService } from '../services/page.service';
import { ActivatedRoute } from '@angular/router';
import PageSummary from '../types/PageSummary.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageSummary: PageSummary;
  pageConfig: PageConfig;
  loaded = false;

  constructor(private route: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.pageSummary = this.route.snapshot.data as PageSummary;
    console.log(this.pageSummary);
    this.pageService.getPage(this.pageSummary.id).subscribe({
      next: (result: PageConfig) => {
        this.loaded = true;
        this.pageConfig = result;
        console.log(this.pageConfig);
      }
    });
  }

}
