import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  types: string[];
  provinces: string[];

  constructor(
    private route: ActivatedRoute,
    private creeksService: CreeksService
  ) {
    this.creekToUpdate = '';
    this.isThereCreek = false;
    this.creekId = '';
    this.types = this.creeksService.types;
    this.provinces = this.creeksService.provinces;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.creekId = params.get('creekId');
    });
    this.getCreekFromParams();
  }

  submitSelectCreekForm(event: any): void {
    this.creekId = event.target.id.value;
    this.creeksService
      .getCreekId(event.target.id.value)
      .subscribe((creekIdData: any) => {
        this.creekToUpdate = creekIdData;
        this.isThereCreek = true;
      });
  }

  getCreekFromParams(): void {
    this.creeksService
      .getCreekId(this.creekId)
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
      let editCreek = {
        name: event.target.name.value ? event.target.name.value : undefined,
        province: event.target.province.value
          ? event.target.province.value
          : undefined,
        description: event.target.description.value
          ? event.target.description.value
          : undefined,
        lat: event.target.lat.value ? event.target.lat.value : undefined,
        lng: event.target.lng.value ? event.target.lng.value : undefined,
        type: event.target.type.value ? event.target.type.value : undefined,
        img: event.target.img.files[0] ? event.target.img.files[0] : undefined,
      };
      console.log('editCreek', editCreek);

      const form = new FormData();

      Object.entries(editCreek).forEach((field) => {
        console.log('field: ', field);
        return field[1] !== undefined && form.append(field[0], field[1]);
      });

      this.creeksService
        .editCreek(this.creekId, form)
        .subscribe((editedCreekData: any) => {
          console.log(editedCreekData);
        });
    }
  }
}
