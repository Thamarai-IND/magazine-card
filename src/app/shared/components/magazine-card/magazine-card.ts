import { Component, Input } from '@angular/core';
import { Article } from '../../../core/services/article-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-magazine-card',
  imports: [CommonModule],
  templateUrl: './magazine-card.html',
  styleUrl: './magazine-card.scss',
})
export class MagazineCard {
  @Input() article!: Article;
}
