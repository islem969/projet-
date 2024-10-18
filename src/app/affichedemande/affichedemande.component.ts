import { Component,OnInit } from '@angular/core';
import { Demande } from '../interface/demande';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-affichedemande',
  templateUrl: './affichedemande.component.html',
  styleUrls: ['./affichedemande.component.css']
})
export class AffichedemandeComponent implements OnInit{

  demandes: Demande[] = [];
  
  constructor(private offerService: DemandeService) {}

  //ngOnInit(): void {
    //this.offerService.getAllOffers().subscribe(offers => {
      //this.offers = offers;
      
    //});
  //}
  ngOnInit(): void {
    this.loadDemandes();
  }



loadDemandes(): void {
  this.offerService.getAllDemandes().subscribe((demandes: Demande[]) => { // Explicitly specify the type
    this.demandes = demandes;
  });
}

}