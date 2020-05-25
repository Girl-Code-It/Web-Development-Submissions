<!Doctype html>
<html>
    <head>
        <title>Score Keeper</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
    <div class="content">
        <h1><strong>My Score Keeper</strong></h1>

        <h3><big>Score: </big><span id='score1'>0 </span> to <span id='score2'>0 </span></h3>
    <div class='form-group'>
        <button type='submit' class='btn btn-default' id='ctr1'>Player 1</button>
        <button type='submit' class='btn btn-default' id='ctr2'>Player 2</button>
        <button class='btn btn-danger' id='reset'>Reset</button><br>
        <!--inside the button class it helps to set the colour-->
    </div>
    <div>
        <input type="numbers" name="limit" value='5' class="form-control" id="limit">
    </div>
        <h3>The winner is: <span id="winner"></span> </h3>
    </div>
    
    <script type="text/javascript" src="script.js"></script>
    </body>
</html>