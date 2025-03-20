import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { IDepartment } from '../../Models/model';

@Component({
  selector: 'app-post-api',
  imports: [CommonModule,FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

    departmentList:IDepartment[] = [];

    deparmentRow:IDepartment = {
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


   onSummitForm(deptForm: NgForm)
   {
    this.deptService.addDepartment(this.deparmentRow).subscribe((result:any)=>{
      if(result.result)
      {
        alert('Table get updated');
        this.deptService.getAllDepartment().subscribe((result:any)=>{
          this.departmentList = result.data;
        });
        this.clearForm(deptForm);
      }
      else{
        alert(result.message);
      }
    });
   }

   clearForm(deptForm: NgForm) {
    if (deptForm) {
        deptForm.resetForm({
            departmentId: 0,
            departmentName: "",
            departmentLogo: ""
        });
    }
}
}
