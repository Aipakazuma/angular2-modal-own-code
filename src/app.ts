import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MyApp } from "./app/my-app.component";
import { Modal } from "./app/modal";
import { ModalEntryComponent } from "./app/modal-entry.component";
import { ModalContainerComponent } from "./app/modal-container.component";
import { GreetingModalComponent } from "./app/greeting-modal.component";
import { ModalInner } from "./app/modal.inner.directive";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ MyApp, ModalEntryComponent, ModalContainerComponent, GreetingModalComponent, ModalInner ],
  providers: [Modal],
  entryComponents: [ GreetingModalComponent ],
  bootstrap: [ MyApp ],
})
export class AppModule { }