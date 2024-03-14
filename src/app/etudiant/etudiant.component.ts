import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  /**J'utilise INPUT pour récupérer des données depuis mon composant
   * parent qu'est ENSEIGNANT. Je dois le préciser dant le template aussi.
   */
  @Input() questionDeMonEnseignant!:string;
  /** reponseEtudiant lit ce qui est tapé par l'étudiant */
  reponseEtudiant!: string;
  /**Je crée une variable où je déclare un EventEmitter via OUTPUT pour envoyer des données */
  @Output() reponseFinale=new EventEmitter<string>();
  /**j'envoies au parent ENSEIGNANT le contenu de reponseEtudiant */
  envoyerReponse(){
    this.reponseFinale.emit(this.reponseEtudiant);
  }
ngOnInit(): void {
}
}
