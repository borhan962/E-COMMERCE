import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/Services/auth.service';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.css']
})
export class UpdatePassComponent {
  isLoading:boolean = false
  errorHandle:string = ""
  isNotValidForm:boolean = false

  constructor(private _authService:AuthService, private _router: Router){}

  updatePass: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
    newPassword: new FormControl('',[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{3,8}/)])
  }
  )
  update(form:FormGroup){
    console.log(form);
    if (form.valid) {
      this.isLoading = true
       this._authService.update(form.value).subscribe({
        next:(res) => {
          console.log(res);
          this.isLoading = false
          localStorage.setItem("userToken", res.token)
          this._authService.getUserData()
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
