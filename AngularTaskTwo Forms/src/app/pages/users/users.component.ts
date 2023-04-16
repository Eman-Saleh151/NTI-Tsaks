import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  
  users:any =[]

  handleUser(eve:any){
    console.log(eve)
    this.users.push(eve)
  }
  handleDelete(i:any){
    this.users.splice(i, 1)
  }
  handleEdit(i:any){
    let nuser= prompt("enter your name")
    this.users[i].username =nuser

  }
}
