import { Component , Input } from "@angular/core";
import { ModalContext } from "./modal";

@Component({
  selector: "greeting",
  styles: [`
    input {
      padding: 2px 5px;
    }
    footer {
      margin-top: 10px;
    }
    button {
      padding: 5px 10px;
      background-color: #ddd;
      border: 0;
      border-radius: 3px;
      margin-right: 10px;
      font-size: 12px;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.8;
    }
    button.ok {
      background-color: #009688;
      color: #fff;
    }
  `],
  template: `
    <modal-container title="Greeting">
      <section>
        <input [(ngModel)]="name" placeholder="Message">
      </section>
      <footer>
        <button class="ok" (click)="onClick()">OK</button>
        <button (click)="modal.reject()">Cancel</button>
      </footer>
    </modal-container>
  `,
})
export class GreetingModalComponent {
  private name: string;

  constructor(
    private modal: ModalContext
  ) {
  }

  onClick() {
    this.modal.resolve(this.name);
  }
}