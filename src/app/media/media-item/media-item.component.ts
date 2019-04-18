import { Component, OnInit } from '@angular/core';
import { Media } from '../../model/media';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  public media: Media;
  public addOrRemoveFavorite: string;

  constructor() { }

  ngOnInit() {
    this.media = new Media
      ('A Stranger in Olondria'
      , 'fantasy'
      , 'novel'
      , 'assets/Mistaken_Identity_crop.jpg'
      , 5
      , 5
      , false);
      this.addOrRemoveFavorite = "Add to Favorites?";
  }

  toggleFavorite(event) {
    this.media.isFavorite = !this.media.isFavorite;
    if(this.media.isFavorite) {
      this.addOrRemoveFavorite = "Remove from Favorites?";
    } else {
      this.addOrRemoveFavorite = "Add to Favorites?";
    }
  }

}
