import { Component } from '@angular/core';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  
  dataCount = 0;
  data: any[] = [];
  selectedStatus = '';
  filteredData: any[] = [];

  constructor(private dataService: JsonDataService){}

  ngOnInit(){
    this.filterData();
    this.getData();    
  }
 

  /**
   * Obtiene los datos del servicio y los asigna a la variable data
   */
  getData(){
    this.dataService.getData().subscribe({
      next: (data) => {
        this.data = data;
        this.filterData();
      },
      error: (err) => { 
        console.error(err);
      }
    });
  }

  /**
   * Filtra los datos por el estado seleccionado
   */
  filterData(){
    if(this.selectedStatus == ''){
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter(item => item.status === this.selectedStatus);
    }
    this.dataCount = this.filteredData.length;
  }
  
}
