import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  myFunc() {
    console.log("function called");
    throw Error("Failed sending command to annotationStore(error Error (Database returned errors {\"code\":\"TEMPORAL_ID_IS_NOT_UNIQUE\"})");
  }
}
