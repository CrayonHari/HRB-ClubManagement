import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DisplayDataComponent } from '../display-data/display-data.component';
import { MemberListComponent } from '../member-list/member-list.component';
import { EventsConductedComponent } from '../events-conducted/events-conducted.component';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../services/club.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-more-info',
  standalone: true,
  imports: [
    CardComponent,
    DisplayDataComponent,
    MemberListComponent,
    EventsConductedComponent,
    NgFor,
  ],
  templateUrl: './more-info.component.html',
  styleUrl: './more-info.component.css',
})
export class MoreInfoComponent {
  club: any;
  member: any;

  constructor(
    private route: ActivatedRoute,
    private clubService: ClubService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clubService.getClubById(id).subscribe((club) => {
        this.club = club;
        club.facultyArray = Object.entries(this.club.faculty_names);
        club.headsArray = Object.entries(this.club.heads);
        this.clubService.getUsersByRollnos(club.members).subscribe((member) => {
          this.member = member;
          console.log(this.member);
        });
      });
    }
  }
}
