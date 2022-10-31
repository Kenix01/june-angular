import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {UserInterface} from "../../interfaces";
import {urls} from '../../configs';
import {UserService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:UserInterface[];
  selectedUser:UserInterface;

  constructor(private userService:UserService) { }


  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUser(user: UserInterface) {
  this.selectedUser = user
  }
}
