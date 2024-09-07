import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrashService {

  constructor( private http: HttpClient) { }

  private API_CRASH = 'https://jritsqmet.github.io/web-api/crash.json'

  getCrash():Observable <any>{
    return this.http.get(this.API_CRASH)
  }
}
