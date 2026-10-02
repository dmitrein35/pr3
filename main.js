const $btnKick = document.getElementById('btn-kick');
const $btnSpecial = document.getElementById('btn-special');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
};

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
};

$btnKick.addEventListener('click', function () {
  makeAttack(20, 20);
});

$btnSpecial.addEventListener('click', function () {
  makeAttack(15, 35);
});

function makeAttack(maxCharDamage, maxEnemyDamage) {
  changeHP(random(maxCharDamage), character);
  changeHP(random(maxEnemyDamage), enemy);
}

function disableButtons() {
  $btnKick.disabled = true;
  $btnSpecial.disabled = true;
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function init() {
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
  const percentage = (person.damageHP / person.defaultHP) * 100;
  
  person.elProgressbar.style.width = percentage + '%';
  person.elProgressbar.classList.remove('low', 'critical');

  if (percentage < 20) {
    person.elProgressbar.classList.add('critical');
  } else if (percentage < 60) {
    person.elProgressbar.classList.add('low');
  }
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert('Бедный ' + person.name + ' проиграл бой!');
    disableButtons();
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

init();