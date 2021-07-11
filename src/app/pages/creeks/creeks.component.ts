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
  provinces: string[];
  filter: { name: string; province: string; type: string };

  constructor(private creeksService: CreeksService) {
    this.creeks = [];
    this.filteredCreeks = [];
    this.types = ['', 'arena', 'rocas', 'cantos rodados'];
    this.provinces = [
      '',
      'Alicante',
      'Almería',
      'Asturias',
      'Barcelona',
      'Cádiz',
      'Cantabria',
      'Castellón',
      'La Coruña',
      'Gerona',
      'Granada',
      'Guipúzcoa',
      'Huelva',
      'Islas Baleares',
      'Lugo',
      'Málaga',
      'Murcia',
      'Las Palmas',
      'Pontevedra',
      'Tarragona',
      'Santa Cruz de Tenerife',
      'Valencia',
      'Vizcaya',
    ];

    this.filter = { name: '', province: '', type: '' };
  }

  ngOnInit(): void {
    this.creeksService.getCreeks().subscribe((creeksData: Creek[]) => {
      this.creeks = creeksData;
      this.filteredCreeks = creeksData;
    });
  }

  findCreeks(): void {
    this.filteredCreeks = this.creeks;

    this.filteredCreeks = this.filteredCreeks.filter((creek) => {
      return (
        creek.name.toLowerCase().includes(this.filter.name.toLowerCase()) &&
        creek.province
          .toLowerCase()
          .includes(this.filter.province.toLowerCase()) &&
        creek.type.toLowerCase().includes(this.filter.type.toLowerCase())
      );
    });
  }

  filterProvince(): void {}

  filterType(): void {}

  reset(): void {
    console.log('Reset');
    this.filteredCreeks = this.creeks;
  }
}
