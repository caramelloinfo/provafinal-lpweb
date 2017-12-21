import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lista-matriculas',
  templateUrl: './lista-matriculas.component.html',
  styleUrls: ['./lista-matriculas.component.css']
})
export class ListaMatriculasComponent implements OnInit {

  turmas = [];
  alunos = [];


  constructor(private api: ApiService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.api.alunos().subscribe(alunos => this.alunos = alunos),
    this.api.turmas().subscribe(turmas => this.turmas = turmas);
    


  }

  //this.escolaService.getFrequencias()
     // .subscribe(frequencias => this.frequencias = frequencias)

}