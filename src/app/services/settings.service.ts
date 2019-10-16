import { Injectable, Injector } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PropertySearchComponent } from '../property-search/property-search.component';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

enum PageType {
  HOME,
  PROPERTYSEARCH,
  CONTACTUS,
  OFFICE,
  ANCILLERY,
  GENERIC
}

class Page {
  id: number;
  name: string;
  type: PageType;
  path: string;
}
class Branch {
  id: number;
  name: string;
  tel: string;
  email: string;
  address: string;
}
class Agency {
  id: number;
  name: string;
  logo: string;
  branches: Branch[];
}
class Site {
  pages: Page[];
}

export interface ISettings {
  agency: Agency;
  site: Site;
}

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

  private mapRoutesFromPages(): (value: Page, index: number, array: Page[]) => { path: string; component: typeof HomeComponent; } {
    return (page: Page) => {
      // set routing component based on page type
      switch (page.type) {
        case PageType.HOME:
          return {
            path: page.path,
            component: HomeComponent
          };
        case PageType.PROPERTYSEARCH:
          return {
            path: page.path,
            component: PropertySearchComponent
          };
        default:
          return {
            path: page.path,
            component: HomeComponent
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
