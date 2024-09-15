import { Component, Input } from '@angular/core';
import { FlipCardComponent } from '../flip-card/flip-card.component';
import { SingleMemberComponent } from '../single-member/single-member.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [FlipCardComponent, SingleMemberComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent {
  @Input() name: string = '';
  @Input() rollno: string = '';
}
