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
  Name: string;
  Number: string;
  NodeTitle: string;
  Currency: string;
  Rate: string;
  Address: string;
  Status: string;
  Operate:string
}

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
  dataSource: MatTableDataSource<UserData>;
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
    this.getList() 
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //       if (this.dataSource.paginator) {
  //       this.dataSource.paginator.firstPage();
  //       }
  //   }
    
    openDialog(){
      const dialogRef = this.dialog.open(AddComponent,{width:'35%'});
      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      });
    }
    del(event){
      event.stopPropagation();
    }
}

