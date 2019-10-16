import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from '../services/settings.service';

export interface INavigation {
  title: string;
  path: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  @Input() appNavigation: INavigation[];

  constructor() {
    console.log(this.appNavigation);
  }

  ngOnInit() {
    console.log(this.appNavigation);
  }

}
