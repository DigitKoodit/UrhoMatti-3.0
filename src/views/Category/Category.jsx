import React, { Component } from 'react';
import MenuSongs from '../../components/MenuSongs';
import db from '../../db.json';

class Category extends Component {
  render() {
    const category = this.props.category;
    let touchstartX = 0;
    let touchendX = 0;
    const gestureZone = document.getElementById('root');

    gestureZone.addEventListener(
      'touchstart',
      function (event) {
        touchstartX = event.changedTouches[0].screenX;
      },
      { passive: true }
    );

    gestureZone.addEventListener(
      'touchend',
      function (event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
      },
      { passive: true }
    );

    function handleGesture() {
      if (touchstartX - touchendX > 50) {
        const categoryIndex = db['categories'].indexOf(category);
        const nextCategoryId = db['categories'][categoryIndex + 1]
          ? db['categories'][categoryIndex + 1].title
          : null;
        if (nextCategoryId) {
          window.location.href = window.location.origin + '/' + nextCategoryId;
        }
      }

      if (touchendX - touchstartX > 50) {
        const categoryIndex = db['categories'].indexOf(category);
        const lastCategoryId = db['categories'][categoryIndex - 1]
          ? db['categories'][categoryIndex - 1].title
          : null;
        if (lastCategoryId) {
          window.location.href = window.location.origin + '/' + lastCategoryId;
        }
      }
    }

    return (
      <>
        <div className="page song-page">
          <p className="category-header">
            {category.id}. {category.title}
            {category.title.includes('40') && ' %'}
          </p>
          <div className="category-image-container">
            <img
              src={`/images/categories/${category.image}.png`}
              alt={category.image}
              height="100%"
            />
          </div>
          <MenuSongs category={category.title} songs={this.props.songs} />
        </div>
        <div className="song-footer">
          <a href={category.title} className="song-footer-category">
            {category.title}
            {category.title.includes('40') && ' %'}
          </a>
        </div>
      </>
    );
  }
}

export default Category;
