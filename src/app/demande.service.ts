import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpEvent,HttpRequest} from '@angular/common/http';
import { Demande } from './interface/demande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private apiUrl = 'http://localhost:8082/intership/controllerDemande';
  private readonly headers = new HttpHeaders();
  //headers.set('Content-Type', 'multipart/form-data');

  constructor(private http: HttpClient) {}

  getAllDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.apiUrl}/getDemande`);
  }

  getDemandeById(id: number): Observable<Demande> {
    return this.http.get<Demande>(`${this.apiUrl}/getDemandeById/${id}`);
  }
  //upload(file: File): Observable<HttpEvent<any>> {
    //const formData: FormData = new FormData();

    //formData.append('file', file);

    //const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      //reportProgress: true,
      //responseType: 'json'
    //});

    //return this.http.request(req);
  //}

 
  saveDemande(demande: Demande): Observable<HttpEvent<Demande>> {
    const formData: FormData = new FormData();
    formData.append('nomET', demande.nomET);
    formData.append('PresnomET', demande.presnomet);
    formData.append('mail', demande.mail);
 
    formData.append('CV', demande.cv?.name|| '');
    formData.append('lettreMot', demande.lettreMot?.name || '');
    formData.append('classe', demande.classe);
    formData.append('telNumber', demande.telNumber);
    formData.append('demndeStage', demande.demndeStage?.name || '');
    let resp = {
      "nomET": demande.nomET,
      "PresnomET": demande.presnomet,
      "mail": demande.mail,
      "CV":demande.cv?.name,
      "lettreMot": demande.lettreMot?.name,
      "classe": demande.classe,
      "telNumber": demande.telNumber,
      "demndeStage": demande.demndeStage?.name ,
      "offresstagesId": ''
  }
    const req = new HttpRequest('POST', `${this.apiUrl}/addDemande`, resp, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
 

  deleteDemande(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteDemande/${id}`);
  }

  getDemandesByOffreId(offreId: number): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.apiUrl}/offre/${offreId}`);
  }
  createDemande(demande: Demande): Observable<Demande> {
    return this.http.post<Demande>(`http://localhost:8082/intership/controllerDemande/ajoutDemande`, demande);
  }
  

  refuserDemande(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/refuser`;
    return this.http.put(url, {});
  }

  acceptDemande(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/accept`;
    return this.http.put(url, {});
  }
  filterByEtat(etat: string): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.apiUrl}/filterByEtat/${etat.toString().toUpperCase()}`);
  }
}



