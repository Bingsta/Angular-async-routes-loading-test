import { Injectable, Injector } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PropertySearchComponent } from '../property-search/property-search.component';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PageType } from '../types/PageType.type';
import ISettings from '../types/ISettings.type';
import PageSummary from '../types/PageSummary.type';

@Injectable()
export class SettingsService {

  settings: ISettings;

  constructor(
    private injector: Injector
  ) {}

  // simulate getting settings from API
  loadSettings(): Promise<boolean> {
    // get settings
    return this.mockAPICall()
    .pipe(
      map((settings: ISettings) => {
        const router = this.injector.get(Router);
        this.settings = settings;
        // map routes from site pages
        const routes = settings.site.pages.map(this.mapRoutesFromPages());
        // set app routes
        router.config = router.config.concat(routes);
        return true;
      })
    )
    .toPromise();
  }

  private mapRoutesFromPages(): (value: PageSummary, index: number, array: PageSummary[]) => { path: string; component: any; } {
    return (page: PageSummary) => {
      // set routing component based on page type
      switch (page.type) {
        case PageType.HOME:
          return {
            path: page.path,
            component: HomeComponent,
            data: page
          };
        case PageType.PROPERTYSEARCH:
          return {
            path: page.path,
            component: PropertySearchComponent,
            data: page
          };
        default:
          return {
            path: page.path,
            component: HomeComponent,
            data: page
          };
      }
    };
  }

  mockAPICall(): Observable<ISettings> {
    const mockSettings = {
      agency: {
        id: 0,
        name: 'Test agency',
        logo: 'https://via.placeholder.com/350x150',
        branches: [
          {
            id: 0,
            name: 'An office',
            tel: '00000',
            email: 'email @email.com',
            address: 'Somewhere'
          }
        ]
      },
      site: {
        pages: [
          {
            id: 0,
            name: 'Home',
            type: PageType.HOME,
            path: ''
          },
          {
            id: 1,
            name: 'Property search',
            type: PageType.PROPERTYSEARCH,
            path: 'search'
          },
          {
            id: 2,
            name: 'some bollocks',
            type: PageType.PROPERTYSEARCH,
            path: 'bollocks'
          }
        ]
      }
    };
    return of(mockSettings)
    .pipe(
      delay(1000)
    );
  }

  getRoutes(): Route[] {
    const router = this.injector.get(Router);
    return router.config;
  }
}
