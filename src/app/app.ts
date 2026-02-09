import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { HeroComponent } from "./hero/hero";
import { Footer } from './footer/footer';
import { ServicesComponent } from './servises/servises';
import { TeamComponent } from './team/team';
import { ClientsComponent } from './clients/clients';
import { PortfolioComponent } from './portfolio/portfolio';
import { BookingComponent } from './booking/booking';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, ServicesComponent, PortfolioComponent, TeamComponent, ClientsComponent, BookingComponent,  Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'First-App';
}
// app.module.ts


