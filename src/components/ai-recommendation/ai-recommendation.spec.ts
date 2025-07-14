import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiRecommendationComponent } from './ai-recommendation';

describe('AiRecommendation', () => {
  let component: AiRecommendationComponent;
  let fixture: ComponentFixture<AiRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiRecommendationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AiRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
