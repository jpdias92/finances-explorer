import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          this.generate_age_dist_bar_card(),
          this.generate_movements_category_pie_card(),
          this.generate_income_expense_line_card()
        ];
      }

      return [
        this.generate_age_dist_bar_card(),
        this.generate_movements_category_pie_card(),
        this.generate_income_expense_line_card()
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  generate_age_dist_bar_card(){
    return {
      title: 'Distribuição dos Membros por idades',
      cols: 1,
      rows: 2,
      content: 'assets/images/age_dist_bar_chart.png',
      alt: 'Distribuição dos Membros por idades'
    }
  }

  generate_movements_category_pie_card(){
    return {
      title: 'Total Movimentos por Categoria',
      cols: 1,
      rows: 2,
      content: 'assets/images/mov_cat_pie_chart.png',
      alt: 'Total Movimentos por Categoria'
    }
  }


  generate_income_expense_line_card(){
    return {
      title: 'Rendimentos vs Despesas',
      cols: 1,
      rows: 2,
      content: 'assets/images/income_expenses_monthly_line_chart.png',
      alt: 'Rendimentos vs Despesas'
    }
  }


}
