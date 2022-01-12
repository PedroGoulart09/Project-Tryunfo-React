import './Form.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'reactstrap';

export default class Form extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo,
      nameFilter, stateSelect, filterSupers } = this.props;
    return (
      <form>
        <Input
          className="teste"
          type="text"
          value={ cardName }
          name="cardName"
          onChange={ onInputChange }
          data-testid="name-input"
        />
        <textarea
          value={ cardDescription }
          className="teste"
          name="cardDescription"
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <Input
          type="number"
          className="teste"
          data-testid="attr1-input"
          value={ cardAttr1 }
          name="cardAttr1"
          onChange={ onInputChange }
        />
        <Input
          type="number"
          className="teste"
          data-testid="attr2-input"
          value={ cardAttr2 }
          name="cardAttr2"
          onChange={ onInputChange }
        />
        <Input
          type="number"
          className="teste"
          data-testid="attr3-input"
          value={ cardAttr3 }
          name="cardAttr3"
          onChange={ onInputChange }
        />
        <Input
          type="text"
          className="teste"
          data-testid="image-input"
          value={ cardImage }
          name="cardImage"
          onChange={ onInputChange }
        />

        <select
          className="teste"
          data-testid="rare-input"
          value={ cardRare }
          name="cardRare"
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        {hasTrunfo
          ? 'Você já tem um Super Trunfo em seu baralho'
          : (
            <input
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              name="cardTrunfo"
              onChange={ onInputChange }
            />) }

        <Button
          color="danger"
          type="button"
          data-testid="save-button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </Button>
        <label htmlFor="filter">
          Filtrar Nomes :
          <input
            data-testid="name-filter"
            type="text"
            name="nameFilter"
            id="filter"
            value={ nameFilter }
            onChange={ onInputChange }
          />
        </label>

        <label
          htmlFor="filterSupers"
          data-testid="trunfo-filter"
        >
          trunfo-filter
          <input
            id="filterSupers"
            name="filterSupers"
            value={ filterSupers }
            type="checkbox"
            onChange={ onInputChange }
          />
        </label>

        <select
          name="stateSelect"
          value={ stateSelect }
          data-testid="rare-filter"
          onChange={ onInputChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  stateSelect: PropTypes.string.isRequired,
  nameFilter: PropTypes.string.isRequired,
  filterSupers: PropTypes.bool.isRequired,
};
