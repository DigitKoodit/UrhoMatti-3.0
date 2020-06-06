import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import db from '../../db.json';

class Song extends Component {
  render() {
    const song = this.props.song;
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
        const songIndex = db['songs'].indexOf(song);
        const nextSongId = db['songs'][songIndex + 1]?.id;
        if (nextSongId) {
          window.location.href = window.location.origin + '/' + nextSongId;
        }
      }

      if (touchendX - touchstartX > 50) {
        const songIndex = db['songs'].indexOf(song);
        const lastSongId = db['songs'][songIndex - 1]?.id;
        if (lastSongId) {
          window.location.href = window.location.origin + '/' + lastSongId;
        }
      }
    }

    if (typeof song !== 'undefined') {
      return (
        <>
          <div className="page song-page">
            <p className="song-header">
              {song.id}. {song.title}
            </p>
            <p className="song-melody">{song.melody}</p>
            <p className="song-lyrics">{song.lyrics.join('\n')}</p>
          </div>
          <div className="song-footer">
            <a href={song.categoryId} className="song-footer-category">
              {song.categoryId}
              {song.categoryId.includes('40') && ' %'}
            </a>
          </div>
        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Song;
