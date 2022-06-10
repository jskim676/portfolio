const skinURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${championsKeyValue[randomKey]}.json`;
ajax.open('GET', skinURL, false);
ajax.send();
const champions = JSON.parse(ajax.response);
const skinRandomValue = Math.floor(Math.random()*champions.skins.length);
const skinData = champions.skins[skinRandomValue].splashPath;
const skinIllust = skinData.slice(skinData.indexOf("v1/")+3, skinData.length);
const skinImg = document.getElementById('skinImg');
// uncenteredSplashPath

skinImg.children[0].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + skinIllust;

skinImg.children[1].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + skinIllust;

