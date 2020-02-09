import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeViewComponent } from './components/meme-view/meme-view.component';
import { MemesApiService } from './services/memes-api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MemeViewComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MemeViewComponent
  ],
  providers: [
    MemesApiService
  ]
})
export class CoreModule { }
