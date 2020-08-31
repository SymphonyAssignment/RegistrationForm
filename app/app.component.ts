import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  educations=['Btech','Mtech','MCA','MBA'];
  cnfPasswordError= true;
  userModel = new User('','','', '','',null, '', true);

  validatePassword(value,value1){
    if(value=== value1)
    this.cnfPasswordError= true;
    else
    this.cnfPasswordError=false;
    console.log(this.cnfPasswordError);

  }
}
