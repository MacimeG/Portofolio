const NOM = document.querySelector('#Nom');



const typewriter = new Typewriter(NOM, {
  loop: false,
  delay: 75,
});

typewriter
  .changeDelay(50)
  .pauseFor(2500)
  .typeString('Glaneux Maxime <br>')
  .pauseFor(20)
  .typeString('Développeur web')
  .pauseFor(10)
  .deleteChars(2)
  .typeString('eb et web <strong>mobile</strong> <br>')
  .pauseFor(30)
  .typeString("Front-End/Back-End")
  .start();