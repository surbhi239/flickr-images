import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Review } from '../review';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  review = new FormGroup({
    rating : new FormControl(''),
    ratedBy : new FormControl(''),
    reasonForRating : new FormControl('')
  });

  public photo;
  public stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public selectedValue : number;
  public reviews = [];
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.photo = this.appService.getPhoto();
    console.log(this.photo);
  }

  public countStar(star) {
    this.selectedValue = star;
    this.review.patchValue({rating: this.selectedValue});
  }
  reviewAdded(){
    this.reviews.push(this.review.value);
    this.appService.setReviewRating(this.review.value.rating);
    this.appService.setPhotoId(this.photo.id);
    this.router.navigateByUrl('/home');
  }
}
