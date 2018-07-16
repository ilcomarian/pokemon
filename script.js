
let pokemon1 = document.getElementById('pokemon1')
let pokemon2 = document.getElementById('pokemon2')
let pokemon3 = document.getElementById('pokemon3')

let txtpok1 = document.getElementById('txt-pok1')
let txtpok2 = document.getElementById('txt-pok2')
let txtpok3 = document.getElementById('txt-pok3')

// let name1 = document.getElementById('name1')

class Pokemon {
  constructor(name,src,hp,attack,defense,ability){
   this.name =name;
   this.img = src;
   this.hp = hp;
   this.attack = attack;
   this.defense =defense;
   this.ability = ability;
  }
  render(){
    let name1 = document.getElementById('name1')
    let img1 = document.getElementById('img1')
    let hp1 = document.getElementById('hp1')
    let attack1 = document.getElementById('attack1')
    let defense1= document.getElementById('defense1')
    let ability1 = document.getElementById('ability1')
    name1.append(this.name)
    img1.src= this.img
    hp1.append(this.hp)
    attack1.append(this.attack)
    defense1.append(this.defense)
    ability1.append(this.ability)
  }
  render2(){
    let name2 = document.getElementById('name2')
    let img2 = document.getElementById('img2')
    let hp2 = document.getElementById('hp2')
    let attack2 = document.getElementById('attack2')
    let defense2= document.getElementById('defense2')
    let ability2 = document.getElementById('ability2')
    name2.append(this.name)
    img2.src= this.img
    hp2.append(this.hp)
    attack2.append(this.attack)
    defense2.append(this.defense)
    ability2.append(this.ability)
  }
  render3(){
    let name3 = document.getElementById('name3')
    let img3 = document.getElementById('img3')
    let hp3 = document.getElementById('hp3')
    let attack3 = document.getElementById('attack3')
    let defense3= document.getElementById('defense3')
    let ability3 = document.getElementById('ability3')
    name3.append(this.name)
    img3.src= this.img
    hp3.append(this.hp)
    attack3.append(this.attack)
    defense3.append(this.defense)
    ability3.append(this.ability)
  }
 
}





let str = (str)=>str[0].toUpperCase() + str.slice(1);
let img =(n,pok)=> axios.get('https://pokeapi.co/api/v2/pokemon-form/'+ n +'/').then((r)=>{
  
  pok.setAttribute('src' ,r.data.sprites.front_default)
 
})


let name1 = (name)=> axios.get('https://pokeapi.co/api/v2/pokemon/' + name).then((r)=>{
let data = r.data
console.log(data.abilities['0'].ability.name)
 
 
let hp = data.stats['5'].base_stat
let attack = data.stats['4'].base_stat
let defense = data.stats['3'].base_stat
let ability = data.abilities['0'].ability.name
let pokemon1 = new Pokemon(str(name),img(name,img1),hp,attack,defense,ability)
pokemon1.render()
});

let name2 = (name)=> axios.get('https://pokeapi.co/api/v2/pokemon/' + name).then((r)=>{
let data = r.data
console.log(data.abilities['0'].ability.name)
 
 
let hp = data.stats['5'].base_stat
let attack = data.stats['4'].base_stat
let defense = data.stats['3'].base_stat
let ability = data.abilities['0'].ability.name
let pokemon1 = new Pokemon(str(name),img(name,img2),hp,attack,defense,ability)
pokemon1.render2()
});


let name3 = (name)=> axios.get('https://pokeapi.co/api/v2/pokemon/' + name).then((r)=>{
let data = r.data
console.log(data.abilities['0'].ability.name)
 
 
let hp = data.stats['5'].base_stat
let attack = data.stats['4'].base_stat
let defense = data.stats['3'].base_stat
let ability = data.abilities['0'].ability.name
let pokemon1 = new Pokemon(str(name),img(name,img3),hp,attack,defense,ability)
pokemon1.render3()
});



let pok1on =0;
let btnpok1 = document.getElementById('btn-pok1')
btnpok1.onclick = ()=>{
  if(pok1on === 0){
  pokemon1.style.display = "block"
      txtpok1.style.display="block"    
      pokemon2.style.display ="none"    
      txtpok2.style.display="none"
      pokemon3.style.display ="none"    
      txtpok3.style.display="none"
      name1('dratini')
      pok1on++;

    }else if(pok1on%2 === 0){
        pokemon1.style.display = "none"
      txtpok1.style.display="none"    
      pokemon2.style.display ="none"    
      txtpok2.style.display="none"
      pokemon3.style.display ="none"    
      txtpok3.style.display="none"
      pok1on++
      }else{
        pokemon1.style.display = "block"
      txtpok1.style.display="block"    
      pokemon2.style.display ="none"    
      txtpok2.style.display="none"
      pokemon3.style.display ="none"    
      txtpok3.style.display="none"
      pok1on++;
      }

}

let btnpok2 = document.getElementById('btn-pok2')
let pok2on =0;
btnpok2.onclick =()=>{
if(pok2on === 0){
  pokemon1.style.display = "none"
          txtpok1.style.display="none"
          pokemon2.style.display ="block"    
          txtpok2.style.display="block"
          pokemon3.style.display ="none"    
          txtpok3.style.display="none"    
          name2('wurmple')
          pok2on++
}
else if(pok2on%2 === 0){
  pokemon1.style.display = "none"
          txtpok1.style.display="none"
          pokemon2.style.display ="none"    
          txtpok2.style.display="none"
          pokemon3.style.display ="none"    
          txtpok3.style.display="none"
          pok2on++
}
else{
  pokemon1.style.display = "none"
          txtpok1.style.display="none"
          pokemon2.style.display ="block"    
          txtpok2.style.display="block"
          pokemon3.style.display ="none"    
          txtpok3.style.display="none"
          pok2on++
}

}

let btnpok3 = document.getElementById('btn-pok3')
let pok3on =0;
btnpok3.onclick = ()=>{
if(pok3on === 0){
  pokemon1.style.display = "none"
        txtpok1.style.display="none"
        pokemon2.style.display ="none"    
        txtpok2.style.display="none"
        pokemon3.style.display ="block"    
        txtpok3.style.display="block"
        name3('lillipup')
        pok3on++
}
else if(pok3on%2 === 0){
  pokemon1.style.display = "none"
        txtpok1.style.display="none"
        pokemon2.style.display ="none"    
        txtpok2.style.display="none"
        pokemon3.style.display ="none"    
        txtpok3.style.display="none"
        pok3on++

}
else{
  pokemon1.style.display = "none"
        txtpok1.style.display="none"
        pokemon2.style.display ="none"    
        txtpok2.style.display="none"
        pokemon3.style.display ="block"    
        txtpok3.style.display="block"
        pok3on++
}
} 









// Wurmple



//tv on/off
let audio = document.getElementById('audio')
let frame = document.getElementById('frame')
let on = document.getElementById('on')
let tv = document.getElementById('tv')
let onOf = 0
on.onclick = ()=>{
  if(onOf === 0 ){ 
    
    tv.style.opacity="0.2"
   frame.style.display="block"
   frame.currentTime = 0;
   audio.pause()
   frame.play();
    onOf++
  }
  else if(onOf === 1){
    tv.style.opacity="0.2";
    frame.pause();
    frame.style.display="none"
    onOf++
  }
  else{
    tv.style.opacity = "1" 
    onOf = 0
    audio.play()
  }

} 


//opacity btn

btnc1 = document.getElementById('btn-c1')
btnc2 = document.getElementById('btn-c2')
let countClick =  tv.style.opacity
btnc1.onclick =  ()=>{
if(tv.style.opacity === '0.2'){
  tv.style.opacity = '0.1'
}
 

if(tv.style.opacity === '0.3'){
  tv.style.opacity = '0.2'
}
if(tv.style.opacity === '0.4'){
  tv.style.opacity = '0.3'
}


}

btnc2.onclick =()=>{
  if(tv.style.opacity === '0.2'){
    tv.style.opacity = '0.3'
  }
  if(tv.style.opacity === '0.1'){
    tv.style.opacity ='0.2'
  }
  if(tv.style.opacity === '0.3'){
    tv.style.opacity = '0.4'
  }
  
 
  
}


//pokemon fight
let b1= document.getElementById('btn1')
let b2= document.getElementById('btn2')
let b3= document.getElementById('btn3')
let btn6 = document.getElementById('btn6')


let openClose = 0;
btn6.onclick= ()=>{
 
  if(openClose === 0){
  // img = document.getElementById('img')
  pokemon1.style.display = "none"
        txtpok1.style.display="none"
        pokemon2.style.display ="none"    
        txtpok2.style.display="none"
        pokemon3.style.display ="none"    
        txtpok3.style.display="none"
        pokemon1.style.display ="block"  
  pokemon2.style.display ="block"  
  pokemon3.style.display ="block"
  pokemon1.style.marginLeft="0%" 
   pokemon2.style.marginLeft="15%"
   pokemon3.style.marginLeft="30%"
   pokemon1.style.width = "10%"
   pokemon2.style.width = "10%"
   pokemon3.style.width = "10%"
   pokemon1.style.height = "20%"
   pokemon2.style.height = "20%"
   pokemon3.style.height = "20%"
   btnpok1.style.display="none"
   btnpok2.style.display="none"
   btnpok3.style.display="none"
   b1.style.display = "block"
   b2.style.display = "block"
   b3.style.display = "block"
   openClose = 1
  }else{
    pokemon1.style.display = "none"
    txtpok1.style.display="none"
    pokemon2.style.display ="none"    
    txtpok2.style.display="none"
    pokemon3.style.display ="none"    
    txtpok3.style.display="none"
    pokemon1.style.display ="none"  
pokemon2.style.display ="none"  
pokemon3.style.display ="none"
pokemon1.style.marginLeft="0%" 
pokemon2.style.marginLeft="0%"
pokemon3.style.marginLeft="0%"
pokemon1.style.width = "20%"
pokemon2.style.width = "20%"
pokemon3.style.width = "20%"
pokemon1.style.height = "50%"
pokemon2.style.height = "50%"
pokemon3.style.height = "50%"
btnpok1.style.display="block"
btnpok2.style.display="block"
btnpok3.style.display="block"
b1.style.display = "none"
b2.style.display = "none"
b3.style.display = "none"
openClose = 0;
imgPok1.classList.remove('select')
imgPok2.classList.remove('select')
imgPok3.classList.remove('select')

   }
  

}




// select 2 pokemons 

let imgPok1 = document.getElementById("img1")
let imgPok2 = document.getElementById("img2")
let imgPok3 = document.getElementById("img3")
let pokemonSelect1 = 0;
let pokemonSelect2 = 0;
let select = 0;
let remove = 0;
let p1 = 0;
let p2 = 0; 
let p3 = 0;
b1.onclick = ()=>{
  if(select === 0 || select === 1 && p1 === 0){
  imgPok1.classList.add('select')
  select++
  p1++
 
}
else{
  imgPok1.classList.remove('select')
  p1--
  select--
}

}
b2.onclick = ()=>{
  if(select === 0 || select === 1 && p2 === 0){
  imgPok2.classList.add('select')
   select++ 
   p2++
  }
  else{
    imgPok2.classList.remove('select')
    p2--
    select--
  }
}
b3.onclick = ()=>{
  if(select === 0 || select === 1 && p3 === 0){
  imgPok3.classList.add('select')
  select++
  p3++
}
else{
  imgPok3.classList.remove('select')
  p3--
  select--
}
}

//fight algoritm
class  Pokemonfight{
  constructor(name,life,attack){
   this.name= name;  
   this.life = life;
  this.attack = attack;
  
  }
  
}

let fight = (p1,p2)=>{
if(p1.life > 0 ){
  p1.life-=p2.attack;
}
if(p2.life > 0){
  p2.life-=p1.attack
}
else if(p1.life <= 0 || p2.life <= 0){
  if(p1.life === p2.life){
    return "tie"
  }
  else if(p1.life > 0){
    return p1.name
  }
  else{
   return p2.name
  }
}
return fight(p1,p2)

}  
 //fight    
let f1 = 0
let elemSelect = document.getElementsByClassName('select');
let btn5 = document.getElementById('btn5')

btn5.onclick= ()=>{
  if(f1 === 0){
  pokemon1.style.display = 'none'
  pokemon2.style.display ='none'
  pokemon3.style.display = 'none'

 
if(imgPok1.classList.contains('select')){
  pokemon1.style.display = 'block'
  // pokemon1.style.
}
if(imgPok2.classList.contains('select')){
  pokemon2.style.display = 'block'
}
if(imgPok3.classList.contains('select')){
  pokemon3.style.display = 'block'
}
f1 ++
}
else if(f1 === 1){
  f1 --;
  if(imgPok1.classList.contains('select') && imgPok2.classList.contains('select') ){
    //pokemon1
    let n1 = document.getElementById('name1').innerHTML
    let img1 = document.getElementById('img1')
    let h1 = document.getElementById('hp1').innerHTML
    let a1 = document.getElementById('attack1').innerHTML
//pokemon2
    let n2 = document.getElementById('name2').innerHTML
    let img2 = document.getElementById('img2')
    let h2 = document.getElementById('hp2').innerHTML
    let a2 = document.getElementById('attack2').innerHTML
  
 let pokf1 = new Pokemonfight(n1,h1,a1)
 let pokf2 = new Pokemonfight(n2,h2,a2)
 if(fight(pokf1,pokf2) === n2){
  img1.src='' 
   
 }
 if(fight(pokf1,pokf2) === n1){
  img2.src='' 
   
 }
  
  }
  else if(imgPok2.classList.contains('select') && imgPok3.classList.contains('select') ){

 //pokemon2
 let n2 = document.getElementById('name2').innerHTML
    let img2 = document.getElementById('img2')
    let h2 = document.getElementById('hp2').innerHTML
    let a2 = document.getElementById('attack2').innerHTML
    //pokemon3
     let n3 = document.getElementById('name3').innerHTML
     let img3 = document.getElementById('img3')
     let h3 = document.getElementById('hp3').innerHTML
     let a3 = document.getElementById('attack3').innerHTML
     let pokf3 = new Pokemonfight(n3,h3,a3)
     let pokf2 = new Pokemonfight(n2,h2,a2)
     if(fight(pokf2,pokf3) === n2){
      img3.src='' 
       
     }
     if(fight(pokf2,pokf3) === n3){
      img2.src='' 
       
     }
    
  }
  else if(imgPok1.classList.contains('select') && imgPok3.classList.contains('select') ){
    
//pokemon1
let n1 = document.getElementById('name1').innerHTML
let img1 = document.getElementById('img1')
let h1 = document.getElementById('hp1').innerHTML
let a1 = document.getElementById('attack1').innerHTML
 //pokemon3
  let n3 = document.getElementById('name3').innerHTML
  let img3 = document.getElementById('img3')
  let h3 = document.getElementById('hp3').innerHTML
  let a3 = document.getElementById('attack3').innerHTML
  
  let pokf1 = new Pokemonfight(n1,h1,a1)
  let pokf3 = new Pokemonfight(n3,h3,a3)

  if(fight(pokf1,pokf3) === n1){
   img3.src='' 
    
  }
  if(fight(pokf1,pokf3) === n3){
   img1.src='' 
    
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