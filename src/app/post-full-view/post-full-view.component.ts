import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsData } from '../dataModals/posts';

@Component({
  selector: 'app-post-full-view',
  templateUrl: './post-full-view.component.html',
  styleUrls: ['./post-full-view.component.css']
})
export class PostFullViewComponent implements OnInit {

  constructor(
    private postFullInfo: PostsData,
    private _activatedRoute:ActivatedRoute ) { }
  
  postFullDetail:[];
  selectedPost;
  postId;

  ngOnInit(): void {
    this.postFullDetail = this.postFullInfo.postDetail;

    this._activatedRoute.params.subscribe((params:Params)=>{
      this.postId = params['id'];
      console.log(this.postId);
      this.selectedPost = this.postFullInfo.postDetail[this.postId-1];
    })
  }

}
