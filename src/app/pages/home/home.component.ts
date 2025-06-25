import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { CardBuscaComponent } from '../../shared/card-busca/card-busca.component';
import { CardDepoimentoComponent } from '../../shared/card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from '../../shared/form-busca/form-busca.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PromocaoService } from '../../core/services/promocao.service';
import { Promocao } from '../../core/types/types';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent, 
    ContainerComponent, 
    CardBuscaComponent, 
    CardDepoimentoComponent, 
    FormBuscaComponent, 
    FooterComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(private servicoPromocao: PromocaoService) {

  }
  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe(
      res => {
        this.promocoes = res;
      }
    )
  }

}
