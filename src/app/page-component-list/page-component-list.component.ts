import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, NgModule } from '@angular/core';
import { ModuleItem } from '../services/module-item';
import { PageComponentListDirective } from '../helpers/page-module.directive';
import { GenericHTMLComponent } from '../generic-html/generic-html.component';

interface TestComponent {
  data: any;
}

@Component({
  selector: 'app-page-component-list',
  templateUrl: './page-component-list.component.html',
  styleUrls: ['./page-component-list.component.scss']
})
export class PageComponentListComponent implements OnInit {
  @Input() componentModules: ModuleItem[];
  @ViewChild(PageComponentListDirective, {static: true}) moduleHost: PageComponentListDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponents();
  }

  loadComponents() {
    this.componentModules.forEach((componentModule) => this.loadComponent(componentModule));
  }

  loadComponent(componentModule: ModuleItem) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentModule.component);
    const viewComponentRef = this.moduleHost.viewContainerRef;
    const componentRef = viewComponentRef.createComponent(componentFactory);
    (<TestComponent> componentRef.instance).data = componentModule.data;
  }

}
