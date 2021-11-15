import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataLoadService {
    public queue: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    public increment(): void {
        const currentQueue = this.queue.getValue();
        this.queue.next(currentQueue + 1);
    }

    public decrement(): void {
        const currentQueue = this.queue.getValue();
        if (currentQueue > 0) {
            this.queue.next(currentQueue - 1);
        }
    }
}
