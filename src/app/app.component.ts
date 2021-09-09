import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'uxtrendz';
  // for Users
  users : any =[];
  pushUsers(data : any){
    this.users.push(data);
  }
  onRemoveUsers(item : any){
    this.users.splice(item, 1)
  }

  // for Admins
  admins : any =[];
  pushAdmins(data : any){
    this.admins.push(data);
  }
  onRemoveAdmins(item:any){
    this.admins.splice(item, 1)
  }

}
