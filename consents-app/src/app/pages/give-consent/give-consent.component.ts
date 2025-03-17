import { Component, OnInit } from '@angular/core';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CheckboxComponent } from "../../components/checkbox/checkbox.component";
import { ConsentsService } from '../../serivces/consents.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrl: './give-consent.component.scss',
  imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent, CheckboxComponent]
})
export class GiveConsentComponent implements OnInit {
  consentForm!: FormGroup;
  consentsOptions: Record<string, string> = {}
  selectedConsents: Record<string, boolean> = {}

  constructor(
    private consentsService: ConsentsService, 
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.consentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.setConsentsOptions()
  }

  setConsentsOptions() {
    this.consentsOptions = {
      "op1": "Recive newsletter",
      "op2": "Be shown targeted ads",
      "op3": "Contribute to anonymous visit statistics",
    }

    Object.keys(this.consentsOptions).forEach(key => {
      this.selectedConsents[key] = false;
    })
  }

  get consentKeys() {
    return Object.keys(this.consentsOptions || {});
  }

  toggleConsent(key: string) {
    this.selectedConsents[key] = !this.selectedConsents[key];
  }
  
  submitForm() {
     const consent = { 
      name: this.consentForm.get('name')?.value, 
      email:  this.consentForm.get('email')?.value, 
      consents: 
        Object.entries(this.selectedConsents)
        .filter(([_, value]) => value === true)
        .map(([key]) => this.consentsOptions[key])
    };
    
    this.consentsService.post('/consents', consent, (response) => {
      this.router.navigate(['/collected'])
      console.log('Consent saved:', JSON.parse(response));

    });
  }

}
