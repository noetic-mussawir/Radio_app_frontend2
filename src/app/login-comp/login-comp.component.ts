import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { LoginCred } from '../login-cred';
import { LoginService } from '../login.service';
import { DetailsPopupComponent } from '../warn-popup/details-popup.component';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  logincred:LoginCred = new LoginCred();
  
  constructor(private dialog: MatDialog,private login:LoginService, private router:Router) { }

  ngOnInit(): void {
    
  }
  verifyLogin(){

    console.log("{'Username': '" +this.logincred.username+"', "+"'Password': '"+this.logincred.password+"'}");
   if((this.logincred.username!=''&&this.logincred.password!='')&&(this.logincred.username!=null &&this.logincred.password!=null)){
      this.login.generateToken(this.logincred).subscribe(
(response:any)=>{
  //success
console.log(response.token);
this.login.loginUser(response.token)
window.location.href="/livesms"
},
error=>{
  //error
console.log(error);
this.dialog.open(AlertComponent);
}

      )
    
    //this.router.navigate(['/livesms']);

    }
   
    
  }
  
}
