import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class SensorService {
    static get parameters() {
        return [[Http]];
    }

    constructor(private http: Http) {
    }

    getSensors() {
      var url = 'https://sensor.deltacity.org/api/readings/sensors';
      var response = this.http.get(url).map(res => res.json());
      return response;
    }

    getLatest(sensor_id) {
      var url = 'https://sensor.deltacity.org/api/readings/latest?sensor_id=' + sensor_id;
      var response = this.http.get(url).map(res => res.json());
      return response;
    }

    getRecent(sensor_id) {
      var url = 'https://sensor.deltacity.org/api/readings/recent?sensor_id=' + sensor_id;
      var response = this.http.get(url).map(res => res.json());
      return response;
    }

}
