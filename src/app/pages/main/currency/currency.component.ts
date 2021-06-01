import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';




@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CurrencyComponent implements AfterViewInit {
  code:string=`
  {
    "authentication":{
        "publicKeyHex":"9022679184221836403301884589293381209856270929574236398626137983311110659402768290476427652642061071915354828624612704945971867249115711252124858553073852",
        "type":"Secp256k1"
    },
    "context":"https://w3id.org/did/v1",
    "created":"2021-05-21 14:24:56",
    "did":"did:udpn:3C6ZQRjFVPidnKKAPzL1ZQJjUyjh",
    "proof":{
        "creator":"did:udpn:3C6ZQRjFVPidnKKAPzL1ZQJjUyjh",
        "signatureValue":"6hMyG0ekKf5iCb2VfLrnDwitRjqassvwY7g6v2YKaBcmku/Nz7EAu5X2rZhK1zAmsRshqd2gnMtiR5drHjbQZxs=",
        "type":"Secp256k1"
    },
    "recovery":{
        "publicKeyHex":"6340810248297752682286514606438727254926725096564429661930140243739199517131364536825595467982009644259652854536581990504445057607594221580185327588229566",
        "type":"Secp256k1"
    },
    "updated":"2021-05-21 14:24:56",
    "version":"1"
}
  `;
  currencySelected = 'onoe';
  targetCurrencySelected = 'onoe';
  displayedColumns: string[] = ['TN_name', 'TN_number', 'TN_desc', 'IsKyc','Service charge','Rate','Address'];
  form: FormGroup;
  expandedElement: ResultData | null;
  dataSource = new MatTableDataSource<ResultData>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    ]);
  constructor(
    public formBuilder: FormBuilder,
  ) { 
    this.initFormBuilder();
    // to do desc
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  private initFormBuilder() {
    
    this.form = this.formBuilder.group({
      did:'',
      currency:this.currencySelected,
      money:'',
      address:'',
      toAddress:'',
      targetCurrency:this.targetCurrencySelected
    });
  }
}


export interface ResultData {
  TnName: string;
  TnNumber: string;
  TnDesc: string;
  IsKyc: string;
  ServiceCharge: string; 
  Rate: string;
  Address: string;
}

const ELEMENT_DATA: ResultData[] = [
  {TnName: 'test1', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test2', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test3', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test4', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test5', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test6', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test7', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test8', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test9', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test10', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test11', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test12', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test13', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test14', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test15', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
  {TnName: 'test16', TnNumber: '0x_213123123', TnDesc: 'test desc', IsKyc: 'yes',ServiceCharge:'12321',Rate:'33333',Address:'0x_1231231'},
];