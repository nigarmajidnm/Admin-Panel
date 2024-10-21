/*
  Authors : NigarMajid
  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportsRoutingModule } from './supports-routing.module';
import { SupportsComponent } from './supports.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    SupportsComponent
  ],
  imports: [
    CommonModule,
    SupportsRoutingModule,
    NgxSpinnerModule,
    NgxSkeletonLoaderModule,
    FormsModule
  ]
})
export class SupportsModule { }
