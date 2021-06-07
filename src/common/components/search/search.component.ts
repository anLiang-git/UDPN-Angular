import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Option{
  val:string,
  label:string
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() filedData:any[];
  @Output()  toParent= new EventEmitter();

    // set from
    selectedValue:string;
    serchIndex:string;
    serchFrom:object={};
    serchName:string;
    serchModel:string;
    serchType:string;
    serchOption:Option[];
    serchMat:object[]=[];
    displayedColumns_filed_disabled:any[]=[];
    displayedColumns_filed:any[];
    // displayedColumns_filed:any[] = [
    //   {name:'udpnPeerName',type:'input',tag:'Name'},
    //   {name:'udpnPeerNo',type:'input',tag:'Number'},
    //   {name:'udpnPeerTitle',type:'input',tag:'NodeTitle'},
    //   {name:'udpnPeerCurrencyType',type:'select',tag:'Currency',option:[
    //     {label:'USDT',val:'1'},
    //     {label:'USDC',val:'2'}
    //   ]},
    //   {name:'udpnPeerRate',type:'select',tag:'Rate'},
    //   {name:'udpnPeerAddr',type:'input',tag:'Address'},
    //   {name:'state',type:'select',tag:'Status'}
    // ]
  constructor() { }
  returnData () {
      this.toParent.emit(this.serchFrom)
  } 
  ngOnInit() {
    this.displayedColumns_filed = this.filedData 
  }

  onDel(i:number,index:number){
    console.log(index);
    
    this.serchFrom[this.displayedColumns_filed[index].name] = '';
    this.displayedColumns_filed_disabled.splice(this.displayedColumns_filed_disabled.indexOf(i),1)   
    this.serchMat.splice(this.serchMat.indexOf(this.serchMat[i]),1) 
    if(this.serchMat.length===0 || this.displayedColumns_filed_disabled.length===0){
      this.serchFrom={}
      this.selectedValue = '99'
    }   
  }
  onBlur(event){
    if(event.target.value === '') return
    if(this.displayedColumns_filed_disabled.includes(this.serchIndex)){      
      this.serchMat.splice(this.serchMat.indexOf(this.serchMat[this.serchIndex]),1) 
    }

    this.serchMat.push({
      name:this.serchName,
      val:this.serchFrom[this.serchModel],
      index:this.serchIndex
    })
    this.displayedColumns_filed_disabled.push(this.serchIndex)
    
  }

  onFiledItemChange(event){
    let vas;
    for (let i=0;i<this.serchOption.length;i++){ 
      if(this.serchOption[i].val === event.value){
        vas = this.serchOption[i].label;
        
      } 
    }    
    if(event.value === '99') return
    this.serchMat.push({
      name:this.serchName,
      val:vas,
      index:this.serchIndex
    })
    this.serchFrom[this.serchModel] = event.value
    this.displayedColumns_filed_disabled.push(this.serchIndex)
  }

  onFiledChange(event){
    
    if(event.value === '99'){
      this.serchFrom={}
      this.serchMat=[];
      this.displayedColumns_filed_disabled = [];
      this.selectedValue = event.value
      return
    } 
    this.serchIndex = event.value;
    
    this.serchFrom[this.displayedColumns_filed[event.value].name] = '';
    this.serchModel = this.displayedColumns_filed[event.value].name;
    this.serchName = this.displayedColumns_filed[event.value].tag;
    // Change form field type
    if(this.displayedColumns_filed[event.value].type === 'input'){
      this.serchType='input'
    }else{
      this.serchOption = this.displayedColumns_filed[event.value].option
      this.serchType='select'
    }
    // console.log(this.serchFrom);  
  }

}
