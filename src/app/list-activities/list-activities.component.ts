import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {

  activities:Activity[];
  displayedColumns: string[] = ['name', 'status', 'dateEstimatedTimeExecution', 'owner','actions'];

  constructor(private activityService:ActivityService, private router:Router) { }
 
  ngOnInit(): void {
    this.getAllActivities();
  }

  private getAllActivities(){
    this.activityService.getAllActivities().subscribe(data =>{
      this.activities = data;
    });
  }

  updateActivity(activityId:number){
    this.router.navigate(['update-activity',activityId]);
  }

  deleteActivity(activityId:number){
    swal({
      title: 'Are you sure?',
      text: "Confirm if you want to delete the activity",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it',
      cancelButtonText: 'No, cancel',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.activityService.deleteActivity(activityId).subscribe(data => {
          console.log(data);
          this.getAllActivities();
          swal(
            'Activity deleted',
            'The activity has been successfully deleted',
            'success'
          )
        })
      }
    })
  }

  detailActivity(activityId:number){
    this.router.navigate(['detail-activity',activityId]);
  }


}
