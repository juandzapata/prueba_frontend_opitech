import { Component } from '@angular/core';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  cardInfo = false;
  dataCount = 0;
  data: any[] = [];
  selectedStatus = '';
  filterOption = '';
  selectedFilter = '';
  filtersInfo: any[] = [];
  filteredData: any[] = [];

  constructor(private dataService: JsonDataService) {}

  ngOnInit() {
    this.filterStatusData();
    this.getData();
  }

  /**
   * Obtiene los datos del servicio y los asigna a la variable data
   */
  getData() {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.data = data;
        this.filterStatusData();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  /**
   * Filtra los datos por el estado seleccionado
   */
  filterStatusData() {
    if (this.selectedStatus == '') {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter(
        (item) => item.status === this.selectedStatus
      );
    }
    this.dataCount = this.filteredData.length;
  }

  /**
   * Filtra los datos por el filtro especifico seleccionado por el usuario
   */
  filterData() {
    if (this.selectedFilter == '') {
      this.filteredData = this.data;
    } else {
      if (this.filterOption == 'priority') {
        this.filteredData = this.data.filter(
          (item) => item.priority === this.selectedFilter
        );
      } else{
        this.filteredData = this.data.filter(
          (item) => item.customerSatisfaction === this.selectedFilter
        );
      }
    }
    this.dataCount = this.filteredData.length;
    this.closeCard();
  }

  /**
   * Recoge las opciones de los filtros que se mostrarán en el select
   */
  selectFilters() {
    if (this.filterOption == 'priority') {
      this.filtersInfo = ['High', 'Medium', 'Low'];
    } else if (this.filterOption == 'satisfaction') {
      this.filtersInfo = ['100%', '75%', '50%', '25%', '0%'];
    }
  }

  /**
   * Muestra la tarjeta con la información del nuevo filtro
   */ 
  showCard() {
    this.cardInfo = true;
  }

  /**
   * Cierra la tarjeta con la información del nuevo filtro
   */
  closeCard() {
    this.cardInfo = false;
  }
}
