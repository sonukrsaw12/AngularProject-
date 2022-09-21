import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HitsEntity, SearchImage, SearchImgHistory } from "../Models/serachimage";

@Injectable()
export class SearchImageService { 
  searchHistory: SearchImgHistory[];
  constructor(private httpClient: HttpClient) {
    this.searchHistory = [];
  }
  getImages(params) {

    //return this.httpClient.get("https://pixabay.com/api/?key=29577618-5e0e0c4ad98483febd3905ac2")
    return this.httpClient.get('https://pixabay.com/api/?key=29577618-5e0e0c4ad98483febd3905ac2&image_type=photo&q=' + params);
  }

  addhistory(search: any ) {
    this.searchHistory.push(search);
  }

  getsearchHistory() {
    return this.searchHistory;
  }

}

