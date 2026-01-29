// dichiaro alcune variabili
let x = 30; // punto di inizio
let y = 30;  // punto di inizio
let r = 8; // raggio
const z = 20; // di quanto si muove pacman



// creo una matrice dove l '1 rapressenta un muro e 0 spazio dove puo andare
const mappa = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,0,1,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0]
];



function stampaPacman(x, y) {
    const l = document.getElementById("lavagna");
    const area = l.getContext("2d");

    area.beginPath();
    area.fillStyle = "yellow";
    area.moveTo(x, y);
    area.arc(x, y, r, Math.PI * 7 / 4, Math.PI * 1 / 4, true);
    area.lineTo(x, y);
    area.moveTo(x, y);

    area.fill()

    area.stroke();


}

function disegnaMappa() {
    const l = document.getElementById("lavagna");
    const area = l.getContext("2d");

    for (let riga = 0; riga < mappa.length; riga++) {
        for (let colonna = 0; colonna < mappa[riga].length; colonna++) {

            if (mappa[riga][colonna] === 1) {
                area.fillStyle = "blue";
                area.fillRect(
                    colonna * 20,
                    riga * 20,
                    20,
                    20
                );
            }
        }
    }
}





// sottoprogramma per mandare pacman su con un controllo 
function su(z) {
    let riga = Math.floor(y / 20);
    let colonna = Math.floor(x / 20);

    let cella_su = mappa[riga - 1 ][colonna];

    if (cella_su === 0) {
        const l = document.getElementById("lavagna");
        const area = l.getContext("2d");
        y -= z;
        
        area.clearRect(0, 0, l.width, l.height);
        disegnaMappa();

        stampaPacman(x, y);

    }
}
// sottoprogramma per mandare pacman giu con un controllo 

function giu(z) {
    let riga = Math.floor(y / 20);
    let colonna = Math.floor(x / 20);

    let cella_giu = mappa[riga + 1][colonna];

    if (cella_giu === 0) {
        y += z;

        const l = document.getElementById("lavagna");
        const area = l.getContext("2d");
        area.clearRect(0, 0, l.width, l.height);
        // ridisegno tutto
        disegnaMappa();
        stampaPacman(x, y);
    }
}
// sottoprogramma per mandare pacman a destra con un controllo 

function dx(z) {
    let riga = Math.floor(y / 20);
    let colonna = Math.floor(x / 20);

    let cella_destra = mappa[riga ][colonna+1 ];
    if (cella_destra === 0) {
        const l = document.getElementById("lavagna");
        const area = l.getContext("2d");
        x += z;
        area.clearRect(0, 0, l.width, l.height);
        disegnaMappa();
        stampaPacman(x, y);
    }
}
// sottoprogramma per mandare pacman a sinistra con un controllo 

function sx(z) {
    let riga = Math.floor(y / 20);
    let colonna = Math.floor(x / 20);

    let cella_sinistra = mappa[riga ][colonna - 1 ];
    if (cella_sinistra === 0) {
        const l = document.getElementById("lavagna");
        const area = l.getContext("2d");
        x -= z;
        area.clearRect(0, 0, l.width, l.height);
        disegnaMappa();
        stampaPacman(x, y);
    }
}
// dopo aver cercato soluzioni online ho trovato il modo di aggiungere un event listener che capisce quando un tasto viene premuto.
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        dx(z);
    }
})

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        su(z);
    }
})

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
        giu(z);
    }
})

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        sx(z);
    }
});
