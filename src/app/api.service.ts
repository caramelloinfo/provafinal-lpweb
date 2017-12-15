import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  turmas(): Observable<any> {
    return this.http.get(this.API_URL + '/turmas');
  }

  disciplinas(): Observable<any> {
    return this.http.get(this.API_URL + '/disciplinas');
  }

  professores(): Observable<any> {
    return this.http.get(this.API_URL + '/professors');
  }

  horarios(): Observable<any> {
    return this.http.get(this.API_URL + '/horarios');
  }

  alunos(): Observable<any> {
    return this.http.get(this.API_URL + '/alunos');
  }
  aluno(alunoId: number): Observable<any> {
    return this.http.get(this.API_URL + '/alunos');
  }

  matriculas(): Observable<any> {
    return this.http.get(this.API_URL + '/matriculas');
  }

  matriculasNaTurma(turmaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/matriculas?turmaId=' + turmaId);
  }

  turmasNaDisciplina(turmaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/turmas?turmaId=' + turmaId);
  }

  professoresNaTurma(turmaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/professoresNasTurmas?turmaId=' + turmaId + '&_expand=professor');
  }

  alunosNaDisciplina(disciplinaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/notas?disciplinaId=' + disciplinaId + '&_expand=aluno&_expand=disciplina');
  }
  

  frequencias(): Observable<any> {
    return this.http.get(this.API_URL + '/frequencias?_expand='
      + 'aluno&_expand=professor&_expand=turma&_expand=disciplina&_expand=horario&_sort=turmaId,alunoId');
  }
  alunosNotas(): Observable<any> {
    return this.http.get(this.API_URL + '/alunosNotas');
  }

  alunoNotas(alunoId: number): Observable<any> {
    return this.http.get(this.API_URL + '/alunosNotas');
  }

  cadastrarFrequencia(turmaId: number, disciplinaId: number, professorId: number,
                      horarioId: number, alunoId: number,
                      data: string, status: string) {
    const registro = {
      turmaId: turmaId, disciplinaId: disciplinaId, professorId: professorId,
      horarioId: horarioId, alunoId: alunoId,
      data: data, status: status
    };
    return this.http.post(this.API_URL + '/frequencias', registro);
  }

  registrarNotas(alunoId: number, nota1: string, nota2: string, nota3: string, nota4: string) {
    const registro = {
      alunoId: alunoId, 
      nota1: nota1,
      nota2: nota2,
      nota3: nota3,
      nota4: nota4
      
    };
    return this.http.post(this.API_URL + '/alunosNotas', registro);
  }
}
