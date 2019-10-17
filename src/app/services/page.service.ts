import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PageType } from '../types/PageType.type';
import { delay, map } from 'rxjs/operators';
import { GenericHTMLComponent } from '../generic-html/generic-html.component';
import { ModuleItem } from './module-item';
import { PropertyModuleComponent } from '../property-module/property-module.component';
import { TestamonialModuleComponent } from '../testamonial-module/testamonial-module.component';
import Module from '../types/Module.type';
import Page from '../types/Page.type';
import { ModuleType } from '../types/ModuleType.type';

export interface PageConfig {
  id: number;
  name: string;
  type: PageType;
  title: string;
  strapline: string;
  coverImage: string;
  modules: ModuleItem[];
}

@Injectable({
  providedIn: 'root'
})

export class PageService {
  pageConfig: PageConfig;

  constructor() { }

  getPage(id: number): Observable<PageConfig> {
    console.log(ModuleType);
    return this.mockApiCall(id)
    .pipe(
      map((page) => {
        const modules: ModuleItem[] = [];

        this.pageConfig = {
          id: page.id,
          name: page.name,
          type: page.type,
          title: page.title,
          strapline: page.strapline,
          coverImage: page.coverImage,
          modules: page.modules.map(this.ModuleItemFactory())
        };
        return this.pageConfig;
      })
    );
  }

  private ModuleItemFactory(): (value: Module, index: number, array: Module[]) => ModuleItem {
    return (module: Module) => {
      switch (module.type) {
        case ModuleType.GenericHTML:
          return new ModuleItem(GenericHTMLComponent, module.config);
        case ModuleType.Property:
          return new ModuleItem(PropertyModuleComponent, module.config);
        case ModuleType.Testamonial:
          return new ModuleItem(TestamonialModuleComponent, module.config);
        default:
          throw Error('Unknown module type');
      }
    };
  }

  mockApiCall(id: number): Observable<Page> {
    console.log(ModuleType.GenericHTML);
    const pages: Page[] = [
      {
        id: 0,
        name: 'Home',
        type: PageType.HOME,
        title: 'Test',
        strapline: 'Another test',
        coverImage: 'dasd',
        modules: [
          {
            type: ModuleType.GenericHTML,
            config: {
              title: 'Generic test',
              html: '<div class="nonsense">My content</div>'
            }
          },
          {
            type: ModuleType.Property,
            config: {
              title: 'Latest properties',
              properties: [
                {
                  address: 'property 1'
                },
                {
                  address: 'property 2'
                },
                {
                  address: 'property 3'
                }
              ]
            }
          }
        ]
      },
      {
        id: 1,
        name: 'Property search',
        type: PageType.PROPERTYSEARCH,
        title: 'Property search',
        strapline: 'Do a search please',
        coverImage: 'dasd',
        modules: [
          {
            type: ModuleType.GenericHTML,
            config: {
              title: 'Generic test',
              html: '<div class="nonsense">My content</div>'
            }
          }
        ]
      },
      {
        id: 3,
        name: 'Some bollocks',
        type: PageType.PROPERTYSEARCH,
        title: 'Some bollocks',
        strapline: 'Blah blah blah',
        coverImage: 'dasd',
        modules: [
          {
            type: ModuleType.GenericHTML,
            config: {
              title: 'Generic test',
              html: '<div class="nonsense">My content</div>'
            }
          }
        ]
      }
    ];
    const page = pages.find((p: Page) => p.id === id);
    return of(page)
    .pipe(
      delay(1000)
    );
  }
}
