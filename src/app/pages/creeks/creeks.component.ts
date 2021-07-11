import { Component, OnInit } from '@angular/core';
import { CreeksService } from './services/creeks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  // inputName: string;
  // inputProvince: string;
  // inputType: string;

  constructor(private creeksService: CreeksService) {
    this.creeks = [];
    this.filteredCreeks = [];
    this.types = ['arena', 'rocas', 'cantos rodados'];
    this.filter = { name: '', province: '', type: '' };
    // this.inputName = '';
    // this.inputProvince = '';
    // this.inputType = '';
  }

  ngOnInit(): void {
    this.creeksService.getCreeks().subscribe((creeksData: any) => {
      console.log('Resultado petición API: ', creeksData);

      this.creeks = creeksData;
      this.filteredCreeks = creeksData;
    });
  }

  filterName(): void {
    this.filteredCreeks = this.filteredCreeks.filter((creek) => {
      console.log(JSON.stringify(creek));

      return creek.name.toLowerCase().includes(this.filter.name.toLowerCase());
    });
  }

  filterProvince(): void {}
  filterType(): void {}
}
