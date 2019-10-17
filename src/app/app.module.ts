import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SettingsService } from './services/settings.service';
import { PropertySearchComponent } from './property-search/property-search.component';
import { GenericHTMLComponent } from './generic-html/generic-html.component';
import { PropertyModuleComponent } from './property-module/property-module.component';
import { TestamonialModuleComponent } from './testamonial-module/testamonial-module.component';
import { PageComponentListComponent } from './page-component-list/page-component-list.component';
import { PageComponentListDirective } from './helpers/page-module.directive';

export function initSettings(settings: SettingsService) {
  return () => settings.loadSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    DocumentationComponent,
    PropertySearchComponent,
    GenericHTMLComponent,
    PropertyModuleComponent,
    TestamonialModuleComponent,
    PageComponentListComponent,
    PageComponentListDirective
  ],
  entryComponents: [
    HomeComponent,
    DocumentationComponent,
    PropertySearchComponent,
    GenericHTMLComponent,
    PropertyModuleComponent,
    TestamonialModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [
    SettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initSettings,
      deps: [SettingsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
