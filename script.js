'use strict';

const score0El = document.querySelector('#score--0').textContent = 0;
const score0E2 = document.querySelector('#score--1').textContent = 0;
const diceEl = document.querySelector('.dice');
const currentE0 = document.querySelector('#current--0');
const currentEl = document.querySelector('#current--1');
const element0 = document.querySelector('.player--0');
const element1 = document.querySelector('.player--1');
const elementHold = document.querySelector('.btn--hold');
const add = document.querySelector('.btn--roll');
const wins = document.querySelector('.wins--0');
const wins1 = document.querySelector('.wins--1');
const newGame = document.querySelector('.btn--new');
const rules = document.querySelector('.btn--rules');
const scores = [0,0];
diceEl.classList.add('hidden');
let activePlayer = 0;
let  currentScore = 0;

add.addEventListener('click',function(){
    const num = Math.trunc(Math.random()*6)+1;
    console.log(num);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${num}.png`;
    if(num !=1 && num !=3){
        currentScore = currentScore+num;
        console.log(currentScore);
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    }else{
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1: 0;
        element0.classList.toggle('player--active');
        element1.classList.toggle('player--active');

    }
})

elementHold.addEventListener('click',function(){
    scores[activePlayer] += currentScore; 
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 10){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.wins--${activePlayer}`).style.display = 'block';
        
    }
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1: 0;
    element0.classList.toggle('player--active');
    element1.classList.toggle('player--active');
})


newGame.addEventListener('click',function(){
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    document.querySelector(`.wins--${activePlayer}`).style.display = 'none';
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector(`#current--1`).textContent = 0;
    document.querySelector(`.wins--0`).style.display = 'none';
    document.querySelector(`.wins--1`).style.display = 'none';
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
})



