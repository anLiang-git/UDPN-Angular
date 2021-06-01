import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoginComponent } from 'src/app/pages/auth/component/login/login.component';
import { NodeListService } from '../../node-list.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  addSubscription: Subscription;
  listSubscription: Subscription;
  form: FormGroup;
  loginLoading = false;
  typeSelected = 'one';
  currencySelected = 'one';
  rateSelected = 'one';
  constructor(
    public formBuilder: FormBuilder,
    private nodeListService:NodeListService,
  ) { 
    this.initFormBuilder();
  }

  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.listSubscription = this.nodeListService.list().pipe(finalize(() => this.loginLoading = false)).subscribe(
      data=>{
        console.log(data)
      },
      error=>{
        console.log(error);        
      }      
    )
  }
  loginUser(){
     this.addSubscription = this.nodeListService
      .add(this.form.value)
      .pipe(finalize(() => this.loginLoading = false))
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
          
        }
      );
  }

  private initFormBuilder() {
    
    this.form = this.formBuilder.group({
      name:['',[
        Validators.required,
      ]],
      type:[this.typeSelected,[
        Validators.required,
      ]],
      currency:[this.currencySelected,[
        Validators.required,
      ]],
      rate:[this.rateSelected,[
        Validators.required,
      ]],
      number:['0x_dweafaWDDIKJMKJMKSAJDUIOUIO',[
        Validators.required,
      ]],
      nodeTitle:['',[
        Validators.required,
      ]],
      address:['',[
        Validators.required,
      ]],
      description:['',[
        Validators.required,
      ]]
    });
  }
}
