import  { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appSelectiveValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SRVDirective,
        multi: true
    }]
})

export class SRVDirective implements Validator {
    @Input('appSelectiveValidator') defaultValue : string;

    validate(control: AbstractControl): {[key: string]: any} | null {
        return control.value === this.defaultValue ? {'defaultSelected': true} : null;
    }
}