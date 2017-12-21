import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  //a) ano letivo;
  //b) código da turma;
  //c) nome do aluno; e
  //d) situação do aluno na turma.
  //this.ano, this.codigoTurma, this.aluno, this.situacaoAluno

  gerenciarMatriculas(alunoId: number, turmaId: number,) {
    const registro = {
      alunoId: alunoId, 
      turmaId: turmaId
    };
    return this.http.post(this.API_URL + '/matriculas', registro);
  }

  matricular(alunoId: number, turmaId: number, situacao: string) {
    const registro = {
      alunoId: alunoId, 
      turmaId: turmaId,
      situacao: situacao
    };
    return this.http.post(this.API_URL + '/matriculas', registro);
  }
  turmas(): Observable<any> {
    return this.http.get(this.API_URL + '/turmas');
  }
  turma(alunoId: number): Observable<any> {
    return this.http.get(this.API_URL + '/turmas');
  }
  alunos(): Observable<any> {
    return this.http.get(this.API_URL + '/alunos');
  }
  aluno(alunoId: number): Observable<any> {
    return this.http.get(this.API_URL + '/alunos');
  }
  
}
