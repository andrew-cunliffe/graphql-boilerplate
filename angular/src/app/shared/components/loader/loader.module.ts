import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { LoaderComponent } from './loader.component';

@NgModule({
    declarations: [LoaderComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [LoaderComponent],
})
export class LoaderModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faSync);
    }
}
