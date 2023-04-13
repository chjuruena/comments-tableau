
import { Component, OnInit } from '@angular/core';
import * as Tableau from 'tableau-api-js';

const url = 'https://public.tableau.com/app/profile/irena.resource/viz/IRENAREsourceRenewableEnergyRankings/Rankings';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  constructor() {}

    public initViz(): void {
      const containerDiv: any = document.getElementById('vizContainer');
      const vizUrl = 'https://public.tableau.com/views/IRENAREsourceRenewableEnergyRankings/Rankings';
      
      const options = {
      hideTabs: true,
      width: "80%",
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
  
}
