import './style.css';
import { Collapse } from './Collapse';

document.addEventListener('DOMContentLoaded', () => {
  const collapseContainers = document.querySelectorAll('.collapse-widget');
  
  console.log('Найдено виджетов Collapse:', collapseContainers.length);
  
  collapseContainers.forEach(container => {
    new Collapse(container);
  });
});