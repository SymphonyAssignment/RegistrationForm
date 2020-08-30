import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  educations=['Btech','Mtech','MCA','MBA'];
  userModel = new User('', 'rob@test.com','male', 55566655661, 'Btech', true);
}
