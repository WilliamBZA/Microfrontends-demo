import { Component, OnInit, Input } from '@angular/core';
import {mountRootParcel} from 'single-spa';

import Vue from 'vue/dist/vue.js';
import singleSpaVue from 'single-spa-vue';

import allrisk from './allrisk.vue'

@Component({
    selector: 'parcel-component',
    templateUrl: './parcel.component.html',
    styleUrls: ['./parcel.component.css']
  })
  export class ParcelComponent implements OnInit {
    @Input() config: any;
   
    constructor() { }
   
    ngOnInit() {
        

        const vueLifecycles = singleSpaVue({
            Vue,
            appOptions: {
              template: '<div>some template</div>'
            }
          });

        const domElement = document.getElementById('parcelContainer');
        const parcelProps = {domElement, customProp1: 'foo'};
        const parcel = mountRootParcel(vueLifecycles, parcelProps);

        // The parcel is being mounted. We can wait for it to finish with the mountPromise.
        parcel.mountPromise.then(() => {
          console.log('finished mounting parcel!');
        });
    }
  }