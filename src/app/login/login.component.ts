import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo: any;
  loginToken:any;
  info:any;
  firstName:any='';
  email:any='';
  age:any='';
  lastName:any='';
  constructor(private _RegisterService: RegisterService, private _router: Router, private toastr: ToastrService,private spinner: NgxSpinnerService) { }
  loginForm: FormGroup = new FormGroup(
    {
      'email': new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)])
    })
  showSuccess() {
    
    this._RegisterService.currentUser.subscribe((data:any)=>
    {
      
       this.info=data;
       this.firstName=data?.first_name;
       this.age=data?.age;
       this.lastName=data?.last_name;
       this.email=data?.email;
    })
    this.toastr.success(`Welcome ${this.firstName} ${this.lastName}`, '', {
      timeOut: 1000,
    });
  }
  showError() {
    this.toastr.error(`${this.loginInfo.message}`, 'Authentication Error', {
      timeOut: 2000,
    });
  }
  ngOnInit(): void {

  }

  loginDone() {
    this._RegisterService.signIn(this.loginForm.value).subscribe((data) => {
    
      
      this.loginToken=data;
      if (this.loginForm.invalid) {
        return
      }

      if (data.message == 'success') {
        localStorage.setItem('token-login', data.token)
        this._RegisterService.saveCurrentUser();

        this._router.navigateByUrl('/home')
    

        
        this.loginInfo = data;
        this.showSuccess()
      }
      else {
        this.loginForm.reset();

        this.loginInfo = data
        this.showError()
        
      }

    })


  }

}
