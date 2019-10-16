import { Component } from '@angular/core';
import { INavigation } from './navigation/navigation.component';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sitesProof';
  navigation: INavigation[];

  constructor(settingsService: SettingsService) {
    console.log(settingsService.getRoutes());
    console.log(settingsService.settings);
    this.navigation = settingsService.settings.site.pages.map((page): INavigation => {
      return {
        title: page.name,
        path: page.path
      };
    });
  }
}
