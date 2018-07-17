let pokemon1 = document.getElementById('pokemon1')
let pokemon2 = document.getElementById('pokemon2')
let pokemon3 = document.getElementById('pokemon3')

let txtpok1 = document.getElementById('txt-pok1')
let txtpok2 = document.getElementById('txt-pok2')
let txtpok3 = document.getElementById('txt-pok3')

let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')

let arr =[]

//pokemon1
let name1 = document.getElementById('name1')
let attack1 = document.getElementById('attack1')
let defense1 = document.getElementById('defense1')
let ability1 = document.getElementById('ability1')
//pokemon2
let name2 = document.getElementById('name2')
let hp2 = document.getElementById('hp2')
let attack2 = document.getElementById('attack2')
let defense2 = document.getElementById('defense2')
let ability2 = document.getElementById('ability2')
//pokemon3
let name3 = document.getElementById('name3')
let hp3 = document.getElementById('hp3')
let attack3 = document.getElementById('attack3')
let defense3 = document.getElementById('defense3')
let ability3 = document.getElementById('ability3')

class Pokemon {
  constructor(name, src, hp, attack, defense, ability) {
    this.name = name;
    this.img = src;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
  }
//"name" + 1 = name1
  render(num) {
    document.getElementById('name' + num).append(this.name);
    document.getElementById('hp' + num).append(this.hp);
    document.getElementById('attack' + num).append(this.attack);
    document.getElementById('defense' + num).append(this.defense);
    document.getElementById('ability' + num).append(this.ability);
    img.src = this.img;
  }
}


let str = (str) => str[0].toUpperCase() + str.slice(1);
let imgp = (n, pok) => axios.get('https://pokeapi.co/api/v2/pokemon-form/' + n + '/').then((r) => {

  pok.setAttribute('src', r.data.sprites.front_default)

})


let namePokemon = (name, img, num) => axios.get('https://pokeapi.co/api/v2/pokemon/' + name).then((r) => {
  let data = r.data
  let hp = data.stats['5'].base_stat
  let attack = data.stats['4'].base_stat
  let defense = data.stats['3'].base_stat
  let ability = data.abilities['0'].ability.name
  let pokk = new Pokemon(str(name), imgp(name, img), hp, attack, defense, ability)
  pokk.render(num);
});
arr.push(pokemon1,pokemon2,pokemon3,txtpok1,txtpok2,txtpok3)

let func = (num) => {
   
  for(let i = 0; i < arr.length; i++){
    arr[i].classList.add('none')
    
  }
 
  if(num){
  let pokemon = document.getElementById('pokemon' + num)
  let text = document.getElementById('txt-pok' + num)
  pokemon.classList.remove('none')
  text.classList.remove('none')}
  
}


let btnpok1 = document.getElementById('btn-pok1');
let pok1on = 0;
btnpok1.onclick = ()=>{ 
if(pok1on === 0){
  namePokemon('dratini', img1, 1);
  func(1)
  pok1on++
}
  else{
    func(1)
  }
}


let btnpok2 = document.getElementById('btn-pok2')
let pok2on = 0;
btnpok2.onclick = ()=>{
 
 if(pok2on === 0){ 
   func(2)
  namePokemon('wurmple', img2, 2);
  pok2on++
}
else{
  func(2)
}
}


let btnpok3 = document.getElementById('btn-pok3')
let pok3on = 0;
btnpok3.onclick = () => {
if(pok3on === 0){
 func(3)
    namePokemon('lillipup',img3,3)
    pok3on++
  }
   else{
     func(3)
   }
}


//tv on/off
let audio = document.getElementById('audio')
let frame = document.getElementById('frame')
let on = document.getElementById('on')
let tv = document.getElementById('tv')
let onOf = 0
on.onclick = () => {
  if (onOf === 0) {
    tv.style.opacity = "0.2"
    frame.style.display = "block"
    frame.currentTime = 0;
    audio.pause()
    frame.play();
    onOf++
  } else if (onOf === 1) {
    tv.style.opacity = "0.2";
    frame.pause();
    frame.style.display = "none"
    onOf++
  } else {
    tv.style.opacity = "1"
    onOf = 0
    audio.play()
  }

}


//opacity btn

btnc1 = document.getElementById('btn-c1')
btnc2 = document.getElementById('btn-c2')
let countClick = tv.style.opacity
btnc1.onclick = () => {
  if (tv.style.opacity === '0.2') {
    tv.style.opacity = '0.1'
  }


  if (tv.style.opacity === '0.3') {
    tv.style.opacity = '0.2'
  }
  if (tv.style.opacity === '0.4') {
    tv.style.opacity = '0.3'
  }


}

btnc2.onclick = () => {
  if (tv.style.opacity === '0.2') {
    tv.style.opacity = '0.3'
  }
  if (tv.style.opacity === '0.1') {
    tv.style.opacity = '0.2'
  }
  if (tv.style.opacity === '0.3') {
    tv.style.opacity = '0.4'
  }

}


//pokemon fight
let arrImg =[img1,img2,img3]
let funcSelect = (a)=>{
if(a){
for(k of arrImg){
  arrImg.img1.classList.add('select')
}}
else{
  for(k of arrImg){
    arrImg.img1.classList.remove('select')
}
}
}
let b1 = document.getElementById('btn1')
let b2 = document.getElementById('btn2')
let b3 = document.getElementById('btn3')
let btn6 = document.getElementById('btn6')


// let boxImg = (str) => {
//   pokemon1.style.display = str
//   pokemon2.style.display = str
//   pokemon3.style.display = str
// }
let arr2=[pokemon1,pokemon2,pokemon3]
let imgStyle = (width, height, num) => {

  for(let k in arr2){
    arr2[k].style.width = width + "%"
    arr2[k].style.height = height + "%"
    arr2[k].style.marginLeft= (num*k)  + "%"
  }

  
}
let btn1to3dislplay = (str) => {
  btnpok1.style.display = str
  btnpok2.style.display = str
  btnpok3.style.display = str
}
let b1to3 = (str) => {
  b1.style.display = str
  b2.style.display = str
  b3.style.display = str
}


let openClose = 0;
document.getElementById('btn6').onclick = () => {
 alert('')
}
 




// select 2 pokemons 



let pokemonSelect1 = 0;
let pokemonSelect2 = 0;
let select = 0;
let remove = 0;
let p1 = 0;
let p2 = 0;
let p3 = 0;
b1.onclick = () => {
  if (select === 0 || select === 1 && p1 === 0) {
    img1.classList.add('select')
    select++
    p1++

  } else {
    img1.classList.remove('select')
    p1--
    select--
  }

}
b2.onclick = () => {
  if (select === 0 || select === 1 && p2 === 0) {
    img2.classList.add('select')
    select++
    p2++
  } else {
    img2.classList.remove('select')
    p2--
    select--
  }
}
b3.onclick = () => {
  if (select === 0 || select === 1 && p3 === 0) {
    img3.classList.add('select')
    select++
    p3++
  } else {
    img3.classList.remove('select')
    p3--
    select--
  }
}

//fight algoritm
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
    p2.life -= p1.attack
  } else if (p1.life <= 0 || p2.life <= 0) {
    if (p1.life === p2.life) {
      return "tie"
    } else if (p1.life > 0) {
      return p1.name
    } else {
      return p2.name
    }
  }
  return fight(p1, p2)

}
//fight    
let f1 = 0
let btn5 = document.getElementById('btn5')

btn5.onclick = () => {
  if (f1 === 0) {
    // pokemon1.style.display = 'none'
    // pokemon2.style.display = 'none'
    // pokemon3.style.display = 'none'
func()
console.log('asd')

    if (img1.classList.contains('select')) {
      pokemon1.style.display = 'block'
      
    }
    if (img2.classList.contains('select')) {
      pokemon2.style.display = 'block'
    }
    if (img3.classList.contains('select')) {
      pokemon3.style.display = 'block'
    }
    f1++
  }
   else if (f1 === 1) {
    f1--;
    if (img1.classList.contains('select') && img2.classList.contains('select')) {


      let pokf1 = new Pokemonfight(name1.innerHTML, hp1.innerHTML, attack1.innerHTML)
      let pokf2 = new Pokemonfight(name2.innerHTML, hp2.innerHTML, attack2.innerHTML)

      if (fight(pokf1, pokf2) === name2.innerHTML) {
        img1.src = ''

      }
      if (fight(pokf1, pokf2) === name1.innerHTML) {
        img2.src = ''

      }

    } else if (img2.classList.contains('select') && img3.classList.contains('select')) {


      let pokf3 = new Pokemonfight(name3.innerHTML, hp3.innerHTML, attack3.innerHTML)
      let pokf2 = new Pokemonfight(name2.innerHTML, hp2.innerHTML, attack2.innerHTML)
      if (fight(pokf2, pokf3) === name2.innerHTML) {
        img3.src = ''

      }
      if (fight(pokf2, pokf3) === name3.innerHTML) {
        img2.src = ''

      }

    } else if (img1.classList.contains('select') && img3.classList.contains('select')) {


      let pokf3 = new Pokemonfight(name3.innerHTML, hp3.innerHTML, attack3.innerHTML)
      let pokf1 = new Pokemonfight(name1.innerHTML, hp1.innerHTML, attack1.innerHTML)

      if (fight(pokf1, pokf3) === name1.innerHTML) {
        img3.src = ''

      }
      if (fight(pokf1, pokf3) === name3.innerHTML) {
        img1.src = ''

      }
    }
  }
}

























// //pokemon random 
// let pokemonSelect;
// let random = document.getElementById('random')

// random.addEventListener('click',e=>{
//   if(Math.floor(Math.random() * 3) === 0){

//     pokemon1.style.display = "block"
//     txtpok1.style.display="block"
//     name1.style.display="block"
//     pokemon2.style.display ="none"    
//     txtpok2.style.display="none"
//     pokemon3.style.display ="none"    
//     txtpok3.style.display="none"
//     pokemonSelect = 0
//  console.log(pokemonSelect)

// }
//     else if(Math.floor(Math.random() * 3) === 1){

//         pokemon1.style.display = "none"
//         txtpok1.style.display="none"
//         pokemon2.style.display ="block"    
//         txtpok2.style.display="block"
//         pokemon3.style.display ="none"    
//         txtpok3.style.display="none"
//         pokemonSelect = 1
//     }
//     else{

//         pokemon1.style.display = "none"
//         txtpok1.style.display="none"
//         pokemon2.style.display ="none"    
//         txtpok2.style.display="none"
//         pokemon3.style.display ="block"    
//         txtpok3.style.display="block"
//         pokemonSelect = 2
//     }

// })

// //training
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
// let hp1 = document.getElementById('hp1');
// let hp2 = document.getElementById('hp2');
// let hp3 = document.getElementById('hp3');
// let atk1 = document.getElementById("attack1")
// let atk2 = document.getElementById("attack2")
// let atk3 = document.getElementById("attack3")
// let count1 = 0;
// let count2 = 0;
// let count3 = 0;


// btn1.addEventListener('click',e => {
//      count1++
//     console.log(count1)
//  if(count1 > 10 ){
//     hp1.innerText = "HP 200"
//     atk1.innerText = "Attack 12"
//     document.getElementById('img1').src = "img/pokemon1/Dragonair.png";

//  }
//  if(count1 > 20 ){
//     hp1.innerText = "HP 300"
//     atk1.innerText = "Attack 18"
//     document.getElementById('img1').src = "img/pokemon1/Dragonite.png";

//  }
// })

// // pokemon2

// btn2.addEventListener('click',e => {
//     count2++
//     console.log(count2)
//  if(count2 > 10 ){
//     hp2.innerText = "HP 400"
//     atk2.innerText = "Attack 4"
//     document.getElementById('img2').src = "img/pokemon2/Silcoon.png";
//  }
//  if(count2 > 20 ){
//     hp2.innerText = "HP 600"
//     atk2.innerText = "Attack 6"
//     document.getElementById('img2').src = "img/pokemon2/Beautifly.png";
//  }

//    })

// //    pokemon3

//    btn3.addEventListener('click',e => {
//        count3++
//     if(count3 > 10 ){
//         hp3.innerText = "HP 300"
//         atk3.innerText = "Attack 12"
//         document.getElementById('img3').src = "img/pokemon3/Herdier.png";
//      }
//      if(count3 > 20 ){
//         hp3.innerText = "HP 450"
//         atk3.innerText = "Attack 18"
//         document.getElementById('img3').src = "img/pokemon3/Stoutland.png";
//      }
//    })

//    // pokemon fight

//    class  pokemon{
//     constructor(name,life,attack){
//     this.life = life;
//     this.attack = attack;
//     this.name= name;
//     }

//   }

//   let fight = (p1,p2)=>{
//   if(p1.life > 0 ){
//     p1.life-=p2.attack;
//   }
//   if(p2.life > 0){
//     p2.life-=p1.attack
//   }
//   else if(p1.life <= 0 || p2.life <= 0){
//     if(p1.life === p2.life){
//       return "tie"
//     }
//     else if(p1.life > 0){
//       return p1.name
//     }
//     else{
//      return p2.name
//     }
//   }
//   return fight(p1,p2)

//   }     

//    let container =document.getElementById('container')
//   let x = document.getElementById('fight')

//   body = document.body
//   x.onclick = ()=>{
//    let div = document.createElement('div')
//    div.setAttribute('id','box')
//    let img1 = document.getElementById('img1')
//    img1.style.width = "200px"
//    let img2 = document.getElementById('img2')
//    img2.style.width = "200px"
//    let img3 = document.getElementById('img3')
//    img3.style.width = "200px"
//    div.append(img1,img2,img3)

// container.style.display="none"
//    body.appendChild(div)
//   } 

//   let img1 = document.getElementById('img1')
//   let img2 = document.getElementById('img2')
//   let img3 = document.getElementById('img3')
//   let div = document.createElement('div')
//   div.setAttribute('id','box')
//  img1.onclick= ()=>{

//     div.append(img1)
//     body.appendChild(div)

//  }

//  img2.onclick =()=>{
//   if(div === undefined){
//     div.setAttribute('id','box')
//     div.append(img2)
//     body.appendChild(div)
//   }
//   else {
//     div.append(img2)
//   }
//  }