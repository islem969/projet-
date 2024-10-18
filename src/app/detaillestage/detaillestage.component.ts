import { Component ,OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OffresategeService } from '../offresatege.service';
import { Offre } from '../interface/offre';

@Component({
  selector: 'app-detaillestage',
  templateUrl: './detaillestage.component.html',
  styleUrls: ['./detaillestage.component.css']
})
export class DetaillestageComponent implements OnInit{
  offer: Offre | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private offresategeService: OffresategeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const offerId = +params['id']; // Make sure 'id' matches the parameter name in the route
      if (offerId) {
        this.loadOfferById(offerId);
      }
    });
  }

  loadOfferById(id: number): void {
    this.offresategeService.getOfferById(id).subscribe(
      (offer: Offre) => {
       
        this.offer = offer;
      },
      (error) => {
        console.error('Error loading offer by ID:', error);
      }
    );
  }
  
}