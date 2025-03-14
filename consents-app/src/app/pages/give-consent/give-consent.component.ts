import { Component } from '@angular/core';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { CheckboxComponent } from "../../components/checkbox/checkbox.component";

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrl: './give-consent.component.scss',
  imports: [InputComponent, ButtonComponent, CheckboxComponent]
})
export class GiveConsentComponent {

}
