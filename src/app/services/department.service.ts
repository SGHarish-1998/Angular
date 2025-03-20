import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../Models/model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  //so service is like reusable class like utils in C# to reduce the redudant code of ttp and so we make the components class as light weight.

  constructor(private http:HttpClient) { }

  getAllDepartment():Observable<IDepartment[]>
  {
    //no need for subscribe just return the observable only.
    return this.http.get<IDepartment[]>("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment");
  }

  addDepartment(data:IDepartment)
  {
    return this.http.post<IDepartment[]>("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",data);
  }

  updateDepartment(data:IDepartment)
  {
    return this.http.post<IDepartment[]>("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",data);
  }
  
  deleteDepartment(id:number)
  {
    return this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id);
  }
}
