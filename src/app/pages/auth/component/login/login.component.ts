import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainComponent } from '../../../main/main.component'

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
    private router: Router,

  ) {
    this.initFormBuilder();
   }

  loginUser() {
    this.loginLoading = true;
    setTimeout(()=>{
      this.loginLoading = false;
      this.router.navigate(MainComponent.path());
      // this.router.navigate(['mian/nodes']);
      console.log(this.form.value);
    },2000);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // do some.
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
