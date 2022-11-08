import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() seconds: number =25;
  intervalId: any;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number>=new EventEmitter();
  languageCode: string ='es';
  localizedLabelMap: any ={
    'en':'Time Left',
    'es': 'Tiempo Restante',
    'fr': 'Baggette',
    'other': 'Time Left'
  };
  constructor() {
    this.intervalId = setInterval(()=>this.tick(),1000);
   }

  ngOnInit(): void {
  }

  private tick(): void{
    if(--this.seconds<1){
      clearInterval(this.intervalId)
      this.complete.emit(null);
    }
    this.progress.emit(this.seconds);
  }

}
