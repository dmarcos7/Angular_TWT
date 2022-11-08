import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

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
  timeout: number = 24;
  languageCode: string ='es';
  localizedLabelMap: any ={
    'en':'Start Timer',
    'es': 'Comenzar temporizador',
    'fr': 'Demarrer une sequence',
    'other': 'Start Timer'
  };

  localizedLabelMap2: any ={
    'en':'Pause Timer',
    'es': 'Parar temporizador',
    'fr': 'Baggette une sequence',
    'other': 'Pause Timer'
  };
  constructor(private settingsService: SettingsService) {
    this.reset();
    this.timeout = this.settingsService.timerTimeOut;
    setInterval(() => this.tick(), 1000);
  }

  reset() {
    this.minutes = this.settingsService.timerMinutes -1;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
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

  onCountdownCompleted(){
    alert('Time Up!!');
  }

}
