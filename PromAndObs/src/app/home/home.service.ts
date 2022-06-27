import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Note } from './home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http:HttpClient) {}

  //add note
  addNote(title: string, note: string) {
    let generatedId: string;

    const newNote = new Note(Math.random().toString(), title, note);

    this.http
      .post('https://promandobs2-default-rtdb.firebaseio.com/notes.json', {
        ...newNote,
        id: null,
      })
      .pipe(
        tap((responseData) => {
          console.log(responseData);
        })
      )
      .subscribe();
  }

  //fetch notes
  fetchNotes() {
    this.http
      .get('https://promandobs2-default-rtdb.firebaseio.com/notes.json')
      .pipe(
        map((responseData) => {
          const notes = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              notes.push(key, responseData[key].title, responseData[key].note);
            }
          }
          return notes;
        }),
        tap((notes) => {
          console.log(notes);
        })
      ).subscribe();
  }
}
