import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { ClubContentComponent } from './club-content/club-content.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { MemberListComponent } from './member-list/member-list.component';
import { SingleMemberComponent } from './single-member/single-member.component';
import { EventsConductedComponent } from './events-conducted/events-conducted.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    SignUpComponent,
    LogInComponent,
    HomePageComponent,
    CardComponent,
    DisplayDataComponent,
    ClubContentComponent,
    FlipCardComponent,
    MoreInfoComponent,
    MemberListComponent,
    SingleMemberComponent,
    EventsConductedComponent,
    ProfilePageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
