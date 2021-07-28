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
      let type;

      event.target.name.value
        ? (name = event.target.name.value)
        : (name = undefined);

      // event.target.img.files
      //   ? (img = event.target.img.files)
      //   : (img = undefined);
      console.log('imagen', event.target.img.files);

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

      event.target.type.value
        ? (type = event.target.type.value)
        : (type = undefined);

      let editCreek = {
        name,
        province,
        description,
        lat,
        lng,
        type,
        img: event.target.img.files[0] ? event.target.img.files[0] : undefined,
      };
      console.log('editCreek', editCreek);

      const form = new FormData();

      Object.entries(editCreek).forEach((field) =>
        form.append(field[0], field[1])
      );

      this.creekService
        .editCreek(this.creekId, form)
        .subscribe((editedCreekData: any) => {
          console.log(editedCreekData);
        });
    }
  }
}
