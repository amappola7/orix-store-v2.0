import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Observable, map, of } from 'rxjs';
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

  @Input() currentPage!: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userStatus = this.authService.userIsAuthenticated() ? true : false;
  }

  logout(): void {
    if(!this.authService.userIsAuthenticated()) {
      alert('You\'re not logged in');
    } else {
      this.authService.logout();
      alert('Logged out successfully');
      this.router.navigate(['/home']);
    }
  }
}
