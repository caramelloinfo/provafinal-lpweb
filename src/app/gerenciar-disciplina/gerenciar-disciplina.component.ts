import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-gerenciar-disciplina',
  templateUrl: './gerenciar-disciplina.component.html',
  styleUrls: ['./gerenciar-disciplina.component.css']
})
export class GerenciarDisciplinaComponent implements OnInit {

  disciplinas = [];
  notaFinal;

  nota1: number = null;
  nota2: number = null;
  nota3: number = null;
  nota4: number = null;
  frequencia: number = null;

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.disciplinas()
      .subscribe(disciplinas => {
        for (let disciplina of disciplinas) {
          this.api.turmasNaDisciplina(disciplina.id)
            .subscribe(turmas => {
              disciplina.turmas = [];
              for (const turma of turmas) {
                disciplina.turmas.push(turma.turma.id);
                disciplina.turmas.push(turma.turma.ano);
                disciplina.turmas.push(turma.turma.codigo);
              }
              disciplina.turmas = disciplina.turmas.join(', ');
            });
          this.api.professoresNaTurma(disciplina.id)
            .subscribe(professores => {
              disciplina.professores = [];
              for (const professor of professores) {
                disciplina.professores.push(professor.professor.nome);
              }
              disciplina.professores = disciplina.professores.join(', ');
            });
          this.api.alunosNaDisciplina(disciplina.id)
            .subscribe(alunos => {
              disciplina.alunos = [];
              for (const aluno of alunos) {
                disciplina.alunos.push(aluno.aluno.nome);
                disciplina.alunos.push(aluno.aluno.nota1);
                disciplina.alunos.push(aluno.aluno.nota2);
                disciplina.alunos.push(aluno.aluno.nota3);
                disciplina.alunos.push(aluno.aluno.nota4);

                let notaFinal: number;
                let denominador: number = 0;
                let acumulador: number = 0;
                if (!this.nota1 && !this.nota2 && !this.nota3 && !this.nota4) {
                  return null;
                }
                if (this.nota1) {
                  denominador++;
                  acumulador += this.nota1;
                }
                if (this.nota2) {
                  denominador++;
                  acumulador += this.nota2;
                }
                if (this.nota3) {
                  denominador++;
                  acumulador += this.nota3;
                }
                if (this.nota4) {
                  denominador++;
                  acumulador += this.nota4;
                }

                return notaFinal = acumulador / denominador;

               }
            
              disciplina.alunos = disciplina.alunos.join(', ');
        });

  }
        this.disciplinas = disciplinas;
      });
  }
}


