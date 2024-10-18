import { Component, OnInit } from '@angular/core';
import { Offre } from '../interface/offre'; // Add this import
import { OffresategeService } from '../offresatege.service';

@Component({
  selector: 'app-affichestage',
  templateUrl: './affichestage.component.html',
  styleUrls: ['./affichestage.component.css']
})
export class AffichestageComponent implements OnInit{

  searchTerm: string = '';
 
  offers: Offre[] = [];
  
  constructor(private offerService: OffresategeService) {}

  //ngOnInit(): void {
    //this.offerService.getAllOffers().subscribe(offers => {
      //this.offers = offers;
      
    //});
  //}
  ngOnInit(): void {
this.loadoffre();
  }
  //loadoffre():void{ 
   // this.offerService.getAllOffers().subscribe((offers: Offre[]) => {
      //this.offers = offers;
    //});
  //}
  loadoffre(): void { 
    this.offerService.getAllOffers().subscribe((offers: Offre[]) => {
      // Filter out offers with the "Archiver" state
      this.offers = offers.filter(offer => offer.etat !== 'Archiver');
    });
  }
  
  updateRating(id: number, newRating: number) {
    this.offerService.updateRating(id, newRating)
        .subscribe(response => {
            // Handle successful update if needed
            console.log('Rating updated successfully:', response);
            // You might want to refresh the evaluations list or update the specific evaluation
            this.loadoffre();
        }, error => {
            // Handle error if needed
            console.error('Error updating rating:', error);
        });
  }
  
  searchSynonyms() {
    this.offerService.getAllOffers().subscribe((off) => {
      this.offers = off.filter((offers: any) =>
      offers.nomE.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      offers.tecnoligie.toLowerCase().includes(this.searchTerm.toLowerCase) ||
      offers.descOffre.toLowerCase().includes(this.searchTerm.toLowerCase) ||
      offers.datePost.toString().includes(this.searchTerm)
      );
    });
  }
   

  filterByRating(minRating: number) {
    // Filter Offres array based on starRating property
    this.offers = this.offers.filter(offre => offre.starRating >= minRating);
  }

  // Function to filter Offres by date
  filterByDate(dateFilter: string) {
    const currentDate = new Date();
    let filteredOffres: Offre[] = [];

    // Filter Offres array based on datePost property
    switch (dateFilter) {
      case 'today':
        filteredOffres = this.offers.filter(offre => {
          const offreDate = new Date(offre.datePost);
          return offreDate.toDateString() === currentDate.toDateString();
        });
        break;
      case 'lastWeek':
        const lastWeekDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);
        filteredOffres = this.offers.filter(offre => {
          const offreDate = new Date(offre.datePost);
          return offreDate >= lastWeekDate;
        });
        break;
      case 'lastMonth':
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        filteredOffres = this.offers.filter(offre => {
          const offreDate = new Date(offre.datePost);
          return offreDate >= lastMonthDate;
        });
        break;
      default:
        filteredOffres = this.offers; // Anytime filter, return all Offres
    }

    this.offers = filteredOffres;
  }
  
}



