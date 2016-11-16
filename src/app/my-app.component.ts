import { Component } from "@angular/core";
import { Modal } from "./modal";
import { GreetingModalComponent } from "./greeting-modal.component";

@Component({
  selector: "my-app",
  styles: [`
    .app {
      max-width: 960px;
      margin: 0 auto;
      padding: 30px;
    }
    h1 {
      font-size: 1.5em;
      margin-bottom: 15px;
    }
    button {
      padding: 5px 10px;
      background-color: #009688;
      color: #fff;
      border: 0;
      border-radius: 3px;
      margin-right: 10px;
      font-size: 12px;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.8;
    }
  `],
  template: `
  <modal-entry></modal-entry>
  <div class="app">
    <h1>Ng2 Modal Example</h1>
    <button (click)="openModal()">Open Modal</button>
    <span>Result: {{name}}</span>
    <span>Result select: {{selectOption}}</span>
  </div>
  `,
})
export class MyApp {
  private name:string = "";
  private selectOption:string = "";
  private objects:any = [{id:1},{id:2},{id:3}];
  constructor(
    private modal: Modal
  ) {
  }

  openModal() {
    console.log(this.objects);
    this.modal.open<string>(GreetingModalComponent, this.objects).then(object => {
      this.name = object['name'];
      this.selectOption = object['selectOption'];
    }).catch(e => {
      console.log(e);
    });
  }
}