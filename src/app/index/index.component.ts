import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  private cities = null;
  private numbers = null;

  constructor(
    private Data: DataService
  ) { }

  ngOnInit() {
    this.Data.getLocations().subscribe(response => {
      this.cities = response;
    },
      error => console.log(error)
    );

    this.Data.getKeyNumbers().subscribe(response => {
      this.numbers = response;
    },
      error => console.log(error)
    );
  }

}
