import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { zip } from 'rxjs/observable/zip';

@Component({
  selector: 'app-registro-de-notas-do-aluno',
  templateUrl: './registro-de-notas-do-aluno.component.html',
  styleUrls: ['./registro-de-notas-do-aluno.component.css']
})
export class RegistroDeNotasDoAlunoComponent implements OnInit {
  alunos = null;
  aluno = null;
  nota1 = null;
  nota2 = null;
  nota3 = null;
  nota4 = null;
  status_salvar = null;


  constructor(private api: ApiService) {
  }

  ngOnInit() {
    //frequencias
    this.api.alunosNotas()
      .subscribe(alunos => {
        this.alunos = alunos;
      });
  }

  
  
  limpar() {
    this.nota1 = null;
    this.nota2 = null;
    this.nota3 = null;
    this.nota4 = null;
  }

  salvar() {
    this.api.registrarNotas(this.aluno, this.nota1, this.nota2, this.nota3, this.nota4)
      .subscribe(
      () => {
        this.status_salvar = true;
        this.limpar();
      },
      () => this.status_salvar = false
      );
  }
}
