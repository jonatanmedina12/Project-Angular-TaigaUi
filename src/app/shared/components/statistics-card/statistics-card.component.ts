import  TuiIslandModule } from '@taiga-ui/kit';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  imports: [TuiIslandModule],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss'
})
export class StatisticsCardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() valuePrefix: string = '';
  @Input() valueSuffix: string = '';
  @Input() trend: string = '';
  @Input() trendDirection: 'up' | 'down' | 'neutral' = 'neutral';
  @Input() icon: string = '';
  
  get formattedValue(): string {
    return `${this.valuePrefix}${this.value.toLocaleString()}${this.valueSuffix}`;
  }
  
  get trendClass(): string {
    return `trend-${this.trendDirection}`;
  }
}
