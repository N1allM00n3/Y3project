/// <reference path="../typings/tsd.d.ts" />
/// <reference path="card.ts" />

class Game {

  private cards:Card[];
  private cardPicked1:Card;
  private cardPicked2:Card;

  constructor() { 
    this.cards = this.initCards();
    this.shuffleCards();
    this.draw();
    this.cardPicked1 = null;
    this.cardPicked2 = null;
  }

  private initCards():Card[] {
    var elements = document.getElementsByClassName('card');
    return Array.prototype.map.call(elements, function (el, i) {
      return new Card(el);
    });
  }

  private shuffleCards():void {
    this.shuffle(this.cards);
  }
  private shuffle(o) {
    for (var j, x, i = o.length; i; j = (Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x); 
  }

  private draw():void {
    var that = this;
    $('.game-field').empty();
    this.cards.forEach(function (el) {
      el.hide();
      $('.game-field').append(el.element);
      el.onSelect(function (card:Card) {
        that.cardPicked(card);
      });
    });
  }

  cardPicked(card:Card):void {
    if (!this.cardPicked1) {
      card.show();
      this.cardPicked1 = card;
    } else if (!this.cardPicked2) {
      card.show();
      this.cardPicked2 = card;
      this.checkCards();
    } else {
      this.cardPicked1.hide();
      this.cardPicked2.hide();
      this.cardPicked1 = null;
      this.cardPicked2 = null;
    }
  }

  private checkCards():void {
    // check if clicked two times on the same card
    if (this.cardPicked1 == this.cardPicked2)
      return;

    // if cards don't match, return
    if (!this.cardPicked1.isPair(this.cardPicked2))
      return;

    // yay, cards match!
    this.cardPicked1.matchFound();
    this.cardPicked2.matchFound();

    this.cardPicked1 = null;
    this.cardPicked2 = null;

    this.checkAllFound();
  }  

  private checkAllFound():void {
    var allCardsFound = this.cards.every(function (card:Card, _1, _2):boolean {
      return card.found;
    });
    if (allCardsFound) {
      $('body').html('Congrats, you have won!');
    }
  }
}