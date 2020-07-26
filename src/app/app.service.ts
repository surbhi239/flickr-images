import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.imageURL;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public photo = [];
  photoId;
  public rating : number;
  constructor(
    private http: HttpClient
  ) {
  }

  getImages() {
    return this.http.get(URL);
  }
  setPhoto(photo){
    this.photo = photo;
  }
  getPhoto(){
    return this.photo;
  }
  setReviewRating(rating){
    this.rating = rating;
  }
  setPhotoId(photoId){
    this.photoId = photoId;
  }
  getReviewRating(){
    return this.rating;
  }
  getPhotoId(){
    return this.photoId;
  }
}