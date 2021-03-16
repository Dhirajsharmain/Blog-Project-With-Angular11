import { Component, OnInit } from '@angular/core';
import { PostsData } from '../dataModals/posts';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private postInfo: PostsData) { }
  
  postDetail:[];

  ngOnInit(): void {
    this.postDetail = this.postInfo.postDetail;
    console.log(this.postDetail)
  }


}
