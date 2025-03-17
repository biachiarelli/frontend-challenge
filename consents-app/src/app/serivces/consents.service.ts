import { Injectable } from '@angular/core';
import { Consent } from '../models/consent.model';

@Injectable({
  providedIn: 'root'
})
export class ConsentsService {
  private consents: Consent[] = [];
  private idCounter = 1;

  get(url: string, callback: (response: any) => void): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = () => {
      callback(JSON.stringify(this.consents)); 
    };
    
    xhr.send();
  }

  post(url: string, data: any, callback: (response: any) => void): void {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      const newUser = { ...data, id: this.idCounter++ };
      this.consents.push(newUser);
      callback(JSON.stringify(newUser));
    };
    
    xhr.send(JSON.stringify(data));
  }
}
