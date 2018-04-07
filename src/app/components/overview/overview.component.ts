import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  currentUser: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getCurrentUser() {
    let promise = this.apiService.getCurrentUser();
    promise.then((data) => {
      this.currentUser = JSON.stringify(data);
    });
  }
}
