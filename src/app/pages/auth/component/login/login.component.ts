import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: string;
  diameter:number;
  loginLoading = false;
  static path = () => ['login'];
  constructor(
    public formBuilder: FormBuilder,

  ) {
    this.initFormBuilder();
   }

  loginUser() {
    this.loginLoading = true;
    setTimeout(()=>{
      this.loginLoading = false;
      console.log('页面跳转');
      console.log(this.form.value);
    },3000);
  }
  ngOnInit(): void {
  }

  private initFormBuilder() {
    
    this.form = this.formBuilder.group({
      email: ['test@qq.com', [
        Validators.required,
        Validators.email
      ]],
      password: ['123123', Validators.required]
    });
  }
}
