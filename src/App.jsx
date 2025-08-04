import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [currentSort, setCurrentSort] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  function handleSortAlphabetically() {
    let goodsCopy = [...goodsFromServer].sort();

    if (isReversed) {
      goodsCopy = goodsCopy.reverse();
    }

    setGoods(goodsCopy);
    setCurrentSort('alphabetical');
  }

  function handleSortByLength() {
    let goodsCopy = [...goodsFromServer].sort((a, b) => a.length - b.length);

    if (isReversed) {
      goodsCopy = goodsCopy.reverse();
    }

    setGoods(goodsCopy);
    setCurrentSort('length');
  }

  function handleReverse() {
    const goodsCopy = [...goods].reverse();

    setGoods(goodsCopy);
    setIsReversed(!isReversed);
  }

  function handleReset() {
    const goodsCopy = [...goodsFromServer];

    setGoods(goodsCopy);
    setCurrentSort('');
    setIsReversed(false);
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${currentSort === 'alphabetical' ? '' : 'is-light'}`}
          onClick={handleSortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-info ${currentSort === 'length' ? '' : 'is-light'}`}
          onClick={handleSortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-info ${isReversed ? '' : 'is-light'}`}
          onClick={handleReverse}
        >
          Reverse
        </button>

        {(currentSort !== '' || isReversed) && (
          <button
            type="button"
            className="button is-info is-light"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
