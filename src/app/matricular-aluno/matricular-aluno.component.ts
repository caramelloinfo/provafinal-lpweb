import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-matricular-aluno',
  templateUrl: './matricular-aluno.component.html',
  styleUrls: ['./matricular-aluno.component.css']
})
export class MatricularAlunoComponent implements OnInit {

  turmas = null;  
  alunos = null; 
  turma = null;
  aluno = null;
  situacao = null; 
  status_salvar = null;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.turmas()
      .subscribe(turmas => {
        this.turmas = turmas;
        this.api.alunos()
          .subscribe(alunos => {
            this.alunos = alunos;
          });
      });



  }

  limpar() {
    this.alunos = null;
    this.turmas = null;
    this.situacao = "AM"
    
  }

  salvar() {
    this.api.matricular(this.turma, this.aluno, this.situacao)
      .subscribe(
      () => {
        this.status_salvar = true;
        this.limpar();
      },
      () => this.status_salvar = false
      );
  }
}
