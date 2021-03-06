import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { SharedModule } from '../shared.module';
import { ModalConfirmationComponent } from './modal-confirmation/modal-confirmation.component';
import { ModalConfirmExitComponent } from './modal-confirm-exit/modal-confirm-exit.component';

const components = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  ModalConfirmationComponent,
  ModalConfirmExitComponent
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
    SharedDirectivesModule
  ],
  declarations: components,
  exports: components
})
export class ComponentsModule { }
