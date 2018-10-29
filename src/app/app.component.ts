import { Component } from '@angular/core';
import { Article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles : Article[];
  constructor(){
    this.articles = [
      new Article( 'Angular 2','https://www.angular.io',25),
      new Article( 'FullStack','https://www.fullstack.io',50)
    ];
  }
  addArticle(title:HTMLInputElement, link:HTMLInputElement) : boolean{
    this.articles.push(new Article(title.value,link.value));
    title.value = '';
    link.value = '';
  return false;
  }
  sortedArticles() : Article[]{
    return this.articles.sort((a : Article, b : Article) => b.votes - a.votes);
  }
}
