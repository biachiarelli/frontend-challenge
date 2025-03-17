import { Component, OnInit } from '@angular/core';
import { ConsentsService } from '../../serivces/consents.service';
import { Consent } from '../../models/consent.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collected-consents',
  templateUrl: './collected-consents.component.html',
  styleUrl: './collected-consents.component.scss',
  imports: [CommonModule]
})
export class CollectedConsentsComponent implements OnInit {
  consents: Consent[] = [];

  constructor(private consentsService: ConsentsService) {}

  ngOnInit() {
    this.consentsService.get('/consents', (response) => {
      this.consents = JSON.parse(response);
    });

  }

}
