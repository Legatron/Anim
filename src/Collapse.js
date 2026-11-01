export class Collapse {
  constructor(container) {
    this.container = container;
    this.button = container.querySelector('.collapse-btn');
    this.content = container.querySelector('.collapse-content');
    
    if (!this.button || !this.content) {
      console.error('Collapse: Не найдены кнопка или контент внутри контейнера!');
      return;
    }

    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    if (this.content.style.maxHeight && this.content.style.maxHeight !== '0px') {
      this.content.style.maxHeight = '0px';
    } else {
      this.content.style.maxHeight = this.content.scrollHeight + 'px';
    }
  }
}