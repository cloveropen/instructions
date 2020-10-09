import { Component } from '@angular/core';
import { AuthService } from './data-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '药品说明书维护与管理';
  isAuthenticated: boolean;

  constructor(public authService: AuthService) {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    //this.isAuthenticated = await this.authService.checkAuthenticated();
    this.isAuthenticated = false;
  }

  logout() {
    this.authService.logout('/');
  }
}
