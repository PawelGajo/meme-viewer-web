import { Component, OnInit } from '@angular/core';
import { MemesApiService } from '../../services/memes-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meme-view',
  templateUrl: './meme-view.component.html',
  styleUrls: ['./meme-view.component.css']
})
export class MemeViewComponent implements OnInit {
  memes: any = [];
  pageNumber = 1;
  fetchNewPage = true;
  constructor(private memeApi: MemesApiService) { }
  getImages(): void {
    this.memeApi.getImages(this.pageNumber).subscribe( x => {
      this.memes = [ ...this.memes, ...x.content];
      this.fetchNewPage = true;
    });
  }
  onScroll(): void {
    if ( !this.fetchNewPage) return; // preventing fetch new page if already fetching.
    this.pageNumber++;
    this.getImages();
  }
  ngOnInit(): void {
    this.getImages();
  }

}
