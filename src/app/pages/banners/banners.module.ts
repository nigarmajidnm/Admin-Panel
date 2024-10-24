/*
  Authors : NigarMajid
  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannersRoutingModule } from './banners-routing.module';
import { BannersComponent } from './banners.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    BannersComponent
  ],
  imports: [
    CommonModule,
    BannersRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    NgxSpinnerModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'progress-dark' }),
    NgxPaginationModule,
    TabsModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class BannersModule { }
