import { Employee } from "./employee";
import { Status } from "./status.enum";

export class Activity {
    activityId:number;
    name:string;
    description:string;
    status:Status;
    dateEstimatedTimeExecution:Date;
    dayDelay:number;
    employeeId:Employee;
}
