const championsKeyURL = "http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json";
ajax.open('GET', championsKeyURL, false);
ajax.send();
const championsKey = JSON.parse(ajax.response);
const list = championsKey.data;
const championsList = Object.values(championsKey.data);
const championsKeyValue = [];

for(let i=0; i<championsList.length; i++) {
  championsKeyValue.push(championsList[i].key);
}

const randomKey = Math.floor(Math.random()*championsKeyValue.length);
