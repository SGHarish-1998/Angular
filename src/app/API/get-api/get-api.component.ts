import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Component } from '@angular/core';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-get-api',
  imports: [HttpClientModule,CommonModule ],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:any[] = [];

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
