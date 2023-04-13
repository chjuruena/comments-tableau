
import { Component, OnInit, Renderer2, VERSION } from '@angular/core';
import * as Tableau from 'tableau-api-js';


const url = 'https://public.tableau.com/app/profile/irena.resource/viz/IRENAREsourceRenewableEnergyRankings/Rankings';


@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // now declare an instance var
  
  constructor() {}

    public initViz(): void {
      const containerDiv: any = document.getElementById('vizContainer');
      // const vizUrl = 'https://public.tableau.com/views/WorldIndicators/GDPpercapita';
      const vizUrl = 'https://public.tableau.com/views/IRENAREsourceRenewableEnergyRankings/Rankings';
      
      const options = {
      hideTabs: true,
      width: '800px',
      height: '700px',
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };

      const viz = new Tableau.Viz(containerDiv, vizUrl, options);
    }

    public ngOnInit(): void {
      this.initViz();
    }
    

    // var placeholderDiv = document.getElementById('tableauViz');
    // var url = 'https://public.tableau.com/app/profile/irena.resource/viz/IRENAREsourceRenewableEnergyRankings/Rankings';
    // var options = {
    //   hideTabs: true,
    //   width: '800px',
    //   height: '700px',
    //   onFirstInteractive: function() {
    //     // The viz is now ready and can be safely used.
    //   }
    // };
    // this.tableauViz = new tableau.Viz(placeholderDiv, url, options);    
  // }
  
}
