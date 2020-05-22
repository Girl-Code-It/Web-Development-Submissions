<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title> DRUM KIT </title>
        <link rel="stylesheet" href="project.css">
    </head>
    <body>


        <div class="keys">
            <div data-type="65" class="key">
                <kbd>A</kbd>
                <span class="sound">clap</span>
            </div>
            <div data-type="83" class="key">
                <kbd>S</kbd>
                <span class="sound">hihat</span>
            </div>
            <div data-type="68" class="key">
                <kbd>D</kbd>
                <span class="sound">kick</span>
            </div>
            <div data-type="70" class="key">
                <kbd>F</kbd>
                <span class="sound">openhat</span>
            </div>
            <div data-type="71" class="key">
                <kbd>G</kbd>
                <span class="sound">boom</span>
            </div>
            <div data-type="72" class="key">
                <kbd>H</kbd>
                <span class="sound">ride</span>
            </div>
            <div data-type="74" class="key">
                <kbd>J</kbd>
                <span class="sound">snare</span>
            </div>
            <div data-type="75" class="key">
                <kbd>K</kbd>
                <span class="sound">tom</span>
            </div>
            <div data-type="76" class="key">
                <kbd>L</kbd>
                <span class="sound">tink</span>
            </div>
        </div>

    <audio data-key="65" src="clap.wav"></audio>
    <audio data-key="83" src="hihat.mp3"></audio>  
    <audio data-key="68" src="kick.mp3"></audio>   
    <audio data-key="70" src="openhat.wav"></audio>   
    <audio data-key="71" src="clap.wav"></audio>   
    <audio data-key="72" src="ride.mp3"></audio>   
    <audio data-key="74" src="snare.mp3"></audio>   
    <audio data-key="75" src="tom.mp3"></audio>   
    <audio data-key="76" src="openhat.wav"></audio>           
        

        <script>
             function playSound(e){
                const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
                const key = document.querySelector(`div[data-type="${e.keyCode}"]`);
                if (!audio) return; //stop the function running all together
                audio.currentTime = 0; //rewind to the start
                audio.play();
                console.log(key);
                console.log(`div[data-key="${e.keyCode}"]`);
                key.classList.add('playing');
                
                }

                function removeTransition(e){
                    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
                    this.classList.remove('playing')
                }

                const keys = document.querySelectorAll('.key');
                keys.forEach(key => key.addEventListener('transitionend',removeTransition));
                window.addEventListener('keydown', playSound);

        </script>
          
    </body>
</html>