import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model:any = {

  }
  constructor(private accountService : AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(data=>{
      console.log(data);
      
    }, error => {console.log(error),
      this.toastr.warning(error.error);

    }
    )
    console.log(this.model);
    
  }

  cancel(){
    console.log('cancel');
    this.cancelRegister.emit(false);
  }

}
