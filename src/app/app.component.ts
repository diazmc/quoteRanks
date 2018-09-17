import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    {
    text: 'I think it is possible for ordinary people to choose to be extraordinary.',
    author: 'Elon Musk',
    vote: 0
    }
  ];

  createQuote(quote) {
    this.quotes.push(quote)
  }

  deleteQuote(quote){
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1)
  }

}
