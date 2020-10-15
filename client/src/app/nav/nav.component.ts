import { User } from './../_models/user';
import { Observable } from 'rxjs';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  loginModel : any = {

  }


  constructor(public accountService : AccountService, 
    private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  

  logIn(){
    console.log(this.loginModel);
    this.accountService.login(this.loginModel).subscribe( response => {
      console.log(response);
      this.router.navigateByUrl('/members');

    }, error =>{
      console.log(error);
      this.toastr.warning(error.error);
      
    })
    
    
  }


  logOut(){
    this.accountService.logOut();
    this.router.navigateByUrl('/');


  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user => {
    }, error =>{
      console.log(error);
      
    })
  }
}
