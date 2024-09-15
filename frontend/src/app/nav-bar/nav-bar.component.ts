import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgIf, NgFor } from '@angular/common';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, NgFor],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  clubs: any[] = [];
  constructor(
    private navbarService: AuthService,
    private clubService: ClubService
  ) {}

  ngOnInit() {
    this.navbarService.isAuthenticated$.subscribe((authStatus: boolean) => {
      this.isAuthenticated = authStatus;
    });

    this.navbarService.isAdmin$.subscribe((adminStatus: boolean) => {
      this.isAdmin = adminStatus;
    });

    this.clubService.getClubs().subscribe((response) => {
      this.clubs = response;
    });
  }
  onLogout() {
    this.navbarService.makeLogout();

    localStorage.removeItem('authToken');
  }
}
