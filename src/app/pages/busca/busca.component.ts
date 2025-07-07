import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FormBuscaComponent } from '../../shared/form-busca/form-busca.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PassagemService } from '../../core/services/passagem.service';
import { DadosBusca, Passagem } from '../../core/types/types';
import { PassagemComponent } from '../../shared/passagem/passagem.component';
import { NgFor } from '@angular/common';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { FiltrosComplementaresComponent } from '../../shared/filtros-complementares/filtros-complementares.component';

@Component({
  selector: 'app-busca',
  imports: [
    FormBuscaComponent,
    ContainerComponent,
    BannerComponent,
    FooterComponent,
    PassagemComponent,
    NgFor,
    FiltrosComplementaresComponent
  ],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss'
})

export class BuscaComponent {
  passagens: Passagem[] = []
  constructor(private passagemService: PassagemService,
    private formBuscaService: FormBuscaService
  ){}
  ngOnInit(): void {
    const filtroPadrao = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva'
    }
    const busca = this.formBuscaService.formEstaValido ? this.formBuscaService.obterDadosBusca() : filtroPadrao
    this.passagemService.getPassagens(busca)
      .subscribe(res => {
        console.log(res);
        this.passagens = res.resultado
      })
  }

  busca (ev: DadosBusca) {
    this.passagemService.getPassagens(ev)
      .subscribe(res => {
        console.log(res);
        this.passagens = res.resultado
      })
  }

}
