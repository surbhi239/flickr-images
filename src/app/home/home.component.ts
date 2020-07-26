import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public photos = [];
  public pageSizeOptions = [30,60,90,120];
  public pageSize: number = 30;
  public page: number = 1;
  public rating;
  public photoId:number = 0;
  constructor(private appService: AppService, private router: Router) {
   }

  ngOnInit(): void {
    this.appService.getImages().subscribe(data =>{
      console.dir(data)
      this.photos = data['photos'].photo;
    })
    this.rating = this.appService.getReviewRating();
    this.photoId = this.appService.getPhotoId();
  }

  onClickPage(pageSize){
    this.pageSize = pageSize;
  }

  onClickImage(photo){
    this.appService.setPhoto(photo);
    this.router.navigateByUrl('/image-detail');
  }

  getColor(star){
      switch (star) {
        case 1:
          return '#F80000';
        case 2:
          return '#F87C00';
        case 3:
          return '#f7c100';
        case 4:
          return '#FFFF02';
        case 5:
          return '#00F802';
        case 6:
          return '#349327';
        case 7:
          return '#0000F8';
        case 8:
          return '#48007E';
        case 9:
          return  '#9000CD'
        case 10:
        return '#f709bf';
      }
  }

}
