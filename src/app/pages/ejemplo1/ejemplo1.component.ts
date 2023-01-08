import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  CommunitiesSelectorBehaviorModel,
  CommunitiesSelectorDataModel,
  IesaCommunitiesSelectorComponent,
} from 'iesa-communities-selector';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.scss'],
})
export class Ejemplo1Component implements OnInit {
  // CommunitySelector
  @ViewChild('selector')
  private childReferenceCommunitySelector!: IesaCommunitiesSelectorComponent;
  public dataCommunitySelector!: CommunitiesSelectorDataModel;
  public behaviorCommunitySelector!: CommunitiesSelectorBehaviorModel;
  constructor() {
    this.prepareCommunitySelector();
  }

  public ngOnInit(): void {}

  //#region Inicializacion de librerias comunes
  private prepareCommunitySelector(): void {
    this.dataCommunitySelector = new CommunitiesSelectorDataModel();
    this.dataCommunitySelector.environment = environment.StrutureDataCloudAPI;
    this.behaviorCommunitySelector = new CommunitiesSelectorBehaviorModel();
    this.behaviorCommunitySelector.isEditable = true;
  } 
  //#endregion Inicializacion de librerias comunes

  //#region Funciones comunes

  //#endregion Funciones comunes

  //#region Funciones de callback de librerias comunes

  public onChangeCommunitySelected(event: any): void {}

  //#endregion Funciones de callback de librerias comunes

  //#region Llamadas a los servicios

  //#endregion Llamadas a los servicios
}
