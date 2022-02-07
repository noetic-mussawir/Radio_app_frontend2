import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<AlertComponent>) { }

  ngOnInit(): void {
  }
  onCloseClick(){
    this.matDialogRef.close();
    }
}
