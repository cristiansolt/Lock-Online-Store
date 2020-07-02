import { Component, OnInit } from '@angular/core';
import { Produs } from './produse.model';
import { Categorie } from './categorii.model';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import * as productslist from './productslist.json';
import { Subcategorie } from './subcategorii.model';



@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.css']
})

export class ProduseComponent implements OnInit {

  panelOpenState = false;
  
  private router : any;
  private subrouter : any;
  
  public products: any = (productslist as any).default

  public products_display: any = []; 

  public selected_category:  string;
  public selected_subcategory: string;

  public categories : Array<Categorie> = [
    {nume: "toate"},
    {nume: "lacati"},
    {nume: "iale"},
    {nume: "manere"},
    {nume: "accesorii"},
  ];

  public subcategories : Array<Subcategorie> = [
    {nume: "toate",},
    {nume: "kale",},
    {nume: "apecs"},
    {nume: "elbor"},
    {nume: "avers"},
  ];


  constructor(private route: ActivatedRoute) {
     
  }

  ngOnInit(): void {
    this.router = this.route.params.subscribe(params => {
      this.selected_category = params['category'];
      this.selected_subcategory = params["subcategory"];
      this.subrouter = this.route.queryParams.subscribe(query =>{
        this.getProductsByCategory(params['category'],query["subcat"])
      })
   });
  }




  getProductsByCategory(category_name: string,subcategory_name: string = null) : void
  {
    console.log(subcategory_name);
    if(category_name == 'toate'){
      this.products_display = this.products;
    } else {
      if(!subcategory_name || subcategory_name == 'toate'){
        this.products_display = this.products.filter((item) => {
          return item.category == category_name;
        });
      } else {
        this.products_display = this.products.filter((item) => {
          return (item.category == category_name && item.subcategory == subcategory_name)
        })
      }
    }
  }
 
}

