class Main {

    #peoples = [
        {
            "lastname": "Smith",
            "firstname": "Robert",
            "band": "The Cure"
        },
        {
            "lastname": "Idol",
            "firstname": "Billy",
            "band": "Generation X"
        },
        {
            "lastname": "Hagen",
            "firstname": "Nina",
            "band": "Nina Hagen"
        },
        {
            "lastname": "Vicious",
            "firstname": "Sid",
            "band": "Sex Pistols"
        }
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
        /*document.body.appendChild(titleLevel2);
        const ul = document.createElement('ul');
        this.#peoples.forEach((people) => {
            const li = document.createElement('li');
            if(people.firstname !== 'Billy') {
                li.innerText = people.firstname;
            } else {
                li.innerText = `<strong>${people.firstname}</strong>`;
            }
            ul.appendChild(li);
            
        });
        document.body.appendChild(ul);*/

        this.#peoples.forEach((people) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <tr>
                <td>${people.firstname}</td>
                <td>${people.lastname}</td>
                <td>${people.band}</td>
            </tr>
            `
            document.querySelector('tbody').appendChild(tr);
        });
        
    }
}

// Self callable function to run the Main class
(function () {
    const app = new Main()
})()