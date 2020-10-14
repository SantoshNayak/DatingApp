import { User } from './../_models/user';
import { Observable } from 'rxjs';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  loginModel : any = {

  }


  constructor(public accountService : AccountService) { }

  ngOnInit(): void {
  }

  

  logIn(){
    console.log(this.loginModel);
    this.accountService.login(this.loginModel).subscribe( response => {
      console.log(response);
    }, error =>{
      console.log(error);
      
    })
    
    
  }


  logOut(){
    this.accountService.logOut();

  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user => {
    }, error =>{
      console.log(error);
      
    })
  }
}
