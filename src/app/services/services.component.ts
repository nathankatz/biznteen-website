import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'services-page',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
  constructor(private router: Router,
  private fb: FormBuilder  ) {
  }

  ngOnInit() {

  }


}
