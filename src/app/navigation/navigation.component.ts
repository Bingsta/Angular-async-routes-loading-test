import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../services/page.service';

export interface INavigation {
  title: string;
  path: string;
  pageId: number;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  @Input() appNavigation: INavigation[];

  constructor(private pageService: PageService) {
    console.log(this.appNavigation);
  }

  ngOnInit() {
    console.log(this.appNavigation);
  }

}
