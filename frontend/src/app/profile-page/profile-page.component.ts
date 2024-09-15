import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  user: any = [];
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.profileService.profileInfo().subscribe((response) => {
      this.user = response;
      console.log(this.user);
    });
  }

  makeChanges() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const rollno = (document.getElementById('rollno') as HTMLInputElement)
      .value;

    this.profileService
      .updateInfo(name, rollno, email)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
