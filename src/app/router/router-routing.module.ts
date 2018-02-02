import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {WorkComponent} from '../work/work.component';
import {ProjectComponent} from '../project/project.component';
import {ContactComponent} from '../contact/contact.component';
import {NotfoundComponent} from '../notfound/notfound.component';
import {IamComponent} from '../iam/iam.component';

const routes: Routes = [
  {path: '', component: IamComponent},
  {path: 'bio', component: IamComponent},
  {path: 'development', component: HomeComponent},
  {path: 'work', component: WorkComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
