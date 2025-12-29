import React from 'react';
import './CategoryCarousel.css';

const categories = [
  { id: 'WEGOVY', name: 'Wegovy' },
  { id: 'MOUNJARO', name: 'Mounjaro' },
  { id: 'OZEMPIC', name: 'Ozempic' },
  { id: 'Weight Loss', name: 'Weight Loss' },
  { id: 'SEXUAL AIDS', name: 'SEXUAL AIDS' },
  { id: 'Anti-Aging', name: 'Anti-Aging' },
  { id: 'Sexual Health', name: 'Sexual Health' },
  { id: 'Hair Loss', name: 'Hair Loss' },
  { id: 'Steroid Stacks', name: 'Steroid Stacks' },
  { id: 'Anabolic Steroid Tablet', name: 'Anabolic Steroid Tablet' },
  { id: 'Oral Steroid', name: 'Oral Steroid' },
  { id: 'Pharmaceutical Grade', name: 'Pharmaceutical Grade' },
  { id: 'PEPTIDES', name: 'PEPTIDES' },
  { id: 'SARMS', name: 'SARMS' },

];

const CategoryCarousel = ({ onSelectCategory, selectedCategory }) => {
  return (
    <div className="category-carousel-container">
      <h2 className="category-title">Explore by category</h2>
      <div className="category-carousel">
        {categories.map((category) => (
          <button 
            key={category.id} 
            className={`category-chip ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;