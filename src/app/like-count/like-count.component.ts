import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-like-count',
  templateUrl: './like-count.component.html',
  styleUrls: ['./like-count.component.css']
})
export class LikeCountComponent {
  // Input property to receive the initial like count
  @Input() likeCount: number = 0;

  // Method to increment the like count UI only ! backend needs works !
  incrementLikeCount() {
    this.likeCount++;
  }

  // Method to decrement the like count
  decrementLikeCount() {
    this.likeCount--;
  }

}
