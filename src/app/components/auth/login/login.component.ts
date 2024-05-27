import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    loading: boolean = false;

    constructor(
        private router: Router,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        });
    }

    login() {
        
    }

    register() {
        
    }

    resetPassword() {
        
    }
}
