import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
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
  typeSelected = '1';
  currencySelected = 'USDT';
  rateSelected = 'one';
  constructor(
    public formBuilder: FormBuilder,
    private nodeListService:NodeListService,
  ) { 
    this.initFormBuilder();
  }

  ngOnInit(): void {
    console.log('init');
    // this.getList()
  }

  loginUser(){
    console.log(this.form.value);
    
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
      udpnPeerName:['',[
        Validators.required,
      ]],
      udpnPeerType:[this.typeSelected,[
        Validators.required,
      ]],
      udpnPeerCurrencyType:[this.currencySelected,[
        Validators.required,
      ]],
      udpnPeerRate:[this.rateSelected,[
        Validators.required,
      ]],
      udpnPeerNo:['0x_dweafaWDDIKJMKJMKSAJDUIOUIO',[
        Validators.required,
      ]],
      udpnPeerTitle:['',[
        Validators.required,
      ]],
      udpnPeerAddr:['',[
        Validators.required,
      ]],
      udpnPeerDesc:['',[
        Validators.required,
      ]],
      udpnDidDocument:['',[
        Validators.required,
      ]]
    });
  }
}
