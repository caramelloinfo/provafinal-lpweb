import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-gerenciar-matriculas',
  templateUrl: './gerenciar-matriculas.component.html',
  styleUrls: ['./gerenciar-matriculas.component.css']
})
export class GerenciarMatriculasComponent implements OnInit {

  anoLetivo = null; 
  situacaoAluno = null;
  turmas = null;
  alunos = null;
  aluno = null;
  turma = null;
  status_salvar = null;

  constructor(private api: ApiService) {
  }

  ngOnInit() {

    this.api.alunos().subscribe(alunos => {this.alunos = alunos});
    this.api.turmas().subscribe(turmas => {this.turmas = turmas});

   
  }

  //a) ano letivo;
  //b) código da turma;
  //c) nome do aluno; e
  //d) situação do aluno na turma.

  limpar() {
    this.aluno = null;
    this.turma = null;
    this.anoLetivo = null;
    this.situacaoAluno = null;
}

  salvar() {
    this.api.gerenciarMatriculas(this.aluno, this.turma, this.anoLetivo, this.situacaoAluno)
      .subscribe(
        () => {
          this.status_salvar = true;
          this.limpar();
        },
        () => this.status_salvar = false
      );
  }
}
