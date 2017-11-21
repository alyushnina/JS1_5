var lettersLine = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var numbersColoumn = ['1', '2', '3', '4', '5', '6', '7', '8'];
var figs = ['King', 'Queen', 'Rook', 'Bishop', 'Knight', 'Pawn'];

function createChBoard() {
    var divRow, divField;
    for(var i = 0; i < 8; i++) {
        divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.setAttribute('id', 'id' + numbersColoumn[i]);
        document.getElementById('ch-board').appendChild(divRow);
        for(var j = 0; j < 8; j++) {
            divField = document.createElement('div');
            divField.classList.add('field');
            divField.setAttribute('id', 'id' + numbersColoumn[i] + lettersLine[j]);
            document.getElementById('id' + numbersColoumn[i]).appendChild(divField);
        }
    }
}

function colorChBoard() {
    var rows = document.getElementsByClassName('row');
    for (var i = 0; i < 8; i++) {
        var row = rows[i];
        if (i % 2 === 0) {
            for (var j = 0; j < 8; j++) {
                if (j % 2 !== 0) {
                    row.children[j].classList.add('ch-black');
                }
            }
        } else {
            for (var k = 0; k < 8; k++) {
                if (k % 2 === 0) {
                    row.children[k].classList.add('ch-black');
                }
            }
        }
    }
}

function numbersChBoard() {
    for (var j = 0; j < 2; j++) {
        for (var i = 0; i < 8; i++) {
            var numbersField = document.createElement('div');
            numbersField.classList.add('field-numbers');
            document.getElementsByClassName('ch-numbers')[j].appendChild(numbersField);
            numbersField.innerText = numbersColoumn[i];
        }
    }
}

function lettersChBoard() {
    for (var j = 0; j < 2; j++) {
        for (var i = 0; i < 8; i++) {
            var lettersField = document.createElement('div');
            lettersField.classList.add('field-letters');
            document.getElementsByClassName('ch-letters')[j].appendChild(lettersField);
            lettersField.innerText = lettersLine[i];
        }
    }
}

function setFigures() {
	var figures = [
		['King', 'e', '1'],
		['King', 'e', '8'],
		['Queen', 'd', '1'],
		['Queen', 'd', '8'],
		['Rook', 'a', '1'],
		['Rook', 'a', '8'],
		['Rook', 'h', '8'],
		['Rook', 'h', '1'],
		['Bishop', 'c', '1'],
		['Bishop', 'c', '8'],
		['Bishop', 'f', '1'],
		['Bishop', 'f', '8'],
		['Knight', 'b', '1'],
		['Knight', 'b', '8'],
		['Knight', 'g', '1'],
		['Knight', 'g', '8'],
		['Pawn', 'a', '2'],
		['Pawn', 'b', '2'],
		['Pawn', 'c', '2'],
		['Pawn', 'd', '2'],
		['Pawn', 'e', '2'],
		['Pawn', 'f', '2'],
		['Pawn', 'g', '2'],
		['Pawn', 'h', '2'],
		['Pawn', 'a', '7'],
		['Pawn', 'b', '7'],
		['Pawn', 'c', '7'],
		['Pawn', 'd', '7'],
		['Pawn', 'e', '7'],
		['Pawn', 'f', '7'],
		['Pawn', 'g', '7'],
		['Pawn', 'h', '7'],
	]
	var figure = {
		name: '',
		letter: '',
		number: '',
		setFigure: function(){
			var word = document.createElement('word');
			word.classList.add('figure-word');
			word.innerText = this.name;
			document.getElementById('id' + this.number + this.letter).appendChild(word);
		}
	}	
	for (var k = 0; k < figures.length; k++){
        figure.name = figures[k][0];
        figure.letter = figures[k][1];
        figure.number = figures[k][2];
        figure.setFigure();
    }
}

window.onload = function () {
    createChBoard();
    colorChBoard();
    numbersChBoard();
    lettersChBoard();
    setFigures();
};
