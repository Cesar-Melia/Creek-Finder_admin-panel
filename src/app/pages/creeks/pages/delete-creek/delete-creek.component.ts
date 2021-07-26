import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreeksService } from '../../services/creeks.service';

@Component({
  selector: 'app-delete-creek',
  templateUrl: './delete-creek.component.html',
  styleUrls: ['./delete-creek.component.scss'],
})
export class DeleteCreekComponent implements OnInit {
  deleteCreekForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private deleteCreekService: CreeksService
  ) {
    this.deleteCreekForm = this.formBuilder.group({
      id: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submitDeleteCreekForm(event: any): void {
    if (confirm('¿estas seguro de querer borrar la cala?')) {
      this.deleteCreekService
        .deleteCreek(event.target.id.value)
        .subscribe((deleteCreekData: any) => {
          console.log(deleteCreekData);
        });
      console.log(this.deleteCreekForm);
    }
  }
}
