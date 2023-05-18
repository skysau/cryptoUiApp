import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isCollapsed = true;
  constructor(private router:Router){

  }
  onLogOut(){
    this.router.navigateByUrl('/log-in');
  }
  collaspse(){
    this.isCollapsed=!this.isCollapsed
  }
}
