import { Component } from '@angular/core';
import { LeadService } from 'src/app/services/lead.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private leadService: LeadService) {
  }
}
