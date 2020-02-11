import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <div class = "container-fluid">
      <app-nav></app-nav>
      <app-meme-view></app-meme-view>
    </div>
  `,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
