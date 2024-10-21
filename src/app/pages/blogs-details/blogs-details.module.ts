/*
  Authors : NigarMajid
  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsDetailsRoutingModule } from './blogs-details-routing.module';
import { BlogsDetailsComponent } from './blogs-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    BlogsDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogsDetailsRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'progress-dark' }),
    TabsModule.forRoot(),
    CKEditorModule
  ]
})
export class BlogsDetailsModule { }
