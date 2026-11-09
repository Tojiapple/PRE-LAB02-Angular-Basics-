import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Rustine De Pedro';
  location = 'Porac, Pampanga';
  email = 'rustinedepdro11@gmail.com';
  phone = '09126929801';

  profile = 'I am a 3rd year BSIT student with specialization in Web Development. Im eager to learn new things to apply for my future career.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'SQL'
  ];

  message = 'Welcome to my profile brunder!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `Brader clicked the button ${this.clickCount} time(s).`;
  }
}
