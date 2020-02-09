import { Component, OnInit } from '@angular/core';
import { MemesApiService } from '../../services/memes-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meme-view',
  templateUrl: './meme-view.component.html',
  styleUrls: ['./meme-view.component.css']
})
export class MemeViewComponent implements OnInit {
  memes: Observable<any[]>;
  constructor(private memeApi: MemesApiService) { }
  getImages(page) {
    this.memeApi.getImages(page).subscribe( x => this.memes = x);
  }
  ngOnInit(): void {
    this.getImages(1);
  }

}
