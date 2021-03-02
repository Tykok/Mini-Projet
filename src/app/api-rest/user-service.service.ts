import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OptionVoiture} from '../option-voiture';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private optionURL: string;

  constructor(private http: HttpClient) {
    this.optionURL = 'http://localhost:8080/option';
  }

  public findAll(): Observable<OptionVoiture[]> {
    return this.http.get<OptionVoiture[]>(this.optionURL);
  }

  public saveData(option: OptionVoiture): void {
    this.http.post<OptionVoiture>(this.optionURL, option).subscribe(
      (response) => {
        console.log('OK');
      },
      (error) => {
        console.log('Erreur');
      });
  }
}
