import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-historico-do-aluno',
  templateUrl: './historico-do-aluno.component.html',
  styleUrls: ['./historico-do-aluno.component.css']
})
export class HistoricoDoAlunoComponent implements OnInit {
aluno = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.alunoNotas(id)
      .subscribe(aluno => this.aluno = aluno);
  }

}
