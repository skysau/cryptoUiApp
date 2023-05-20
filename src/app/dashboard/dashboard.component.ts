import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{
  isCollapsed = true;
  private URL = '../../assets/pakage.json';
  packageData:any
  constructor(private router:Router, private httpClient:HttpClient){

  }
  ngOnInit(): void {
    this.httpClient.get(this.URL).subscribe((res:any)=>{
      this.packageData = res.data;
      console.log(res);
    });
  }
  onLogOut(){
    this.router.navigateByUrl('/log-in');
  }
  collaspse(){
    this.isCollapsed=!this.isCollapsed
  }
}
