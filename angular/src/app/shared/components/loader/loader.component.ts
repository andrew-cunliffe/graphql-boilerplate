import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataLoadService } from './../../../core/services';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
})
export class LoaderComponent {
    public visible = false;

    constructor(private loaderService: DataLoadService) {
        this.loaderService.queue.pipe(map((queue) => (this.visible = queue > 0))).subscribe();
    }
}
