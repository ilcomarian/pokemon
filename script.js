let pokemon1 = document.getElementById("pokemon1");
let pokemon2 = document.getElementById("pokemon2");
let pokemon3 = document.getElementById("pokemon3");

let txtpok1 = document.getElementById("txt-pok1");
let txtpok2 = document.getElementById("txt-pok2");
let txtpok3 = document.getElementById("txt-pok3");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

//pokemon1
let name1 = document.getElementById("name1");
let attack1 = document.getElementById("attack1");
let defense1 = document.getElementById("defense1");
let ability1 = document.getElementById("ability1");
//pokemon2
let name2 = document.getElementById("name2");
let hp2 = document.getElementById("hp2");
let attack2 = document.getElementById("attack2");
let defense2 = document.getElementById("defense2");
let ability2 = document.getElementById("ability2");
//pokemon3
let name3 = document.getElementById("name3");
let hp3 = document.getElementById("hp3");
let attack3 = document.getElementById("attack3");
let defense3 = document.getElementById("defense3");
let ability3 = document.getElementById("ability3");

class Pokemon {
  constructor(name, src, hp, attack, defense, ability) {
    this.name = name;
    this.img = src;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
  }

  render(num) {
    document.getElementById("name" + num).append(this.name);
    document.getElementById("hp" + num).append(this.hp);
    document.getElementById("attack" + num).append(this.attack);
    document.getElementById("defense" + num).append(this.defense);
    document.getElementById("ability" + num).append(this.ability);
    img.src = this.img;
  }
}
class Trainer {
  constructor() {
    this.listOfPokemon = {};
  }
  all() {
    return Object.values(this.listOfPokemon);
  }

  get(nameOfPoke) {
    return this.listOfPokemon[nameOfPoke];
  }
  add(pokemonObject) {
    this.listOfPokemon[pokemonObject.name] = pokemonObject;
  }
  remove(name) {
    delete this.listOfPokemon[name];
  }
}
let mark = new Trainer();

let str = str => str[0].toUpperCase() + str.slice(1);
let imgp = (n, pok) =>
  axios.get("https://pokeapi.co/api/v2/pokemon-form/" + n + "/").then(r => {
    pok.setAttribute("src", r.data.sprites.front_default);
  });

let namePokemon = (name, img, num) =>
  axios.get("https://pokeapi.co/api/v2/pokemon/" + name).then(r => {
    let data = r.data;
    let hp = data.stats["5"].base_stat;
    let attack = data.stats["4"].base_stat;
    let defense = data.stats["3"].base_stat;
    let ability = data.abilities["0"].ability.name;
    let pokk = new Pokemon(
      str(name),
      imgp(name, img),
      hp,
      attack,
      defense,
      ability
    );
    pokk.render(num);
    mark.add(pokk);
  });

let arr = [pokemon1, pokemon2, pokemon3, txtpok1, txtpok2, txtpok3];

let func = num => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add("none");
  }

  if (num) {
    let pokemon = document.getElementById("pokemon" + num);
    let text = document.getElementById("txt-pok" + num);
    pokemon.classList.remove("none");
    text.classList.remove("none");
  }
};

let btnpok1 = document.getElementById("btn-pok1");
let pok1on = 0;
btnpok1.onclick = () => {
  if (pok1on === 0) {
    namePokemon("dratini", img1, 1);
    func(1);

    pok1on++;
  } else {
    func(1);
  }
};

let btnpok2 = document.getElementById("btn-pok2");
let pok2on = 0;
btnpok2.onclick = () => {
  if (pok2on === 0) {
    func(2);
    namePokemon("wurmple", img2, 2);
    pok2on++;
    console.log(pokemon1);
  } else {
    func(2);
  }
};

let btnpok3 = document.getElementById("btn-pok3");
let pok3on = 0;
btnpok3.onclick = () => {
  if (pok3on === 0) {
    func(3);
    namePokemon("lillipup", img3, 3);
    pok3on++;
  } else {
    func(3);
  }
};

//tv on/off
let audio = document.getElementById("audio");
let frame = document.getElementById("frame");
let on = document.getElementById("on");
let tv = document.getElementById("tv");
let onOf = 0;
on.onclick = () => {
  if (onOf === 0) {
    tv.style.opacity = "0.2";
    frame.style.display = "block";
    frame.currentTime = 0;
    audio.pause();
    frame.play();
    onOf++;
  } else if (onOf === 1) {
    tv.style.opacity = "0.2";
    frame.pause();
    frame.style.display = "none";
    onOf++;
  } else {
    tv.style.opacity = "1";
    onOf = 0;
    audio.play();
  }
};

//opacity btn

btnc1 = document.getElementById("btn-c1");
btnc2 = document.getElementById("btn-c2");
let countClick = tv.style.opacity;
btnc1.onclick = () => {
  if (tv.style.opacity === "0.2") {
    tv.style.opacity = "0.1";
  }

  if (tv.style.opacity === "0.3") {
    tv.style.opacity = "0.2";
  }
  if (tv.style.opacity === "0.4") {
    tv.style.opacity = "0.3";
  }
};

btnc2.onclick = () => {
  if (tv.style.opacity === "0.2") {
    tv.style.opacity = "0.3";
  }
  if (tv.style.opacity === "0.1") {
    tv.style.opacity = "0.2";
  }
  if (tv.style.opacity === "0.3") {
    tv.style.opacity = "0.4";
  }
};

//pokemon fight
let pokemonSelect1 = 0;
let pokemonSelect2 = 0;
let select = 0;
let p1 = 0;
let p2 = 0;
let p3 = 0;
let arrImg = [img1, img2, img3];
let funcSelect = () => {
  for (let k in arrImg) {
    arrImg[k].classList.remove("select");
  }
  pokemonSelect1 = 0;
  pokemonSelect2 = 0;
  select = 0;
  p1 = 0;
  p2 = 0;
  p3 = 0;
};

let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
let b3 = document.getElementById("btn3");
let btn6 = document.getElementById("btn6");

let arr2 = [pokemon1, pokemon2, pokemon3];
let imgStyle = (width, height, num, str) => {
  if (str == "add") {
    for (let k in arr2) {
      arr2[k].style.width = width + "%";
      arr2[k].style.height = height + "%";
      arr2[k].style.marginLeft = num * k + "%";
      arr2[k].classList.remove("none");
    }
  } else {
    for (let k in arr2) {
      arr2[k].style.width = width + "%";
      arr2[k].style.height = height + "%";
      arr2[k].style.marginLeft = num * k + "%";
      arr2[k].classList.add("none");
    }
  }
};

let openClose = 0;
let arrgamebtn = [b1, btnpok1, b2, btnpok2, b3, btnpok3];
let funcShowbtn = () => {
  for (let k in arrgamebtn) {
    if (openClose === 0) {
      if (k % 2 == 0) {
        arrgamebtn[k].classList.add("none");
      } else {
        arrgamebtn[k].classList.remove("none");
      }
    } else {
      if (openClose === 1) {
        if (k % 2 == 0) {
          arrgamebtn[k].classList.remove("none");
        } else {
          arrgamebtn[k].classList.add("none");
        }
      }
    }
  }
};
let logo = document.getElementById("logo");
document.getElementById("btn6").onclick = () => {
  if (openClose === 0) {
    func();
    imgStyle(10, 20, 13, "add");
    openClose = 1;
    funcShowbtn();
    logo.src = "img/Fight!.png";
  } else if (openClose === 1) {
    logo.src = "img/logo.png";
    func();
    imgStyle(20, 30, 0);
    openClose = 0;
    funcShowbtn();
    funcSelect();
  }
};

//select 2 pokemons

b1.onclick = () => {
  if (select <= 1 && p1 === 0) {
    img1.classList.add("select");
    select++;
    p1 = 1;
  } else if (p1 === 1) {
    img1.classList.remove("select");
    select--;
    p1--;
  }
};

b2.onclick = () => {
  if (select <= 1 && p2 === 0) {
    img2.classList.add("select");
    select++;
    p2 = 1;
  } else if (p2 === 1) {
    img2.classList.remove("select");
    select--;
    p2--;
  }
};
b3.onclick = () => {
  if (select <= 1 && p3 === 0) {
    img3.classList.add("select");
    select++;
    p3 = 1;
  } else if (p3 === 1) {
    img3.classList.remove("select");
    select--;
    p3--;
  }
};

//fight function
class Pokemonfight {
  constructor(name, life, attack) {
    this.name = name;
    this.life = life;
    this.attack = attack;
  }
}

let fight = (p1, p2) => {
  if (p1.life > 0) {
    p1.life -= p2.attack;
  }
  if (p2.life > 0) {
    p2.life -= p1.attack;
  } else if (p1.life <= 0 || p2.life <= 0) {
    if (p1.life === p2.life) {
      return "tie";
    } else if (p1.life > 0) {
      return p1.name;
    } else {
      return p2.name;
    }
  }
  return fight(p1, p2);
};
//fight
let f1 = 0;
let btn5 = document.getElementById("btn5");

btn5.onclick = () => {
  func();
  if (p1 === 1) {
    pokemon1.classList.remove("none");
  }
  if (p2 === 1) {
    pokemon2.classList.remove("none");
  }
  if (p3 === 1) {
    pokemon3.classList.remove("none");
  }
  f1 = 1;
};
let btn4 = document.getElementById("btn4");
btn4.onclick = () => {
  let pokf1 = new Pokemonfight(
    name1.innerHTML,
    hp1.innerHTML,
    attack1.innerHTML
  );
  let pokf2 = new Pokemonfight(
    name2.innerHTML,
    hp2.innerHTML,
    attack2.innerHTML
  );
  let pokf3 = new Pokemonfight(
    name3.innerHTML,
    hp3.innerHTML,
    attack3.innerHTML
  );
  if (f1 === 1) {
    if (p1 === 1 && p2 === 1) {
      if (fight(pokf1, pokf2) === name2.innerHTML) {
        
        alert(name2.innerHTML);
          
        pokemon1.remove();
      } else if (fight(pokf1, pokf2) === name1.innerHTML) {
        img2.src = "";
        alert(name1.innerHTML);
        pokemon2.remove();
      } else {
        alert("tie");
      }
    } else if (p2 === 1 && p3 === 1) {
      if (fight(pokf2, pokf3) === name2.innerHTML) {
        alert(name2.innerHTML );
        pokemon3.remove();
      }
      if (fight(pokf2, pokf3) === name3.innerHTML) {
        alert(name3.innerHTML );
        pokemon2.remove();
      } else {
        alert("tie");
      }
    } else if (p1 === 1 && p3 === 1) {
      if (fight(pokf1, pokf3) === name1.innerHTML) {
        alert(name1.innerHTML);
        pokemon3.remove();
      }
      if (fight(pokf1, pokf3) === name3.innerHTML) {
        alert(name3.innerHTML);
        pokemon1.remove();
      } else {
        alert("tie");
      }
    }
  }
};
