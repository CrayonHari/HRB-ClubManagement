import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-member',
  standalone: true,
  imports: [],
  templateUrl: './single-member.component.html',
  styleUrl: './single-member.component.css',
})
export class SingleMemberComponent {
  isFlipped: boolean = false;
  @Input() name: string = '';
  @Input() rollno: string = '';
}
