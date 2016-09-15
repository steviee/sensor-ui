import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SensorService} from '../../services/SensorService';
import { SensorPage } from '../sensor/sensor';
import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [SensorService]
})
export class HomePage {

  sensors: Array<any>;

  constructor(private navCtrl: NavController, private sensorService: SensorService, public loadingCtrl: LoadingController) {
    this.doUpdate();
  }

  doUpdate() {
    this.sensorService.getSensors().subscribe(
      data => {
        this.sensors = data;
        console.log(this.sensors);
      },
      err => {
        console.log(err);
      },
      () => console.log('Got sensors!')
    );
  }

  itemTapped(event, sensor_id) {
      console.log(sensor_id);
      this.navCtrl.push(SensorPage, {
          sensor_id: sensor_id
      });
  }

  doRefresh(refresher) {
    this.doUpdate();

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  presentLoading() {
   let loading = this.loadingCtrl.create({
     content: "Please wait...",
     duration: 3000,
     dismissOnPageChange: true
   });
   loading.present();
  }

}
