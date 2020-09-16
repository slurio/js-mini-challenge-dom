/***** Deliverable 1 *****/

document.addEventListener('DOMContentLoaded', function(e) {
    const header = document.querySelector("#header")
    console.log("Here's your header:", header)

    /***** Deliverable 2 *****/

    function redHeader(headerElement) {
        headerElement.style.color = "red";
    };

    redHeader(header);

    /***** Deliverable 3 *****/
    console.log("PLAYERS array looks like this:", PLAYERS);

    function getPlayers(array) {
        for(const player of array) {
            const div = document.createElement('div');
            div.className = "player";
            div.dataset.number = `${player.number}`
            div.innerHTML = `
                <h3>${player.name} (<em>${player.nickname}</em>)</h3>
                <img src="${player.photo}" alt="${player.name}">
            `
            const contatiner = document.querySelector(".player-container");
            contatiner.append(div);
        };
    };
    
    getPlayers(PLAYERS);

    function deletePlayer() {
        const mcPlayer = document.querySelector('[data-number="7"]');
        mcPlayer.remove();
    }

    deletePlayer();

});


/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)


/***** Deliverable 4 *****/