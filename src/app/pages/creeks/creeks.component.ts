import { Component, OnInit } from '@angular/core';
import { CreeksService } from './services/creeks.service';
import { Creek } from './models/Creek';

@Component({
  selector: 'app-creeks',
  templateUrl: './creeks.component.html',
  styleUrls: ['./creeks.component.scss'],
  providers: [CreeksService],
})
export class CreeksComponent implements OnInit {
  creeks: Creek[];
  filteredCreeks: Creek[];

  types: string[];
  filter: { name: string; province: string; type: string };

  constructor(private creeksService: CreeksService) {
    this.creeks = [];
    this.filteredCreeks = [];
    this.types = ['arena', 'rocas', 'cantos rodados'];
    this.filter = { name: '', province: '', type: '' };
  }

  ngOnInit(): void {
    this.creeksService.getCreeks().subscribe((creeksData: Creek[]) => {
      console.log('Resultado petición API: ', creeksData);

      this.creeks = creeksData;
      this.filteredCreeks = creeksData;
    });
  }

  filterName(): void {
    this.filteredCreeks = this.creeks;

    this.filteredCreeks = this.filteredCreeks.filter((creek) => {
      return creek.name.toLowerCase().includes(this.filter.name.toLowerCase());
    });
  }

  filterProvince(): void { }
  filterType(): void { }
}
