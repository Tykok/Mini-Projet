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

  // Tableau contenant les différentes lignes contenues dans le tableau
  dataset: OptionVoiture[];

  settings: Handsontable.GridSettings = {
    data: Handsontable.helper.createSpreadsheetData(5, 5),
    colHeaders: true,
    contextMenu: {
      items: {
        'row_above': {
          name: 'Insérer une nouvelle option au-dessus'
        },
        'row_below': {
          name: 'Insérer une nouvelle option en dessous'
        },
        'separator1': Handsontable.plugins.ContextMenu.SEPARATOR,
        'remove_row': {
          name: 'Supprimer cette ligne'
        },
        'cut': {
          name: 'Couper'
        },
        'copy': {
          name: 'Copier'
        },
        'separator2': Handsontable.plugins.ContextMenu.SEPARATOR,
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

  ngOnInit(): void {
    this.o.findAll().subscribe(data => {
      this.dataset = data;
    });
  }


  sendData(): void {
    for (let a of this.dataset) {
      this.o.saveData(a);
    }
  }
}

