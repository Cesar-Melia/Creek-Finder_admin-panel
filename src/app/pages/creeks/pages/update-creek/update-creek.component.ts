import { Component, OnInit } from '@angular/core';
import { CreeksService } from '../../services/creeks.service';

@Component({
  selector: 'app-update-creek',
  templateUrl: './update-creek.component.html',
  styleUrls: ['./update-creek.component.scss'],
})
export class UpdateCreekComponent implements OnInit {
  creekToUpdate: any;
  isThereCreek: Boolean;
  creekId: string;

  constructor(private creekService: CreeksService) {
    this.creekToUpdate = '';
    this.isThereCreek = false;
    this.creekId = '';
  }

  ngOnInit(): void {}

  submitCreateCreekForm(event: any): void {
    this.creekId = event.target.id.value;
    this.creekService
      .getCreekId(event.target.id.value)
      .subscribe((creekIdData: any) => {
        console.log(creekIdData);
        this.creekToUpdate = creekIdData;
        this.isThereCreek = true;
      });
  }
}
