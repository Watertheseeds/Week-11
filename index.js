$(function() {
    let currentPlayer = 'X';
    let gameOver = false;
    //Plays determines where a X or O goes on the board 
    $('.board').on('click', '.cell', function() {
        if (!gameOver && $(this).text() === '') {
            $(this).text(currentPlayer);
            if (checkWin(currentPlayer)) {
                gameOver = true;
                $('#resultMessage').text(`Player ${currentPlayer}...wins!`);
                $('#resultAlert').removeClass('d-none').addClass('alert-success');
            } else if ($('.cell:empty').length === 0) {
                gameOver = true;
                $('#resultMessage').text('Draw!');
                $('#resultAlert').removeClass('d-none').addClass('alert-warning');
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                $('.turn').text(`Player ${currentPlayer}, Go!`);
                //Switches between players X and O
            }
        }
    });
    //Adds a button that resets the board to blank and allows you to play again 
    $('#restartBtn').on('click', function() {
        $('.cell').text('');
        $('.turn').text(`Player X's turn`);
        $('#resultAlert').addClass('d-none');
        gameOver = false;
        currentPlayer = 'X';
    });
//Function here details the winning patterns and checks to see which player achieved it first returning the winner 
    function checkWin(player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
//Function here determines whether it was a win or a draw
        for (const pattern of winPatterns) {
            if (
                $('.cell').eq(pattern[0]).text() === player &&
                $('.cell').eq(pattern[1]).text() === player &&
                $('.cell').eq(pattern[2]).text() === player
            ) {
                return true;
            }
        }

        return false;
    }
});