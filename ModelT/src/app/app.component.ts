import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModelT';

  name = "Oliver A Heyer"



test() {
  console.log('Thank you');

  this.name = 'It is no More';
}

}