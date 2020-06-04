import React, { Component } from 'react';
import Select from 'react-select';
import db from '../db.json';

class Search extends Component {
  render() {
    const content = db['songs'].concat(db['categories']);
    const options = [
      content.map((song) => {
        return {
          value: song.id < 100 ? `${song.title}` : `${song.id}`,
          label: `${song.id}. ${song.title} ${song.title.includes('40') ? ' %' : ''}`,
        };
      }),
    ];
    options[0].push({ value: 'hymni', label: 'Teekkarihymni' });

    const styles = {
      menu: (styles) => ({ ...styles, width: 'calc(100vw - 20px)', maxWidth: '600px' }),
      control: (styles) => ({
        ...styles,
        borderColor: '#ffe600',
        boxShadow: `0 0 0 1px #ffe600`,
        '&:hover': {
          borderColor: '#ffe600',
        },
      }),
      option: (styles, state) => ({
        ...styles,
        backgroundColor: state.isFocused || state.isHovered ? '#ffe600' : '',
      }),
    };
    return (
      <div id="search-bar" className="search-bar">
        <Select
          options={options[0]}
          placeholder="Hae laulua tai kategoriaa"
          noOptionsMessage={() => 'Ei tuloksia'}
          onChange={(option) => (window.location.href = '/' + option.value + '')}
          styles={styles}
        />
      </div>
    );
  }
}

export default Search;
