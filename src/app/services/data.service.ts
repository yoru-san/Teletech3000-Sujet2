import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getLocations(){
    return this.http.get('https://b2-angular.firebaseio.com/kob2/locations.json');
  }


  seedLocations(){
    return this.http.put('https://b2-angular.firebaseio.com/kob2/locations.json', 
    [
      {
        "city":"12000 Aix-en-Provence",
        "name":"Aix",
        "phone":"+33 7 22 30 43 70",
        "street":"8 rue de la poupée qui tousse"
      },
      {
        "city": "31000 Toulouse",
        "name": "Toulouse",
        "phone":"+33 4 34 36 33 70",
        "street": "23 chemin du petit chicot"
      },
      {
        "city":"35200 Rennes",
        "name":"Rennes",
        "phone":"+33 2 12 30 43 70",
        "street":"2 rue du professeur Pierre Velas"
      },
    ]
  )}
}
