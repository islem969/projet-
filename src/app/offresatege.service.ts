import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from './interface/offre';
import { Demande } from './interface/demande';

@Injectable({
  providedIn: 'root'
})
export class OffresategeService {

  private apiUrl = 'http://localhost:8082/intership/controller';

  constructor(private http: HttpClient) {}

  getAllOffers(): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.apiUrl}/getOffre`);
  }
  getOfferById(id: number): Observable<Offre> {
    return this.http.get<Offre>(`${this.apiUrl}/getOffreById/${id}`);
  }
  updateRating(id: number, newRating: number): Observable<Offre> {
    const updatedOffre = { starRating: newRating }; // Sending only the updated property
    return this.http.put<Offre>(`${this.apiUrl}/rating/${id}`, updatedOffre);
}
//fetchTranslations(lang: string): Observable<any> {
  //return this.http.get(`/translations?lang=${lang}`);
//}



}