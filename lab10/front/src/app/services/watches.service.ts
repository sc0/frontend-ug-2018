import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchesService {

  constructor(private http: HttpClient) { }

  getWatches() {
    return this.http.get('http://localhost:8080/watches');
  }

  getWatch(watchId) {
    return this.http.get('http://localhost:8080/watch/' + watchId);
  }

  addWatch(watchData) {
    return this.http.post('http://localhost:8080/watch', watchData, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }
}
