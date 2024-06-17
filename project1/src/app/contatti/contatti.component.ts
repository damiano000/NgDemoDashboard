// contatti.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {
  contacts = ['John Doe', 'Jane Smith', 'Alice Johnson'];
}