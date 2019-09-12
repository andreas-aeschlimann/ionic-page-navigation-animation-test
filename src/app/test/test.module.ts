import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestPage } from './test.page';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';

const routes: Routes = [
  { path: "", redirectTo: "tabs/tab1" },
  {
    path: "tabs", component: TestPage, children: [
      { path: "tab1", component: Tab1Page },
      { path: "tab2", component: Tab2Page },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestPage, Tab1Page, Tab2Page]
})
export class TestPageModule {}
