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
    const paper = Raphael('canvas', 1280, 980);


    paper.setStart();
    const title = paper.text(18, 20, 'Home')
      .attr({
        'font-size': '14px',
        cursor: 'pointer'
      });
    const boardBackground = paper.rect(0, 40, 1280, 980)
      .attr({
        fill: '#FFF',
        stroke: 'none',
        'stroke-width': 1
      });

    const board = paper.setFinish();
    board
      .mousemove((e) => {
        console.log(e)
      })
      // .drag(() => {

      // })
      .hover(() => { }, () => {

      })
      .click(() => {
        boardBackground.attr({
          stroke: 'blue'
        });
      });
  }


}
