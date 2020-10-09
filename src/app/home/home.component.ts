import { Component, OnInit } from '@angular/core';
import { AuthService } from '../data-services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = '药品说明书维护与管理';
  isAuthenticated: boolean;

  constructor(public authService: AuthService) {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    //this.isAuthenticated = await this.authService.checkAuthenticated();
    this.isAuthenticated = true;
  }

  logout() {
    this.authService.logout('/');
  }
}
