import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeViewComponent } from './components/meme-view/meme-view.component';
import { MemesApiService } from './services/memes-api.service';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NavComponent } from './components/nav/nav.component';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [MemeViewComponent, NavComponent, ContainerComponent],
  imports: [
    InfiniteScrollModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ContainerComponent
  ],
  providers: [
    MemesApiService
  ]
})
export class CoreModule { }
