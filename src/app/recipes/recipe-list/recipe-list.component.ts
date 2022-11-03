import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Le Cassoulet',
      'Le cassoulet tient son nom de la cassole en terre cuite émaillée dite caçòla en occitan et fabriquée à Issel.',
      'https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/recipe/public/Import/cassoulet-classique_ss.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=393'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
