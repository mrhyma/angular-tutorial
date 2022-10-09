import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewCountainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(times: number) {
    this.viewCountainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewCountainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
