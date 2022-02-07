import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Sms } from '../sms';
import { SmsFilter } from '../sms-filter';
import { DetailsPopupComponent } from '../warn-popup/details-popup.component';
import { DynamDateService } from '../dynam-date.service';
import { DatePipe } from '@angular/common';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';






// interface messageIn{
//   sms_id:number;
// msisdn:String;
// shortcode:String;
// keyword:String;
// sms:String;
// sms_date:DatePipe;
// sms_time:String;
// channel_id:String;
// }


@Component({
  selector: 'app-live-messages',
  templateUrl: './live-messages.component.html',
  styleUrls: ['./live-messages.component.css']
})
export class LiveMessagesComponent implements OnInit{
 
  smsdata:Sms[]=[];

  filtersms:SmsFilter= new SmsFilter();
  
  flag:boolean = true;
  date: Date | undefined;
  

  
  
  

constructor(private datehelper: DynamDateService, private dialog: MatDialog, private dataservice:LoginService,public datepipe: DatePipe) { }
searchbox:any;



//myFunction(){
  // this.date=new Date();
  // let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  //this.datepipe.transform(this.sms, 'dd/MM/yyyy')
// }

//start time interval
timeInterval(){
  setInterval(() => {  
  this.NodesmsinRow();
  console.log('Called after 5 secs')
  }, 5000);


}
onReload(){
  this.smsInRow();
}
//end time interval


//ngOnInint
  ngOnInit(): void {
   // console.log("")
   
   //this.smsInRow();
   //this.NodesmsinRow();
   this.smsInRow();
   this.timeInterval(); 
    
    
}
//ngOnInint end

  //onSubmit 
  onSubmit(){
    this.dataservice.filter(this.filtersms.shortcode,this.filtersms.keyword,this.filtersms.date_Start, this.filtersms.date_End, this.filtersms.msisdn).subscribe(
      (res:any)=>{
        this.smsdata = res;
        console.log(' New res'+res)},
      (err)=>{console.log(err)}
    )
}
//onSubmit end


//logout start
logout(){
this.dialog.open(DetailsPopupComponent);
}

//logout end


Onsearch(){
  console.log(this.searchbox);
}


//smsInRow start
smsInRow(){
this.dataservice.getAllSms().subscribe(
(data:any) =>{ 
this.smsdata = data;
console.log(this.smsdata);
});


}

//smsInRow end

NodesmsinRow(){
  
this.dataservice.getNodeSms().subscribe(
  (data:any)=>{
    if(data.length != 0){
console.log(data.length);
      for(let i=0;i<data.length;i++){
        this.smsdata.push(data[i]);
        console.log("data added"+data[i]);
      }
        // console.log("CHANGE DETECTED")
        // this.smsdata.push(data[0]);
        // console.log(data);
        // this.smsInRow();
    }
    if(data.length == 0){
      
      
      console.log("NO CHANGE DETECTED");
      return;
    }
  }
)  
}

}




