import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users !: any[];
  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        id: 0,
        name: 'Jan',
        lastName: 'Kowalski',
        email: 'JanKowal@gmail.com'
      },
      {
        id: 1,
        name: 'Jan',
        lastName: 'Nowak',
        email: 'nowacki@gmail.com'
      }
    ];
  }

  delete = (id: number) : void => {
    console.log(`Delete ${id}`);
    this.users.forEach((user, index) => {
      if (user.id == id)
        this.users.splice(index, 1);
    })
  }

  handleSubmit(formValues: any){
    let newUser = {
      id: formValues.id,
      name: formValues.name,
      lastName: formValues.lastName,
      email: formValues.email
    };
    this.users.push(newUser);
  }
}
