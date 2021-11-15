import { NgModule } from '@angular/core';
import { ButtonModule, LoaderModule } from './components';

@NgModule({
    imports: [ButtonModule, LoaderModule],
    exports: [ButtonModule, LoaderModule],
})
export class SharedModule {}
