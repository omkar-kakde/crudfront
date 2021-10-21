import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router,private user:ServiceService) { }

  ngOnInit(): void {
  }
  ranking:number;
  name:string;
  dob:Date;
  country:string;
  score:number;
  
  obj={
    ranking: 1,
    name:"",
    dob: new Date(),
    country:"",
    score:1 
  }

  cl(){
    this.router.navigateByUrl('/view');
  }

  add(){
    this.obj.ranking=this.ranking;
    this.obj.name=this.name;
    this.obj.dob=this.dob;
    this.obj.country=this.country;
    this.obj.score=this.score;
    this.user.createData(this.obj).subscribe(data=>{
      console.log(data);
      // this.crud=data;
    })
    location.reload();
    
  }
}
