import { Component, OnInit } from '@angular/core';
import * as GoldenLayout from 'golden-layout';

//const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
//const $ = require( "jquery" )( window );

@Component({
  selector: 'app-my-golden-layout-cores',
  templateUrl: './my-golden-layout-cores.component.html',
  styleUrls: ['./my-golden-layout-cores.component.scss']
})
export class MyGoldenLayoutCoresComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
    var myLayout = new GoldenLayout( this.createDefaultLayout() );
    myLayout.registerComponent( 'app-painel-azul', function( container, componentState ){
      console.log(">>> registerComponent azul");
      container.getElement().html( '<h2>' + componentState.componentName + '</h2>' );
    });
    myLayout.registerComponent( 'app-painel-verde', function( container, componentState ){
      console.log(">>> registerComponent verde " );
      container.getElement().html( '<h2>' + componentState.componentName + '</h2>' );
    });
    myLayout.registerComponent( 'app-painel-vermelho', function( container, componentState ){
      console.log(">>> registerComponent vermelho");
      container.getElement().html( '<h2>' + componentState.componentName + '</h2>' );
    });
    myLayout.init();

    myLayout.on( 'stateChanged', function(){
      console.log(">>> stateChanged");
      var currentState = JSON.stringify( myLayout.toConfig() );
      console.log(">>>>> length: " + currentState.length);
      console.log(">>>>> currentState: " + JSON.stringify(currentState));
      //localStorage.setItem( 'savedState', state );
    });

    //nao
    myLayout.on( 'tabActivated', function(event:any){
      console.log(">>> tabActivated");
    });

    //sim
    myLayout.on( 'windowClosed', function(container, componentState ){
      console.log(">>> windowClosed");
      myLayout.destroy();
      
    });

    //sim
    myLayout.on( 'windowOpened', function(){
      console.log(">>> windowOpened");
    });

    //sim
    myLayout.on( 'selectionChanged', function(){
      console.log(">>> selectionChanged");
    });

    

  }

  createDefaultLayout() {
    return {
      content:[
      {
        type: 'row',
        content:[
          {type: 'component', componentName: 'app-painel-azul', title: 'AZUL!', isClosable: true},
          {type: 'column',
            content:[
              { type: 'component', componentName: 'app-painel-verde', title: 'VERDE!', isClosable: true },
              { type: 'component', componentName: 'app-painel-vermelho', title: 'VERMELHO', isClosable: true }]
            }
        ]
      }]
      ,
      settings:{
        hasHeaders: true,
        constrainDragToContainer: true,
        reorderEnabled: true,
        selectionEnabled: true,
        popoutWholeStack: true,
        blockedPopoutsThrowError: true,
        closePopoutsOnUnload: true,
        showPopoutIcon: true,
        showMaximiseIcon: true,
        showCloseIcon: true
      },
      dimensions: {
        borderWidth: 5,
        minItemHeight: 10,
        minItemWidth: 10,
        headerHeight: 20,
        dragProxyWidth: 300,
        dragProxyHeight: 200
      },
      labels: {
        close: 'close',
        maximise: 'maximise',
        minimise: 'minimise',
        popout: 'open in new window'
      }
    };
  }
}
