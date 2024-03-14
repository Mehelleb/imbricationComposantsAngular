import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  /**je commence par déclarer deux propriétés */
  question!: string;
  reponse!:string;
  message!:string;
  ngOnInit(): void {
    /**je les initialise dans ngOnInit */
    this.question='Que font 2 X 2 ?';
    this.reponse='4';
  }
  correction(r:string){
      this.reponse===r?this.message='Bravo !':this.message='Euh...Faux !';
  }
}
