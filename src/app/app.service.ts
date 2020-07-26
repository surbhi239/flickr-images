import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = 'https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=130c354ac8146e0973960f42a74a9cef&user_id=189430311%40N05&format=json&nojsoncallback=1';

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