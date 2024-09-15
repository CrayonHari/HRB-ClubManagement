import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css',
})
export class FlipCardComponent {
  isFlipped: boolean = false;
  @Input() frontText: string = 'Position';
  @Input() backText: string = 'Name';
}
