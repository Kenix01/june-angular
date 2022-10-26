import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {UserInterface} from "../interfaces";
import { urls } from '../configs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {

  }

  getAll():Observable<UserInterface[]>{
    return this.httpClient.get<UserInterface[]>(urls.users)
  }
}
