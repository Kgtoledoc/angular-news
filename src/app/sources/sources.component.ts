import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  selected;
  news: any;
  sources = [
    {
      "id": "abc-news",
      "name": "ABC News",
    },
    {
      "id": "abc-news-au",
      "name": "ABC News (AU)",
      
    },
    {
      "id": "aftenposten",
      "name": "Aftenposten",
      
    },
    {
      "id": "al-jazeera-english",
      "name": "Al Jazeera English",
      
    },
    {
      "id": "ansa",
      "name": "ANSA.it",
      
    },
    {
      "id": "argaam",
      "name": "Argaam",
      
    },
    {
      "id": "ars-technica",
      "name": "Ars Technica",
      
    }
  ];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.selected = this.sources[0].id;
    this.getData(this.selected);
  }
  onSourceChange(){
    this.getData(this.selected);
  }

  getData(selected) {
    this.newsService.getData(`top-headlines?sources=${selected}`)
      .subscribe(data => {
        this.news = data;
      })
  }


}
