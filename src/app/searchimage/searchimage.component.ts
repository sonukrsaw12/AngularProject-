import { Component, OnInit } from '@angular/core';
import { HitsEntity, SearchImgHistory } from '../Models/serachimage';
import { SearchImageService } from '../services/searchimage.service';

@Component({
  selector: 'app-searchimage',
  templateUrl: './searchimage.component.html',
  styleUrls: ['./searchimage.component.css']
})
export class SearchimageComponent implements OnInit {

  searchImages: HitsEntity[];
  keywordsrc: string;
  searchHistory: SearchImgHistory;
  constructor(private searchimageservice: SearchImageService) {
    //this.searchimageservice.getImages().subscribe((imageData) => {
    //  console.log(imageData);
    //  this.searchImages = imageData['hits'] as HitsEntity[];
    //})
    this.searchHistory = new SearchImgHistory();
  }

  ngOnInit(): void {
  }

  SearchImg() {
    this.searchimageservice.getImages(this.keywordsrc).subscribe(data => {
      this.searchImages = data['hits'] as HitsEntity[]
      this.searchimageservice.addhistory(this.keywordsrc);
      console.log(this.searchImages);
    })
  }

  //addToHistory(name: any) {
  //  this.searchHistory.Search = name;
  //  this.searchimageservice.addhistory(this.searchHistory);
  //}


}
