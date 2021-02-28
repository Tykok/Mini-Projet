import {Component, OnInit} from '@angular/core';
import {OptionVoiture} from './option-voiture';
import {UserServiceService} from './api-rest/user-service.service';
import Handsontable from 'handsontable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private static enregistrementEffectuer = true;
  private firstRecup = false;

  // Tableau contenant les différentes lignes contenues dans le tableau
  dataset: OptionVoiture[];

  settings: Handsontable.GridSettings = {
    data: Handsontable.helper.createSpreadsheetData(5, 5),
    colHeaders: true,
    contextMenu: {
      items: {
        'row_above': {
          name: 'Insérer une nouvelle option'
        },
        'row_below': {},
        'separator': Handsontable.plugins.ContextMenu.SEPARATOR,
        'clear_custom': {
          name: 'Effacer tout le tableau',
          callback: function() {
            this.clear();
          }
        }
      }
    }
  };
  constructor(private o: UserServiceService) {
  }


  public static isEnregistrer(): boolean{
    return this.enregistrementEffectuer;
  }

  public static setEnregistrer(a: boolean): void{
    this.enregistrementEffectuer = a;
  }

  ngOnInit(): void{
    this.o.findAll().subscribe(data => {
      this.dataset = data;
    });
    this.firstRecup = !this.firstRecup;
  }


  sendData(): void{
    this.dataset.forEach(e => this.o.saveData(e));
  }

  info(): string{
    if (AppComponent.enregistrementEffectuer){
      return 'Les données ont bien été récupérer';
    }else{
      return 'Erreur lors de l\'enregistrement des données';
    }
  }
}

