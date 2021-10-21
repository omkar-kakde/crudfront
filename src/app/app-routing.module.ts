import { viewClassName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [ {path: '',component: AppComponent},
{path: 'view',component: ViewComponent},
{path: 'add',component: AddComponent},
{path: 'update/:id',component: UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
