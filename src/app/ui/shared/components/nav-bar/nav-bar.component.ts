import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Observable, map, of } from 'rxjs';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'orix-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', './nav-bar-desktop.component.scss']
})
export class NavBarComponent implements OnInit {
  cartIcon: IconDefinition = faShoppingCart
  screenSize: number = window.screen.width;
  userStatus!: boolean;
  userRole!: string;

  @Input() currentPage!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertsService: AlertsService
  ) {}

  ngOnInit(): void {
    this.userStatus = this.authService.userIsAuthenticated() ? true : false;

    if (this.userStatus) {
      this.userRole = this.authService.getUserRole();
    }
  }

  logout(): void {
    if(!this.authService.userIsAuthenticated()) {
      this.alertsService.showSimpleAlert('You\'re not logged in', 'Done');
      this.userStatus = false;
    } else {
      this.authService.logout();
      this.alertsService.showSimpleAlert('Logged out successfully', 'Done');
      this.router.navigate(['/home']);
      this.userStatus = false;
    }
  }
}
