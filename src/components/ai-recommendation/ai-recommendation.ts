import { Component } from '@angular/core';
import { RecommendationService } from '../../services/recommendation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-recommendation',
  templateUrl: './ai-recommendation.html',
  styleUrls: ['./ai-recommendation.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AiRecommendationComponent {
  userPrompt = ''; // لحفظ وصف التاسك
  loading = false;
  recommendations: any[] = [];
  detectedTag = '';
  detectedDifficulty: number | null = null;

  constructor(private recService: RecommendationService) {}

  getRecommendation() {
    if (!this.userPrompt.trim()) {
      alert('Please enter task description first!');
      return;
    }

    this.loading = true;

    this.recService.getAIRecommendations(this.userPrompt).subscribe({
      next: (res) => {
        this.recommendations = res.topDevs;
        this.detectedTag = res.detectedTag;
        this.detectedDifficulty = res.detectedDifficulty;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Error occurred');
        this.loading = false;
      },
    });
  }
}
