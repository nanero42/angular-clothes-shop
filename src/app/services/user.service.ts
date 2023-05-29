import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  hasAccount$ = new BehaviorSubject(false);

  constructor() { }
}
