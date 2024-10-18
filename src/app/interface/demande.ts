export interface Demande {
    id?: number;
    nomET: string;
    presnomet: string;
    mail: string;
    cv: File| null;
    lettreMot: File| null;
    classe: string;
    telNumber: string;
    demndeStage: File| null;
    etat :string;
    offresstagesId: number;
    
   
}
