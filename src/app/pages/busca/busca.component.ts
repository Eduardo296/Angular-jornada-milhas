import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FormBuscaComponent } from '../../shared/form-busca/form-busca.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PassagemService } from '../../core/services/passagem.service';
import { Passagem } from '../../core/types/types';

@Component({
  selector: 'app-busca',
  imports: [
    FormBuscaComponent,
    ContainerComponent,
    BannerComponent,
    FooterComponent
  ],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss'
})

export class BuscaComponent {
  passagens: Passagem[] = []
  constructor(private passagemService: PassagemService){}
  ngOnInit(): void {
    const filtroPadrao = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva'
    }
    this.passagemService.getPassagens(filtroPadrao)
      .subscribe(res => {
        console.log(res);
        this.passagens = res.resultado
      })
  }
}
