import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { RegistryActivityComponent } from './registry-activity/registry-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';

const routes: Routes = [
  {path : '',redirectTo:'activities',pathMatch:'full'},
  {path : 'update-activity/:activityId',component:UpdateActivityComponent},
  {path : 'detail-activity/:activityId',component:DetailActivityComponent},
  {path : 'activities',component:ListActivitiesComponent},
  {path : 'registry-activity',component:RegistryActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

