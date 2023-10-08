import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/Services/auth.service';

@Component({
  selector: 'app-code-verify',
  templateUrl: './code-verify.component.html',
  styleUrls: ['./code-verify.component.css']
})
export class CodeVerifyComponent {
  isForget:boolean =  false
  isLoading:boolean = false
  constructor(private _authService:AuthService, private _router:Router){}

  forgetPassword: FormGroup = new FormGroup({
    resetCode: new FormControl('',[Validators.required])
  })

  reset(form:FormGroup){
    console.log(form);
    if (form.valid) {
      this.isLoading = true
       this._authService.resetCode(form.value).subscribe({
        next:(res) => {
          this.isLoading = false
          console.log(res);
          this._router.navigate(["/update-pass"])
        },
      error:(error) => {
        console.log(error.error.message);
      },
       })
    }
  }
}
