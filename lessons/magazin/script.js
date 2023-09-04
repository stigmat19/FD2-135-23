
        const cars = [];

        const app = document.getElementById("app");

        const add = () => {
            const brand = document.querySelector("[name='brand']").value;
            const model = document.querySelector("[name='model']").value;

            cars.push({
                brand, model
            })

            render(cars)
        }

        function render(items){
            items.forEach(item => createElems(item.brand));
        }

        function createElems(brand){
            const card = document.createElement("div");
            card.className = "card";
            card.style.width = "18rem";

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");

            const cardTitleText = document.createTextNode(brand);

            cardTitle.appendChild(cardTitleText);
            cardBody.appendChild(cardTitle);
            card.appendChild(cardBody);

            console.log(app.children);

            app.children.length 
                ? app.replaceChild(card, app.children[0])
                : app.appendChild(card);
        }