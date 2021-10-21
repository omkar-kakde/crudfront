import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import {ActivatedRoute} from'@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
data;
link;
ranking:number;
name:string;
dob:Date;
country:string;
score:number;

  constructor(private router:Router, private user:ServiceService,private routerA: ActivatedRoute) {
    console.log(this.routerA.snapshot.params);
    this.link=this.routerA.snapshot.params;
    console.log(this.link.id);


    this.user.getDataById(this.link.id).subscribe(data=>{
    
      this.data=data;
    })
   }
   obj={
    _id:'',
    ranking: 1,
    name:"",
    dob: new Date(),
    country:"",
    score:1 
  }
  ngOnInit(): void {
   
  }

  cl(){
    this.router.navigateByUrl('/view');
  }
  
  update(){
    this.add(this.data);
    this.user.updateData(this.data).subscribe(data=>{
      console.log(data);
      
    })
  }
  add(data){
    this.obj._id=data._id;
    this.obj.ranking=data.ranking;
    this.obj.name=data.name;
    this.obj.dob=data.dob;
    this.obj.country=data.country;
    this.obj.score=data.score;
    // this.user.createData(this.obj).subscribe(data=>{
    //   console.log(data);
    //   // this.crud=data;
    // })
    console.log(this.obj);
    
   // location.reload();
  }

  

}
