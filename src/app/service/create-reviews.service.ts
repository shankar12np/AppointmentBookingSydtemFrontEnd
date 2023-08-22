import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

class Reviews {
}

@Injectable({
  providedIn: 'root'
})
export class CreateReviewsService {
baseUrl : string = 'http://localhost:8080/reviews';

  constructor(private Http : HttpClient) { }


  createReviews(reviews: Reviews):Observable<any>{
    // @ts-ignore
    return this.Http.post<any>(this.baseUrl, reviews, {responseType: "text"});
  }

  getAllReviews(): Observable<Reviews[]> {
    console.log("Get All Reviews called");
    return this.Http.get<Reviews[]>(this.baseUrl + '/get-reviews' );
  }

  // Add a function to like a review by ID
  likeReview(reviewId: number): Observable<any> {
    return this.Http.post<any>(this.baseUrl + '/' + reviewId + '/like', {});
  }

  // Add a function to get the review count
  getReviewCount(reviewId: number): Observable<number> {
    return this.Http.get<number>(this.baseUrl + '/' + reviewId + '/count');
  }

  // dislikeReview(id) {
  //
  // }
}
