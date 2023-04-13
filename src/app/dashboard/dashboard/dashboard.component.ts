
import { Component, OnInit, Renderer2, VERSION } from '@angular/core';
import * as Tableau from 'tableau-api-js';


const url = 'https://public.tableau.com/app/profile/irena.resource/viz/IRENAREsourceRenewableEnergyRankings/Rankings';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public initViz(): void {
    const containerDiv: any = document.getElementById('vizContainer');
    // const vizUrl = 'https://public.tableau.com/views/WorldIndicators/GDPpercapita';
    const vizUrl = 'https://public.tableau.com/views/IRENAREsourceRenewableEnergyRankings/Rankings';
    
    const options = {
      width: "1200px",
      height: 700
    };

    const viz = new Tableau.Viz(containerDiv, vizUrl, options);
  }

  public ngOnInit(): void {
    this.initViz();
  }
  

}
