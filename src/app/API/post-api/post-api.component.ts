import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-post-api',
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

    departmentList:any[] = [];

    deparmentRow:any = {
      departmentId:0,
      departmentName:"",
      departmentLogo:""
    };
   
    constructor(private deptService:DepartmentService)
    {

    }
   ngOnInit(): void {
      this.deptService.getAllDepartment().subscribe((result:any)=>{
        this.departmentList = result.data;
      });
   }


   onSummitForm()
   {
    this.deptService.addDepartment(this.deparmentRow).subscribe((result:any)=>{
      if(result.result)
      {
        alert('Table get updated');
        this.deptService.getAllDepartment().subscribe((result:any)=>{
          this.departmentList = result.data;
        });
      }
      else{
        alert(result.message);
      }
    });
   }

  

}
