import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { SensorService} from '../../services/SensorService';

@Component({
  templateUrl: 'build/pages/sensor/sensor.html',
  providers: [SensorService]
})
export class SensorPage {

  latest: {};
  title: any;

  constructor(public navCtrl: NavController, private sensorService: SensorService, private params: NavParams) {
    this.title = params.get('sensor_id');
    this.doUpdate(this.title);
  }

  doUpdate(title) {
    this.sensorService.getLatest(title).subscribe(
      data => {
        this.latest = data;
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('Got ' + title)
    );
  }

  doRefresh(refresher) {

    this.doUpdate(this.title);

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
}
