import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isLoading:boolean = false
  errorHandle:string = ""
  isNotValidForm:boolean = false

  constructor(private _authService:AuthService, private _router: Router){}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{3,8}/)])
  }
  )
  login(form:FormGroup){
    console.log(form);
    if (form.valid) {
      this.isLoading = true
       this._authService.login(form.value).subscribe({
        next:(res) => {
          console.log(res);
          this.isLoading = false
          localStorage.setItem("userToken", res.token)
          this._authService.getUserData()
          this._router.navigate(["/home"])
        },
      error:(error) => {
        console.log(error.error.message);
        this.errorHandle = error.error.message
      },
       })
    }else{
      this.isNotValidForm=true; 
    }
  }
}
