import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PostInterface} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) {

  }

  getAll():Observable<PostInterface[]>{
    return this.httpClient.get<PostInterface[]>(urls.posts)
  }

  getById(id: number):Observable<PostInterface>{
    return this.httpClient.get<PostInterface>(`${urls.posts}/${id}`)
  }
}
