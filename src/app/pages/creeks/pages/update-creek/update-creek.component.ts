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

  submitEditCreek(event: any): void {
    if (
      confirm('Está seguro de actualizar la cala:' + event.target.name.value)
    ) {
      let name;
      let img;
      let province;
      let description;
      let lat;
      let lng;

      event.target.name.value
        ? (name = event.target.name.value)
        : (name = undefined);

      event.target.img.value
        ? (img = event.target.img.value)
        : (img = undefined);

      event.target.province.value
        ? (province = event.target.province.value)
        : (province = undefined);

      event.target.description.value
        ? (description = event.target.description.value)
        : (description = undefined);

      event.target.lat.value
        ? (lat = event.target.lat.value)
        : (lat = undefined);

      event.target.lng.value
        ? (lng = event.target.lng.value)
        : (lng = undefined);

      let editCreek = {
        name: event.target.name.value,
        province: event.target.province.value,
        description: event.target.description.value,
        lat: event.target.lat.value,
        lng: event.target.lng.value,
        type: event.target.type.value,
        img: event.target.img.value,
      };

      this.creekService
        .editCreek(this.creekId, editCreek)
        .subscribe((editedCreekData: any) => {
          console.log(editedCreekData);
        });
    }
  }
}
