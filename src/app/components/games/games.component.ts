import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = ''
  @Output() addfavoriteEvent = new EventEmitter<string>()

  fav(gameName: string) {
    this.addfavoriteEvent.emit(gameName)
  }
  games = [
    { id: 1, name: 'Uncharted 4' },
    { id: 3, name: 'The last of us' },
    { id: 4, name: 'Horizon Zero Dawn' },
  ]

}
