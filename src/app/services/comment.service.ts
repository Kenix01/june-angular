import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInterface} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(urls.comments)
  }

  getById(id: number):Observable<CommentInterface>{
    return this.httpClient.get<CommentInterface>(`${urls.comments}/${id}`)
  }
}
