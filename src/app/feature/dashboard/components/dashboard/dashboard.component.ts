import  TuiButtonModule  from '@taiga-ui/core';
import  TuiIslandModule  from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  imports: [   CommonModule,
    TuiIslandModule,
    TuiTabsModule,
    TuiButtonModule,
    StatisticsCardComponent,
    ChartCardComponent,
    DataTableComponent,
    NotificationsCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly tabs = ['Overview', 'Analytics', 'Reports', 'Settings'];
  activeTabIndex = 0;

  onTabClick(index: number): void {
    this.activeTabIndex = index;
  }
}
