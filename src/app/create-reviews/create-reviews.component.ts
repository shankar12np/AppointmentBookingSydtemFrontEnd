import {Component, OnInit} from '@angular/core';
import {CreateReviewsService} from "../service/create-reviews.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Appointment} from "../appointment";
import {Reviews} from "../reviews";


@Component({
  selector: 'app-create-reviews',
  templateUrl: './create-reviews.component.html',
  styleUrls: ['./create-reviews.component.css']
})
export class CreateReviewsComponent implements OnInit{
  public createReviewsFrom!: FormGroup;
  public timestamp!: string;

  constructor(
    public createReviewsService : CreateReviewsService,
    public formBuilder : FormBuilder,
    public router : Router
  ) {
  }

  ngOnInit(): void {
    this.createReviewsFrom = this.formBuilder.group({
      text:'',
      name:'',
      email:'',
      likeCount:0,
      DislikeCount:0,

    });
  }
  // Increment the Like Count
  incrementLikeCount() {
    // @ts-ignore
    const currentLikeCount = this.createReviewsFrom.get('likeCount').value;
    this.createReviewsFrom.patchValue({ likeCount: currentLikeCount + 1 });
  }

  // Increment the Dislike Count
  incrementDislikeCount() {
    // @ts-ignore
    const currentDislikeCount = this.createReviewsFrom.get('dislikeCount').value;
    this.createReviewsFrom.patchValue({ dislikeCount: currentDislikeCount + 1 });
  }

  submitFrom(): void{
    console.log("Submit from called");
    this.timestamp = new Date().toLocaleString();
    const newReviews = new Reviews();
    newReviews.populateFromForm(this.createReviewsFrom.value);

    newReviews.dateAndTime = this.timestamp;

    this.createReviewsService.createReviews(newReviews).subscribe(
     response => {
        console.log("Review created", response);
        this.router.navigate(['/login']);
    },
      error => {
       console.error('error creating review:', error);
      }
    )


  }

}

