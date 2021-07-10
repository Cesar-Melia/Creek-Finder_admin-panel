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

  constructor(private creeksService: CreeksService) {
    this.creeks = [];
  }

  ngOnInit(): void {
    this.creeksService.getCreeks().subscribe((creeksData: any) => {
      console.log('Resultado petición API: ', creeksData);

      this.creeks = creeksData;
    });
  }
}
