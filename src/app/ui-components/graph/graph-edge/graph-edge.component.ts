import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-graph-edge',
  templateUrl: './graph-edge.component.html',
  styleUrls: ['./graph-edge.component.scss']
})
export class GraphEdgeComponent implements OnInit {

  @Input() edge;
  @ViewChild('canvas') canvas: ElementRef;

  constructor() { }

  getTop(): number{
    // return smallest y value
    return Math.min(this.edge.outputPosition.y, this.edge.inputPosition.y);
  }	


  getLeft(): number{
    // return smallest x value
    return Math.min(this.edge.outputPosition.x, this.edge.inputPosition.x);//this.edge.outputPosition[0];
  }

  getWidth(): number{
  	return Math.abs(this.edge.inputPosition.x - this.edge.outputPosition.x);//this.edge.outputPosition[0];
  }

  getHeight(): number{
    return Math.abs(this.edge.inputPosition.y - this.edge.outputPosition.y);
  }

  getPosition(edge): string{
  	return JSON.stringify(edge);
  }

  edgeClicked(): void{
    alert("edge clicked");
  }

  drawEdge(): void{
        let canvas: HTMLCanvasElement = this.canvas.nativeElement;
        let context  = canvas.getContext('2d');

        canvas.width = this.getWidth();
        canvas.height = this.getHeight();

        context.clearRect(0, 0, canvas.width, canvas.height);

        let left_point = this.edge.outputPosition.x <= this.edge.inputPosition.x ? this.edge.outputPosition : this.edge.inputPosition;
        let right_point = this.edge.outputPosition.x > this.edge.inputPosition.x ? this.edge.outputPosition : this.edge.inputPosition;

        let startPoint: number[] = [0, this.getHeight()];
        let endPoint:  number[] = [this.getWidth(), 0];

        if(left_point.y < right_point.y){

            //
            //    sp---
            //    |   |
            //    |__ep
            //

            startPoint = [0, 0];
            endPoint = [ this.getWidth(), this.getHeight() ]
        }
        else{
            //    __ep
            //   |    |
            //   |    |
            //    sp---
            //    
            //
            
        }

        // move downwards/upwards in straight line
        let translate: number = 10; 
        let shifted_startPoint: number[] = [ startPoint[0]  + translate, startPoint[1] ];
        let shifted_endPoint: number[] = [ startPoint[0]  - translate, startPoint[1] ];

        // compute curvy line
        var x0 = startPoint[0] + translate;
        var y0 = startPoint[1] ;
        var x3 =  endPoint[0] - translate;
        var y3 = endPoint[1] ;
    
        var mx1=0.75*x0+0.25*x3;
        var mx2=0.25*x0+0.75*x3;

        var my1=0.75*y0+0.25*y3;
        var my2=0.25*y0+0.75*y3;

        var distance = 0.25*Math.round(Math.sqrt(Math.pow((x3-x0),2)+Math.pow((y3-y0),2)));
        var pSlope =(x0-x3)/(y3-y0);
        var multi = Math.round(Math.sqrt(distance*distance/(1+(pSlope*pSlope))));
    
        var x1,y1,x2,y2=0;
    
        x1 =mx1+multi;
        x2 =mx2-multi;
    
        if(y0==y3){
          y1=y0+distance;
          y2=y0-distance;
        }
        else{
          y1 =my1+(pSlope*multi);
          y2 =my2-(pSlope*multi);
        }

        context.beginPath();
        context.moveTo( startPoint[0], startPoint[1] );
        context.bezierCurveTo(x1, y1, x2, y2, endPoint[0], endPoint[1]);
        context.stroke();
  }

  ngOnInit() {
        let canvas: HTMLCanvasElement = this.canvas.nativeElement;
        let context  = canvas.getContext('2d');

        context.lineWidth = 3;
        context.strokeStyle = 'blue';

        this.drawEdge();
  }

  ngDoCheck(){
    this.drawEdge()
  }

}
