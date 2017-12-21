import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {ApiService} from './api.service';

import { GerenciarMatriculasComponent } from './gerenciar-matriculas/gerenciar-matriculas.component';
import { ListaMatriculasComponent } from './lista-matriculas/lista-matriculas.component';
import { MatricularAlunoComponent } from './matricular-aluno/matricular-aluno.component';

const appRoutes: Routes = [
  {path: 'matriculas', component: ListaMatriculasComponent},
  {path: 'matriculas/:id', component: GerenciarMatriculasComponent},
  {path: 'matricular', component: MatricularAlunoComponent},



  {path: '', component: HomeComponent},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
    GerenciarMatriculasComponent,
    ListaMatriculasComponent,
    MatricularAlunoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
