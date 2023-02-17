import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css']
})
export class DetailActivityComponent {
  
  activityId:number;
  activity:Activity;
  constructor(private route:ActivatedRoute,private activityService:ActivityService) { }

  ngOnInit(): void {
    this.activityId = this.route.snapshot.params['activityId'];
    this.activity = new Activity();
    this.activityService.getActivity(this.activityId).subscribe(data => {
      this.activity = data;
      swal(`Employee detail ${this.activity.name}`);
    });
  }
}