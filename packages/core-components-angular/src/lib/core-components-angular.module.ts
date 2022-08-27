import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from '../generated/directives/proxies'; // NOT REQUIRED
import { DIRECTIVES } from '../generated/directives';
@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class CoreComponentsAngularModule {}
