import { Component, OnInit } from '@angular/core';
import {PostInterface} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post:PostInterface

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private postService:PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state?.['post']
      if (!this.post) {
        this.postService.getById(id).subscribe(value => this.post = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
