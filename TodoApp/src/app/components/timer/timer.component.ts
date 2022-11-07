import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  minutes: number = 24;
  seconds: number = 59;
  isPaused: boolean = false;
  buttonLabel: String ='Pause';
  constructor() {
    this.reset();
    setInterval(() => this.tick(), 1000);
  }

  reset() {
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
  }

  private tick() {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';
      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.reset();
        }
      }
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }

  ngOnInit(): void {
  }

}
