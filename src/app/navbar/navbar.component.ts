import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sessionActiveLogin: boolean = false;
  firstName:any='';
  email:any='';
  age:any='';
  lastName:any='';
 
  constructor(private _router: Router, private _registerService: RegisterService) {


  }
  ngOnInit(): void {
    this._registerService.currentUser.subscribe((data:any) => {
      this.firstName=data?.first_name;
      this.age=data?.age;
      this.lastName=data?.last_name;
      this.email=data?.email;
     
      if (this._registerService.currentUser.getValue() != null) {
        this.sessionActiveLogin = true
      }
      else {
        this.sessionActiveLogin = false
      }
    })

  }

  logOut()
  {
    this._registerService.isLogOut();
  }


}
