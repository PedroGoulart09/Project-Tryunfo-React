import React from 'react';
import { Button } from 'reactstrap';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';
import { MAX_NUMBER, MIN_NUMBER } from './components/Const';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      hasTrunfo: false,
      cardRare: 'normal',
      myCards: [],
      isSaveButtonDisabled: true,
      cardTrunfo: false,
      nameFilter: '',
      stateSelect: 'todas',
      filterSupers: false,
    };
  }

  verifyNumber = () => {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
    } = this.state;

    const verifyCard1 = Number(cardAttr1) <= MIN_NUMBER && Number(cardAttr1) >= 0;
    const verifyCard2 = Number(cardAttr2) <= MIN_NUMBER && Number(cardAttr2) >= 0;
    const verifyCard3 = Number(cardAttr3) <= MIN_NUMBER && Number(cardAttr3) >= 0;
    const sumCards = Number(cardAttr1) + Number(cardAttr2)
    + Number(cardAttr3) <= MAX_NUMBER;

    if (
      cardName
      && cardImage
      && cardDescription
      && verifyCard1
      && verifyCard1
      && verifyCard2
      && verifyCard2
      && verifyCard3
      && verifyCard3
      && sumCards
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onInputChange = (e) => {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState(() => ({
      [name]: value,
    }), () => {
      this.verifyNumber();
    });
  }

  onSaveButtonClick = () => {
    const { myCards, cardName,
      cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    this.setState((preview) => ({
      myCards: [...myCards, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardTrunfo: false,
      cardRare: 'normal',
      hasTrunfo: cardTrunfo ? true : preview.hasTrunfo,
    }));
  }

  /* AJUDA DO MEU IRMAO */
  deleteCard(index) {
    const { myCards } = this.state;
    const array = [...myCards];
    const carta = myCards[index];
    array.splice(index, 1);
    this.setState((state) => ({
      myCards: array,
      hasTrunfo: carta.cardTrunfo ? false : state.hasTrunfo,
    }));
  }

  /* AJUDA DO MATEUS ALUNO */

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, hasTrunfo, myCards,
      nameFilter, stateSelect, filterSupers } = this.state;
    return (
      <div id="card">
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          hasTrunfo={ hasTrunfo }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          nameFilter={ nameFilter }
          stateSelect={ stateSelect }
          filterSupers={ filterSupers }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        {myCards.filter((item) => item.cardName.includes(nameFilter))
          .filter((cardsRare) => (stateSelect === 'todas' ? stateSelect
            : cardsRare.cardRare === stateSelect)).filter((card) => (filterSupers
            ? card.cardTrunfo : true))
          .map((card, index) => (
            <div key={ card.cardName }>
              <span>{card.cardName}</span>
              <span>{card.cardDescription}</span>
              <span>{card.cardRare}</span>
              <span>{card.cardAttr1}</span>
              <span>{card.cardAttr2}</span>
              <span>{card.cardAttr3}</span>
              <span>{card.cardImage}</span>
              <Button
                data-testid="delete-button"
                type="button"
                color="primary"
                onClick={ () => this.deleteCard(index) }
              >
                Excluir
              </Button>

            </div>
          ))}
      </div>
    );
  }
}

export default App;
