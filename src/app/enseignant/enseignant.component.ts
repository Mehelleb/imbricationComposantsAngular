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
  ngOnInit(): void {
    /**je les initialise dans ngOnInit */
    this.question='Que font 2 X 2 ?';
    this.reponse='4';
  }

}
