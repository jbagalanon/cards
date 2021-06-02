import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this picture while biking today.',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: "Here's the picture of the mountain.",
    },

    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'bikinglover',
      content: 'I saw this picture while biking today.',
    },

    {
      title: 'Hiking',
      imageUrl: 'assets/tree.jpeg',
      username: 'hikinglover',
      content: 'I saw this picture while biking today.',
    },
  ];
}
