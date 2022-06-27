import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title: string = 'weekley shopping';
  note: string =
    'On Saturday, daily needs will be bought from the supermarket.';
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // this.homeService.addNote(this.title, this.note);
    this.homeService.fetchNotes();
  }
}
