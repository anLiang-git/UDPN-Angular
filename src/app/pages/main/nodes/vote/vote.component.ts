import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/common/utils/dialogs/confirm-dialog/confirm-dialog.component';


export interface VoteData{
  udpnPeerId:string,
  udpnPeerCode:string,
  udpnPeerName:string,
  udpnPeerCurrencyType:number,
  udpnPeerRate:number,
  udpnPeerAddr:string,
  voteStatus:number
}
const ROW_DATA:VoteData[]=[
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
  {udpnPeerId:'test1',udpnPeerCode:'fjklahjkdfhjkah',udpnPeerName:'tests',udpnPeerCurrencyType: 1,udpnPeerRate:0.89,udpnPeerAddr:'0x_123123jhdfksjajfkjasyhjkf',voteStatus:1},
]
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VoteComponent implements AfterViewInit {
  displayedColumns: string[] = ['ID', 'Number', 'Name', 'Currency','Rate','Address','Status'];
  dataSource = new MatTableDataSource<VoteData>(ROW_DATA);
  expandedElement: VoteData | null;
  code='';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,

  ) { }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  search(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm',
        body: 'Are you sure you want to delete this customer?'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('close');
      }
    });
  }
}
