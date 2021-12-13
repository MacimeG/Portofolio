const NOM = document.querySelector('#metier');



const typewriter = new Typewriter(NOM, {
  loop: false,
  delay: 75,
});

typewriter
  .changeDelay(50)
  .pauseFor(2500)
  .typeString('Développeur wec<br>')
  .pauseFor(20)
  .deleteChars(3)
  .typeString('web et web <strong>mobile</strong> <br>')
  .pauseFor(10)
  .typeString("Front-End/Back-End")
  .start();