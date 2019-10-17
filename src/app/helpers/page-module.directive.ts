import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModuleHost]',
})
export class PageComponentListDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
