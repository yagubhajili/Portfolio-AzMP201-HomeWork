let basketItems = JSON.parse(localStorage.getItem('basket')) || [];

const basketContainer = document.querySelector('.basket-container');

renderBasketItems()

function renderBasketItems() {

    basketContainer.innerHTML = '';

    basketItems.forEach(product => {

        let basketCard = document.createElement('div');
        let cardImg = document.createElement('img');
        let cardContent = document.createElement('div');
        let title = document.createElement('h3');
        let description = document.createElement('p');
        let cardInfo = document.createElement('div');
        let price = document.createElement('p');
        let quantity = document.createElement('div');
        let subtractBtn = document.createElement('button');
        let count = document.createElement('span');
        let addBtn = document.createElement('button');
        let cardActions = document.createElement('div');
        let removeBtn = document.createElement('button');



        basketCard.className = 'basket-card';
        cardImg.className = 'card-img';
        cardContent.className = 'card-content';
        title.className = 'card-title';
        description.className = 'card-description';
        cardInfo.className = 'card-info';
        price.className = 'card-price';
        quantity.className = 'quantity';
        subtractBtn.className = 'subtract-btn';
        count.className = 'count';
        addBtn.className = 'add-btn';
        cardActions.className = 'card-actions';
        removeBtn.className = 'remove-btn';



        cardImg.src = product.image;
        title.innerText = product.title;
        description.innerText = product.description;
        price.innerText = `$${product.price}`;
        subtractBtn.innerText = '-';
        count.innerText = 1;
        addBtn.innerText = '+';
        removeBtn.innerText = 'Remove';


        product.count = 1
        
        function calculateTotalPrice(product) {
            return product.price * product.count;
        }

        addBtn.addEventListener('click', () => {
            count.innerText = +count.innerText + 1;
            basketItems.find(elem => elem.id == product.id).count += 1;
            price.innerText = `$${calculateTotalPrice(product)}`;
            localStorage.setItem('basket', JSON.stringify(basketItems));

        });

        subtractBtn.addEventListener('click', () => {
            if (+count.innerText > 1) {
                count.innerText = +count.innerText - 1;
                basketItems.find(elem => elem.id == product.id).count -= 1;
                price.innerText = `$${calculateTotalPrice(product)}`;
                localStorage.setItem('basket', JSON.stringify(basketItems));

            }
        });
        // if (+count.innerText < 1) {
        //     const updatedBasketItems = basketItems.filter(item => item.id !== productId);
        //     localStorage.setItem('basket', JSON.stringify(updatedBasketItems));
        // }

        removeBtn.addEventListener('click', () => {
            basketItems = basketItems.filter(item => item.id !== product.id);
            localStorage.setItem('basket', JSON.stringify(basketItems));
            renderBasketItems();

        });

        cardInfo.append(price, quantity)
        quantity.append(subtractBtn, count, addBtn)
        cardActions.append(removeBtn);
        cardContent.append(title, description, cardInfo, cardActions)
        basketCard.append(cardImg, cardContent)
        basketContainer.append(basketCard);

    }
    )
};




renderBasketItems();
