import {Observable, observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Person} from "./person";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PersonService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public searchPersonByPersonalId(personalId: string, date: any): Observable<Person> {
    return this.http.get<Person>(`${this.apiServerUrl}/api/PersonalIdAndBirth?personalId=${personalId}&date=${date}`);
  }
}
