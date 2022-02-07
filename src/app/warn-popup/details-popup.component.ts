import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.css']
})
export class DetailsPopupComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<DetailsPopupComponent>, private loginService:LoginService) { }

  ngOnInit(): void {
  }
  onCloseClick(){
    this.matDialogRef.close();
    }
    ngOnDestroy(){
      this.matDialogRef.close();
      }
      onLogout(){
       this.loginService.logout();
       window.location.href="/login"

      }
}
