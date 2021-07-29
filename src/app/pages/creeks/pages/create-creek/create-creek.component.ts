import { Component, OnInit } from '@angular/core';
import { CreeksService } from '../../services/creeks.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Creek } from '../../models/Creek';

@Component({
  selector: 'app-create-creek',
  templateUrl: './create-creek.component.html',
  styleUrls: ['./create-creek.component.scss'],
})
export class CreateCreekComponent implements OnInit {
  createCreekForm: FormGroup;
  imageURL: string;
  types: string[];
  provinces: string[];
  image: any;

  constructor(
    private creeksService: CreeksService,
    private formBuilder: FormBuilder
  ) {
    this.imageURL = '';
    this.types = this.creeksService.types;
    this.provinces = this.creeksService.provinces;
    this.image = null;

    this.createCreekForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      // img: [null, [Validators.required]],
      province: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lat: ['', [Validators.required]],
      lng: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submitForm(event: any): void {
    console.log(event);
    let newCreek = {
      name: this.createCreekForm.value.name,
      img: event.target.img.files[0],
      province: this.createCreekForm.value.province,
      type: this.createCreekForm.value.type,
      description: this.createCreekForm.value.description,
      lat: this.createCreekForm.value.lat,
      lng: this.createCreekForm.value.lng,
    };
    console.log('img: ', this.createCreekForm.value.img);

    const form = new FormData();

    Object.entries(newCreek).forEach((field) => {
      console.log('field: ', field);
      return form.append(field[0], field[1]);
    });

    this.creeksService.postCreek(form).subscribe((createCreekData: Creek) => {
      console.log('Cala creada: ', createCreekData);
    });
  }
}
