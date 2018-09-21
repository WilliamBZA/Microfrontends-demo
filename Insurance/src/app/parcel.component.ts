import { Component, OnInit, Input } from '@angular/core';
import {mountRootParcel} from 'single-spa';

import Vue from 'vue/dist/vue.js';
import singleSpaVue from 'single-spa-vue';

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
              template: '<div id="demo">\n' +
              '<form id="search">\n' +
                'Search <input name="query" v-model="searchQuery">\n' +
              '</form>\n' +
              '<table>\n' +
                '<thead>\n' +
                  '<tr>\n' +
                    '<th v-for="key in columns"\n' +
                    '@click="sortBy(key)"\n' +
                    ':class="{ active: sortKey == key }">\n' +
                      '{{ key | capitalize }}\n' +
                    '</th>\n' +
                  '</tr>\n' +
                '</thead>\n' +
                '<tbody>\n' +
                  '<tr v-for="entry in filteredData">\n' +
                    '<td v-for="key in columns">\n' +
                      '{{entry[key]}}\n' +
                    '</td>\n' +
                  '</tr>\n' +
                '</tbody>\n' +
              '</table>\n' +
            '</div>',
            computed: {
              filteredData: function () {
                var filterKey = this.searchQuery && this.searchQuery.toLowerCase();
                var data = this.data;
                if (filterKey) {
                  data = data.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                      return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
                    });
                  })
                }
                return data;
              }
            },
            filters: {
              capitalize: function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
              }
            },
          },
        });

        const domElement = document.getElementById('parcelContainer');
        const parcelProps = { domElement, customProp1: 'foo',
          searchQuery: '',
          columns: ['name', 'power'],
          data: [
            { name: 'Chuck Norris', power: Infinity },
            { name: 'Bruce Lee', power: 9000 },
            { name: 'Jackie Chan', power: 7000 },
            { name: 'Jet Li', power: 8000 }
          ]
        };
        const parcel = mountRootParcel(vueLifecycles, parcelProps);

        // The parcel is being mounted. We can wait for it to finish with the mountPromise.
        parcel.mountPromise.then(() => {
          console.log('finished mounting parcel!');
        });
    }
  }