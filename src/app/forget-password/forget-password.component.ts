import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/Services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  isForget:boolean =  false
  isLoading:boolean = false
  constructor(private _authService:AuthService, private _router:Router){}

  forgetPassword: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
  })

  reset(form:FormGroup){
    console.log(form);
    if (form.valid) {
      this.isLoading = true
       this._authService.reset(form.value).subscribe({
        next:(res) => {
          this.isLoading = false
          console.log(res);
          this._router.navigate(["/code-verify"])
        },
      error:(error) => {
        console.log(error.error.message);
      },
       })
    }
  }
}
