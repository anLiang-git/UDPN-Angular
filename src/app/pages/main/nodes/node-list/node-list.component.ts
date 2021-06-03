import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddComponent } from './component/add/add.component';
import { Subscription } from 'rxjs';
import { NodeListService } from './node-list.service';
import { finalize } from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';



export interface Fruit {
  name: string;
  }
export interface UserData {
  udpnPeerName: string;
  udpnPeerNo: string;
  udpnPeerTitle: string;
  udpnPeerCurrencyType: string;
  udpnPeerRate: string;
  udpnPeerAddr: string;
  state: string;
  Operate:string
}
const ROW_DATA:UserData[]=[
  {udpnPeerName:'123',udpnPeerNo:'12312',udpnPeerTitle:'3333',udpnPeerCurrencyType:'343242',udpnPeerRate:'12312',state:'312312',Operate:'123123',udpnPeerAddr:'213123'},
  {udpnPeerName:'123',udpnPeerNo:'12312',udpnPeerTitle:'3333',udpnPeerCurrencyType:'343242',udpnPeerRate:'12312',state:'312312',Operate:'123123',udpnPeerAddr:'213123'},
  {udpnPeerName:'123',udpnPeerNo:'12312',udpnPeerTitle:'3333',udpnPeerCurrencyType:'343242',udpnPeerRate:'12312',state:'312312',Operate:'123123',udpnPeerAddr:'213123'}
]
@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class NodeListComponent implements AfterViewInit  {
  listSubscription: Subscription;
  loginLoading = false;
  displayedColumns: string[] = ['Name', 'Number', 'NodeTitle', 'Currency','Rate','Address','Status','Operate'];
  // set from
  filedData:any[] = [
    {name:'udpnPeerName',type:'input',tag:'Name'},
    {name:'udpnPeerNo',type:'input',tag:'Number'},
    {name:'udpnPeerTitle',type:'input',tag:'NodeTitle'},
    {name:'udpnPeerCurrencyType',type:'select',tag:'Currency',option:[
      {label:'USDT',val:'1'},
      {label:'USDC',val:'2'}
    ]},
    {name:'udpnPeerRate',type:'select',tag:'Rate'},
    {name:'udpnPeerAddr',type:'input',tag:'Address'},
    {name:'state',type:'select',tag:'Status'}
  ]
  // dataSource: MatTableDataSource<UserData>;
  dataSource = new MatTableDataSource<UserData>(ROW_DATA);
  expandedElement: UserData | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private nodeListService:NodeListService,
  ) {
  }
  getList(){
    this.listSubscription = this.nodeListService.list().pipe(finalize(() => this.loginLoading = false)).subscribe(
      data=>{
        this.dataSource = new MatTableDataSource(data.data) 
        this.dataSource.paginator = this.paginator;    
        this.dataSource.sort = this.sort;        
      },
      error=>{
        console.log(error);        
      }      
    )
  }

  ngAfterViewInit() {
    // this.getList() 
    this.dataSource.paginator = this.paginator;    
    this.dataSource.sort = this.sort;    
  }

    openDialog(){     
      const dialogRef = this.dialog.open(AddComponent,{width:'35%'});
      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      });
    }
    del(event){
      event.stopPropagation();
    }
    onSearch(e){
      console.log(e);
      
    }
}

