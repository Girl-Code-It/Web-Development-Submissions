<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Rock Paper Scissors Game</title>
        <link rel="stylesheet" href="gameproject.css">
    </head>
    <body>
        <header>
            <h1>Rock Paper Scissors</h1>
        </header>

        <div class="score-board">
            <div id="user-label" class="badge">user</div>
            <div id="computer-label" class="badge">comp</div>
            <span id="user-score">0</span>:<span id="computer-score">0</span>
        </div>

        <div class="result">
            <p>Paper covers rock. You win!</p>
        </div>

        <div class="choices">
            <div class="choice" id="r">
                <img src="rock.jpeg" alt="">
            </div>
            <div class="choice" id="p">
                <img src="paper.jpeg" alt="">
            </div>
            <div class="choice" id="s">
                <img src="scissors.jpg" alt="">
            </div>
        </div>
        
        <p id="action-message">Make your move.</p>
        <script src="gameproject.js" charset="utf-8"></script>

    </body>
</html>
