import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() checked: boolean = false;

  onChange = (checked: boolean) => {};
  onTouched = () => {};

  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.checked = checkbox.checked;
    this.onChange(this.checked);
    this.onTouched();
  }

}
