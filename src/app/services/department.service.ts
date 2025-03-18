import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  //so service is like reusable class like utils in C# to reduce the redudant code of ttp and so we make the components class as light weight.

  constructor(private http:HttpClient) { }

  getAllDepartment()
  {
    //no need for subscribe just return the observable only.
    return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment");
  }

  addDepartment(data:any)
  {
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",data);
  }

  updateDepartment(data:any)
  {
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",data);
  }
  
  deleteDepartment(id:number)
  {
    return this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id);
  }
}
