import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity Management';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  routes: any[] = [
    {
      name: 'Activities',
      router: ['activities']
    },
    {
      name: 'Registry Activity',
      router: ['registry-activity']
    },
    {
      name: 'Login',
      router: ['login']
    },
    {
      name: 'Generacion Turnos',
      router: ['generacion-turnos']
    }

  ]

  ngOnInit(): void {
    this.router.navigate(['activities']);
  }

}
