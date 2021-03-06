import { Component , Input } from "@angular/core";
import { ModalContext } from "./modal";

@Component({
  selector: 'modal-container',
  styles: [`
    :host {
      display: block;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #ddd;
      box-shadow: 0px 5px 10px rgba(0,0,0,0.2)
    }
    header {
      display: flex;
      padding: 10px 15px;
      border-bottom: 1px solid #ddd;
    }
    header > p:first-child {
      flex: auto;
    }
    .closeBtn {
      text-align: right;
      flex-basis: 30px;
      color: #009688;
      cursor: pointer;
    }
    .body {
      padding: 10px 15px;
    }
  `],
  template: `
    <header>
      <p>{{title}}</p>
      <p class="closeBtn" (click)="cancel()">x</p>
    </header>
    <div class="body">
      <ng-content></ng-content>
    </div>
  `
})
export class ModalContainerComponent {
  constructor(
    private modalContext: ModalContext
  ) {
  }
  @Input() private title: string;

  cancel() {
    this.modalContext.reject();
  }
}