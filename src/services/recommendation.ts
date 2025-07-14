import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecommendationService {
  private apiUrl = 'http://localhost:5271/recommendation/ai';

  constructor(private http: HttpClient) {}

  getAIRecommendations(prompt: string) {
    return this.http.post<{
      detectedTag: string;
      detectedDifficulty: number;
      topDevs: any[];
    }>(this.apiUrl, { Prompt: prompt }); // <-- خليه Prompt بحرف كبير
  }
}
