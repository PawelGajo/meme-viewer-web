import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemesApiService {

  constructor(private http: HttpClient) { }

  getImages( page: number) {
    return this.http.get<any>( `https://meme-viewer--pawelgajo.repl.co/page/${page}`);
  }
}
