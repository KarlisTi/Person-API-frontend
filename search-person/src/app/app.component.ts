import {Component, Input, OnInit} from '@angular/core';
import {Person} from "./person";
import {HttpErrorResponse} from "@angular/common/http";
import {PersonService} from "./person.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public persons: Person[] = [];
  public person: Person | undefined;
  public key: String | undefined;
  public personalId = '';
  public date = '';


  constructor(private personService: PersonService) {
  }

  @Input()
  required: boolean | string | undefined

  ngOnInit() {
  }

  @Input()
  people?: Person[];

  columnTitles = [
    'ID',
    'First name',
    'Last name',
    'Personal id',
    'Gender',
    'Date of birth'
  ]


  public searchPersonByPersonalId(personalId: string,date :any): void {
    this.personService.searchPersonByPersonalId(personalId,date)
      .subscribe((Response: Person) => {
          this.persons.push(Response)
        }, (error: HttpErrorResponse) => {
          alert(error.message)
        }
      );
  }
}
