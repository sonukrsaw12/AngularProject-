import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchImgHistory } from '../Models/serachimage';
import { SearchImageService } from '../services/searchimage.service';

@Component({
  selector: 'app-display-history',
  templateUrl: './display-history.component.html',
  styleUrls: ['./display-history.component.css']
})
export class ShowHistoryComponent implements OnInit {

  searchHistory: SearchImgHistory[];
  constructor(private searchimageservice: SearchImageService,
    private router: Router  ) {
    this.searchHistory = this.searchimageservice.getsearchHistory();
    console.log(this.searchHistory);
  }

  ngOnInit(): void {
  }

  showDetails(pid) {
    this.router.navigate(['historyView', pid])
  }

}
