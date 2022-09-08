const cardArray = [
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'chseeseburger',
        img: 'iamges/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'icecream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'chseeseburger',
        img: 'iamges/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'icecream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
]
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')

const createBoard = () => {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        console.log(card, i);
        gridDisplay.append(card)
    }

}
createBoard()