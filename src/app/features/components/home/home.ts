import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from './../../../core/services/article-service';
import { CommonModule } from '@angular/common';
import { MagazineCard } from '../../../shared/components/magazine-card/magazine-card';

@Component({
  selector: 'app-home',
  // standalone: true,
  imports: [CommonModule,MagazineCard],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  articles: Article[] = [];
  filtered: Article[] = [];
  categories: string[] = [];

  constructor(public articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
      this.filtered = [...data];
      this.categories = [...new Set(data.map(a => a.category))];
    });
  }

  filterByCategory(category: string) {
    this.filtered = this.articles.filter(a => a.category === category);
  }

  resetFilter() {
    this.filtered = [...this.articles];
  }

  trackById(index: number, item: Article) {
    return item.id;
  }
}
