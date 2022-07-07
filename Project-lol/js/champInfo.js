const ajax = new XMLHttpRequest();
const championURL = "https://ddragon.leagueoflegends.com/cdn/12.6.1/data/ko_KR/champion.json";
ajax.open('GET', championURL, true);
ajax.send();

const cc = ["공중", "기절", "공포", "둔화", "제압", "속박", "수면", "광란", "침묵", "경직", "매혹", "밀어내고", "뒤로 날려버리고", "공중에 떠오르고", "끌어당깁니다", "잡아당기며", "띄워 올리고"];
let ccHave = false;

const information = setTimeout(()=>{
  const champions = Object.values(JSON.parse(ajax.response).data);
  console.log(champions);
  let ranChampion = champions[Math.floor(Math.random()*champions.length)].id;
  console.log(ranChampion);
  const infoURL = `http://ddragon.leagueoflegends.com/cdn/12.12.1/data/ko_KR/champion/${ranChampion}.json`;
  ajax.open('GET', infoURL, false);
  ajax.send();
  const info = JSON.parse(ajax.response).data;
  const skills = info[ranChampion].spells;
  const passive = info[ranChampion].passive;
  console.log(info[ranChampion]);
  console.log(passive.description);
  console.log(cc.filter(x=>passive.description.includes(x)));
  for(let i=0; i<skills.length; i++) {
    console.log(skills[i].tooltip);
    console.log(cc.filter(x=>skills[i].description.includes(x)));
    console.log(cc.filter(x=>skills[i].tooltip.includes(x)));

    if (cc.filter(x=>skills[i].tooltip.includes(x)).length !== 0 || cc.filter(x=>skills[i].description.includes(x)).length !== 0 || cc.filter(x=>passive.description.includes(x)).length !== 0 ) {
      ccHave = true;
    }
  }
},1000);

setTimeout(()=>{
  console.log(ccHave);
},2000);
