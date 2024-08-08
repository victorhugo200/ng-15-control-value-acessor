import { NgIf } from "@angular/common";
import { Component, Input, Optional, Self } from "@angular/core";
import { ControlValueAccessor, FormsModule, NgControl } from "@angular/forms";
@Component({
    selector: "app-input",
    standalone: true,
    imports: [FormsModule, NgIf],
    template: `
        <label>{{label}}</label>
        <input type="text" 
        placeholder="Write anything..."
        [(ngModel)]="value"
        (focus)="onTouched && onTouched()"
        (input)="onChange && onChange(value)"
        [disabled]="isDisabled"
        >
        <small *ngIf="ngControl && ngControl.touched && ngControl.hasError('required')">This field is required</small>
    `,
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {
    @Input() label  = '';
    protected value = '';
    protected onTouched?: () => {};
    protected onChange?: (value: string) => {};
    protected isDisabled = false;

    constructor(@Optional() @Self() protected ngControl: NgControl) {
        if (this.ngControl) this.ngControl.valueAccessor = this;
    }

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
       this.isDisabled = isDisabled;
    }
}