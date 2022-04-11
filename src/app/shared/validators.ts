import { AbstractControl } from "@angular/forms";
import { Observable, Subscription, switchMap, takeUntil } from "rxjs";

export function samePasswordAsFactory(getTargetControl: () => AbstractControl | null, killSubscription: Observable<any>) {
    let subscription: Subscription | null = null;
    return function(control: AbstractControl) {

        if (subscription) {
            subscription.unsubscribe();
            subscription = null;
        }
        const targetControl = getTargetControl();
        if (!targetControl) { return null };



        subscription = targetControl.valueChanges.pipe(
            takeUntil(killSubscription)
        ).subscribe({
            next: () => { control.updateValueAndValidity(); },
            complete: () => { subscription = null; }
        })

        return targetControl?.value === control?.value ? null : { sameValue: true };
    }
}