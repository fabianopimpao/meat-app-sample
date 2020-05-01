import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { RestaurantsService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  
  reviews: Observable<any>;

  constructor(private restaurantsService: RestaurantsService, 
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.activatedRoute.parent.snapshot.params['id']);  
  }

}
