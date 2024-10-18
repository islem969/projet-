import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Demande } from '../interface/demande';
import { DemandeService } from '../demande.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajoutdemande',
  templateUrl: './ajoutdemande.component.html',
  styleUrls: ['./ajoutdemande.component.css']
})
export class AjoutdemandeComponent implements OnInit {

  demande: Demande = {
    nomET: '',
    presnomet: '',
    mail: '',
    cv: null,
    lettreMot: null,
    classe: '',
    telNumber: '',
    demndeStage: null,
    etat:'',
    offresstagesId: 0
  };

  constructor(
    private demandeService: DemandeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const offreId = params?.get('offreId');
      if (offreId) {
        this.demande.offresstagesId = +offreId; // Convert offreId to a number
      }
    });
  }

  onCVFileSelected(event: any): void {
    this.demande.cv = event.target.files.length > 0 ? event.target.files[0] : null;
  }
  
  onLettreMotFileSelected(event: any): void {
    this.demande.lettreMot = event.target.files.length > 0 ? event.target.files[0] : null;
  }
  
  onDemndeStageFileSelected(event: any): void {
    this.demande.demndeStage = event.target.files.length > 0 ? event.target.files[0] : null;
  }
  //saveDemande(offreId: number): void {
   // this.demande.offresstagesId = offreId;
  
    
   // this.demandeService.saveDemande(this.demande).subscribe(
      //(response) => {
       // console.log('Demande added successfully:', response);
        // Handle success, e.g., navigate to a different page
     // },
      //(error) => {
        //console.error('Error adding demande:', error);
        // Handle error, e.g., show an error message
     // }
    //);}

 saveDemande(): void {
   
    
   this.demandeService.saveDemande(this.demande).subscribe(
     
     (response) => {
      console.log('Demande added successfully:', response);
      //Handle success, e.g., navigate to a different page
    },
      (error) => {
        console.error('Error adding demande:', error);
        // Handle error, e.g., show an error message
      }
    );
  }

}