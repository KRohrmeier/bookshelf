import { Component, OnInit } from '@angular/core';
import { Media } from '../../model/media';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  public media: Media;

  constructor() { }

  ngOnInit() {
    this.media = new Media
      ('A Stranger in Olondria', 'fantasy', 'novel', 'assets/Mistaken_Identity_crop.jpg', 5, 5)
  }

  toggleFavorite(event) {
    console.log(`Toggling favorite state of this book, ${event}.`);
    this.media.favorite = !this.media.favorite;
  }

}
