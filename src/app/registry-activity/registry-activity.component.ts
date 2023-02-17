import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Status } from '../status.enum';

interface StatusOption {
  text: string;
  value: Status;
}

@Component({
  selector: 'app-registry-activity',
  templateUrl: './registry-activity.component.html',
  styleUrls: ['./registry-activity.component.css']
})
export class RegistryActivityComponent {
  
  activity : Activity = new Activity();
  selected: Date | null;

  constructor(private activityService:ActivityService,private employeeService:EmployeeService,private router:Router) { }
  
  status: StatusOption[] = [];
  selectedStatus: Status;
  employees: Employee[];
  emnployee:Employee = new Employee();

  saveActivity(){
    swal({
      title: 'Are you sure?',
      text: "Confirm if you want to create the activity",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, create it',
      cancelButtonText: 'No, create',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.activityService.registryActivity(this.activity).subscribe(data =>{
          this.goListActivity();
          swal(
            'Activity created',
            'The activity has been successfully created',
            'success'
          )
        })
      }
    })
  }

  ngOnInit() {
    const status = Object.values(Status);
    this.status = status.map(status => ({
      text: status,
      value: status
    }));

    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  goListActivity(){
    this.router.navigate(['/activities']);
  }

  onSubmit(){
    this.saveActivity();
  }

}
