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
  consents: Consent[] = [{
    id: '100',
    email: 'email@email.com',
    name: 'Maria Alice',
    consents: ['Recive newsletter', 'Be shown targeted ads']
  }, {
    id: '101',
    email: 'email@email.com',
    name: 'Carlos Roberto',
    consents: ['Contribute to anonymous visit statistics','Recive newsletter', 'Be shown targeted ads']
  }, {
    id: '102',
    email: 'email@email.com',
    name: 'Pedro Simas',
    consents: ['Contribute to anonymous visit statistics', 'Be shown targeted ads']
  }, {
    id: '103',
    email: 'email@email.com',
    name: 'Joana Lima',
    consents: ['Recive newsletter']
  }, {
    id: '104',
    email: 'email@email.com',
    name: 'Paulo Fernandes',
    consents: ['Recive newsletter', 'Be shown targeted ads']
  }, {
    id: '105',
    email: 'email@email.com',
    name: 'Mauro Sampaio',
    consents: ['Recive newsletter', 'Be shown targeted ads']
  }, {
    id: '106',
    email: 'email@email.com',
    name: 'Carla Fagundes',
    consents: [ 'Be shown targeted ads']
  }];

  
  paginatedConsents: Consent[] = [];

  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 2;

  constructor(private consentsService: ConsentsService) {}

  ngOnInit() {
    this.consentsService.get('/consents', (response) => {
      const res = JSON.parse(response)
      this.consents = [...this.consents, res];

      this.totalPages = this.consents.length / this.pageSize;

      this.updatePaginatedUsers()
    });
  }

  updatePaginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedConsents = this.consents.slice(startIndex, endIndex);
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedUsers();
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedUsers();
    }
  }

}
