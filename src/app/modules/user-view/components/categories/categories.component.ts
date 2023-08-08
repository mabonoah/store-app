import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriesApiService } from '../../services/categories-api.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: string[] = [];
  selectedCategory: string = '';
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor(private categoriesApiService: CategoriesApiService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  private getAllCategories(): void {
    this.categoriesApiService.getAllCategories()
      .subscribe((categories: string[]) => {
        this.categories = categories;
      });
  }

  onSelectCategory(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
    this.onSelect.emit(selectedCategory);
  }

}
