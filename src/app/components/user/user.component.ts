import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {UserInterface} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user:UserInterface;

  @Output()
  liftUser = new EventEmitter<UserInterface>()

  constructor() { }

  ngOnInit(): void {
  }

  lift():void {
  this.liftUser.emit(this.user)
  }
}
