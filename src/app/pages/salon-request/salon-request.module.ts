/*
  Authors : NigarMajid
  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalonRequestRoutingModule } from './salon-request-routing.module';
import { SalonRequestComponent } from './salon-request.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    SalonRequestComponent
  ],
  imports: [
    CommonModule,
    SalonRequestRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'progress-dark' }),
    TabsModule,
    ModalModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class SalonRequestModule { }
