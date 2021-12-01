import { ModuleWithComponentFactories } from "@angular/compiler/src/jit/compiler";

export class Adresse {
    voie: string;
    complement: string;
    codePostal: string;
    ville: string;

  constructor(
    voie?: string, 
    complement?: string, 
    codePostal?: string, 
    ville?: string
) {
    this.voie = voie
    this.complement = complement
    this.codePostal = codePostal
    this.ville = ville
  }

   
}
export class Consultation {
    id:number;
    version:number;
    instructions:string;
    motif:Motif;
    patient:Patient;
    creneaux: Array <Creneau>= new Array<Creneau>();

  constructor(
    id?: number, 
    version?: number, 
    instructions?: string, 
    motif?: Motif, 
    patient?: Patient, 
    creneaux?: Array <Creneau>
) {
    this.id = id
    this.version = version
    this.instructions = instructions
    this.motif = motif
    this.patient = patient
    this.creneaux = creneaux
  }

}

export class Creneau {
    id:number;
    version:number;
    debut:string;
    duree:number;
    dispo:boolean;
    praticien:Praticien;
    consultation:Consultation;
    lieu:Lieu;

  constructor(
    id?: number, 
    version?: number, 
    debut?: string, 
    duree?: number, 
    dispo?: boolean, 
    praticien?: Praticien, 
    consultation?: Consultation, 
    lieu?: Lieu
) {
    this.id = id
    this.version = version
    this.debut = debut
    this.duree = duree
    this.dispo = dispo
    this.praticien = praticien
    this.consultation = consultation
    this.lieu = lieu
  }

}
export class Lieu {
    id:number;
    version:number;
    nom:string;
    informations:string;
    adresse:Adresse;
    praticien:Praticien;
    creneaux: Array <Creneau>= new Array<Creneau>();

  constructor(
    id?: number, 
    version?: number, 
    nom?: string, 
    informations?: string, 
    adresse?: Adresse, 
    praticien?: Praticien, 
    creneaux?: Array <Creneau>
) {
    this.id = id
    this.version = version
    this.nom = nom
    this.informations = informations
    this.adresse = adresse
    this.praticien = praticien
    this.creneaux = creneaux
  }

}
export class Motif{
    id:number;
    version:number;
    nom:string;
    nbCreneau:number;
    specialite:Specialite;
    consultations:Array<Consultation>=new Array<Consultation>();

  constructor(
    id?: number, 
    version?: number, 
    nom?: string, 
    nbCreneau?: number, 
    specialite?: Specialite, 
    consultations?: Array<Consultation>
) {
    this.id = id
    this.version = version
    this.nom = nom
    this.nbCreneau = nbCreneau
    this.specialite = specialite
    this.consultations = consultations
  }

}

export class Patient{
    id:number
    version:number
    nom:string
    prenom:string
    telephone:string
    dtNaissance:string
    email:string
    principal:boolean
    adresse:Adresse
    consultations:Array<Consultation>=new Array<Consultation>();
    utilisateur:Utilisateur

  constructor(
    id?: number, 
    version?: number, 
    nom?: string, 
    prenom?: string, 
    telephone?: string, 
    dtNaissance?: string, 
    email?: string, 
    principal?: boolean, 
    adresse?: Adresse, 
    consultations?: Array<Consultation>, 
    utilisateur?: Utilisateur
) {
    this.id = id
    this.version = version
    this.nom = nom
    this.prenom = prenom
    this.telephone = telephone
    this.dtNaissance = dtNaissance
    this.email = email
    this.principal = principal
    this.adresse = adresse
    this.consultations = consultations
    this.utilisateur = utilisateur
  }

}

export class Praticien{
    id:number
    version:number
    civilite:string
    nom:string
    prenom:string
    telephone:string
    secteur:string
    carteVitale:boolean
    photo:string
    cheque:boolean
    espece:boolean
    dureeCreneau:number
    specialites:Array<Specialite>=new Array<Specialite>();
    creneaux:Array<Creneau>=new Array<Creneau>();
    lieux:Array<Lieu>=new Array<Lieu>();
    utilisateur:Utilisateur

  constructor(
    id?: number, 
    version?: number, 
    civilite?: string, 
    nom?: string, 
    prenom?: string, 
    telephone?: string, 
    secteur?: string, 
    carteVitale?: boolean, 
    photo?: string, 
    cheque?: boolean, 
    espece?: boolean, 
    dureeCreneau?: number, 
    specialites?: Array<Specialite>, 
    creneaux?: Array<Creneau>, 
    lieux?: Array<Lieu>, 
    utilisateur?: Utilisateur
) {
    this.id = id
    this.version = version
    this.civilite = civilite
    this.nom = nom
    this.prenom = prenom
    this.telephone = telephone
    this.secteur = secteur
    this.carteVitale = carteVitale
    this.photo = photo
    this.cheque = cheque
    this.espece = espece
    this.dureeCreneau = dureeCreneau
    this.specialites = specialites
    this.creneaux = creneaux
    this.lieux = lieux
    this.utilisateur = utilisateur
  }

}

export class Specialite{
    id:number
    version:number
    nom:string
    praticien:Praticien
    motifs:Array<Motif>=new Array<Motif>();

  constructor(
    id?: number, 
    version?: number, 
    nom?: string, 
    praticien?: Praticien, 
    motifs?: Array<Motif>
) {
    this.id = id
    this.version = version
    this.nom = nom
    this.praticien = praticien
    this.motifs = motifs
  }

}

export class Utilisateur{
    id:number
    version:number
    email:string
    motDePasse:string
    type:string
    praticien:Praticien
    patients:Array<Patient>=new Array<Patient>();


}
