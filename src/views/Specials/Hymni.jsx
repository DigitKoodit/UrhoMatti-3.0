import React, { Component } from 'react';

class Hymni extends Component {
  componentDidMount() {
    document.getElementById('search-bar').classList.add('hymni');
    document.getElementById('flyoutMenu').style.backgroundColor = '#000000';
    document.getElementById('top-bar').classList.add('hymni');
  }

  render() {
    return (
      <>
        <div className="page landing-page">
          <div className="hymni-container">
            <p className="song-header hymni-header">{'Teekkarihymni - Teknologhymn'}</p>
            <p className="song-melody">
              {'trad.'} <br />
              {'Ruotsinkielinen teksti: H. Lillsjö'}
            </p>
            <p className="song-lyrics">
              {[
                'Yö kuin sielu teekkarin on pimiä,',
                'takajoukko nukkuu vain, nukkuu vain.',
                'Tarhapöllön ääni kimiä',
                'kuuluu pappilasta päin, kuuluu päin.',
                'Ja taas, ja siis,',
                'ja 1, 2, 3, 4, 5',
                '',
                '',
                'Natten är mörk som teknologens själ,',
                'eftertruppen sover jämt, sover jämt.',
                'Ugglans sångröst o, så klar och gäll',
                'hörs från prästgården bestämt, hörs bestämt.',
                'Och om, och men,',
                'och 1, 2, 3, 4, 5',
              ].join('\n')}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Hymni;
