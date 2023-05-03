import { Component} from '@angular/core';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {

  data: any[] = [];

  constructor(private dataService: JsonDataService){}

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.dataService.getData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => { 
        console.error(err);
      }
    });
  }
}
