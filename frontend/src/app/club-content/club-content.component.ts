import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DisplayDataComponent } from '../display-data/display-data.component';
import { FlipCardComponent } from '../flip-card/flip-card.component';
import { NgFor, NgIf } from '@angular/common';
import { ClubService } from '../services/club.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-club-content',
  standalone: true,
  imports: [
    CardComponent,
    DisplayDataComponent,
    FlipCardComponent,
    NgFor,
    NgIf,
    RouterModule,
  ],
  templateUrl: './club-content.component.html',
  styleUrl: './club-content.component.css',
})
export class ClubContentComponent {
  clubs: any[] = [];
  constructor(private clubService: ClubService) {}

  ngOnInit() {
    this.clubService.getClubs().subscribe((response) => {
      this.clubs = response;
      console.log(this.clubs);

      this.clubs.forEach((club: any) => {
        if (club.faculty_names) {
          club.facultyArray = Object.entries(club.faculty_names);
        }
        if (club.heads) {
          club.headsArray = Object.entries(club.heads);
        }
      });
    });
  }
}
