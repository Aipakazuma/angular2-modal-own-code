import {
  Injectable,
  ViewContainerRef,
  TemplateRef,
  Component,
  ViewChild,
  Directive,
} from "@angular/core";
import { Modal } from "./modal";
import { ModalInner } from "./modal.inner.directive";

@Component({
  selector: "modal-entry",
  styles: [`
    .bg {
      display: none;
    }
    .bg.active {
      display: block;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 100px 0 0 0;
      z-index: 10;
    }
    [modal-inner] {
      margin: 0 auto;
      width: 400px;
    }
  `],
  template: `
    <div class="bg" [class.active]="modal.isShow()">
      <div modalInner></div>
    </div>
  `
})
export class ModalEntryComponent {
  @ViewChild(ModalInner) private inner: ModalInner;

  constructor(
    private modal: Modal
  ) {
  }

  ngAfterViewInit() {
    console.log(this.inner);
    this.modal.vcr = this.inner.vcr;
  }
}