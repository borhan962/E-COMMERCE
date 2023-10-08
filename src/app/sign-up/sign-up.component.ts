import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  isLoading:boolean = false
  errorHandle:string = ""
  isNotValidForm:boolean = false

  constructor(private _authService:AuthService, private _router: Router){}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{3,8}/)]),
    rePassword: new FormControl('',[Validators.required ,Validators.pattern(/^[A-Z][a-z0-9]{3,8}/)]),
    phone: new FormControl('',[Validators.required ,Validators.minLength(10),Validators.maxLength(13)])
  }
  )
  register(form:FormGroup){
    console.log(form);
    if (form.valid) {
      this.isLoading = true
       this._authService.register(form.value).subscribe({
        next:(res) => {
          console.log(res);
          this.isLoading = false
          this._router.navigate(["/sign-in"])
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
