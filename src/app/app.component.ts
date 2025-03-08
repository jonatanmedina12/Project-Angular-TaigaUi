import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PushComponent } from "./feature/push/push.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, PushComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taiga-angular';
}
