import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculadora-e',
  templateUrl: './calculadora-e.page.html',
  styleUrls: ['./calculadora-e.page.scss'],
})
export class CalculadoraEPage implements OnInit {

  mandioca_frita: boolean=false;
  batata_frita: boolean=false;
  amendoim: boolean=false;
  torresmo: boolean=false;
  linguica_acebolada: boolean=false;
  bolinho_arroz: boolean=false;
  frango_passarinho: boolean=false;
  medalahao_frango: boolean=false;
  polenta_frita: boolean=false;
  bolinho_bacalhau: boolean=false;
  espetinho: boolean=false;
  tilapia_frita: boolean=false;
  batata_rustica: boolean=false;
  iscas_file: boolean=false;
  azeitona_temperada: boolean=false;
  tabua_frios: boolean=false;
  porcoes: any;
  item_porcoes: number=0;

  constructor(
    private router: Router,
    private storage: Storage,
    public toastCtrl: ToastController,
    public alertController: AlertController
 ) { }

  ngOnInit() {
  }

  formCalculadoraf(){
    this.porcoes = [this.mandioca_frita, this.batata_frita, this.amendoim, this.torresmo, this.linguica_acebolada, this.bolinho_arroz, this.frango_passarinho, this.medalahao_frango, this.polenta_frita, this.bolinho_bacalhau, this.espetinho, this.tilapia_frita, this.batata_rustica, this.iscas_file, this.azeitona_temperada, this.tabua_frios];
    
    this.porcoes.forEach(element => {
      if(element == true){
        this.item_porcoes ++;
      }
    });
    
    this.storage.set('session_porcoes', this.porcoes);
    this.storage.set('session_item_porcoes', this.item_porcoes);
    this.router.navigate(['/calculadora-f']);
    console.log(this.porcoes, this.item_porcoes);
    }
}