import {
  Injectable,
  ViewContainerRef,
  TemplateRef,
  Component,
  ViewChild,
  Directive,
} from "@angular/core";

@Directive({
  selector: "[modalInner]",
})
export class ModalInner {
  constructor(
    public vcr: ViewContainerRef
    ) {
    console.log(vcr);
  }
}