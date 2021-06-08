import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  rateSelected = '0.1';
  udpnDidDocumentVal='';
  constructor(
    public formBuilder: FormBuilder,
    private nodeListService:NodeListService,
  ) { 
    this.initFormBuilder();
  }

  ngOnInit(): void {
    console.log('init123123');
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
      udpnDidDocument:[this.udpnDidDocumentVal,[
        Validators.required,        
      ]]
    });
  }

  uploadFile($event){
       const up =  new Promise((r,e)=>{
      const reader = new FileReader();
      reader.onload = (() => {
        if (reader.result) {
          r(reader.result.toString())
          // this.udpnDidDocumentVal =  ' 12312321'// reader.result.toString()
        }
      });
      reader.readAsText($event.target.files[0], 'utf-8');
    })
    up.then(res=>{
      this.form.get('udpnDidDocument').setValue(res)      
    })
  }
}
