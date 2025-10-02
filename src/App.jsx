import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
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
  const [goodName, setGoodName] = useState('Jam');

  return (
    <main className="section container">
      {goodName === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {goodName} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGoodName('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const goodClassName =
              good === goodName ? 'has-background-success-light' : '';

            return (
              <tr data-cy="Good" className={goodClassName}>
                <td>
                  {goodName !== good ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setGoodName(good);
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => setGoodName('')}
                      >
                        -
                      </button>
                    </td>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
