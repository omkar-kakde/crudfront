import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="http://localhost:3000/getMens";
    return this.http.get(url);
  }



  deleteData(id){
    let url = `http://localhost:3000/deleteMens/${id}`
    return this.http.delete(url);
  }

  // deleteData(id){
  //   let url = `http://localhost:5000/delete/${id}`
  //   return this.http.delete(url);
  // }

  createData(user){
    let url = `http://localhost:3000/mens/`
    return this.http.post(url, user);
  }

  getDataById(id){
    let url=`http://localhost:3000/getMens/${id}`;
    return this.http.get(url);
  }
  
  updateData(obj){
    let url=`http://localhost:3000/updateMens/${obj._id}`;
    return this.http.patch(url,obj);
  }


}
