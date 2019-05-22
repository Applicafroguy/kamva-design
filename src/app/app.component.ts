import { Component, AfterViewInit } from '@angular/core';
import * as Raphael from 'raphael';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  

  constructor() {
  }

  ngAfterViewInit() {
    const paper = Raphael('canvas', 4000, 4000);

    // Group Board with Label
    paper.setStart();

    // Create Board Background
    const boardBackground = paper.rect(4, 32, 1280, 980)
    .attr({
      fill: '#FFF',
      stroke: 'none',
      'stroke-width': 4
    });

    //boardBackground.

    // Create Label
    const boardLabel = paper.text(22, 20, 'Home')
      .attr({
        'font-size': '14px',
        cursor: 'pointer'
      });

    // Label
    boardLabel.mouseover(() => {
      boardBackground.glow({
        
      });
    })
    .mouseout(() => {
    //  boardBackground.glow();
    }).getBBox(true);

    // Get created Board + Label
    const board = paper.setFinish();


    // move board
    // boardLabel.drag((dx, dy, x, y, e) => {
    //   console.log(dx, dy, x, y, e);
    // }, (x,y,e) => {
    //   console.log(x,y,e);
    // }, () => {
    //   console.log('Drag Ended');
    // })
  }


}
