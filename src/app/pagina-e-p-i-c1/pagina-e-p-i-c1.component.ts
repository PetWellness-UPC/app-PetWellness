import { Component, Renderer2, ElementRef } from '@angular/core';
import type { OnInit } from '@angular/core';

@Component({
  selector: 'epic01-pagina-e-p-i-c1',
  templateUrl: './pagina-e-p-i-c1.component.html',
  styleUrls: ['./pagina-e-p-i-c1.component.css'],
})
export class PaginaEPIC1Component implements OnInit {
  inputText: string = '';
  petType: string = '';

  articles = [
    { title: 'Respiracion en los perros: Las razas que más les cuesta', class: 'respiracionEnLosPerrosLasRazas', class2: 'favorito3' },
    { title: 'Carlinos para departamentos: La raza ideal?', class: 'carlinosParaDepartamentosLaRaz', class2: 'favorito2' },
    { title: 'La raza pug: Lindos pero enfermizos', class: 'laRazaPugLindosPeroEnfermizos', class2: 'favorito1' }
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  scrollToBottom(): void {
    const section = document.getElementById('Redireccion');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  search(): boolean {
    const elements = document.getElementsByClassName('bG4');
    let hasChangedOpacity = false;

    if (this.inputText && this.petType) {
      for (let i = 0; i < elements.length; i++) {
        this.renderer.setStyle(elements[i], 'opacity', '1');
        hasChangedOpacity = true;
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        this.renderer.setStyle(elements[i], 'opacity', '0');
      }
    }

    return hasChangedOpacity;
  }

  highlightMatchingArticles(): void {
    const queryWords = this.inputText.toLowerCase().split(' ');

    this.articles.forEach(article => {
      const articleDiv = this.el.nativeElement.querySelector(`.${article.class}`);
      const articleDiv2 = this.el.nativeElement.querySelector(`.${article.class2}`);
      if (queryWords.some(word => article.title.toLowerCase().includes(word))) {
        this.renderer.setStyle(articleDiv, 'opacity', '1');
        this.renderer.setStyle(articleDiv2, 'opacity', '1');
      } else {
        this.renderer.setStyle(articleDiv, 'opacity', '0');
        this.renderer.setStyle(articleDiv2, 'opacity', '0');
      }
    });
  }

  onSearch(): void {
    const hasChangedOpacity = this.search();
    if (hasChangedOpacity) {
      this.highlightMatchingArticles();
    }
  }

  ngOnInit(): void {}
}
