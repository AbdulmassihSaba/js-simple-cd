class Main {

    #peoples = [
        'Robert Smith',
        'Billy Idol',
        'Nina Hagen',
        'Sid Vicious'
    ];
    constructor() {
        this.#run()
    }

    #run() {
        const title = document.querySelector('h1')
        title.innerText = 'CD Application'

        // Add an element in the DOM
        const titleLevel2 = document.createElement('h2');
        titleLevel2.innerText = 'Titre niveau 2';

        // Hook the new DOM Element to an existing element
        document.body.appendChild(titleLevel2);
        const ul = document.createElement('ul');
        for(const people of this.#peoples) {
            const li = document.createElement('li');
            if(people !== 'Billy Idol') {
                li.innerText = people;
            } else {
                li.innerText = `<strong>${people}</strong>`;
            }
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    }
}

// Self callable function to run the Main class
(function () {
    const app = new Main()
})()