const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

const shopItem = document.querySelector('#item-template');
const itemsContainer = document.querySelector('#shop-items');
const nullResult = document.querySelector('#nothing-found');

function makeShopCard() {
    const shopCard = shopItem.content.cloneNode(true);

    shopCard.querySelector('h1').textContent = this.title;
    shopCard.querySelector('p').textContent = this.description;
    shopCard.querySelector('img').src = this.img;
    shopCard.querySelector('span.price').textContent = this.price + 'Р';
    shopCard.querySelector('div.tags').textContent = this.tags;

    return shopCard;
}

items.forEach(function(item) {

    item.makeShopCard = makeShopCard;

    const finalCard = item.makeShopCard();
    itemsContainer.append(finalCard);
});

const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

searchBtn.addEventListener('click', function() {

    let searchValue = searchInput.value;
    searchValue = searchValue.trim().toLowerCase();
    itemsContainer.innerHTML = '';

    items.filter((item) => {

        const productName = (item.title).toLowerCase();

        if (productName.includes(searchValue)) {
            nullResult.textContent = '';
            const finalCard = item.makeShopCard();
            itemsContainer.append(finalCard);
        }

    });

    if (!itemsContainer.innerHTML) {

        nullResult.textContent = 'Ничего не найдено';
    }
    searchInput.value = '';

})