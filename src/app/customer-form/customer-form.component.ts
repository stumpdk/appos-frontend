import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Customer } from '../shared/models/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerFormComponent  implements OnInit, OnChanges {
  
  @Input() customer!: Customer;
  @Output() submitted = new EventEmitter<Customer>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
    });
  }

  get customerFormControls() {
    return this.form.controls;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['customer'].currentValue) {
      this.form?.patchValue(this.customer);
    }
  }

  submit() {
    this.submitted.emit(this.form.getRawValue());
    this.form.reset();
  }
}
