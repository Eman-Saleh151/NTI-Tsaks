import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
 posts=[
  {
    title : " post title 1 ",
    body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis!"
  },
  {
    title : " post title 2 ",
    body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis!"
  },
  {
    title : " post title 3 ",
    body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis!"
  },
  {
    title : " post title 4 ",
    body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis!"
  }
]
}
