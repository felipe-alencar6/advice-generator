import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'advice-generator';
  data = '';
  constructor() {}
  x = 0;
  getAdvice() {
    this.x = Math.floor(Math.random() * 220);
    fetch('https://api.adviceslip.com/advice/' + this.x)
      .then((response) => response.json())
      .then((data) => {
        this.data = data.slip.advice;
        console.log(this.data);
      });
  }

  ngOnInit(): void {
    this.x = Math.floor(Math.random() * 220);
    fetch('https://api.adviceslip.com/advice/' + this.x)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.data = data.slip.advice;
        console.log(this.data);
      });
  }
}
