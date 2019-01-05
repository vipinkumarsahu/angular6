import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector:'[matchPassword]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: matchPassword,
        multi: true
    }]

})

export class matchPassword implements Validator {
    @Input('matchPassword') password: string;

    validate(control: AbstractControl) : {[key: string]: any} | null {
        const controlToCompare = control.parent.get(this.password);
        if(controlToCompare && controlToCompare.value != control.value){
            return {'notEqual': true};
        }
        return null;
    }
}