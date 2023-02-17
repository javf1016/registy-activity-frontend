import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent {

  activityId:number;
  activity:Activity = new Activity();
  status: StatusOption[] = [];
  employees: Employee[];
  emnployee:Employee = new Employee();

  constructor(private employeeService:EmployeeService,private activityService:ActivityService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const status = Object.values(Status);
    this.status = status.map(stat => ({
      text: stat,
      value: stat
    }));

    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });

    this.activityId = this.route.snapshot.params['activityId'];
    this.activityService.getActivity(this.activityId).subscribe(data =>{
      this.activity = data;
      this.activity.employeeId = this.employees.find(employee => employee.employeeId === this.activity.employeeId.employeeId);
    },error => console.log(error));

  }

  goListActivities(){
    this.router.navigate(['/activities']);
    swal('Activity updated',`The activity ${this.activity.name} has been successfully updated`,`success`);
  }

  onSubmit(){
    this.activityService.updateActivity(this.activityId,this.activity).subscribe(data => {
      this.goListActivities();
    },error => console.log(error));
  }
}
