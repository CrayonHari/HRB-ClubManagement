import { Component, Input } from '@angular/core';
import { FlipCardComponent } from '../flip-card/flip-card.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ClubService } from '../services/club.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [
    FlipCardComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgFor,
  ],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css',
})
export class DisplayDataComponent {
  @Input() description: string = '';
  @Input() club_name: string = '';
  @Input() facultyArray: any[] = [];
  @Input() headsArray: any[] = [];
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
}
