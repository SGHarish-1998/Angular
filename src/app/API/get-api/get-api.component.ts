import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { IDepartment } from '../../Models/model';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule ],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:IDepartment[] = [];

  constructor(private department:DepartmentService)
  {
  
  }

  clickAPI()
  {
    this.department.getAllDepartment().subscribe((result:any)=>{
      this.userList = result.data;
    }); 
  }



}
