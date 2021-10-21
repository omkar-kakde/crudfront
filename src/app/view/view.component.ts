import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data:any;
  del:any;
  constructor(private router: Router,private user:ServiceService) { 
    this.user.getData().subscribe(data=>{
    
      this.data=data;
    })
  }

  ngOnInit(): void {
  }

cl(){
  this.router.navigateByUrl('/add');
  }


  
  delete(id:any){
    this.del=id;
    console.log(this.del);
    
    this.user.deleteData(this.del).subscribe(data=>{
           
            location.reload();
           })
  }

}
