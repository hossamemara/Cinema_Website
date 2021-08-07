import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpInfo:any;

  registerForm: FormGroup = new FormGroup(
    {
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)]),


    }
  )
  ontrue: boolean = true;
  constructor(private _router: Router, private _registerService: RegisterService,private toastr: ToastrService) {

  }

  showSuccess() {
    this.toastr.success(`Congratulation Registeration Successed`, '', {
      timeOut: 1000,
    });
  }
  showError()
  {
   
    this.toastr.error(`${this.signUpInfo.message}`, 'Sign Up Error', {
      timeOut: 2000,
    });
  }

  registerDone() {
    this._registerService.signUp(this.registerForm.value).subscribe((response) => {
      if (this.registerForm.invalid) {
        return;
      }

      if (response.message == 'success') {

        this._router.navigateByUrl('/login')
       
        this.signUpInfo=response;
        this.showSuccess() 
      }
      else{
        this.registerForm.reset();
       

        this.signUpInfo=response
        this.showError()
       
      }
    })



  }



  ngOnInit(): void {

  }

}
