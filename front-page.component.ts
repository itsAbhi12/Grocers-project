import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})

export class FrontPageComponent implements OnInit {
  user: User;

  constructor(private data:DataService, private router:Router) { }

  ngOnInit() {
    this.user=new User(0,"","","","");
  }
adduser()
{
  let formdata=new FormData();
  formdata.append("name",this.user.name);
  formdata.append("phone",this.user.phone);
  formdata.append("email",this.user.email);
  formdata.append("email",this.user.pass);
   
  this.data.addUser(this.user).subscribe(
    res=>
    {
    if(res.res=="Saved")
    {
     alert("Successfully added");
     this.router.navigate(['/user-list']);
    }
    }
  )
}
}
