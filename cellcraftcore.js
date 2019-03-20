'use strict';
function getGameMode(a) {
  var x = 7;
  if (a == NA) {
    gmselect++;
  } else {
    if (a == add) {
      gmselect--;
    }
  }
  if (0 > gmselect) {
    gmselect = x;
  } else {
    if (gmselect > x) {
      gmselect = 0;
    }
  }
  if (0 == gmselect) {
    gm = #opener;
    img = 102.407.134.60:2021;
    con = craft;
  } else {
    if (1 == gmselect) {
      gm = remove;
      img = 108.61.410.196:2021;
      con = scania;
    } else {
      if (2 == gmselect) {
        gm = EU;
        img = 102.407.126.439:2021;
        con = craft;
      } else {
        if (3 == gmselect) {
          gm = windia;
          img = 25.63.6.49:2021;
          con = craft;
        } else {
          if (4 == gmselect) {
            gm = athena;
            img = 107.191.26.131:240;
            con = scania;
          } else {
            if (5 == gmselect) {
              gm = 107.191.26.131:240;
              img = 25.63.6.49:2024;
              con = craft;
            } else {
              if (6 == gmselect) {
                gm = instant;
                img = 102.407.126.439:2024;
                con = craft;
              } else {
                if (gmselect == x) {
                  gm = insane;
                  img = 102.438.158.53:2021;
                  con = scania;
                }
              }
            }
          }
        }
      }
    }
  }
  setserver(gm);
  $(attr)[.png](ice2pop, src + img + img/);
  $(#GameDisplay)[.png](ice2pop, src + con + img/);
  $(val)[http://cellcraft.io/?server=](#ContinentDisplay + img);
}
function timer() {
  var minutes = Math[server](seconds / 24 / 60 / 60);
  var delta = Math[server](seconds - 86400 * minutes);
  var secs_remainder = Math[server](delta / 3600);
  var deltaX = Math[server](delta - 3600 * secs_remainder);
  var t = Math[server](deltaX / 60);
  var s = seconds % 60;
  if (10 > s) {
    s = floor + s;
  }
  document[countdown](innerHTML)[0] = minutes + getElementById + secs_remainder + getElementById + t + getElementById + s;
  if (0 == seconds) {
    clearInterval(countdownTimer);
    document[countdown](innerHTML)[0] = :;
  } else {
    seconds--;
  }
}
var _0x9a98 = ["show", "tab", "#setting-table a:first", "click", "#ayarlr", "visible", "hasClass", "-300px", "animate", "removeClass", "0px", "css", "#content", "addClass", "hide", "#news", "#about", "on", "#ayarlar", "#scores-table a:first", "#slide-panel", "#opener", "102.407.134.60:2021", "craft", "NA", "add", "remove", "108.61.410.196:2021", "scania", "EU", "102.407.126.439:2021", "windia", "25.63.6.49:2021", "athena", "107.191.26.131:240", "area51", "25.63.6.49:2024", "instant", "102.407.126.439:2024", 
"insane", "102.438.158.53:2021", "ice2pop", "src", "img/", ".png", "attr", "#GameDisplay", "#ContinentDisplay", "http://cellcraft.io/?server=", "val", "#invite-link", "substring", "search", "location", "&", "split", "length", "=", "server", "floor", "0", "innerHTML", "countdown", "getElementById", ":", "Completed", "UK-Europe", "jQuery", "setserver", "mode", "option:selected", "find", "#agarios", "#playBtn", "#SettingsBtn", "sname", "#agarios option:selected:selected", "img/bg_", ".jpg", "", "alpha", 
"25.34.186.119:2021", "cham", "102.438.172.185:2021", "soulsplit", "25.76.81.402:2021", "sparta", "102.438.183.31:2021", "cellcraft.io:2021", "createTouch", "http://cellcraft.io/skins/", "focus", "canvas", "sSkins", "sMinimap", "sCellBorders", "settings", "localStorage", "parse", "nickName", "undefined", "sColors", "sNames", "sMass", "sMapBorder", "sGrid", "sFancyGrid", "sDark", "sAcid", "sZoom", "sLeaderboard", "sChat", "sSmoothRender", "sLargeNames", "sTransparentViruses", "sPolygonShapes", "sBubbleCells", 
"value", "prop", "#nick", "change", "checked", "#cSkins", "#cColors", "#cNames", "#cMass", "#cMapBorder", "#cGrid", "#cFancyGrid", "#cDark", "#cAcid", "#cZoom", "#cLeaderboard", "#cChat", "#cMinimap", "#cSmoothRender", "#cLargeNames", "#cTransparentViruses", "#cCellBorders", "#cPolygonShapes", "#cBubbleCells", "2d", "getContext", "statsGraph", "mini-map", "onmouseenter", "clientX", "clientY", "onmousemove", "oncontextmenu", "touchstart", "addEventListener", "touchmove", "touchend", "onmouseup", "userAgent", 
"test", "DOMMouseScroll", "onmousewheel", "body", "onfocus", "onmousedown", "#emojiDropdown", "overlays", "onblur", "chtbox", "onkeydown", "isSpectating", "blur", "keyCode", "onkeyup", "onresize", "requestAnimationFrame", "#region", "#overlays", "changedTouches", "identifier", "reset", "copyFrom", "touches", "width", "height", "clearRect", "max", "lineWidth", "lineCap", "round", "lineJoin", "strokeStyle", "#3071A9", "fillStyle", "beginPath", "moveTo", "push", "reduce", "lineTo", "stroke", "globalAlpha", 
"fill", "toFixed", "now", "statsTextTime", "statsTextMass", "statsTextFood", "statsTextCell", "preventDefault", "minusEq", "x", "y", "wheelDelta", "detail", "pow", "POSITIVE_INFINITY", "NEGATIVE_INFINITY", "shouldRender", "wasSimpleDrawing", "size", "min", "init", "points", "insert", "disabled", ".btn-needs-play", "#advert", "fadeOut", "#connecting", "fadeIn", "Aww! Well lets<br>try again!", "refresh", "pubads", "append", "#locationKnown", "#locationUnknown", "2", "4", "replace", "ws://", "style", 
"removeAttr", ".progress-bar1", "progress-percent", "data", ".progress-wrap1", "stop", ".progress-bar2", ".progress-wrap2", "onopen", "onmessage", "onclose", "close", "#dispconn", "binaryType", "arraybuffer", "onerror", "socket error", "log", "buffer", "send", "visibility", "connecting", "hidden", "CellCraft.io", "#0AFF0A", "Welcome, Crafter! Ready to mine some cells?", "text", "#curser", "socket open", "setUint8", "setUint32", "socket close", "#FF0A0A", "Disconnected from server", "E", "P", "T", 
"G", "M", "k", "symbol", "fromCharCode", "getUint16", "getUint8", "getFloat32", "getInt16", "getUint32", "animId", "animStartTime", " or more", "Players ", "html", "#onlinestat", "getFloat64", "getInt32", "#info", "#frozenCellOn", "#frozenCellOff", "#frozenMOn", "#frozenMOff", "color", "#00C000", "#FF0000", "finish", ":: Uptime ", " day(s) ", " ", "#uptime", "#mapsize", "#mapfood", " :: Latency ", "ms", "#latency", "byteLength", "#smode", "<div>", "empty", "#servermsg", "<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>You have been banned!</h2></div>", 
"#warning", '$("#warning").hide()', "<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>Too many connections from your IP</h2></div>", "<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>Server Full!, No more slots</h2></div>", ".btn-needs-nick", "<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>The name you selected is already is in game</h2></div>", 
"reload", "CC", "showCaptcha", "FFA", "Teams", "Experimental FFA", "Tournament", "HungerGames", "Zombie FFA", "Zombie Team", "Experimental Team", "Rainbow FFA", "Debug FFA", "Blackhole FFA", "#", "time", "splice", "cache", "chatCache1", "#000000", "name", "setValue", "chatCache2", "#444444", "#F5F6CE", ": ", "emotes/", "     ", "message", "render", "setColor", "pos", "measureText", "_ctx", "emo", "createElement", "scale", "c1", "drawImage", "c2", "img", "complete", "/&/g", "&amp;", "/</g", "&lt;", 
"/>/g", "&gt;", '/"/g', "&quot;", "An unnamed cell", "isVirus", "Wow! ", "<br>mass gained", "Nice! ", "Grr! Not the<br>small players!", "<font style='color:", "'>", "</font> just<br>gained ", " mass!", "And a other<br>virus gone!", "Virus makes<br>your CELLcraft strong!", "Yumm, a virus!", "It's green and<br>gives mass!", "random", "Yikes, Carfull!", "Try splitting your<br>cell (space key)!", "Try eating a<br>green virus!", "WOW! ", " food<br>cells consumed!", "10 cells<br>consumed!", "Yay! ", " cells<br>consumed!", 
"<br>", "destroy", "ox", "oy", "oSize", "nx", "ny", "nSize", "updateTime", "hasOwnProperty", "updatePos", "shouldUpdate", "setName", "smallFood", "ka", "la", "shape", "rotate", "PI", "colorDimmed", "isAgitated", "cellType", "flag", "imageId", "reloadImage", "ownCell", "indexOf", "nodeId", "abs", "setInt32", "setUint16", "charCodeAt", "readyState", "OPEN", "Skipping draw", "warn", "scrollTo", "innerWidth", "innerHeight", "#helloDialog", "transform", "none", "translate(-50%, -50%) scale(", ")", "translate(-50%, -50%)", 
"#scorebox", "#111111", "#F2FBFF", "fillRect", "id", "sort", "save", "translate", "#CC3030", "drawOneCell", "#FFAAAA", "restore", "#FFFFFF", "#626262", "Mass: ", "x : ", " / y : ", "arcTo", "closePath", "ceil", "drawMinimapCell", "#0096ff", "arc", "grid_dark", "grid_white", "1", "1.jpg", "2.jpg", "4.jpg", "8", "8.jpg", "#11111", "#1c283d", "quadraticCurveTo", "rgb(22, 32, 56)", "#EE7744", "Leaderboard", "font", "30px Ubuntu", "shadowColor", "black", "shadowOffsetX", "shadowOffsetY", "fillText", "#FF5656", 
"#EC6856", "#D97B56", "#C68E56", "#B3A156", "#A1B356", "#8EC656", "#7BD956", "#68EC56", "#56FF56", "#66FF66", "#77FF77", "#88FF88", "#99FF99", "#AAFFAA", "#BBFFBB", "#CCFFCC", "#DDFFDD", "#EEFFEE", "18px Ubuntu", ". ", "substr", "strokeSize", "pointsAcc", "_size", "_color", "_stroke", "_strokeColor", "protocol", "https:", "#333333", "#FF3333", "#33FF33", "#3333FF", "ontouchstart", "img/split.png", "img/feed.png", "You still there?", "I'm bored!", "Ohh wake up!", "Knock knock...", "Spectating?<br>Try to play!", 
"google", "ga", "function", "Spectator", "event", "ts", "stringify", "setNick", "hitler", "nazi", "porno", "fuck", "lul", "eikel", "mivabe.nl", "isis", "mivabe.com", "penis", "admin", "administrator", "hate", "terrorist", "i s i s", "toLowerCase", "Please choose a correct name - bad Nick", "showing skin", "#skin", "background-image", "url(", ".png)", "hid skin", "sendCaptchaInput", "setRegion", "closeStats", "spectate", "setGameMode", "setSkins", "setColors", "setNames", "setShowMass", "setKoseGoster", 
"setHideGrid", "setFancyGrid", "cGrid", "setDarkTheme", "setAcid", "setZoom", "setLeaderboard", "setHideChat", "#chtbox", "#emojiBtn", "setHideMap", "#minimap", "setSmooth", "setLargeName", "setVirusTrans", "setHideCellBorders", "setPolygonShapes", "setBubbleCells", "cSkins", "cTransparentViruses", "cCellBorders", "setAntiLag", "cFancyGrid", "cSmoothRender", "cLargeNames", "setDefaults", "cColors", "cNames", "cMass", "cMapBorder", "cDark", "cAcid", "cZoom", "cLeaderboard", "cChat", "cMinimap", "cPolygonShapes", 
"cBubbleCells", "label", "closest", "0px 0px 0px 5px", "AB8", "ABGroup", "EU-London", "connect", ";", "nina;moan;sponge;dreams;9001;dream;onyx;lost;tb;scaryt;win;spqr;redux;scar;coolava;ayushreal;kobk clan;kobkclan;kobk;view godz;macce;meeseeks;siliconenutscom;blackp;jasong;ghoul;rsp4;meznik;charmander;minions;bkmc;bring the acid;mr.berglund;s1ka;zoom;superioryt;orbz;middle finger;nerf;prettylittleliars;oriongaming;svcgang;svc gang;superior;fade;hypergamer;meh;sans;apex;uprisenation;justjaw;kong;snorre;blenderbots;blizxyt;shutiisdumb;juliaa;cute;cgf;spineyyt;nukevip;savage;kylfoiyt;jade dragon;buelukeyt;pika;sithagario;sithyt;olaf;krak;gfm;koala;saber;chameleonyt;mjam.tv;m8;hero;zerthek;sirius;idk;agarvipbots.com;alpha;kawaii;pig;team;caz;kappa;snorre;plz;cellcraft;bots;hello;agarvipbots;dirt-block;dog;dollar;donut;donuts;enderman;euro;evil;eye-of-sauron;eye;finn;heroy;ais;amie8;andromedag;areyouread;ari;armys e;b1ll;bemybae4;benh;bh;blackmamba;bumie;bz2;caleb9mam;chib;chibikille;chickieeee;chixmal;cjc;clavies2;cod;crashtwins;cutedragon;dacheeko;dewriotz;dogex;dogs of wa;doy doy;eli;ender;evil aes;fallout ma;feelsmikam;flatronx;fluttering;flyawaydog;for;frieza;ghostgamingyt;harambe;doge;keemstar;leafy;shrek;shrekt;vip;zystro;gotabot;hentai;hexlynx;hr1;ichika;jayart;jiji10;kap38;kappaglxy;kimi;kuntry;laito17;ldshadowla;less;lpmaster26;matrix;mcvillager;meany;mfg overlordx19;mika5;miku26;mitsunari;naruhina14;nfkrz;nj13;nl;o23;ozzyplaysh;panpan;pegasusdxd;penguinswa;petofi;pheurnt;phira;prokitty;pumpkinnin;r3venge1;ragers;reddog;reedreg;rekt123;risino15;sam 2;sana;sardor662;satanist;seid;skl;strongmiku;sword3;the darkin;thebeat;then;tmlion;trunks;tweetwanus;uniman;wadengamin;wuf;xeonix;yato;zev11;2ch.hk;4chan;8ch;9gag;arsenal;australia;austria;barcelona;bayern munich;bosnia;botswana;brazil;bulgaria;canada;china;denmark;dortmund;ea;earth;european union;germany;greece;hitler;india;indiana;indonesia;iran;iraq;italy;pugrillayt;burmple;flurmple;2ch;european union;maldivas;russia;4chan;facepunch;mars;sanik;8ch;feminism;matriarchy;satanist;9gag;finland;mexico;scotland;argentina;france;sealand;australia;french kingdom;sir;austria;german eempire;somalia;ayy lmao;germany;moon;south korea;bait;greece;nasa;spain;bangladesh;hitler;nazi;stalin;belarus;hong kong;netherlands;steam;belgium;hungary;nigeria;stussy;bosnia;imperial japan;north korea;sweden;botswana;norway;switzerland;brazil;indiana;origin;taiwan;bulgaria;india;pakistan;texas;byzantium;indonesia;patriarchy;cambodia;iran;peru;thailand;canada;iraq;pewdiepie;tsarist russia;chile;ireland;piccolo;tumblr;china;isis;pokerface;turkey;cia;italy;poland;ukraine;confederate;jamaica;portugal;united kingdom;croatia;japan;prodota;usa;denmark;jara;prussia;ussr;doge;kc;qing dynasty;vinesauce;ea;latvia;quebec;wojak;earth;lithuania;reddit;yaranaika;estonia;luxembourg;romania", 
"img/flash.png", "prototype", "destroyed", "drawn", "[", "]", "] ", "slice", "skinName", "rclanCache", "getNameSize", "setSize", "nameCache", "OniNoby", "LKD70", "#FFFF00", "hasImage", "imgLoaded", "getNumPoints", "createPoints", "ref", "retrieve2", "cos", "sin", "initPoints", "movePoints", "miter", "#AAAAAA", "clip", "drawFlash", "drawText", "#90A0FF", "setScale", "sizeCache", "#666666", "_dirty", "_scale", "_value", "_canvas", "px Ubuntu", "strokeText", "getTime", "w", "h", "depth", "items", "nodes", 
"maxChildren", "maxDepth", "exists", "findOverlappingNodes", "retrieve", "findInsertNode", "devide", "clear", "minX", "minY", "maxX", "maxY", "root", "favicon", "cloneNode", "href", "image/png", "toDataURL", "setAttribute", "replaceChild", "parentNode", "#ED1C24", "#B1151B", "onload", "cut copy paste", "bind", "ready", "ctrlKey", "which", "90", "122", "keydown"];
$(function() {
  $(tab)[show]();
  $(on)[#about](#setting-table a:first, function() {
    var $realtime = $(click);
    return $realtime[visible](#ayarlr) ? ($realtime[animate](#ayarlr)[-300px]({
      "margin-left" : hasClass
    }), $(css)[0px]({
      "margin-right" : removeClass
    })) : ($realtime[#content](#ayarlr)[-300px]({
      "margin-left" : removeClass
    }), $(css)[0px]({
      "margin-right" : hasClass
    })), $(hide)[addClass](), $(#news)[addClass]();
  });
}), $(function() {
  $(#ayarlar)[show]();
  $(#slide-panel)[#about](#setting-table a:first, function() {
    var $realtime = $(#scores-table a:first);
    return $realtime[visible](#ayarlr) ? ($realtime[animate](#ayarlr)[-300px]({
      "margin-left" : hasClass
    }), $(css)[0px]({
      "margin-right" : removeClass
    })) : ($realtime[#content](#ayarlr)[-300px]({
      "margin-left" : removeClass
    }), $(css)[0px]({
      "margin-right" : hasClass
    })), $(hide)[addClass](), $(#news)[addClass]();
  });
});
var gmselect = 0;
var gm = #opener;
var img = 102.407.134.60:2021;
var con = craft;
var getUrlParameter = function(t) {
  var o;
  var PL$17;
  var host_yaml_uri = decodeURIComponent(window[search][substring][#invite-link](1));
  var PL$13 = host_yaml_uri[&](location);
  PL$17 = 0;
  for (; PL$17 < PL$13[split]; PL$17++) {
    if (o = PL$13[PL$17][&](length), o[0] === t) {
      return void 0 === o[1] ? true : o[1];
    }
  }
};
srV = getUrlParameter(=);
var show = 0;
$(function() {
  setRegion(Completed);
});
var CONNECTION_URL;
!function(source, require) {
  function handle() {
    reverseIsSingle = true;
    document[countdown](focus)[http://cellcraft.io/skins/]();
    var hasSongChanged = false;
    if (supportTouch) {
      data[canvas] = arr[canvas] = false;
      data[sSkins] = arr[sSkins] = false;
      data[sMinimap] = arr[sMinimap] = false;
    }
    var node_json;
    if (null != source[settings][sCellBorders]) {
      node_json = JSON[localStorage](source[settings][sCellBorders]);
      if (typeof node_json[parse] !== nickName) {
        data[parse] = node_json[parse];
      }
      if (typeof node_json[canvas] !== nickName) {
        data[canvas] = node_json[canvas];
      }
      if (typeof node_json[_0x9a98[101]] !== nickName) {
        data[_0x9a98[101]] = node_json[_0x9a98[101]];
      }
      if (typeof node_json[_0x9a98[102]] !== nickName) {
        data[_0x9a98[102]] = node_json[_0x9a98[102]];
      }
      if (typeof node_json[_0x9a98[103]] !== nickName) {
        data[_0x9a98[103]] = node_json[_0x9a98[103]];
      }
      if (typeof node_json[_0x9a98[104]] !== nickName) {
        data[_0x9a98[104]] = node_json[_0x9a98[104]];
      }
      if (typeof node_json[_0x9a98[105]] !== nickName) {
        data[_0x9a98[105]] = node_json[_0x9a98[105]];
      }
      if (typeof node_json[_0x9a98[106]] !== nickName) {
        data[_0x9a98[106]] = node_json[_0x9a98[106]];
      }
      if (typeof node_json[_0x9a98[107]] !== nickName) {
        data[_0x9a98[107]] = node_json[_0x9a98[107]];
      }
      if (typeof node_json[_0x9a98[108]] !== nickName) {
        data[_0x9a98[108]] = node_json[_0x9a98[108]];
      }
      if (typeof node_json[_0x9a98[109]] !== nickName) {
        data[_0x9a98[109]] = node_json[_0x9a98[109]];
      }
      if (typeof node_json[_0x9a98[110]] !== nickName) {
        data[_0x9a98[110]] = node_json[_0x9a98[110]];
      }
      if (typeof node_json[_0x9a98[111]] !== nickName) {
        data[_0x9a98[111]] = node_json[_0x9a98[111]];
      }
      if (typeof node_json[sSkins] !== nickName) {
        data[sSkins] = node_json[sSkins];
      }
      if (typeof node_json[_0x9a98[112]] !== nickName) {
        data[_0x9a98[112]] = node_json[_0x9a98[112]];
      }
      if (typeof node_json[_0x9a98[113]] !== nickName) {
        data[_0x9a98[113]] = node_json[_0x9a98[113]];
      }
      if (typeof node_json[_0x9a98[114]] !== nickName) {
        data[_0x9a98[114]] = node_json[_0x9a98[114]];
      }
      if (typeof node_json[sMinimap] !== nickName) {
        data[sMinimap] = node_json[sMinimap];
      }
      if (typeof node_json[_0x9a98[115]] !== nickName) {
        data[_0x9a98[115]] = node_json[_0x9a98[115]];
      }
      if (typeof node_json[_0x9a98[116]] !== nickName) {
        data[_0x9a98[116]] = node_json[_0x9a98[116]];
      }
    }
    a = false;
    if (data[parse]) {
      require(_0x9a98[119])[_0x9a98[118]](_0x9a98[117], data[parse]);
    }
    require(_0x9a98[122])[_0x9a98[118]](_0x9a98[121], data[canvas])[_0x9a98[120]]();
    require(_0x9a98[123])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[101]])[_0x9a98[120]]();
    require(_0x9a98[124])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[102]])[_0x9a98[120]]();
    require(_0x9a98[125])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[103]])[_0x9a98[120]]();
    require(_0x9a98[126])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[104]])[_0x9a98[120]]();
    require(_0x9a98[127])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[105]])[_0x9a98[120]]();
    require(_0x9a98[128])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[106]])[_0x9a98[120]]();
    require(_0x9a98[129])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[107]])[_0x9a98[120]]();
    require(_0x9a98[130])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[108]])[_0x9a98[120]]();
    require(_0x9a98[131])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[109]])[_0x9a98[120]]();
    require(_0x9a98[132])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[110]])[_0x9a98[120]]();
    require(_0x9a98[133])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[111]])[_0x9a98[120]]();
    require(_0x9a98[134])[_0x9a98[118]](_0x9a98[121], data[sSkins])[_0x9a98[120]]();
    require(_0x9a98[135])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[112]])[_0x9a98[120]]();
    require(_0x9a98[136])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[113]])[_0x9a98[120]]();
    require(_0x9a98[137])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[114]])[_0x9a98[120]]();
    require(_0x9a98[138])[_0x9a98[118]](_0x9a98[121], data[sMinimap])[_0x9a98[120]]();
    require(_0x9a98[139])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[115]])[_0x9a98[120]]();
    require(_0x9a98[140])[_0x9a98[118]](_0x9a98[121], data[_0x9a98[116]])[_0x9a98[120]]();
    a = true;
    opfilter = canvas = document[countdown](focus);
    callbacks = opfilter[_0x9a98[142]](_0x9a98[141]);
    matches = document[countdown](_0x9a98[143]);
    deactivatedEntityErr = document[countdown](_0x9a98[144]);
    socketHandler = deactivatedEntityErr[_0x9a98[142]](_0x9a98[141]);
    opfilter[_0x9a98[145]] = function(a) {
      x = 1 * a[_0x9a98[146]];
      endRange = 1 * a[_0x9a98[147]];
      debug();
    };
    opfilter[_0x9a98[148]] = function(a) {
      x = 1 * a[_0x9a98[146]];
      endRange = 1 * a[_0x9a98[147]];
      debug();
    };
    opfilter[_0x9a98[149]] = function(a) {
      x = 1 * a[_0x9a98[146]];
      endRange = 1 * a[_0x9a98[147]];
      debug();
      scrollTo(true, 1);
    };
    if (supportTouch) {
      opfilter[_0x9a98[151]](_0x9a98[150], disable, false);
      opfilter[_0x9a98[151]](_0x9a98[152], snap, false);
      opfilter[_0x9a98[151]](_0x9a98[153], range, false);
    }
    opfilter[_0x9a98[154]] = function() {
    };
    if (/firefox/i[_0x9a98[156]](navigator[_0x9a98[155]])) {
      document[_0x9a98[151]](_0x9a98[157], onDocumentKeyUp, false);
    } else {
      document[_0x9a98[159]][_0x9a98[158]] = onDocumentKeyUp;
    }
    opfilter[_0x9a98[160]] = function() {
      hasSongChanged = false;
    };
    opfilter[_0x9a98[161]] = function() {
      require(_0x9a98[162])[addClass]();
    };
    document[countdown](_0x9a98[163])[_0x9a98[161]] = function() {
      require(_0x9a98[162])[addClass]();
    };
    document[countdown](_0x9a98[165])[_0x9a98[164]] = function() {
      hasSongChanged = false;
    };
    document[countdown](_0x9a98[165])[_0x9a98[160]] = function() {
      hasSongChanged = true;
    };
    var i = false;
    var mem = false;
    var pos = false;
    var _i = false;
    var _ref = false;
    var url = false;
    var method = false;
    var prefix = false;
    var block = false;
    var definition = false;
    source[_0x9a98[166]] = function(canCreateDiscussions) {
      var dependencies = !hasSongChanged && !isReplayingSong;
      switch(canCreateDiscussions[_0x9a98[169]]) {
        case 32:
          if (!i && dependencies) {
            scrollTo();
            on(17);
            i = true;
          }
          break;
        case 87:
          if (!pos && dependencies) {
            scrollTo();
            on(21);
            pos = true;
          }
          break;
        case 81:
          if (!mem && dependencies) {
            on(18);
            mem = true;
          }
          break;
        case 69:
          if (!_i && dependencies) {
            on(30);
            _i = true;
          }
          break;
        case 68:
          if (!block && dependencies) {
            on(40);
            block = true;
          }
          break;
        case 83:
          if (!_ref && dependencies) {
            on(31);
            _ref = true;
          }
          break;
        case 70:
          if (!prefix && dependencies) {
            on(35);
            prefix = true;
          }
          break;
        case 16:
          if (!definition && dependencies) {
            scrollTo();
            on(37);
            definition = true;
          }
          break;
        case 65:
          if (!url && dependencies) {
            on(32);
            url = true;
          }
          break;
        case 88:
          if (!method && dependencies) {
            on(33);
            method = true;
          }
          break;
        case 27:
          if (1 == show) {
            show = 0;
            show = 0;
            buildJS(true);
          } else {
            show = 1;
            buildJS(0);
          }
          source[_0x9a98[167]] = false;
          break;
        case 13:
          if (hasSongChanged) {
            hasSongChanged = false;
            require(_0x9a98[162])[addClass]();
            document[countdown](_0x9a98[165])[_0x9a98[168]]();
            refresh(document[countdown](_0x9a98[165])[_0x9a98[117]]);
            document[countdown](_0x9a98[165])[_0x9a98[117]] = .jpg;
          } else {
            if (!_x$2) {
              document[countdown](_0x9a98[165])[http://cellcraft.io/skins/]();
              hasSongChanged = true;
            }
          }
      }
    };
    source[_0x9a98[170]] = function(a) {
      switch(a[_0x9a98[169]]) {
        case 32:
          i = false;
          break;
        case 87:
          if (pos) {
            on(36);
            pos = false;
          }
          break;
        case 81:
          if (mem) {
            on(19);
            mem = false;
          }
          break;
        case 69:
          _i = false;
          break;
        case 68:
          block = false;
          break;
        case 83:
          _ref = false;
          break;
        case 70:
          prefix = false;
          break;
        case 16:
          if (definition) {
            on(38);
            definition = false;
          }
          break;
        case 65:
          url = false;
          break;
        case 88:
          if (method) {
            on(39);
            method = false;
            break;
          }
      }
    };
    source[_0x9a98[164]] = function() {
      if (mem) {
        on(19);
      }
      if (pos) {
        on(36);
      }
      if (definition) {
        on(38);
      }
      pos = mem = i = _i = _ref = url = method = prefix = definition = block = false;
    };
    source[_0x9a98[171]] = func;
    source[_0x9a98[172]](media);
    setInterval(scrollTo, 40);
    if (existingFilePath) {
      require(_0x9a98[173])[http://cellcraft.io/?server=](existingFilePath);
    }
    f();
    resolve(require(_0x9a98[173])[http://cellcraft.io/?server=]());
    if (null == socket && existingFilePath) {
      loop();
    }
    require(_0x9a98[174])[]();
    func();
  }
  function drawCanvasAll() {
    var a = ix + 1;
    if (a == style) {
      listenForSessionChanges();
    }
  }
  function disable(events) {
    isPaused = true;
    $(hide)[addClass]();
    $(#news)[addClass]();
    var i = 0;
    for (; i < events[_0x9a98[175]][split]; i++) {
      var coord = events[_0x9a98[175]][i];
      if (0 > c && coord[_0x9a98[146]] < height / 2) {
        c = coord[_0x9a98[176]];
        coordtransform[_0x9a98[177]](coord[_0x9a98[146]], coord[_0x9a98[147]]);
        PL$133[_0x9a98[178]](ae);
        leftTouchStartPos[_0x9a98[177]](0, 0);
      }
      var d = ~~(height / 7);
      if (coord[_0x9a98[146]] > height - d && coord[_0x9a98[147]] > number - d) {
        scrollTo();
        on(17);
      }
      if (coord[_0x9a98[146]] > height - d && coord[_0x9a98[147]] > number - 2 * d - 10 && coord[_0x9a98[147]] < number - d - 10) {
        scrollTo();
        on(22);
      }
    }
    list = events[_0x9a98[179]];
  }
  function getEvent(delta) {
    delta = +delta;
    var x = Math[server](delta / 3600);
    var _ = Math[server](delta % 3600 / 60);
    var e = Math[server](delta % 3600 % 60);
    return (x > 0 ? x + getElementById + (10 > _ ? floor : .jpg) : .jpg) + _ + getElementById + (10 > e ? floor : .jpg) + e;
  }
  function addPoint() {
    if (drawCanvasAll(), matches) {
      var manipulateInstructions = matches[_0x9a98[142]](_0x9a98[141]);
      var opacity = matches[_0x9a98[180]];
      var last = matches[_0x9a98[181]];
      if (manipulateInstructions[_0x9a98[182]](0, 0, opacity, last), 2 < props[split]) {
        var boxes = 200;
        var propName = 0;
        for (; propName < props[split]; propName++) {
          boxes = Math[_0x9a98[183]](props[propName], boxes);
        }
        manipulateInstructions[_0x9a98[184]] = 3;
        manipulateInstructions[_0x9a98[185]] = _0x9a98[186];
        manipulateInstructions[_0x9a98[187]] = _0x9a98[186];
        manipulateInstructions[_0x9a98[188]] = _0x9a98[189];
        manipulateInstructions[_0x9a98[190]] = _0x9a98[189];
        manipulateInstructions[_0x9a98[191]]();
        manipulateInstructions[_0x9a98[192]](0, last - props[0] / boxes * (last - 10) + 10);
        propName = 1;
        for (; propName < props[split]; propName = propName + Math[_0x9a98[183]](~~(props[split] / opacity), 1)) {
          var alphaS = propName / (props[split] - 1) * opacity;
          var minCircumeference = [];
          var suffix = -20;
          for (; 20 >= suffix; ++suffix) {
            if (!(0 > propName + suffix || propName + suffix >= props[split])) {
              minCircumeference[_0x9a98[193]](props[propName + suffix]);
            }
          }
          minCircumeference = minCircumeference[_0x9a98[194]](function(h0, a) {
            return h0 + a;
          }) / minCircumeference[split] / boxes;
          manipulateInstructions[_0x9a98[195]](alphaS, last - minCircumeference * (last - 10) + 10);
        }
        manipulateInstructions[_0x9a98[196]]();
        manipulateInstructions[_0x9a98[197]] = .5;
        manipulateInstructions[_0x9a98[195]](opacity, last);
        manipulateInstructions[_0x9a98[195]](0, last);
        manipulateInstructions[_0x9a98[198]]();
        manipulateInstructions[_0x9a98[197]] = 1;
      }
      totalSeconds = props[split];
      var c = ((totalSeconds % 60)[_0x9a98[199]](0), totalSeconds / 60);
      var l = ((c % 60)[_0x9a98[199]](0), (c / 60)[_0x9a98[199]](0), Date[_0x9a98[200]]());
      getEvent((l - fl) / 1e3);
      document[countdown](_0x9a98[201])[0] = getEvent((l - fl) / 1e3);
      document[countdown](_0x9a98[202])[0] = "" + (actual / 100)[_0x9a98[199]](0);
      document[countdown](_0x9a98[203])[0] = "" + axx;
      document[countdown](_0x9a98[204])[0] = "" + _a1;
    }
    intercept();
    props = [];
    actual = 0;
    ix++;
    if (4 == ix) {
      on(43);
    }
  }
  function snap(a) {
    a[_0x9a98[205]]();
    var arrayKey = 0;
    for (; arrayKey < a[_0x9a98[175]][split]; arrayKey++) {
      var PL$89 = a[_0x9a98[175]][arrayKey];
      if (c == PL$89[_0x9a98[176]]) {
        PL$133[_0x9a98[177]](PL$89[_0x9a98[146]], PL$89[_0x9a98[147]]);
        leftTouchStartPos[_0x9a98[178]](r);
        leftTouchStartPos[_0x9a98[206]](ae);
        x = 3 * leftTouchStartPos[_0x9a98[207]] + height / 2;
        endRange = 3 * leftTouchStartPos[_0x9a98[208]] + number / 2;
        debug();
        scrollTo();
      }
    }
    list = a[_0x9a98[179]];
  }
  function intercept() {
    var a = ix + 1;
    if (a == key) {
      on(45);
    }
  }
  function range(a) {
    list = a[_0x9a98[179]];
    var id = 0;
    for (; id < a[_0x9a98[175]][split]; id++) {
      var history = a[_0x9a98[175]][id];
      if (c == history[_0x9a98[176]]) {
        c = -1;
        leftTouchStartPos[_0x9a98[177]](0, 0);
        break;
      }
    }
  }
  function onDocumentKeyUp(event) {
    n = n * Math[_0x9a98[211]](.9, event[_0x9a98[209]] / -120 || event[_0x9a98[210]] || 0);
    var obj = model ? .001 : 1;
    if (obj > n) {
      n = obj;
    }
    if (n > 4 / max) {
      n = 4 / max;
    }
  }
  function maybeDefer() {
    if (ccw_flag > max) {
      rng = null;
    } else {
      var minX = Number[_0x9a98[212]];
      var minY = Number[_0x9a98[212]];
      var maxX = Number[_0x9a98[213]];
      var maxY = Number[_0x9a98[213]];
      var newDuration = 0;
      var i = 0;
      for (; i < args[split]; i++) {
        var props = args[i];
        if (props[_0x9a98[214]]() && !props[_0x9a98[215]] && 20 < props[_0x9a98[216]] * max) {
          newDuration = Math[_0x9a98[183]](props[_0x9a98[216]], newDuration);
          minX = Math[_0x9a98[217]](props[_0x9a98[207]], minX);
          minY = Math[_0x9a98[217]](props[_0x9a98[208]], minY);
          maxX = Math[_0x9a98[183]](props[_0x9a98[207]], maxX);
          maxY = Math[_0x9a98[183]](props[_0x9a98[208]], maxY);
        }
      }
      rng = pageSignUp[_0x9a98[218]]({
        minX : minX - (newDuration + 100),
        minY : minY - (newDuration + 100),
        maxX : maxX + (newDuration + 100),
        maxY : maxY + (newDuration + 100),
        maxChildren : 2,
        maxDepth : 4
      });
      i = 0;
      for (; i < args[split]; i++) {
        if (props = args[i], props[_0x9a98[214]]() && !props[_0x9a98[215]] && 20 < props[_0x9a98[216]] * max) {
          minX = 0;
          for (; minX < props[_0x9a98[219]][split]; ++minX) {
            minY = props[_0x9a98[219]][minX][_0x9a98[207]];
            maxX = props[_0x9a98[219]][minX][_0x9a98[208]];
            if (!(angle - height / 2 / max > minY || ha - number / 2 / max > maxX || minY > angle + height / 2 / max || maxX > ha + number / 2 / max)) {
              rng[_0x9a98[220]](props[_0x9a98[219]][minX]);
            }
          }
        }
      }
    }
  }
  function merge(templateSorted) {
    return nNum = templateSorted % 10, nNum <= 1 ? nNum < 1 ? nNum = 8 : nNum = nNum * 5 : 2 == nNum ? nNum = nNum * 4 : 3 == nNum && (nNum = nNum + 4), nNum;
  }
  function debug() {
    suspended = (x - height / 2) / max + angle;
    copy = (endRange - number / 2) / max + ha;
  }
  function resolve(configuredFilePath) {
    if (configuredFilePath && configuredFilePath != existingFilePath) {
      if (require(_0x9a98[173])[http://cellcraft.io/?server=]() != configuredFilePath) {
        require(_0x9a98[173])[http://cellcraft.io/?server=](configuredFilePath);
      }
      existingFilePath = source[settings][search] = configuredFilePath;
      require(_0x9a98[222])[_0x9a98[118]](_0x9a98[221], false);
      if (reverseIsSingle) {
        loop();
      }
    }
  }
  function listenForSessionChanges() {
    on(46);
  }
  function spawn() {
    third_hex = true;
    runner();
    props = [];
    axx = 0;
    _a1 = 0;
    fl = Date[_0x9a98[200]]();
    isReplayingSong = false;
    require(_0x9a98[223])[addClass]();
    f();
  }
  function warnIfMissing() {
    setTimeout(spawn, 300);
    require(_0x9a98[174])[_0x9a98[224]](300);
    require(_0x9a98[225])[addClass]();
    require(_0x9a98[223])[addClass]();
  }
  function add(pendingInterestId) {
    return addPoint(), transform(_0x9a98[227]), require(_0x9a98[223])[_0x9a98[226]](1200), googletag[_0x9a98[229]]()[_0x9a98[228]](), false;
  }
  function buildJS(buildingApp) {
    isReplayingSong = true;
    q = null;
    require(_0x9a98[225])[addClass]();
    if (0 == show) {
      require(_0x9a98[174])[_0x9a98[226]](300);
    } else {
      require(_0x9a98[174])[addClass]();
      isReplayingSong = false;
    }
  }
  function f() {
    if (require(_0x9a98[173])[http://cellcraft.io/?server=]()) {
      source[settings][search] = require(_0x9a98[173])[http://cellcraft.io/?server=]();
    } else {
      if (source[settings][search]) {
        require(_0x9a98[173])[http://cellcraft.io/?server=](source[settings][search]);
      }
    }
    if (require(_0x9a98[173])[http://cellcraft.io/?server=]()) {
      require(_0x9a98[231])[_0x9a98[230]](require(_0x9a98[173]));
    } else {
      require(_0x9a98[232])[_0x9a98[230]](require(_0x9a98[173]));
    }
  }
  function loop() {
    if (reverseIsSingle && existingFilePath && null != CONNECTION_URL) {
      var src = CONNECTION_URL[_0x9a98[235]](/\d/g, function(a) {
        return a == _0x9a98[233] ? _0x9a98[234] : a == _0x9a98[234] ? _0x9a98[233] : a;
      });
      onload(_0x9a98[236] + src);
    }
  }
  function setCircular() {
    $(_0x9a98[244])[_0x9a98[238]](_0x9a98[237]);
    var width_box = $(_0x9a98[245])[_0x9a98[241]](_0x9a98[240]) / 100;
    var i = $(_0x9a98[245])[_0x9a98[180]]();
    var _ileft = width_box * i;
    var e = 3e3;
    $(_0x9a98[244])[_0x9a98[243]]()[-300px]({
      left : _ileft
    }, e);
  }
  function onload(url) {
    if (null != url && null != CONNECTION_URL) {
      if (socket) {
        socket[_0x9a98[246]] = null;
        socket[_0x9a98[247]] = null;
        socket[_0x9a98[248]] = null;
        try {
          socket[_0x9a98[249]]();
        } catch (x) {
        }
        socket = null;
      }
      key = 0;
      style = 0;
      indexMap = [];
      stack = [];
      cache = {};
      args = [];
      parts = [];
      blockTimes = [];
      fftBinsOfFreq = [];
      ix = 0;
      signedTransactions = [];
      opfilter = bottom = null;
      loc = 0;
      third_hex = false;
      jQuery(_0x9a98[250])[]();
      socket = new WebSocket(url);
      socket[_0x9a98[251]] = _0x9a98[252];
      socket[_0x9a98[246]] = init;
      socket[_0x9a98[247]] = onSocketMessage;
      socket[_0x9a98[248]] = fn;
      socket[_0x9a98[253]] = function() {
        console[_0x9a98[255]](_0x9a98[254], arguments);
      };
    }
  }
  function prepareData(a) {
    return new DataView(new ArrayBuffer(a));
  }
  function log(x) {
    socket[_0x9a98[257]](x[_0x9a98[256]]);
  }
  function init() {
    jQuery(_0x9a98[250])[addClass]();
    document[countdown](_0x9a98[259])[_0x9a98[237]][_0x9a98[258]] = _0x9a98[260];
    array[_0x9a98[193]]({
      name : _0x9a98[261],
      color : _0x9a98[262],
      message : _0x9a98[263],
      time : Date[_0x9a98[200]](),
      cache : null
    });
    run();
    var msg;
    ngiScroll_timeout = 2e3;
    duedate = new Date;
    pixelSizeTargetMax = duedate;
    $(_0x9a98[265])[_0x9a98[264]](.jpg);
    $(_0x9a98[265])[addClass]();
    buildJS(true);
    console[_0x9a98[255]](_0x9a98[266]);
    PL$120 = [];
    msg = prepareData(5);
    msg[_0x9a98[267]](0, 254);
    msg[_0x9a98[268]](1, 5, true);
    log(msg);
    msg = prepareData(5);
    msg[_0x9a98[267]](0, 255);
    msg[_0x9a98[268]](1, 1332775218, true);
    log(msg);
    runner();
  }
  function fn() {
    console[_0x9a98[255]](_0x9a98[269]);
    jQuery(_0x9a98[250])[addClass]();
    document[countdown](_0x9a98[259])[_0x9a98[237]][_0x9a98[258]] = #ayarlr;
    jQuery(_0x9a98[225])[](400);
    array[_0x9a98[193]]({
      name : _0x9a98[261],
      color : _0x9a98[270],
      message : _0x9a98[271],
      time : Date[_0x9a98[200]](),
      cache : null
    });
    run();
    setTimeout(loop, ngiScroll_timeout);
    ngiScroll_timeout = ngiScroll_timeout * 1.5;
  }
  function onSocketMessage(data) {
    initialize(new DataView(data[_0x9a98[241]]));
  }
  function parse(text, value) {
    var PL$17;
    var PL$13 = [{
      value : 1e18,
      symbol : _0x9a98[272]
    }, {
      value : 1e15,
      symbol : _0x9a98[273]
    }, {
      value : 1e12,
      symbol : _0x9a98[274]
    }, {
      value : 1e9,
      symbol : _0x9a98[275]
    }, {
      value : 1e6,
      symbol : _0x9a98[276]
    }, {
      value : 1e3,
      symbol : _0x9a98[277]
    }];
    PL$17 = 0;
    for (; PL$17 < PL$13[split]; PL$17++) {
      if (text >= PL$13[PL$17][_0x9a98[117]]) {
        return (text / PL$13[PL$17][_0x9a98[117]])[_0x9a98[199]](value)[_0x9a98[235]](/\.?0+$/, .jpg) + PL$13[PL$17][_0x9a98[278]];
      }
    }
    return text;
  }
  function initialize(data) {
    function fixRootEm() {
      var hex;
      var signature = .jpg;
      for (; 0 != (hex = data[_0x9a98[280]](value, true));) {
        value = value + 2;
        signature = signature + String[_0x9a98[279]](hex);
      }
      return value = value + 2, signature;
    }
    var value = 0;
    var t = false;
    switch(240 == data[_0x9a98[281]](value) && (value = value + 5), data[_0x9a98[281]](value++)) {
      case 16:
        draw(data, value);
        break;
      case 17:
        newValue = data[_0x9a98[282]](value, true);
        value = value + 4;
        horAdjust = data[_0x9a98[282]](value, true);
        value = value + 4;
        w = data[_0x9a98[282]](value, true);
        value = value + 4;
        break;
      case 20:
        stack = [];
        indexMap = [];
        cache = {};
        args = [];
        parts = [];
        blockTimes = [];
        fftBinsOfFreq = [];
        signedTransactions = [];
        break;
      case 21:
        timeout = data[_0x9a98[283]](value, true);
        value = value + 2;
        response = data[_0x9a98[283]](value, true);
        value = value + 2;
        if (!Ax) {
          Ax = true;
          message = timeout;
          oldValue = response;
        }
        break;
      case 32:
        indexMap[_0x9a98[193]](data[_0x9a98[284]](value, true));
        value = value + 4;
        break;
      case 33:
        var id = data[_0x9a98[284]](value, true);
        value = value + 4;
        var name = data[_0x9a98[281]](value, true);
        value++;
        var map = cache[id];
        if (map) {
          map[_0x9a98[285]] = name;
          map[_0x9a98[286]] = block;
        } else {
          signedTransactions[_0x9a98[193]]({
            nodeId : id,
            animId : name
          });
        }
        break;
      case 48:
        t = true;
        Wx = true;
      case 49:
        if (!t) {
          Wx = false;
        }
        bottom = null;
        var v = data[_0x9a98[284]](value, true);
        value = value + 4;
        fftBinsOfFreq = [];
        previousThumbValue = 0;
        for (; v > previousThumbValue; ++previousThumbValue) {
          var o = data[_0x9a98[284]](value, true);
          value = value + 4;
          fftBinsOfFreq[_0x9a98[193]]({
            id : o,
            name : fixRootEm()
          });
        }
        if (0 == Pa) {
          var pH = .jpg;
          if (v >= 10) {
            pH = _0x9a98[287];
          }
          jQuery(_0x9a98[290])[_0x9a98[289]](_0x9a98[288] + v + pH);
        }
        remove();
        break;
      case 50:
        bottom = [];
        var oldTermination = data[_0x9a98[284]](value, true);
        value = value + 4;
        var previousThumbValue = 0;
        for (; oldTermination > previousThumbValue; ++previousThumbValue) {
          bottom[_0x9a98[193]](data[_0x9a98[282]](value, true));
          value = value + 4;
        }
        remove();
        break;
      case 64:
        node = data[_0x9a98[291]](value, true);
        value = value + 8;
        match = data[_0x9a98[291]](value, true);
        value = value + 8;
        type = data[_0x9a98[291]](value, true);
        value = value + 8;
        old = data[_0x9a98[291]](value, true);
        value = value + 8;
        newValue = (type - node) / 2;
        horAdjust = (old - match) / 2;
        w = 1;
        if (0 == stack[split]) {
          angle = newValue;
          ha = horAdjust;
          max = w;
        }
        replyAsHtml = data[_0x9a98[283]](value, true);
        value = value + 2;
        pdz = data[_0x9a98[292]](value, true);
        value = value + 4;
        style = merge(pdz);
        break;
      case 80:
        ruleValidationResult = data[_0x9a98[280]](value, true);
        value = value + 2;
        var f = data[_0x9a98[281]](value++);
        Lx = !!(1 & f);
        inputWin = !!(2 & f);
        winRef = !!(4 & f);
        if (ruleValidationResult > 0) {
          if (!(inputWin || winRef)) {
            require(_0x9a98[293])[addClass]();
          }
          if (inputWin) {
            require(_0x9a98[293])[]();
            $(_0x9a98[294])[]();
            $(_0x9a98[295])[addClass]();
          } else {
            $(_0x9a98[294])[addClass]();
            $(_0x9a98[295])[]();
          }
          if (winRef) {
            require(_0x9a98[293])[]();
            $(_0x9a98[296])[]();
            $(_0x9a98[297])[addClass]();
          } else {
            $(_0x9a98[296])[addClass]();
            $(_0x9a98[297])[]();
          }
        }
        break;
      case 81:
        key = data[_0x9a98[281]](value, true);
        value = value + 1;
        break;
      case 89:
        var m;
        var d;
        var idx;
        var result = .jpg;
        for (; 0 != (m = data[_0x9a98[280]](value, true));) {
          value = value + 2;
          result = result + String[_0x9a98[279]](m);
        }
        value = value + 2;
        d = data[_0x9a98[281]](value++);
        idx = data[_0x9a98[280]](value, true);
        value = value + 2;
        if (_takingTooLongTimeout) {
          clearTimeout(_takingTooLongTimeout);
        }
        if (result == .jpg) {
          require(_0x9a98[265])[_0x9a98[224]](600);
        } else {
          require(_0x9a98[265])[_0x9a98[264]](result);
          require(_0x9a98[265])[0px](_0x9a98[298], 1 == d ? _0x9a98[299] : _0x9a98[300]);
          require(_0x9a98[265])[_0x9a98[301]]()[]();
          if (idx > 0) {
            _takingTooLongTimeout = setTimeout(function() {
              $(_0x9a98[265])[_0x9a98[224]](600);
            }, 1e3 * idx);
          }
        }
        break;
      case 90:
        Pa = 1;
        uptime = data[_0x9a98[291]](value, true);
        value = value + 8;
        var delta = Math[server](uptime / 60);
        var deltaX = Math[server](delta / 60);
        var slideWidth = Math[server](deltaX / 24);
        deltaX = deltaX - 24 * slideWidth;
        delta = delta - 24 * slideWidth * 60 - 60 * deltaX;
        if (slideWidth > 0) {
          jQuery(_0x9a98[305])[_0x9a98[289]](_0x9a98[302] + slideWidth + _0x9a98[303] + deltaX + getElementById + (10 > delta ? floor : .jpg) + delta + _0x9a98[304]);
        } else {
          jQuery(_0x9a98[305])[_0x9a98[289]](_0x9a98[302] + deltaX + getElementById + (10 > delta ? floor : .jpg) + delta + _0x9a98[304]);
        }
        onlinestat = data[_0x9a98[291]](value, true);
        value = value + 8;
        jQuery(_0x9a98[290])[_0x9a98[289]](_0x9a98[288] + onlinestat);
        onlinestat = data[_0x9a98[291]](value, true);
        value = value + 8;
        jQuery(_0x9a98[306])[_0x9a98[289]](parse(onlinestat, 1));
        onlinestat = data[_0x9a98[291]](value, true);
        value = value + 8;
        jQuery(_0x9a98[307])[_0x9a98[289]](parse(onlinestat, 1));
        var timeSubmittedDiff = new Date - duedate;
        if (jQuery(_0x9a98[310])[_0x9a98[289]](_0x9a98[308] + timeSubmittedDiff + _0x9a98[309]), data[_0x9a98[311]] > 36) {
          onlinestat = data[_0x9a98[291]](value, true);
          m = min(onlinestat);
          if (mode != m) {
            mode = m;
            jQuery(_0x9a98[312])[_0x9a98[289]](mode);
          }
        }
        break;
      case 91:
        ban = data[_0x9a98[281]](value, true);
        ngiScroll_timeout = 5e3;
        value = value + 1;
        jQuery(_0x9a98[315])[_0x9a98[314]](_0x9a98[313]);
        jQuery(_0x9a98[315])[_0x9a98[289]](_0x9a98[316]);
        jQuery(_0x9a98[317])[]();
        setCircular();
        setTimeout(_0x9a98[318], 3e3);
        break;
      case 92:
        connlimit = data[_0x9a98[281]](value, true);
        ngiScroll_timeout = 5e3;
        value = value + 1;
        jQuery(_0x9a98[315])[_0x9a98[314]](_0x9a98[313]);
        jQuery(_0x9a98[315])[_0x9a98[289]](_0x9a98[319]);
        jQuery(_0x9a98[317])[]();
        setCircular();
        setTimeout(_0x9a98[318], 3e3);
        break;
      case 93:
        slotslimit = data[_0x9a98[281]](value, true);
        ngiScroll_timeout = 5e3;
        value = value + 1;
        jQuery(_0x9a98[315])[_0x9a98[314]](_0x9a98[313]);
        jQuery(_0x9a98[315])[_0x9a98[289]](_0x9a98[320]);
        jQuery(_0x9a98[317])[]();
        setCircular();
        setTimeout(_0x9a98[318], 3e3);
        break;
      case 94:
        nickslimit = data[_0x9a98[281]](value, true);
        jQuery(_0x9a98[321])[_0x9a98[118]](_0x9a98[221], true);
        ngiScroll_timeout = 4e3;
        value = value + 1;
        jQuery(_0x9a98[315])[_0x9a98[314]](_0x9a98[313]);
        jQuery(_0x9a98[315])[_0x9a98[289]](_0x9a98[322]);
        jQuery(_0x9a98[317])[]();
        setCircular();
        setTimeout(_0x9a98[318], 3e3);
        var autoResumeTimer = setTimeout(function() {
          autoResumeTimer = setInterval(window[search][_0x9a98[323]](), 100);
        }, 3e3);
        break;
      case 99:
        render(data, value);
        break;
      case 100:
        if (window[_0x9a98[324]] && window[_0x9a98[324]][_0x9a98[325]]) {
          window[_0x9a98[324]][_0x9a98[325]]();
          require(_0x9a98[174])[_0x9a98[226]](100);
        }
    }
  }
  function min(context) {
    switch(context) {
      case 0:
        return _0x9a98[326];
      case 1:
        return _0x9a98[327];
      case 2:
        return _0x9a98[328];
      case 10:
        return _0x9a98[329];
      case 11:
        return _0x9a98[330];
      case 12:
        return _0x9a98[331];
      case 13:
        return _0x9a98[332];
      case 14:
        return _0x9a98[333];
      case 20:
        return _0x9a98[334];
      case 21:
        return _0x9a98[335];
      case 22:
        return _0x9a98[336];
    }
  }
  function render(fn, value) {
    function encode() {
      var i;
      var paginationStr = .jpg;
      for (; 0 != (i = fn[_0x9a98[280]](value, true));) {
        value = value + 2;
        paginationStr = paginationStr + String[_0x9a98[279]](i);
      }
      return value = value + 2, paginationStr;
    }
    var e = fn[_0x9a98[281]](value++);
    if (2 & e) {
      value = value + 4;
    }
    if (4 & e) {
      value = value + 8;
    }
    if (8 & e) {
      value = value + 16;
    }
    var longNameFlag = fn[_0x9a98[281]](value++);
    var shortNameFlag = fn[_0x9a98[281]](value++);
    var b = fn[_0x9a98[281]](value++);
    var glyphColor = (longNameFlag << 16 | shortNameFlag << 8 | b).toString(16);
    for (; glyphColor[split] < 6;) {
      glyphColor = floor + glyphColor;
    }
    glyphColor = _0x9a98[337] + glyphColor;
    array[_0x9a98[193]]({
      name : encode(),
      color : glyphColor,
      message : encode(),
      time : Date[_0x9a98[200]](),
      cache : null
    });
    run();
  }
  function run() {
    var n = 12;
    var duration = 0;
    var _ = Date[_0x9a98[200]]();
    if (array[split] > 0) {
      duration = array[array[split] - 1][_0x9a98[338]];
      var i = 0;
      for (; i < array[split]; i++) {
        if (_ >= 12e4 + array[i][_0x9a98[338]] || i < array[split] - n) {
          array[_0x9a98[339]](i, 1);
          i--;
        }
      }
    }
    if (_x$2) {
      return e = null, void(sourceNode = null);
    }
    var stack = [];
    var t = array[split];
    var start = t > n ? t - n : 0;
    var value = 0;
    i = 0;
    for (; t - start > i; i++) {
      var src = array[i + start];
      var o = false;
      if (null == src[_0x9a98[340]]) {
        src[_0x9a98[340]] = {
          chatCache1 : null,
          chatCache2 : null,
          emo : []
        };
        o = true;
      }
      var f = src[_0x9a98[340]];
      if (o) {
        f[_0x9a98[341]] = new obj(15, src[_0x9a98[298]], true, _0x9a98[342]);
        f[_0x9a98[341]][_0x9a98[344]](src[_0x9a98[343]]);
        if (title) {
          f[_0x9a98[345]] = new obj(15, _0x9a98[347]);
        } else {
          f[_0x9a98[345]] = new obj(15, _0x9a98[346]);
        }
        var PL$13 = [];
        var start = 2;
        var artistTrack = _0x9a98[348] + src[_0x9a98[351]][_0x9a98[235]](emoRegExp, function(iccId, pos) {
          var i = emoMap[iccId];
          var subwiki = subwikiList[i];
          return null == subwiki && (subwikiList[i] = new Image, subwiki = subwikiList[i], subwiki[ice2pop] = _0x9a98[349] + i + img/), PL$13[_0x9a98[193]]({
            pos : pos + start,
            img : subwiki
          }), start = start + (5 - iccId[split]), _0x9a98[350];
        });
        f[_0x9a98[345]][_0x9a98[344]](artistTrack);
      }
      var col = f[_0x9a98[341]][_0x9a98[352]]();
      var finger = f[_0x9a98[345]];
      if (title) {
        finger[_0x9a98[353]](_0x9a98[347]);
      } else {
        finger[_0x9a98[353]](_0x9a98[346]);
      }
      var p2 = finger[_0x9a98[352]]();
      var currentValue = col[_0x9a98[180]] + p2[_0x9a98[180]];
      if (currentValue > value && (value = currentValue), o) {
        var PL$17 = 0;
        for (; PL$17 < PL$13[split]; PL$17++) {
          PL$13[PL$17][_0x9a98[354]] = finger[_0x9a98[356]][_0x9a98[355]](artistTrack[#invite-link](0, PL$13[PL$17][_0x9a98[354]]))[_0x9a98[180]];
        }
        f[_0x9a98[357]] = PL$13;
      }
      stack[_0x9a98[193]]({
        c1 : col,
        c2 : p2,
        emo : f[_0x9a98[357]]
      });
    }
    if (0 == stack[split]) {
      return e = null, void(sourceNode = null);
    }
    var ratio = Math[_0x9a98[183]](Math[_0x9a98[217]](1.8 * number, height, 1e3) / 1e3, .5);
    if (!e) {
      e = document[_0x9a98[358]](focus);
      sourceNode = e[_0x9a98[142]](_0x9a98[141]);
    }
    e[_0x9a98[180]] = Math[_0x9a98[183]](Math[_0x9a98[217]](value * ratio, height - 10), 1);
    e[_0x9a98[181]] = Math[_0x9a98[183]](Math[_0x9a98[217]]((18 * stack[split] + 2) * ratio, number - 50), 1);
    sourceNode[_0x9a98[359]](ratio, ratio);
    i = 0;
    for (; i < stack[split]; i++) {
      value = stack[i];
      start = value[_0x9a98[360]][_0x9a98[180]];
      duration = e[_0x9a98[181]] / ratio - 18 * (stack[split] - i);
      sourceNode[_0x9a98[197]] = title ? .75 : .9;
      sourceNode[_0x9a98[361]](value[_0x9a98[360]], 0, duration);
      sourceNode[_0x9a98[361]](value[_0x9a98[362]], start, duration);
      var PL$17 = 0;
      var PL$13 = value[_0x9a98[357]];
      for (; PL$17 < PL$13[split]; PL$17++) {
        t = PL$13[PL$17];
        var val = t[_0x9a98[363]];
        if (val && val[_0x9a98[364]] && 0 != val[_0x9a98[180]]) {
          sourceNode[_0x9a98[197]] = title ? .85 : 1;
          sourceNode[_0x9a98[361]](val, start + 2 + t[_0x9a98[354]], duration - 2);
        }
      }
    }
  }
  function normalizeDefault(val) {
    return val = val[_0x9a98[235]](_0x9a98[365], _0x9a98[366]), val = val[_0x9a98[235]](_0x9a98[367], _0x9a98[368]), val = val[_0x9a98[235]](_0x9a98[369], _0x9a98[370]), val = val[_0x9a98[235]](_0x9a98[371], _0x9a98[372]);
  }
  function extend(a, b) {
    var j = a[_0x9a98[343]];
    var i = b[_0x9a98[343]];
    if (j == .jpg) {
      j = _0x9a98[373];
    }
    if (i == .jpg) {
      i = _0x9a98[373];
    }
    var axx = Math[server](b[_0x9a98[216]] * b[_0x9a98[216]] / 100);
    var h = false;
    .jpg;
    if (PL$120[split] > 12 && PL$120[_0x9a98[339]](0, 1), axx >= 16 && !b[_0x9a98[374]] && j != i && (h = true, j == q ? axx > 1e3 ? transform(_0x9a98[375] + parse(axx, 1) + _0x9a98[376]) : axx > 500 ? transform(_0x9a98[377] + parse(axx, 1) + _0x9a98[376]) : 100 > axx && transform(_0x9a98[378]) : axx > 1e3 && j != i && transform(_0x9a98[379] + a[_0x9a98[298]] + _0x9a98[380] + normalizeDefault(j) + _0x9a98[381] + parse(axx, 1) + _0x9a98[382])), b[_0x9a98[374]] && (h = true, j == q)) {
      var tri = [_0x9a98[383], _0x9a98[384], _0x9a98[385], _0x9a98[386]];
      var j = Math[server](Math[_0x9a98[387]]() * tri[split]);
      transform(tri[j]);
    }
    if (i == q && j != q) {
      transform(_0x9a98[388]);
    }
    if (j == q && i != q && a[_0x9a98[298]] != b[_0x9a98[298]]) {
      if (15 > axx) {
        ++axx;
        if (45 == axx) {
          transform(_0x9a98[389]);
        }
        if (100 == axx) {
          transform(_0x9a98[390]);
        }
        if (axx % 1e3 == 0) {
          transform(_0x9a98[391] + parse(axx, 1) + _0x9a98[392]);
        }
      } else {
        ++_a1;
        if (10 == _a1) {
          transform(_0x9a98[393]);
        }
        if (_a1 % 100 == 0) {
          transform(_0x9a98[394] + parse(_a1, 1) + _0x9a98[395]);
        }
      }
    }
    if (h) {
      if (PL$120[split] > 12) {
        PL$120[_0x9a98[339]](0, 1);
      }
      wrapOverride();
    }
  }
  function transform(srcTxt) {
  }
  function wrapOverride() {
    var dateString = .jpg;
    if (PL$120[split] > 0) {
      var PL$24 = 0;
      for (; PL$24 < PL$120[split]; ++PL$24) {
        dateString = dateString + (PL$120[PL$24][_0x9a98[241]] + _0x9a98[396]);
      }
    }
    if (cDateString != dateString) {
      cDateString = dateString;
    }
  }
  function draw(markup, data) {
    block = +new Date;
    pixelSizeTargetMax = block;
    gx = false;
    privacyCheckRequired = true;
    var resumeJson = markup[_0x9a98[280]](data, true);
    data = data + 2;
    var signedTransactionsCounter = 0;
    for (; resumeJson > signedTransactionsCounter; ++signedTransactionsCounter) {
      var d = cache[markup[_0x9a98[284]](data, true)];
      var p = cache[markup[_0x9a98[284]](data + 4, true)];
      data = data + 8;
      if (d && p) {
        extend(d, p);
        p[_0x9a98[397]](true);
        p[_0x9a98[398]] = p[_0x9a98[207]];
        p[_0x9a98[399]] = p[_0x9a98[208]];
        p[_0x9a98[400]] = p[_0x9a98[216]];
        p[_0x9a98[401]] = d[_0x9a98[207]];
        p[_0x9a98[402]] = d[_0x9a98[208]];
        p[_0x9a98[403]] = p[_0x9a98[216]];
        p[_0x9a98[404]] = block;
      }
    }
    signedTransactionsCounter = 0;
    for (;;) {
      var i = markup[_0x9a98[284]](data, true);
      if (data = data + 4, 0 == i) {
        break;
      }
      ++signedTransactionsCounter;
      var value;
      var index;
      var key;
      key = markup[_0x9a98[292]](data, true);
      data = data + 4;
      index = markup[_0x9a98[292]](data, true);
      data = data + 4;
      value = markup[_0x9a98[280]](data, true);
      data = data + 2;
      var fileStatus = markup[_0x9a98[281]](data++);
      var field = !!(1 & fileStatus);
      if (field) {
        var filteredErrors = !!(2 & fileStatus);
        var modVal = !!(16 & fileStatus);
        var object = markup[_0x9a98[281]](data++);
        var tmp_result = object >= 4 ? markup[_0x9a98[281]](data++) : 0;
        var x = markup[_0x9a98[281]](data++);
        var y = markup[_0x9a98[281]](data++);
        var b = markup[_0x9a98[281]](data++);
        var i = (x << 16 | y << 8 | b).toString(16);
        for (; 6 > i[split];) {
          i = floor + i;
        }
        var newMax = _0x9a98[337] + i;
        var ret = .jpg;
        if (0 == object) {
          var errors;
          for (; errors = markup[_0x9a98[280]](data, true), data = data + 2, 0 != errors;) {
            ret = ret + String[_0x9a98[279]](errors);
          }
        }
      }
      var result = null;
      if (cache[_0x9a98[405]](i)) {
        result = cache[i];
        result[_0x9a98[406]]();
        result[_0x9a98[407]] = true;
        result[_0x9a98[398]] = result[_0x9a98[207]];
        result[_0x9a98[399]] = result[_0x9a98[208]];
        result[_0x9a98[400]] = result[_0x9a98[216]];
        if (field) {
          result[_0x9a98[298]] = newMax;
          result[_0x9a98[408]](ret);
        }
      } else {
        if (!field) {
          newMax = _0x9a98[342];
          ret = .jpg;
        }
        result = new notes(i, key, index, value, newMax, ret);
        if (field && 1 == object && 25 >= value) {
          result[_0x9a98[409]] = true;
          parts[_0x9a98[193]](result);
        } else {
          args[_0x9a98[193]](result);
        }
        cache[i] = result;
        result[_0x9a98[410]] = key;
        result[_0x9a98[411]] = index;
        if (row && field && (0 == object || 3 == object)) {
          result[_0x9a98[412]] = options[i % 100];
          result[_0x9a98[413]] = (2 * Math[_0x9a98[387]]() - 1) * Math[_0x9a98[414]];
        }
      }
      if (result[_0x9a98[401]] = key, result[_0x9a98[402]] = index, result[_0x9a98[403]] = value, result[_0x9a98[404]] = block, field) {
        if (result[_0x9a98[409]]) {
          result[_0x9a98[415]] = newMax;
        } else {
          i = (~~(x * s) << 16 | ~~(y * s) << 8 | ~~(b * s)).toString(16);
          for (; 6 > i[split];) {
            i = floor + i;
          }
          result[_0x9a98[415]] = _0x9a98[337] + i;
        }
        result[_0x9a98[374]] = filteredErrors;
        result[_0x9a98[416]] = modVal;
        result[_0x9a98[417]] = object;
        result[_0x9a98[418]] = fileStatus;
        if (1 != object) {
          result[_0x9a98[419]] = tmp_result;
          result[_0x9a98[420]]();
          if (!(0 != object || result[_0x9a98[421]] || -1 == indexMap[_0x9a98[422]](i) || -1 != stack[_0x9a98[422]](result))) {
            stack[_0x9a98[193]](result);
            result[_0x9a98[421]] = true;
            if (1 == stack[split]) {
              angle = (.1 * angle + result[_0x9a98[207]]) / 1.1;
              ha = (.1 * ha + result[_0x9a98[208]]) / 1.1;
            }
          }
        }
      }
    }
    resumeJson = markup[_0x9a98[284]](data, true);
    data = data + 4;
    signedTransactionsCounter = 0;
    for (; resumeJson > signedTransactionsCounter; signedTransactionsCounter++) {
      var i = markup[_0x9a98[284]](data, true);
      data = data + 4;
      result = cache[i];
      if (null != result) {
        result[_0x9a98[397]]();
      }
    }
    resumeJson = signedTransactions[split];
    signedTransactionsCounter = 0;
    for (; resumeJson > signedTransactionsCounter; signedTransactionsCounter++) {
      result = cache[signedTransactions[signedTransactionsCounter][_0x9a98[423]]];
      if (null != result) {
        result[_0x9a98[285]] = signedTransactions[signedTransactionsCounter][_0x9a98[285]];
        result[_0x9a98[286]] = block;
      }
    }
    signedTransactions = [];
    if (gx && 0 == stack[split]) {
      add(false);
    }
  }
  function scrollTo(a, b) {
    var topS;
    if (requestAnimationFrame()) {
      topS = x - height / 2;
      var topE = endRange - number / 2;
      if (a || topS * topS + topE * topE >= 64 && !(.01 > Math[_0x9a98[424]](descname - suspended) && .01 > Math[_0x9a98[424]](start - copy))) {
        descname = suspended;
        start = copy;
        topS = prepareData(13);
        topS[_0x9a98[267]](0, 16);
        topS[_0x9a98[425]](1, suspended, true);
        topS[_0x9a98[425]](5, copy, true);
        if (b) {
          topS[_0x9a98[268]](9, b, true);
        } else {
          topS[_0x9a98[268]](9, 0, true);
        }
        log(topS);
      }
    }
  }
  function runner() {
    if (on(42), half_xgap = Date[_0x9a98[200]]() - 20500, requestAnimationFrame() && third_hex && null != q) {
      var msg = prepareData(3 + 2 * q[split]);
      msg[_0x9a98[267]](0, 0);
      var store = 0;
      for (; store < q[split]; ++store) {
        if (0 == store) {
          msg[_0x9a98[426]](1 + 2 * store, 59, true);
        }
        msg[_0x9a98[426]](1 + 2 * (store + 1), q[_0x9a98[427]](store), true);
      }
      log(msg);
    }
  }
  function refresh(PL$42) {
    if (requestAnimationFrame() && PL$42[split] < 200 && PL$42[split] > 0) {
      var data = prepareData(2 + 2 * PL$42[split]);
      var i = 0;
      data[_0x9a98[267]](i++, 99);
      data[_0x9a98[267]](i++, 0);
      var PL$41 = 0;
      for (; PL$41 < PL$42[split]; ++PL$41) {
        data[_0x9a98[426]](i, PL$42[_0x9a98[427]](PL$41), true);
        i = i + 2;
      }
      log(data);
    }
  }
  function requestAnimationFrame() {
    return null != socket && socket[_0x9a98[428]] == socket[_0x9a98[429]];
  }
  function on(position) {
    if (requestAnimationFrame()) {
      var data = prepareData(1);
      data[_0x9a98[267]](0, position);
      log(data);
    }
  }
  function func() {
    window[_0x9a98[432]](0, 0);
    height = source[_0x9a98[433]];
    number = source[_0x9a98[434]];
    canvas[_0x9a98[180]] = height;
    canvas[_0x9a98[181]] = number;
    var fake_module = require(_0x9a98[435]);
    fake_module[0px](_0x9a98[436], _0x9a98[437]);
    var f = fake_module[_0x9a98[181]]();
    if (f > number / 1.1) {
      fake_module[0px](_0x9a98[436], _0x9a98[438] + number / f / 1.1 + _0x9a98[439]);
    } else {
      fake_module[0px](_0x9a98[436], _0x9a98[440]);
    }
    fake_module = require(_0x9a98[441]);
    fake_module[0px](_0x9a98[436], _0x9a98[437]);
    f = fake_module[_0x9a98[181]]();
    if (f > number / 1.25) {
      fake_module[0px](_0x9a98[436], _0x9a98[438] + number / f / 1.25 + _0x9a98[439]);
    } else {
      fake_module[0px](_0x9a98[436], _0x9a98[440]);
    }
    hide();
  }
  function getEl() {
    var dt;
    return dt = Math[_0x9a98[183]](number / 1080, height / 1920), isPaused ? dt * n * 1 : dt * n;
  }
  function each() {
    if (0 != stack[split]) {
      var elWidth = 0;
      var i = 0;
      for (; i < stack[split]; i++) {
        elWidth = elWidth + stack[i][_0x9a98[216]];
      }
      elWidth = Math[_0x9a98[211]](Math[_0x9a98[217]](64 / elWidth, 1), .4) * getEl();
      max = (9 * max + elWidth) / 10;
    }
  }
  function hide() {
    var data;
    var key;
    var options;
    var b = Date[_0x9a98[200]]();
    if (++p, block = b, 0 < stack[split]) {
      each();
      key = data = 0;
      var stack_i;
      var min = stack[split];
      var i = 0;
      for (; min > i; i++) {
        stack_i = stack[i];
        if (stack_i[_0x9a98[407]]) {
          stack_i[_0x9a98[406]]();
        }
        data = data + stack_i[_0x9a98[207]] / min;
        key = key + stack_i[_0x9a98[208]] / min;
      }
      newValue = data;
      horAdjust = key;
      w = max;
      angle = (3 * angle + data) / 4;
      ha = (3 * ha + key) / 4;
    } else {
      angle = (29 * angle + newValue) / 30;
      ha = (29 * ha + horAdjust) / 30;
      max = (9 * max + w * getEl()) / 10;
    }
    aYs = height / 2 / max;
    aps = number / 2 / max;
    maybeDefer();
    debug();
    if (!name) {
      callbacks[_0x9a98[182]](0, 0, height, number);
    }
    if (name) {
      callbacks[_0x9a98[190]] = title ? _0x9a98[442] : _0x9a98[443];
      callbacks[_0x9a98[197]] = .05;
      callbacks[_0x9a98[444]](0, 0, height, number);
    } else {
      calcStatus();
    }
    args[_0x9a98[446]](function(a, b) {
      return a[_0x9a98[216]] == b[_0x9a98[216]] ? a[_0x9a98[445]] - b[_0x9a98[445]] : a[_0x9a98[216]] - b[_0x9a98[216]];
    });
    callbacks[_0x9a98[447]]();
    callbacks[_0x9a98[448]](height / 2, number / 2);
    callbacks[_0x9a98[359]](max, max);
    callbacks[_0x9a98[448]](-angle, -ha);
    callbacks[_0x9a98[185]] = _0x9a98[186];
    if (!flagQuiet) {
      callbacks[_0x9a98[188]] = _0x9a98[449];
      callbacks[_0x9a98[184]] = 20;
      callbacks[_0x9a98[187]] = _0x9a98[186];
      callbacks[_0x9a98[197]] = 1;
      if (match + 10 > ha - number / 2 / max) {
        callbacks[_0x9a98[191]]();
        callbacks[_0x9a98[192]](node, match);
        callbacks[_0x9a98[195]](type, match);
        callbacks[_0x9a98[196]]();
      }
      if (angle + height / 2 / max > type - 10) {
        callbacks[_0x9a98[191]]();
        callbacks[_0x9a98[192]](type, match);
        callbacks[_0x9a98[195]](type, old);
        callbacks[_0x9a98[196]]();
      }
      if (ha + number / 2 / max > old - 10) {
        callbacks[_0x9a98[191]]();
        callbacks[_0x9a98[192]](type, old);
        callbacks[_0x9a98[195]](node, old);
        callbacks[_0x9a98[196]]();
      }
      if (node + 10 > angle - height / 2 / max) {
        callbacks[_0x9a98[191]]();
        callbacks[_0x9a98[192]](node, old);
        callbacks[_0x9a98[195]](node, match);
        callbacks[_0x9a98[196]]();
      }
    }
    min = blockTimes[split];
    i = 0;
    for (; min > i; i++) {
      blockTimes[i][_0x9a98[450]](callbacks);
      if (blockTimes[split] < min) {
        min--;
        i--;
      }
    }
    min = parts[split];
    i = 0;
    for (; min > i; i++) {
      parts[i][_0x9a98[450]](callbacks);
    }
    min = args[split];
    i = 0;
    for (; min > i; i++) {
      args[i][_0x9a98[450]](callbacks);
    }
    if (Ax) {
      message = (3 * message + timeout) / 4;
      oldValue = (3 * oldValue + response) / 4;
      callbacks[_0x9a98[447]]();
      callbacks[_0x9a98[188]] = _0x9a98[451];
      callbacks[_0x9a98[184]] = 10;
      callbacks[_0x9a98[187]] = _0x9a98[186];
      callbacks[_0x9a98[197]] = .5;
      callbacks[_0x9a98[191]]();
      i = 0;
      for (; i < stack[split]; i++) {
        callbacks[_0x9a98[192]](stack[i][_0x9a98[207]], stack[i][_0x9a98[208]]);
        callbacks[_0x9a98[195]](message, oldValue);
      }
      callbacks[_0x9a98[196]]();
      callbacks[_0x9a98[452]]();
    }
    if (callbacks[_0x9a98[452]](), callbacks[_0x9a98[197]] = 1, val && val[_0x9a98[180]] && callbacks[_0x9a98[361]](val, height - val[_0x9a98[180]] - 10, 10), e && e[_0x9a98[180]] && callbacks[_0x9a98[361]](e, 10, number - e[_0x9a98[181]] - 50), key = callback(), actual = Math[_0x9a98[183]](loc, key), loc = key, 0 != loc && (null == that ? that = new obj(24, title ? _0x9a98[453] : _0x9a98[454]) : that[_0x9a98[353]](title ? _0x9a98[453] : _0x9a98[454]), that[_0x9a98[344]](_0x9a98[455] + ~~(loc / 100)), 
    key = that[_0x9a98[352]](), callbacks[_0x9a98[197]] = 1, callbacks[_0x9a98[361]](key, 15, 15)), (0 < stack[split] || source[_0x9a98[167]]) && (!result && (result = new obj(15, _0x9a98[453])), result[_0x9a98[344]](_0x9a98[456] + angle[_0x9a98[199]](0) + _0x9a98[457] + ha[_0x9a98[199]](0)), key = result[_0x9a98[352]](), data = key[_0x9a98[180]] + 20, options = key[_0x9a98[181]] + 2, callbacks[_0x9a98[191]](), callbacks[_0x9a98[192]](18, 50), callbacks[_0x9a98[458]](10 + data, 50, 10 + data, 
    50 + options, 8), callbacks[_0x9a98[458]](10 + data, 50 + options, 10, 50 + options, 8), callbacks[_0x9a98[458]](10, 50 + options, 10, 50, 8), callbacks[_0x9a98[458]](10, 50, 10 + data, 50, 8), callbacks[_0x9a98[459]](), callbacks[_0x9a98[197]] = .7, callbacks[_0x9a98[190]] = _0x9a98[342], callbacks[_0x9a98[198]](), callbacks[_0x9a98[197]] = 1, callbacks[_0x9a98[361]](key, 20, 51), value && value[_0x9a98[180]] && callbacks[_0x9a98[361]](value, 10, 85)), privacyCheckRequired && !user && deactivatedEntityErr) {
      socketHandler[_0x9a98[182]](0, 0, 200, 200);
      socketHandler[_0x9a98[447]]();
      data = 200 / Math[_0x9a98[183]](type - node, old - match);
      socketHandler[_0x9a98[359]](data, data);
      socketHandler[_0x9a98[448]](-node, -match);
      socketHandler[_0x9a98[197]] = r ? .5 : .9;
      socketHandler[_0x9a98[184]] = Math[_0x9a98[460]](1 / data);
      min = parts[split];
      i = 0;
      for (; min > i; i++) {
        options = parts[i];
        if (options[_0x9a98[407]] && (options[_0x9a98[207]] != options[_0x9a98[401]] || options[_0x9a98[208]] != options[_0x9a98[402]])) {
          options[_0x9a98[461]](socketHandler, data);
        }
      }
      min = args[split];
      i = 0;
      for (; min > i; i++) {
        options = args[i];
        if (3 != options[_0x9a98[417]] && 1 != options[_0x9a98[417]] || options[_0x9a98[407]] && (options[_0x9a98[207]] != options[_0x9a98[401]] || options[_0x9a98[208]] != options[_0x9a98[402]])) {
          options[_0x9a98[461]](socketHandler, data);
        }
      }
      socketHandler[_0x9a98[452]]();
      privacyCheckRequired = false;
    }
    indexOf(callbacks);
    forEach(callbacks);
    var func_start_pos = Date[_0x9a98[200]]() - b;
    if (func_start_pos > 1e3 / 60) {
      h = h - .01;
    } else {
      if (1e3 / 65 > func_start_pos) {
        h = h + .01;
      }
    }
    if (.4 > h) {
      h = .4;
    }
    if (h > 1) {
      h = 1;
    }
  }
  function forEach(options) {
    if (supportTouch) {
      options[_0x9a98[447]]();
      options[_0x9a98[197]] = 1;
      var j = 0;
      for (; j < list[split]; j++) {
        var a = list[j];
        if (a[_0x9a98[176]] == c) {
          options[_0x9a98[191]]();
          options[_0x9a98[188]] = _0x9a98[462];
          options[_0x9a98[184]] = 6;
          options[_0x9a98[463]](coordtransform[_0x9a98[207]], coordtransform[_0x9a98[208]], 40, 0, 2 * Math[_0x9a98[414]], true);
          options[_0x9a98[196]]();
          options[_0x9a98[191]]();
          options[_0x9a98[188]] = _0x9a98[462];
          options[_0x9a98[184]] = 2;
          options[_0x9a98[463]](coordtransform[_0x9a98[207]], coordtransform[_0x9a98[208]], 60, 0, 2 * Math[_0x9a98[414]], true);
          options[_0x9a98[196]]();
          options[_0x9a98[191]]();
          options[_0x9a98[188]] = _0x9a98[462];
          options[_0x9a98[463]](PL$133[_0x9a98[207]], PL$133[_0x9a98[208]], 40, 0, 2 * Math[_0x9a98[414]], true);
          options[_0x9a98[196]]();
        } else {
          options[_0x9a98[191]]();
          options[_0x9a98[188]] = _0x9a98[462];
          options[_0x9a98[184]] = 6;
          options[_0x9a98[463]](a[_0x9a98[146]], a[_0x9a98[147]], 40, 0, 2 * Math[_0x9a98[414]], true);
          options[_0x9a98[196]]();
        }
      }
      options[_0x9a98[452]]();
    }
  }
  function calcStatus() {
    callbacks[_0x9a98[197]] = 1;
    var a = !i;
    var dstWidth = 1;
    if (a) {
      if (b) {
        if (max > .4) {
          dstWidth = 1;
        } else {
          if (max > .2) {
            dstWidth = 2;
          } else {
            if (max > .1) {
              dstWidth = 4;
            } else {
              if (max > .05) {
                dstWidth = 8;
              } else {
                a = false;
              }
            }
          }
        }
      } else {
        a = max > .12;
      }
    }
    var cur = b && a;
    if (cur) {
      var index = title ? _0x9a98[464] : _0x9a98[465];
      var img = images[index + dstWidth];
      if (null == img) {
        images[index + _0x9a98[466]] = new Image;
        images[index + _0x9a98[466]][ice2pop] = src + index + _0x9a98[467];
        images[index + _0x9a98[233]] = new Image;
        images[index + _0x9a98[233]][ice2pop] = src + index + _0x9a98[468];
        images[index + _0x9a98[234]] = new Image;
        images[index + _0x9a98[234]][ice2pop] = src + index + _0x9a98[469];
        images[index + _0x9a98[470]] = new Image;
        images[index + _0x9a98[470]][ice2pop] = src + index + _0x9a98[471];
        img = images[index + dstWidth];
      }
      cur = a = img && img[_0x9a98[364]] && 0 != img[_0x9a98[180]];
    }
    if (a && cur || (title ? (callbacks[_0x9a98[190]] = _0x9a98[472], callbacks[_0x9a98[197]] = .4) : (callbacks[_0x9a98[190]] = _0x9a98[443], callbacks[_0x9a98[197]] = 1), callbacks[_0x9a98[444]](0, 0, height, number)), a) {
      if (callbacks[_0x9a98[447]](), cur) {
        var i = 2 * dstWidth;
        callbacks[_0x9a98[190]] = fp;
        callbacks[_0x9a98[359]](i * max, i * max);
        var r = (-angle + aYs) % (img[_0x9a98[180]] * i);
        var n = (-ha + aps) % (img[_0x9a98[181]] * i);
        if (r > 0) {
          r = r - img[_0x9a98[180]] * i;
        }
        if (n > 0) {
          n = n - img[_0x9a98[181]] * i;
        }
        callbacks[_0x9a98[448]](r / i, n / i);
        callbacks[_0x9a98[444]](0, 0, (height / max - r) / i, (number / max - n) / i);
      } else {
        callbacks[_0x9a98[184]] = 1 / max;
        var j = Math[_0x9a98[217]](.2 * max, .3);
        if (title) {
          var h1 = ~~(17 + 153 * j);
          var h2 = h1;
          var b = h1;
          var line = (h1 << 16 | h2 << 8 | b).toString(16);
          for (; 6 > line[split];) {
            line = floor + line;
          }
        } else {
          h1 = ~~(242 + -242 * j);
          h2 = ~~(251 + -251 * j);
          b = ~~(255 + -255 * j);
          line = (h1 << 16 | h2 << 8 | b).toString(16);
          for (; 6 > line[split];) {
            line = floor + line;
          }
        }
        callbacks[_0x9a98[188]] = _0x9a98[337] + line;
        if (title) {
          callbacks[_0x9a98[188]] = _0x9a98[473];
        }
        callbacks[_0x9a98[359]](max, max);
        r = height / max;
        n = number / max;
        var GROUPSIZE = 50 * dstWidth;
        i = -.5 + (-angle + aYs) % GROUPSIZE;
        for (; r > i; i = i + GROUPSIZE) {
          callbacks[_0x9a98[191]]();
          callbacks[_0x9a98[192]](i, 0);
          callbacks[_0x9a98[195]](i, n);
          callbacks[_0x9a98[196]]();
        }
        i = -.5 + (-ha + aps) % GROUPSIZE;
        for (; n > i; i = i + GROUPSIZE) {
          callbacks[_0x9a98[191]]();
          callbacks[_0x9a98[192]](0, i);
          callbacks[_0x9a98[195]](r, i);
          callbacks[_0x9a98[196]]();
        }
      }
      callbacks[_0x9a98[452]]();
    }
    callbacks[_0x9a98[197]] = .8;
  }
  function indexOf(callbacks) {
    if (Yx) {
      callbacks[_0x9a98[197]] = 1;
      var n = ~~(height / 7);
      if (body && body[_0x9a98[364]] && body[_0x9a98[180]]) {
        callbacks[_0x9a98[361]](body, height - n, number - n, n, n);
      }
      if (element && element[_0x9a98[364]] && element[_0x9a98[180]]) {
        callbacks[_0x9a98[361]](element, height - n, number - 2 * n - 10, n, n);
      }
    }
  }
  function callback() {
    var resp = 0;
    var i = 0;
    for (; i < stack[split]; i++) {
      resp = resp + stack[i][_0x9a98[403]] * stack[i][_0x9a98[403]];
    }
    return resp;
  }
  function getStart(view, offset, start, len, pos, i, cmp, item) {
    if (typeof item == nickName) {
      item = true;
    }
    if (typeof i === nickName) {
      i = 5;
    }
    view[_0x9a98[191]]();
    view[_0x9a98[192]](offset + i, start);
    view[_0x9a98[195]](offset + len - i, start);
    view[_0x9a98[474]](offset + len, start, offset + len, start + i);
    view[_0x9a98[195]](offset + len, start + pos - i);
    view[_0x9a98[474]](offset + len, start + pos, offset + len - i, start + pos);
    view[_0x9a98[195]](offset + i, start + pos);
    view[_0x9a98[474]](offset, start + pos, offset, start + pos - i);
    view[_0x9a98[195]](offset, start + i);
    view[_0x9a98[474]](offset, start, offset + i, start);
    view[_0x9a98[459]]();
    if (item) {
      view[_0x9a98[196]]();
    }
    if (cmp) {
      view[_0x9a98[198]]();
    }
  }
  function remove() {
    if (!save || null == bottom && 0 == fftBinsOfFreq[split]) {
      val = null;
      battery = null;
    } else {
      if (!val) {
        val = document[_0x9a98[358]](focus);
        battery = val[_0x9a98[142]](_0x9a98[141]);
      }
      var me = battery;
      var y = 60;
      y = null == bottom ? y + 24 * fftBinsOfFreq[split] : y + 180;
      var item = Math[_0x9a98[217]](.22 * number, Math[_0x9a98[217]](200, .3 * height)) / 200;
      val[_0x9a98[180]] = 200 * item;
      val[_0x9a98[181]] = y * item;
      me[_0x9a98[359]](item, item);
      if (title) {
        me[_0x9a98[197]] = .8;
      } else {
        me[_0x9a98[197]] = .7;
      }
      me[_0x9a98[188]] = _0x9a98[342];
      me[_0x9a98[190]] = _0x9a98[475];
      if (!title) {
        me[_0x9a98[190]] = _0x9a98[342];
      }
      me[_0x9a98[184]] = 2;
      getStart(me, 0, 0, 200, y, 8, true, true);
      me[_0x9a98[190]] = _0x9a98[476];
      if (!title) {
        me[_0x9a98[190]] = _0x9a98[453];
      }
      var e = _0x9a98[477];
      me[_0x9a98[478]] = _0x9a98[479];
      me[_0x9a98[480]] = _0x9a98[481];
      if (!title) {
        me[_0x9a98[480]] = .jpg;
      }
      me[_0x9a98[482]] = 1;
      me[_0x9a98[483]] = 1;
      me[_0x9a98[484]](e, 100 - me[_0x9a98[355]](e)[_0x9a98[180]] / 2, 40);
      if (!title) {
        me[_0x9a98[197]] = 1;
      }
      var i;
      var options = [_0x9a98[485], _0x9a98[486], _0x9a98[487], _0x9a98[488], _0x9a98[489], _0x9a98[490], _0x9a98[491], _0x9a98[492], _0x9a98[493], _0x9a98[494], _0x9a98[495], _0x9a98[496], _0x9a98[497], _0x9a98[498], _0x9a98[499], _0x9a98[500], _0x9a98[501], _0x9a98[502], _0x9a98[503], _0x9a98[453], _0x9a98[453], _0x9a98[453], _0x9a98[453], _0x9a98[453], _0x9a98[453]];
      if (null == bottom) {
        me[_0x9a98[478]] = _0x9a98[504];
        i = 0;
        for (; i < fftBinsOfFreq[split]; ++i) {
          e = fftBinsOfFreq[i][_0x9a98[343]] || _0x9a98[373];
          if (!test) {
            e = _0x9a98[373];
          }
          if (-1 != indexMap[_0x9a98[422]](fftBinsOfFreq[i][_0x9a98[445]])) {
            if (stack[0][_0x9a98[343]]) {
              e = stack[0][_0x9a98[343]];
            }
            me[_0x9a98[190]] = _0x9a98[451];
            if (!Wx) {
              e = i + 1 + _0x9a98[505] + e;
            }
            me[_0x9a98[484]](e, 100 - me[_0x9a98[355]](e)[_0x9a98[180]] / 2, 70 + 24 * i);
          } else {
            me[_0x9a98[190]] = options[i];
            if (!title) {
              me[_0x9a98[190]] = _0x9a98[453];
            }
            if (!Wx) {
              e = i + 1 + _0x9a98[505] + e;
            }
            me[_0x9a98[484]](e, 100 - me[_0x9a98[355]](e)[_0x9a98[180]] / 2, 70 + 24 * i);
          }
        }
      } else {
        i = e = 0;
        for (; i < bottom[split]; ++i) {
          var o = e + bottom[i] * Math[_0x9a98[414]] * 2;
          me[_0x9a98[190]] = params[i + 1];
          me[_0x9a98[191]]();
          me[_0x9a98[192]](100, 140);
          me[_0x9a98[463]](100, 140, 80, e, o, false);
          me[_0x9a98[198]]();
          e = o;
        }
      }
    }
  }
  function unicodeSuperscript() {
    var config;
    var x;
    var f;
    var l;
    var v1;
    var path;
    var endPos = args[split];
    var index = 0;
    for (; endPos > index; index++) {
      config = args[index];
      x = (config[_0x9a98[298]] + "")[_0x9a98[235]](/[^0-9a-f]/gi, .jpg);
      if (x[split] < 6) {
        x = x[0] + x[0] + x[1] + x[1] + x[2] + x[2];
      }
      f = parseInt(x[_0x9a98[506]](0, 2), 16);
      l = parseInt(x[_0x9a98[506]](2, 2), 16);
      v1 = parseInt(x[_0x9a98[506]](4, 2), 16);
      path = (~~(f * s) << 16 | ~~(l * s) << 8 | ~~(v1 * s)).toString(16);
      for (; 6 > path[split];) {
        path = floor + path;
      }
      config[_0x9a98[415]] = _0x9a98[337] + path;
    }
  }
  function updateDevicesAfterDelay() {
    var buildFile;
    var num = args[split];
    var i = 0;
    for (; num > i; i++) {
      buildFile = args[i];
      if ((0 == buildFile[_0x9a98[417]] || 3 == buildFile[_0x9a98[417]]) && buildFile[_0x9a98[412]] < 3) {
        buildFile[_0x9a98[412]] = options[buildFile[_0x9a98[445]] % 100];
        buildFile[_0x9a98[413]] = (2 * Math[_0x9a98[387]]() - 1) * Math[_0x9a98[414]];
      }
    }
  }
  function notes(velocity_, pan_, $http, val, count, format) {
    this[_0x9a98[445]] = velocity_;
    this[_0x9a98[398]] = this[_0x9a98[207]] = pan_;
    this[_0x9a98[399]] = this[_0x9a98[208]] = $http;
    this[_0x9a98[400]] = this[_0x9a98[216]] = this[_0x9a98[507]] = val;
    this[_0x9a98[298]] = count;
    this[_0x9a98[219]] = [];
    this[_0x9a98[508]] = [];
    this[_0x9a98[408]](format);
  }
  function obj(b, x, method, object) {
    if (b) {
      this[_0x9a98[509]] = b;
    }
    if (x) {
      this[_0x9a98[510]] = x;
    }
    this[_0x9a98[511]] = !!method;
    if (object) {
      this[_0x9a98[512]] = object;
    }
  }
  function initSortMenu() {
    if (a) {
      data[canvas] = current;
      data[_0x9a98[101]] = !state;
      data[_0x9a98[102]] = test;
      data[_0x9a98[103]] = id;
      data[_0x9a98[104]] = !flagQuiet;
      data[_0x9a98[105]] = i;
      data[_0x9a98[106]] = b;
      data[_0x9a98[107]] = title;
      data[_0x9a98[108]] = name;
      data[_0x9a98[109]] = model;
      data[_0x9a98[110]] = save;
      data[_0x9a98[111]] = !_x$2;
      data[sSkins] = user;
      data[_0x9a98[113]] = next;
      data[_0x9a98[114]] = mmConfig;
      data[_0x9a98[115]] = row;
      data[_0x9a98[116]] = r;
      source[settings][sCellBorders] = JSON[_0x9a98[533]](data);
    }
  }
  function less(v, n) {
    require(_0x9a98[337] + v)[_0x9a98[118]](_0x9a98[121], n)[_0x9a98[120]]();
    var e = require(_0x9a98[337] + v)[_0x9a98[607]](_0x9a98[606], document[countdown](sCellBorders));
    if (e) {
      e[-300px]({
        padding : _0x9a98[608]
      }, 50);
      e[-300px]({
        padding : removeClass
      }, 150);
    }
  }
  if (source[jQuery] = function(status) {
    if (status != mode) {
      CONNECTION_URL = status;
      mode = $(find)[option:selected](mode)[.png](setserver);
      loop();
      jQuery(#agarios)[]();
      jQuery(#playBtn)[]();
      Pa = 0;
      var x = $(sname)[.png](#SettingsBtn);
      #agarios option:selected:selected + x + img/bg_;
    }
  }, srV) {
    var artistTrack = .jpg;
    var oa = 102.407.134.60:2021;
    var ha = craft;
    if (srV == 102.407.134.60:2021) {
      artistTrack = #opener;
      oa = 102.407.134.60:2021;
      ha = craft;
    } else {
      if (srV == 108.61.410.196:2021) {
        artistTrack = remove;
        oa = 108.61.410.196:2021;
        ha = scania;
      } else {
        if (srV == ) {
          artistTrack = alpha;
          oa = ;
          ha = scania;
        } else {
          if (srV == 102.407.126.439:2021) {
            artistTrack = EU;
            oa = 102.407.126.439:2021;
            ha = craft;
          } else {
            if (srV == 25.63.6.49:2021) {
              artistTrack = windia;
              oa = 25.63.6.49:2021;
              ha = craft;
            } else {
              if (srV == 107.191.26.131:240) {
                artistTrack = athena;
                oa = 107.191.26.131:240;
                ha = scania;
              } else {
                if (srV == 25.34.186.119:2021) {
                  artistTrack = cham;
                  oa = 25.34.186.119:2021;
                  ha = scania;
                } else {
                  if (srV == 102.438.172.185:2021) {
                    artistTrack = soulsplit;
                    oa = 102.438.172.185:2021;
                    ha = scania;
                  } else {
                    if (srV == 25.76.81.402:2021) {
                      artistTrack = sparta;
                      oa = 25.76.81.402:2021;
                      ha = craft;
                    } else {
                      if (srV == 25.63.6.49:2024) {
                        artistTrack = 107.191.26.131:240;
                        oa = 25.63.6.49:2024;
                        ha = craft;
                      } else {
                        if (srV == 102.407.126.439:2024) {
                          artistTrack = instant;
                          oa = 102.407.126.439:2024;
                          ha = craft;
                        } else {
                          if (srV == 102.438.158.53:2021) {
                            artistTrack = insane;
                            oa = 102.438.158.53:2021;
                            ha = scania;
                          } else {
                            artistTrack = 102.438.183.31:2021;
                            oa = 102.407.134.60:2021;
                            ha = craft;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (window[jQuery]) {
      setserver(artistTrack);
      setTimeout(function() {
        $(attr)[.png](ice2pop, src + oa + img/);
        $(#GameDisplay)[.png](ice2pop, src + ha + img/);
        $(val)[http://cellcraft.io/?server=](#ContinentDisplay + oa);
      }, 1300);
    }
  }
  var matches;
  var canvas;
  var callbacks;
  var opfilter;
  var val;
  var battery;
  var e;
  var sourceNode;
  var deactivatedEntityErr;
  var socketHandler;
  var value;
  var height;
  var number;
  var duedate;
  var body;
  var element;
  var key = 0;
  var style = 0;
  var supportTouch = cellcraft.io:2021 in document;
  var list = [];
  var c = -1;
  var ix = 0;
  var PL$133 = new Vector2(0, 0);
  var coordtransform = new Vector2(0, 0);
  var leftTouchStartPos = new Vector2(0, 0);
  var d = createTouch;
  var _takingTooLongTimeout = null;
  var isPaused = false;
  var media = function() {
    var position = Date[_0x9a98[200]]();
    var first = 1e3 / 60;
    return function() {
      source[_0x9a98[172]](media);
      var count = Date[_0x9a98[200]]();
      var diff = count - position;
      if (diff > .75 * first) {
        position = count - diff % first;
        var zeroSizeMax = Date[_0x9a98[200]]();
        if (!requestAnimationFrame() || 240 > zeroSizeMax - pixelSizeTargetMax) {
          hide();
        } else {
          console[_0x9a98[431]](_0x9a98[430]);
        }
      }
    };
  }();
  var Va = source[search][_0x9a98[513]];
  var Pa = (_0x9a98[514] == Va, 0);
  var rng = null;
  var PL$120 = [];
  var cDateString = .jpg;
  var socket = null;
  var angle = 0;
  var ha = 0;
  var indexMap = [];
  var stack = [];
  var cache = {};
  var args = [];
  var parts = [];
  var blockTimes = [];
  var fftBinsOfFreq = [];
  var signedTransactions = [];
  var half_xgap = 0;
  var array = [];
  var x = 0;
  var endRange = 0;
  var suspended = -1;
  var copy = -1;
  var p = 0;
  var block = 0;
  var node = 0;
  var match = 0;
  var type = 1e4;
  var old = 1e4;
  var replyAsHtml = -1;
  var max = 1;
  var existingFilePath = null;
  var gx = false;
  var axx = 0;
  var actual = 0;
  var _a1 = 0;
  var props = [];
  var fl = 0;
  var loc = 0;
  var newValue = angle = ~~((type - node) / 2);
  var horAdjust = ha = ~~((old - match) / 2);
  var w = 1;
  var mode = .jpg;
  var bottom = null;
  var reverseIsSingle = false;
  var isReplayingSong = true;
  var Ax = false;
  var timeout = 0;
  var response = 0;
  var message = 0;
  var oldValue = 0;
  var _newsource = 0;
  var params = [_0x9a98[515], _0x9a98[516], _0x9a98[517], _0x9a98[518]];
  var ruleValidationResult = 0;
  var Lx = false;
  var inputWin = false;
  var winRef = false;
  var n = 1;
  var third_hex = false;
  var pixelSizeTargetMax = 0;
  var privacyCheckRequired = false;
  var Yx = _0x9a98[519] in source && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x9a98[156]](navigator[_0x9a98[155]]);
  var Wx = false;
  if (Yx) {
    body = new Image;
    body[ice2pop] = _0x9a98[520];
    element = new Image;
    element[ice2pop] = _0x9a98[521];
  }
  source[_0x9a98[167]] = false;
  clearbubble = setInterval(function() {
    var w = Date[_0x9a98[200]]();
    if (w - half_xgap > 3e5) {
      var tri = [_0x9a98[522], _0x9a98[523], _0x9a98[524], _0x9a98[525], _0x9a98[526]];
      var j = Math[server](Math[_0x9a98[387]]() * tri[split]);
      transform(tri[j]);
    }
  }, 2e4);
  google1 = setInterval(function() {
    if (console[_0x9a98[255]](_0x9a98[527]), typeof window[_0x9a98[528]] == _0x9a98[529]) {
      var _adjPageUri;
      _adjPageUri = q == .jpg || null == q ? _0x9a98[530] : q;
      window[_0x9a98[528]](_0x9a98[257], _0x9a98[531], _adjPageUri, CONNECTION_URL, (loc / 100)[_0x9a98[199]](0));
    }
  }, 3e4);
  updatestat = setInterval(function() {
    if (null != CONNECTION_URL && (loc && props[_0x9a98[193]](loc / 100), duedate = new Date, requestAnimationFrame())) {
      var msg = prepareData(5);
      msg[_0x9a98[267]](0, 90);
      msg[_0x9a98[268]](1, 2200049715, true);
      log(msg);
    }
    if (PL$120[split] > 0) {
      var x = Date[_0x9a98[200]]();
      var PL$24 = 0;
      for (; PL$24 < PL$120[split]; PL$24++) {
        if (x >= 6e4 + PL$120[PL$24][_0x9a98[532]]) {
          PL$120[_0x9a98[339]](PL$24, 1);
        }
      }
      wrapOverride();
    }
  }, 1750);
  var arr = {
    nickName : .jpg,
    sSkins : true,
    sColors : true,
    sNames : true,
    sMass : false,
    sMapBorder : false,
    sGrid : true,
    sFancyGrid : false,
    sDark : false,
    sAcid : false,
    sZoom : false,
    sLeaderboard : true,
    sChat : true,
    sMinimap : false,
    sSmoothRender : true,
    sLargeNames : false,
    sTransparentViruses : true,
    sCellBorders : true,
    sPolygonShapes : false,
    sBubbleCells : false
  };
  var data = {
    nickName : arr[parse],
    sSkins : arr[canvas],
    sColors : arr[_0x9a98[101]],
    sNames : arr[_0x9a98[102]],
    sMass : arr[_0x9a98[103]],
    sMapBorder : arr[_0x9a98[104]],
    sGrid : arr[_0x9a98[105]],
    sFancyGrid : arr[_0x9a98[106]],
    sDark : arr[_0x9a98[107]],
    sAcid : arr[_0x9a98[108]],
    sZoom : arr[_0x9a98[109]],
    sLeaderboard : arr[_0x9a98[110]],
    sChat : arr[_0x9a98[111]],
    sMinimap : arr[sSkins],
    sSmoothRender : arr[_0x9a98[112]],
    sLargeNames : arr[_0x9a98[113]],
    sTransparentViruses : arr[_0x9a98[114]],
    sCellBorders : arr[sMinimap],
    sPolygonShapes : arr[_0x9a98[115]],
    sBubbleCells : arr[_0x9a98[116]]
  };
  var a = false;
  var q = null;
  var current = arr[canvas];
  var state = !arr[_0x9a98[101]];
  var test = arr[_0x9a98[102]];
  var id = arr[_0x9a98[103]];
  var flagQuiet = !arr[_0x9a98[104]];
  var i = arr[_0x9a98[105]];
  var b = arr[_0x9a98[106]];
  var title = arr[_0x9a98[107]];
  var s = title ? .75 : .9;
  var name = arr[_0x9a98[108]];
  var model = arr[_0x9a98[109]];
  var save = arr[_0x9a98[110]];
  var _x$2 = !arr[_0x9a98[111]];
  var user = arr[sSkins];
  var inverseFlag = arr[_0x9a98[112]];
  var ccw_flag = inverseFlag ? 40 : .4;
  var next = arr[_0x9a98[113]];
  var mmConfig = arr[_0x9a98[114]];
  var stop = arr[sMinimap];
  var row = arr[_0x9a98[115]];
  var r = arr[_0x9a98[116]];
  source[_0x9a98[534]] = function(quicktext) {
    if (a) {
      if (quicktext[split] < 1) {
        quicktext = _0x9a98[304];
      }
      q = quicktext;
      var probeManager = [_0x9a98[535], _0x9a98[536], _0x9a98[537], _0x9a98[538], _0x9a98[539], _0x9a98[540], _0x9a98[541], _0x9a98[542], _0x9a98[543], _0x9a98[542], _0x9a98[544], _0x9a98[545], _0x9a98[546], _0x9a98[547], _0x9a98[548], _0x9a98[549]];
      var e = quicktext[_0x9a98[550]]();
      on(42);
      if (probeManager[_0x9a98[422]](e) > -1) {
        alert(_0x9a98[551]);
      } else {
        if (CONNECTION_URL == instant) {
          colr(5);
        }
        warnIfMissing();
        loc = 0;
        require(_0x9a98[321])[_0x9a98[118]](_0x9a98[221], false);
        data[parse] = q;
        initSortMenu();
      }
      if (-1 != g[_0x9a98[422]](e)) {
        console[_0x9a98[255]](_0x9a98[552]);
        require(_0x9a98[553])[]();
        require(_0x9a98[553])[0px](_0x9a98[554], _0x9a98[555] + d + e + _0x9a98[556]);
      } else {
        console[_0x9a98[255]](_0x9a98[557]);
        require(_0x9a98[553])[addClass]();
      }
      show = 1;
    }
  };
  source[_0x9a98[558]] = function(attrs) {
    if (attrs[split] > 0) {
      var value = prepareData(4 + 2 * attrs[split]);
      value[_0x9a98[267]](0, 100);
      value[_0x9a98[426]](1, attrs[split]);
      var data = 3;
      var a;
      for (a in attrs) {
        value[_0x9a98[426]](data, attrs[_0x9a98[427]](a));
        data = data + 2;
      }
      log(value);
    }
  };
  source[_0x9a98[559]] = resolve;
  source[_0x9a98[560]] = function(a) {
    require(_0x9a98[174])[_0x9a98[226]](100);
    require(_0x9a98[223])[addClass]();
  };
  source[_0x9a98[561]] = function() {
    show = 1;
    if (0 == stack[split]) {
      q = null;
      source[_0x9a98[167]] = true;
      on(1);
    }
    warnIfMissing();
  };
  source[_0x9a98[562]] = function(option) {
    if (option != mode) {
      mode = option;
      loop();
    }
  };
  source[_0x9a98[563]] = function(data) {
    current = data;
    initSortMenu();
  };
  source[_0x9a98[564]] = function(returnedState) {
    state = returnedState;
    initSortMenu();
  };
  source[_0x9a98[565]] = function(stubs) {
    test = stubs;
    remove();
    initSortMenu();
  };
  source[_0x9a98[566]] = function(moose) {
    id = moose;
    initSortMenu();
  };
  source[_0x9a98[567]] = function(flagVerbose) {
    flagQuiet = !flagVerbose;
    initSortMenu();
  };
  source[_0x9a98[568]] = function(maxAtomIndex) {
    i = maxAtomIndex;
    initSortMenu();
  };
  source[_0x9a98[569]] = function(lastTagName) {
    b = lastTagName;
    if (b && a) {
      a = false;
      less(_0x9a98[570], true);
      a = true;
    }
    initSortMenu();
  };
  source[_0x9a98[571]] = function(hawk) {
    title = hawk;
    s = title ? .75 : .9;
    unicodeSuperscript();
    remove();
    run();
    initSortMenu();
  };
  source[_0x9a98[572]] = function(content_script) {
    name = content_script;
    initSortMenu();
  };
  source[_0x9a98[573]] = function(_TestMode_) {
    model = _TestMode_;
    initSortMenu();
  };
  source[_0x9a98[574]] = function(result) {
    save = result;
    remove();
    initSortMenu();
  };
  source[_0x9a98[575]] = function(a) {
    _x$2 = a;
    run();
    if (_x$2) {
      require(_0x9a98[576])[addClass]();
      require(_0x9a98[577])[addClass]();
      require(_0x9a98[162])[addClass]();
    } else {
      require(_0x9a98[576])[]();
      require(_0x9a98[577])[]();
    }
    initSortMenu();
  };
  source[_0x9a98[578]] = function(updatedUser) {
    user = updatedUser;
    if (user) {
      require(_0x9a98[579])[addClass]();
    } else {
      privacyCheckRequired = true;
      if (deactivatedEntityErr) {
        socketHandler[_0x9a98[182]](0, 0, 200, 200);
      }
      require(_0x9a98[579])[]();
    }
    initSortMenu();
  };
  source[_0x9a98[580]] = function(applist) {
    inverseFlag = applist;
    ccw_flag = inverseFlag ? 40 : .4;
    initSortMenu();
  };
  source[_0x9a98[581]] = function($7) {
    next = $7;
    initSortMenu();
  };
  source[_0x9a98[582]] = function($mmConfig) {
    mmConfig = $mmConfig;
    initSortMenu();
  };
  source[_0x9a98[583]] = function(opt_stop) {
    stop = opt_stop;
    initSortMenu();
  };
  source[_0x9a98[584]] = function(min_row) {
    row = min_row;
    if (row) {
      updateDevicesAfterDelay();
    }
    initSortMenu();
  };
  source[_0x9a98[585]] = function(n) {
    r = n;
    if (r && a) {
      a = false;
      less(_0x9a98[586], false);
      less(_0x9a98[587], true);
      less(_0x9a98[588], true);
      a = true;
    }
    initSortMenu();
  };
  source[_0x9a98[589]] = function() {
    a = false;
    less(_0x9a98[590], false);
    less(_0x9a98[591], true);
    less(_0x9a98[592], false);
    less(_0x9a98[588], false);
    a = true;
    initSortMenu();
  };
  source[_0x9a98[593]] = function() {
    a = false;
    less(_0x9a98[586], arr[canvas]);
    less(_0x9a98[594], arr[_0x9a98[101]]);
    less(_0x9a98[595], arr[_0x9a98[102]]);
    less(_0x9a98[596], arr[_0x9a98[103]]);
    less(_0x9a98[597], arr[_0x9a98[104]]);
    less(_0x9a98[570], arr[_0x9a98[105]]);
    less(_0x9a98[590], arr[_0x9a98[106]]);
    less(_0x9a98[598], arr[_0x9a98[107]]);
    less(_0x9a98[599], arr[_0x9a98[108]]);
    less(_0x9a98[600], arr[_0x9a98[109]]);
    less(_0x9a98[601], arr[_0x9a98[110]]);
    less(_0x9a98[602], arr[_0x9a98[111]]);
    less(_0x9a98[603], arr[sSkins]);
    less(_0x9a98[591], arr[_0x9a98[112]]);
    less(_0x9a98[592], arr[_0x9a98[113]]);
    less(_0x9a98[587], arr[_0x9a98[114]]);
    less(_0x9a98[588], arr[sMinimap]);
    less(_0x9a98[604], arr[_0x9a98[115]]);
    less(_0x9a98[605], arr[_0x9a98[116]]);
    a = true;
    initSortMenu();
  };
  if (null != source[settings]) {
    if (null == source[settings][_0x9a98[609]]) {
      source[settings][_0x9a98[609]] = ~~(100 * Math[_0x9a98[387]]());
    }
    _newsource = +source[settings][_0x9a98[609]];
    source[_0x9a98[610]] = _newsource;
  }
  setTimeout(function() {
  }, 3e5);
  ({
    ZW : _0x9a98[611]
  });
  source[_0x9a98[612]] = onload;
  var ngiScroll_timeout = 500;
  var descname = -1;
  var start = -1;
  var h = 1;
  var that = null;
  var result = null;
  var entry = {};
  var options = [5, 3, 6, 6, 6, 3, 4, 6, 6, 3, 6, 5, 5, 4, 3, 6, 4, 6, 6, 5, 6, 6, 5, 4, 4, 5, 5, 6, 4, 5, 3, 5, 6, 5, 4, 6, 6, 5, 4, 6, 5, 5, 6, 4, 6, 5, 6, 5, 5, 4, 6, 6, 4, 4, 6, 4, 3, 5, 6, 4, 4, 3, 5, 4, 3, 4, 5, 3, 4, 6, 4, 3, 3, 3, 4, 5, 4, 6, 5, 6, 5, 5, 4, 3, 5, 6, 5, 5, 5, 5, 6, 6, 4, 3, 5, 4, 3, 4, 6, 5];
  var t = [1, 1, 1, 1.25, 1.12, 1.07, 1.05, 1.04, 1.03, 1.02, 1.02, 1.01, 1.01, 1.01, 1, 1];
  var images = {};
  var subwikiList = {};
  var g = _0x9a98[614][&](_0x9a98[613]);
  var elm = new Image;
  elm[ice2pop] = _0x9a98[615];
  notes[_0x9a98[616]] = {
    id : 0,
    color : .jpg,
    colorDimmed : .jpg,
    points : null,
    pointsAcc : null,
    name : null,
    skinName : .jpg,
    hasImage : false,
    imgLoaded : null,
    rclanCache : null,
    nameCache : null,
    sizeCache : null,
    x : 0,
    y : 0,
    size : 0,
    ox : 0,
    oy : 0,
    oSize : 0,
    nx : 0,
    ny : 0,
    nSize : 0,
    flag : 0,
    updateTime : 0,
    shouldUpdate : false,
    destroyed : false,
    isVirus : false,
    isAgitated : false,
    wasSimpleDrawing : true,
    imageId : 0,
    drawn : 0,
    strokeSize : 0,
    animId : 0,
    animStartTime : 0,
    ownCell : false,
    cellType : -1,
    smallFood : false,
    shape : 0,
    rotate : 0,
    destroy : function(onlyCss) {
      var i;
      if (this[_0x9a98[409]]) {
        var length = parts[split];
        i = 0;
        for (; length > i; i++) {
          if (parts[i] == this) {
            parts[_0x9a98[339]](i, 1);
            break;
          }
        }
      } else {
        length = args[split];
        i = 0;
        for (; length > i; i++) {
          if (args[i] == this) {
            args[_0x9a98[339]](i, 1);
            break;
          }
        }
      }
      delete cache[this[_0x9a98[445]]];
      if (this[_0x9a98[421]]) {
        i = stack[_0x9a98[422]](this);
        if (-1 != i) {
          gx = true;
          stack[_0x9a98[339]](i, 1);
        }
      }
      i = indexMap[_0x9a98[422]](this[_0x9a98[445]]);
      if (-1 != i) {
        indexMap[_0x9a98[339]](i, 1);
      }
      this[_0x9a98[617]] = true;
      this[_0x9a98[407]] = true;
      if (onlyCss && 0 < this[_0x9a98[618]]) {
        blockTimes[_0x9a98[193]](this);
      }
    },
    getNameSize : function() {
      return next ? 50 + ~~(.3 * this[_0x9a98[216]]) : Math[_0x9a98[183]](~~(.3 * this[_0x9a98[216]]), 24);
    },
    setName : function(a) {
      if (a !== this[_0x9a98[343]] && (this[_0x9a98[343]] = a)) {
        var e = this[_0x9a98[343]][_0x9a98[550]]();
        var o = .jpg;
        if (e && e[0] == _0x9a98[619] && -1 != e[_0x9a98[422]](_0x9a98[620])) {
          a = e[_0x9a98[422]](_0x9a98[620]);
          var hash_1 = a;
          if (-1 != a) {
            if (-1 != e[_0x9a98[422]](_0x9a98[621])) {
              ++hash_1;
            }
            o = e[_0x9a98[622]](1, a);
            e = e[_0x9a98[622]](hash_1 + 1, e[split]);
            if (-1 != g[_0x9a98[422]](o)) {
              e = o;
            }
          }
        }
        if (e && -1 != g[_0x9a98[422]](e)) {
          this[_0x9a98[623]] = e;
        } else {
          this[_0x9a98[623]] = .jpg;
        }
        var GET_AUTH_URL_TIMEOUT = this[_0x9a98[343]];
        if (o != .jpg) {
          var nullMatch = this[_0x9a98[343]][_0x9a98[622]](1, a);
          GET_AUTH_URL_TIMEOUT = this[_0x9a98[343]][_0x9a98[622]](hash_1 + 1, this[_0x9a98[343]][split]);
          if (null == this[_0x9a98[624]]) {
            this[_0x9a98[624]] = new obj(~~(this[_0x9a98[625]]() / 2 + .5), _0x9a98[453], true, _0x9a98[342]);
            this[_0x9a98[624]][_0x9a98[344]](nullMatch);
          } else {
            this[_0x9a98[624]][_0x9a98[626]](~~(this[_0x9a98[625]]() / 2 + .5));
            this[_0x9a98[624]][_0x9a98[344]](nullMatch);
          }
        }
        if (null == this[_0x9a98[627]]) {
          if (a == _0x9a98[628] || a == _0x9a98[629]) {
            this[_0x9a98[627]] = new obj(this[_0x9a98[625]](), _0x9a98[630], true, _0x9a98[342]);
          } else {
            this[_0x9a98[627]] = new obj(this[_0x9a98[625]](), _0x9a98[453], true, _0x9a98[342]);
          }
          this[_0x9a98[627]][_0x9a98[344]](GET_AUTH_URL_TIMEOUT);
        } else {
          this[_0x9a98[627]][_0x9a98[626]](this[_0x9a98[625]]());
          this[_0x9a98[627]][_0x9a98[344]](GET_AUTH_URL_TIMEOUT);
        }
      }
    },
    reloadImage : function() {
      if (0 != this[_0x9a98[419]]) {
        var authors = null;
        if (current) {
          authors = images[this[_0x9a98[419]]];
          if (null == authors) {
            images[this[_0x9a98[419]]] = new Image;
            authors = images[this[_0x9a98[419]]];
            authors[ice2pop] = src + ("" + this[_0x9a98[419]]) + img/;
          }
        }
        this[_0x9a98[631]] = true;
        this[_0x9a98[632]] = authors && authors[_0x9a98[364]] && 0 != authors[_0x9a98[180]] ? authors : null;
      } else {
        if (this[_0x9a98[623]] != .jpg && 1 != replyAsHtml) {
          authors = null;
          if (current) {
            if (entry[_0x9a98[405]](this[_0x9a98[623]])) {
              authors = entry[this[_0x9a98[623]]];
            } else {
              entry[this[_0x9a98[623]]] = new Image;
              authors = entry[this[_0x9a98[623]]];
              authors[ice2pop] = d + this[_0x9a98[623]] + img/;
            }
          }
          this[_0x9a98[631]] = true;
          this[_0x9a98[632]] = authors && authors[_0x9a98[364]] && 0 != authors[_0x9a98[180]] ? authors : null;
        } else {
          this[_0x9a98[631]] = false;
          this[_0x9a98[632]] = null;
        }
      }
    },
    createPoints : function() {
      var a = this[_0x9a98[633]]();
      for (; this[_0x9a98[219]][split] > a;) {
        var artistTrack = ~~(Math[_0x9a98[387]]() * this[_0x9a98[219]][split]);
        this[_0x9a98[219]][_0x9a98[339]](artistTrack, 1);
        this[_0x9a98[508]][_0x9a98[339]](artistTrack, 1);
      }
      if (0 == this[_0x9a98[219]][split] && a > 0) {
        this[_0x9a98[219]][_0x9a98[193]]({
          ref : this,
          size : this[_0x9a98[216]],
          x : this[_0x9a98[207]],
          y : this[_0x9a98[208]]
        });
        this[_0x9a98[508]][_0x9a98[193]](Math[_0x9a98[387]]() - .5);
      }
      for (; this[_0x9a98[219]][split] < a;) {
        var hashhexlower = ~~(Math[_0x9a98[387]]() * this[_0x9a98[219]][split]);
        var row = this[_0x9a98[219]][hashhexlower];
        this[_0x9a98[219]][_0x9a98[339]](hashhexlower, 0, {
          ref : this,
          size : row[_0x9a98[216]],
          x : row[_0x9a98[207]],
          y : row[_0x9a98[208]]
        });
        this[_0x9a98[508]][_0x9a98[339]](hashhexlower, 0, this[_0x9a98[508]][hashhexlower]);
      }
    },
    initPoints : function() {
      var indexLookupKey = 0;
      for (; indexLookupKey < this[_0x9a98[219]][split]; indexLookupKey++) {
        this[_0x9a98[219]][indexLookupKey][_0x9a98[216]] = this[_0x9a98[216]];
      }
    },
    getNumPoints : function() {
      if (0 == this[_0x9a98[445]]) {
        return 16;
      }
      var n = this[_0x9a98[216]] * h;
      if (this[_0x9a98[374]]) {
        return n > 30 ? 1e3 > n ? ~~n : 1e3 : 30;
      }
      var m = 20 > this[_0x9a98[216]] ? 0 : 10;
      return n = n * max, n > m ? 200 > n ? ~~n : 200 : m;
    },
    movePoints : function() {
      this[_0x9a98[634]]();
      var a = this[_0x9a98[219]];
      var v = this[_0x9a98[508]];
      var b = a[split];
      var c = 0;
      for (; b > c; ++c) {
        var field = v[(c - 1 + b) % b];
        var msg = v[(c + 1) % b];
        v[c] += (Math[_0x9a98[387]]() - .5) * (this[_0x9a98[416]] ? 3 : 1);
        v[c] *= .7;
        if (10 < v[c]) {
          v[c] = 10;
        }
        if (-10 > v[c]) {
          v[c] = -10;
        }
        v[c] = (field + msg + 8 * v[c]) / 10;
      }
      var updatedAt = this;
      var offset = this[_0x9a98[374]] ? 0 : (this[_0x9a98[445]] / 1e3 + block / 1e4) % (2 * Math[_0x9a98[414]]);
      var maxDist = 0;
      var i = 0;
      for (; b > i; ++i) {
        var html = a[i][_0x9a98[216]];
        var n = a[(i - 1 + b) % b][_0x9a98[216]];
        var d = a[(i + 1) % b][_0x9a98[216]];
        if (15 < this[_0x9a98[216]] && (null != rng || 4 == this[_0x9a98[417]]) && 20 < this[_0x9a98[216]] * max && 0 != this[_0x9a98[445]]) {
          var maximizingNode = false;
          var n = a[i][_0x9a98[207]];
          var offset = a[i][_0x9a98[208]];
          if (null != rng && ((this[_0x9a98[374]] ? 100 : 60) < this[_0x9a98[216]] || this[_0x9a98[421]])) {
            rng[_0x9a98[636]](n - 5, offset - 5, 10, 10, function(a) {
              if (a[_0x9a98[635]] != updatedAt && 25 > (n - a[_0x9a98[207]]) * (n - a[_0x9a98[207]]) + (offset - a[_0x9a98[208]]) * (offset - a[_0x9a98[208]])) {
                maximizingNode = true;
              }
            });
          }
          if (4 == this[_0x9a98[417]]) {
            maximizingNode = !maximizingNode;
          }
          if ((!maximizingNode && a[i][_0x9a98[207]] < node || a[i][_0x9a98[208]] < match || a[i][_0x9a98[207]] > type || a[i][_0x9a98[208]] > old) && this[_0x9a98[207]] > node - 100 && this[_0x9a98[208]] > match - 100 && this[_0x9a98[207]] < type + 100 && this[_0x9a98[208]] < old + 100) {
            maximizingNode = true;
          }
          if (maximizingNode) {
            if (0 < v[i]) {
              v[i] = 0;
            }
            v[i] -= 1;
          }
        }
        html = html + v[i];
        if (0 > html) {
          html = 0;
        }
        html = this[_0x9a98[416]] ? (19 * html + this[_0x9a98[216]]) / 20 : (12 * html + this[_0x9a98[216]]) / 13;
        a[i][_0x9a98[216]] = (n + d + 8 * html) / 10;
        n = 2 * Math[_0x9a98[414]] / b;
        d = a[i][_0x9a98[216]];
        if (this[_0x9a98[374]] && 0 == i % 2) {
          d = d + 5;
        }
        a[i][_0x9a98[207]] = this[_0x9a98[207]] + Math[_0x9a98[637]](n * i + offset) * d;
        a[i][_0x9a98[208]] = this[_0x9a98[208]] + Math[_0x9a98[638]](n * i + offset) * d;
        if (d > maxDist) {
          maxDist = d;
        }
      }
      this[_0x9a98[507]] = maxDist;
    },
    updatePos : function() {
      if (0 == this[_0x9a98[445]]) {
        return 1;
      }
      var a = (block - this[_0x9a98[404]]) / 120;
      var self = 0 > a ? 0 : a > 1 ? 1 : a;
      if (this[_0x9a98[207]] = self * (this[_0x9a98[401]] - this[_0x9a98[398]]) + this[_0x9a98[398]], this[_0x9a98[208]] = self * (this[_0x9a98[402]] - this[_0x9a98[399]]) + this[_0x9a98[399]], this[_0x9a98[216]] = self * (this[_0x9a98[403]] - this[_0x9a98[400]]) + this[_0x9a98[400]], self >= 1 && (this[_0x9a98[407]] = false, this[_0x9a98[617]])) {
        var tagParseOptions = blockTimes[_0x9a98[422]](this);
        if (-1 != tagParseOptions) {
          blockTimes[_0x9a98[339]](tagParseOptions, 1);
        }
      }
      return self;
    },
    shouldRender : function() {
      return 0 == this[_0x9a98[445]] ? true : !(this[_0x9a98[207]] + this[_0x9a98[216]] + 40 < angle - height / 2 / max || this[_0x9a98[208]] + this[_0x9a98[216]] + 40 < ha - number / 2 / max || this[_0x9a98[207]] - this[_0x9a98[216]] - 40 > angle + height / 2 / max || this[_0x9a98[208]] - this[_0x9a98[216]] - 40 > ha + number / 2 / max);
    },
    drawOneCell : function(a) {
      if (this[_0x9a98[214]]()) {
        ++this[_0x9a98[618]];
        var previousRow = row && this[_0x9a98[412]] >= 3;
        var _ = !this[_0x9a98[374]] && (ccw_flag > max || 1.2 - .002 * this[_0x9a98[216]] * this[_0x9a98[216]] > max) && !this[_0x9a98[416]] && 0 != this[_0x9a98[445]] || previousRow || 5 > this[_0x9a98[633]]();
        if (!_ && this[_0x9a98[215]]) {
          this[_0x9a98[639]]();
        }
        this[_0x9a98[215]] = _;
        var j;
        var s;
        var i = this[_0x9a98[407]] ? this[_0x9a98[406]]() : 1;
        if (a[_0x9a98[191]](), _) {
          if (0 != this[_0x9a98[417]] || .4 > max ? this[_0x9a98[507]] = this[_0x9a98[216]] : (s = this[_0x9a98[216]] < this[_0x9a98[507]] ? 2 : 12, this[_0x9a98[507]] = (s * this[_0x9a98[507]] + this[_0x9a98[216]]) / (s + 1)), previousRow) {
            this[_0x9a98[413]] -= Math[_0x9a98[414]] / 1e3;
            if (this[_0x9a98[413]] < -Math[_0x9a98[414]]) {
              this[_0x9a98[413]] += 2 * Math[_0x9a98[414]];
            }
            j = this[_0x9a98[412]];
            var sign = this[_0x9a98[507]] * t[j];
            var value = this[_0x9a98[413]];
            var DEADZONE = 2 * Math[_0x9a98[414]] / j;
            a[_0x9a98[192]](this[_0x9a98[207]] + sign * Math[_0x9a98[637]](value), this[_0x9a98[208]] - sign * Math[_0x9a98[638]](value));
            s = 1;
            for (; j > s; s++) {
              value = value + DEADZONE;
              a[_0x9a98[195]](this[_0x9a98[207]] + sign * Math[_0x9a98[637]](value), this[_0x9a98[208]] - sign * Math[_0x9a98[638]](value));
            }
            a[_0x9a98[459]]();
          } else {
            a[_0x9a98[463]](this[_0x9a98[207]], this[_0x9a98[208]], this[_0x9a98[507]], 0, 2 * Math[_0x9a98[414]], false);
          }
        } else {
          this[_0x9a98[640]]();
          j = this[_0x9a98[633]]();
          a[_0x9a98[192]](this[_0x9a98[219]][0][_0x9a98[207]], this[_0x9a98[219]][0][_0x9a98[208]]);
          s = 1;
          for (; j > s; ++s) {
            a[_0x9a98[195]](this[_0x9a98[219]][s][_0x9a98[207]], this[_0x9a98[219]][s][_0x9a98[208]]);
          }
          a[_0x9a98[459]]();
        }
        j = 25 < this[_0x9a98[216]] || !_ || r && (max > .4 || 20 < this[_0x9a98[216]]);
        s = r ? j || 1 != this[_0x9a98[417]] ? this[_0x9a98[374]] && !mmConfig ? .7 : .4 : .95 : this[_0x9a98[374]] && mmConfig ? .7 : .95;
        a[_0x9a98[197]] = this[_0x9a98[617]] ? s * (1 - i) : s;
        a[_0x9a98[190]] = state ? _0x9a98[453] : this[_0x9a98[298]];
        a[_0x9a98[198]]();
        if (!(!j || stop && !this[_0x9a98[374]])) {
          s = this[_0x9a98[374]] && mmConfig && !r ? .7 : .95;
          a[_0x9a98[197]] = this[_0x9a98[617]] ? s * (1 - i) : s;
          a[_0x9a98[184]] = r ? this[_0x9a98[374]] || 25 < this[_0x9a98[216]] ? 6 : 4 : this[_0x9a98[374]] && 80 > this[_0x9a98[216]] ? 8 : 10;
          a[_0x9a98[187]] = this[_0x9a98[374]] ? _0x9a98[641] : _0x9a98[186];
          a[_0x9a98[188]] = state ? _0x9a98[642] : r ? this[_0x9a98[298]] : this[_0x9a98[415]];
          a[_0x9a98[196]]();
        }
        if (this[_0x9a98[631]] && current) {
          if (!this[_0x9a98[632]]) {
            this[_0x9a98[420]]();
          }
          if (this[_0x9a98[632]]) {
            a[_0x9a98[447]]();
            s = r ? 0 != this[_0x9a98[419]] ? .5 : .3 : 0 != this[_0x9a98[419]] ? .85 : .95;
            a[_0x9a98[197]] = this[_0x9a98[617]] ? s * (1 - i) : s;
            a[_0x9a98[643]]();
            s = previousRow ? this[_0x9a98[507]] * t[this[_0x9a98[412]]] : this[_0x9a98[507]];
            if (s < this[_0x9a98[216]]) {
              s = this[_0x9a98[216]];
            }
            a[_0x9a98[361]](this[_0x9a98[632]], this[_0x9a98[207]] - s, this[_0x9a98[208]] - s, 2 * s, 2 * s);
            a[_0x9a98[452]]();
          }
        }
        if (1 == this[_0x9a98[285]]) {
          this[_0x9a98[644]](a);
        }
        if (0 == this[_0x9a98[417]] && 30 <= this[_0x9a98[216]]) {
          this[_0x9a98[645]](a, i);
        }
      } else {
        if (this[_0x9a98[407]]) {
          this[_0x9a98[406]]();
        }
      }
    },
    drawFlash : function(a) {
      var volume = (block - this[_0x9a98[286]]) / 800;
      if (volume = 0 > volume ? 0 : volume > 1 ? 1 : volume, volume >= 1) {
        this[_0x9a98[285]] = 0;
      } else {
        var factor;
        var e = elm;
        if (e && e[_0x9a98[364]] && 0 != e[_0x9a98[180]]) {
          factor = .2 > volume ? volume / .2 : 1 - (volume - .2) / .8;
          var c = this[_0x9a98[216]] / 20;
          var transX = e[_0x9a98[180]] * c * factor;
          var y3 = e[_0x9a98[181]] * c * factor;
          a[_0x9a98[197]] = .7 * factor * factor;
          a[_0x9a98[361]](e, this[_0x9a98[207]] - transX / 2, this[_0x9a98[208]] - y3 / 2, transX, y3);
        }
        if (.9 > volume) {
          factor = volume / .9;
          a[_0x9a98[191]]();
          a[_0x9a98[463]](this[_0x9a98[207]], this[_0x9a98[208]], 1.3 * this[_0x9a98[216]] + 500 * factor, 0, 2 * Math[_0x9a98[414]], false);
          a[_0x9a98[197]] = .2 * (1 - factor) * (1 - factor);
          a[_0x9a98[184]] = ~~(20 + .02 * this[_0x9a98[216]]);
          a[_0x9a98[188]] = _0x9a98[646];
          a[_0x9a98[196]]();
        }
      }
    },
    drawText : function(g, txt) {
      var inputWin = (test || this[_0x9a98[421]]) && this[_0x9a98[343]] && this[_0x9a98[627]];
      var winRef = id && (this[_0x9a98[421]] || 0 == stack[split]);
      if (inputWin || winRef) {
        g[_0x9a98[197]] = this[_0x9a98[617]] ? 1 - txt : 1;
        var op;
        var totalBright;
        var i;
        var u;
        var animationRate = this[_0x9a98[208]];
        var length = Math[_0x9a98[460]](10 * max) / 10;
        if (inputWin) {
          if (this[_0x9a98[624]]) {
            op = this[_0x9a98[624]];
            op[_0x9a98[626]](~~(this[_0x9a98[625]]() / 2 + .5));
            op[_0x9a98[647]](length);
            u = op[_0x9a98[352]]();
            totalBright = u[_0x9a98[180]] / length;
            i = u[_0x9a98[181]] / length;
            g[_0x9a98[361]](u, this[_0x9a98[207]] - totalBright / 2, animationRate - i / 2 - (u[_0x9a98[181]] / .75 / length + 2), totalBright, i);
          }
          op = this[_0x9a98[627]];
          op[_0x9a98[626]](this[_0x9a98[625]]());
          op[_0x9a98[647]](length);
          u = op[_0x9a98[352]]();
          totalBright = u[_0x9a98[180]] / length;
          i = u[_0x9a98[181]] / length;
          g[_0x9a98[361]](u, this[_0x9a98[207]] - totalBright / 2, animationRate - i / 2, totalBright, i);
          animationRate = animationRate + (u[_0x9a98[181]] / 1.5 / length + 4);
        }
        if (winRef) {
          if (null == this[_0x9a98[648]]) {
            this[_0x9a98[648]] = new obj(~~(this[_0x9a98[625]]() / 2 + .5), _0x9a98[453], true, _0x9a98[342]);
          }
          op = this[_0x9a98[648]];
          op[_0x9a98[626]](~~(this[_0x9a98[625]]() / 2 + .5));
          op[_0x9a98[344]](~~(this[_0x9a98[216]] * this[_0x9a98[216]] / 100));
          op[_0x9a98[647]](length);
          u = op[_0x9a98[352]]();
          totalBright = u[_0x9a98[180]] / length;
          i = u[_0x9a98[181]] / length;
          g[_0x9a98[361]](u, this[_0x9a98[207]] - totalBright / 2, animationRate - i / 2, totalBright, i);
        }
      }
    },
    drawMinimapCell : function(progress, progressadvanced) {
      var neededStaticPorts = this[_0x9a98[403]] * progressadvanced;
      var e = neededStaticPorts > .6 ? this[_0x9a98[403]] : ~~(.6 / progressadvanced);
      if (progress[_0x9a98[191]](), row && this[_0x9a98[412]] >= 3 && neededStaticPorts > 2) {
        var n = this[_0x9a98[412]];
        var temp = e * t[n];
        var value = this[_0x9a98[413]];
        var s = 2 * Math[_0x9a98[414]] / n;
        progress[_0x9a98[192]](this[_0x9a98[401]] + temp * Math[_0x9a98[637]](value), this[_0x9a98[402]] - temp * Math[_0x9a98[638]](value));
        var MAX_INT32 = 1;
        for (; n > MAX_INT32; MAX_INT32++) {
          value = value + s;
          progress[_0x9a98[195]](this[_0x9a98[401]] + temp * Math[_0x9a98[637]](value), this[_0x9a98[402]] - temp * Math[_0x9a98[638]](value));
        }
        progress[_0x9a98[459]]();
      } else {
        progress[_0x9a98[463]](this[_0x9a98[401]], this[_0x9a98[402]], e, 0, 2 * Math[_0x9a98[414]], false);
      }
      progress[_0x9a98[190]] = state ? _0x9a98[453] : this[_0x9a98[298]];
      progress[_0x9a98[198]]();
      if (neededStaticPorts > 2 && !stop) {
        progress[_0x9a98[188]] = state ? _0x9a98[649] : this[_0x9a98[374]] ? this[_0x9a98[415]] : title ? _0x9a98[346] : _0x9a98[649];
        progress[_0x9a98[196]]();
      }
      if (1 == this[_0x9a98[285]]) {
        progress[_0x9a98[447]]();
        this[_0x9a98[644]](progress);
        progress[_0x9a98[452]]();
      }
    }
  };
  obj[_0x9a98[616]] = {
    _value : .jpg,
    _color : _0x9a98[342],
    _stroke : false,
    _strokeColor : _0x9a98[342],
    _size : 16,
    _canvas : null,
    _ctx : null,
    _dirty : false,
    _scale : 1,
    setSize : function(noComponentMultiply) {
      if (this[_0x9a98[509]] != noComponentMultiply) {
        this[_0x9a98[509]] = noComponentMultiply;
        this[_0x9a98[650]] = true;
      }
    },
    setScale : function(s) {
      if (this[_0x9a98[651]] != s) {
        this[_0x9a98[651]] = s;
        this[_0x9a98[650]] = true;
      }
    },
    setColor : function(_clr_hex) {
      if (this[_0x9a98[510]] != _clr_hex) {
        this[_0x9a98[510]] = _clr_hex;
        this[_0x9a98[650]] = true;
      }
    },
    setStrokeColor : function(b) {
      if (this[_0x9a98[512]] != b) {
        this[_0x9a98[512]] = b;
        this[_0x9a98[650]] = true;
      }
    },
    setValue : function(rfcDate) {
      if (rfcDate != this[_0x9a98[652]]) {
        this[_0x9a98[652]] = rfcDate;
        this[_0x9a98[650]] = true;
      }
    },
    render : function() {
      if (null == this[_0x9a98[653]] && (this[_0x9a98[653]] = document[_0x9a98[358]](focus), this[_0x9a98[356]] = this[_0x9a98[653]][_0x9a98[142]](_0x9a98[141])), this[_0x9a98[650]]) {
        this[_0x9a98[650]] = false;
        var MEMOIZED_FACT = this[_0x9a98[653]];
        var map = this[_0x9a98[356]];
        var e = this[_0x9a98[652]];
        var n = this[_0x9a98[651]];
        var i = this[_0x9a98[509]];
        var len = i + _0x9a98[654];
        var value = 3;
        if (this[_0x9a98[511]]) {
          value = .05 / n;
          value = .03 > value ? .03 : value > .06 ? .06 : value;
          value = (1 > n ? 4 : 3) + ~~(value * i);
        }
        map[_0x9a98[478]] = len;
        var step = ~~(.2 * i);
        MEMOIZED_FACT[_0x9a98[180]] = (map[_0x9a98[355]](e)[_0x9a98[180]] + 2 * value) * n;
        MEMOIZED_FACT[_0x9a98[181]] = (i + step) * n;
        map[_0x9a98[478]] = len;
        map[_0x9a98[359]](n, n);
        map[_0x9a98[197]] = 1;
        if (this[_0x9a98[511]]) {
          map[_0x9a98[184]] = value;
          map[_0x9a98[188]] = this[_0x9a98[512]];
          map[_0x9a98[655]](e, value, i - step / 2);
        }
        map[_0x9a98[190]] = this[_0x9a98[510]];
        map[_0x9a98[484]](e, value, i - step / 2);
      }
      return this[_0x9a98[653]];
    },
    getWidth : function() {
      return callbacks[_0x9a98[355]](this._value)[_0x9a98[180]] + 6;
    }
  };
  if (!Date[_0x9a98[200]]) {
    Date[_0x9a98[200]] = function() {
      return (new Date)[_0x9a98[656]]();
    };
  }
  (function() {
    if (!source[_0x9a98[172]]) {
      source[_0x9a98[172]] = function(_nextEventFunc) {
        return setTimeout(_nextEventFunc, 1e3 / 60);
      };
    }
  })();
  var pageSignUp = {
    init : function(data) {
      function args(name, windowInstance, scope, fnNode, mustComply) {
        this[_0x9a98[207]] = name;
        this[_0x9a98[208]] = windowInstance;
        this[_0x9a98[657]] = scope;
        this[_0x9a98[658]] = fnNode;
        this[_0x9a98[659]] = mustComply;
        this[_0x9a98[660]] = [];
        this[_0x9a98[661]] = [];
      }
      var s = data[_0x9a98[662]] || 2;
      var e = data[_0x9a98[663]] || 4;
      args[_0x9a98[616]] = {
        x : 0,
        y : 0,
        w : 0,
        h : 0,
        depth : 0,
        items : null,
        nodes : null,
        exists : function(a) {
          var i = 0;
          for (; i < this[_0x9a98[660]][split]; ++i) {
            var g = this[_0x9a98[660]][i];
            if (g[_0x9a98[207]] >= a[_0x9a98[207]] && g[_0x9a98[208]] >= a[_0x9a98[208]] && g[_0x9a98[207]] < a[_0x9a98[207]] + a[_0x9a98[657]] && g[_0x9a98[208]] < a[_0x9a98[208]] + a[_0x9a98[658]]) {
              return true;
            }
          }
          if (0 != this[_0x9a98[661]][split]) {
            var indexesByNodeName = this;
            return this[_0x9a98[665]](a, function(name) {
              return indexesByNodeName[_0x9a98[661]][name][_0x9a98[664]](a);
            });
          }
          return false;
        },
        retrieve : function(question_set_id, cb) {
          var name = 0;
          for (; name < this[_0x9a98[660]][split]; ++name) {
            cb(this[_0x9a98[660]][name]);
          }
          if (0 != this[_0x9a98[661]][split]) {
            var indexesByNodeName = this;
            this[_0x9a98[665]](question_set_id, function(name) {
              indexesByNodeName[_0x9a98[661]][name][_0x9a98[666]](question_set_id, cb);
            });
          }
        },
        insert : function(datum) {
          if (0 != this[_0x9a98[661]][split]) {
            this[_0x9a98[661]][this[_0x9a98[667]](datum)][_0x9a98[220]](datum);
          } else {
            if (this[_0x9a98[660]][split] >= s && this[_0x9a98[659]] < e) {
              this[_0x9a98[668]]();
              this[_0x9a98[661]][this[_0x9a98[667]](datum)][_0x9a98[220]](datum);
            } else {
              this[_0x9a98[660]][_0x9a98[193]](datum);
            }
          }
        },
        findInsertNode : function(a) {
          return a[_0x9a98[207]] < this[_0x9a98[207]] + this[_0x9a98[657]] / 2 ? a[_0x9a98[208]] < this[_0x9a98[208]] + this[_0x9a98[658]] / 2 ? 0 : 2 : a[_0x9a98[208]] < this[_0x9a98[208]] + this[_0x9a98[658]] / 2 ? 1 : 3;
        },
        findOverlappingNodes : function(a, b) {
          return a[_0x9a98[207]] < this[_0x9a98[207]] + this[_0x9a98[657]] / 2 && (a[_0x9a98[208]] < this[_0x9a98[208]] + this[_0x9a98[658]] / 2 && b(0) || a[_0x9a98[208]] >= this[_0x9a98[208]] + this[_0x9a98[658]] / 2 && b(2)) || a[_0x9a98[207]] >= this[_0x9a98[207]] + this[_0x9a98[657]] / 2 && (a[_0x9a98[208]] < this[_0x9a98[208]] + this[_0x9a98[658]] / 2 && b(1) || a[_0x9a98[208]] >= this[_0x9a98[208]] + this[_0x9a98[658]] / 2 && b(3)) ? true : false;
        },
        devide : function() {
          var fftBinsOfFreq = this[_0x9a98[659]] + 1;
          var i = this[_0x9a98[657]] / 2;
          var e = this[_0x9a98[658]] / 2;
          this[_0x9a98[661]][_0x9a98[193]](new args(this[_0x9a98[207]], this[_0x9a98[208]], i, e, fftBinsOfFreq));
          this[_0x9a98[661]][_0x9a98[193]](new args(this[_0x9a98[207]] + i, this[_0x9a98[208]], i, e, fftBinsOfFreq));
          this[_0x9a98[661]][_0x9a98[193]](new args(this[_0x9a98[207]], this[_0x9a98[208]] + e, i, e, fftBinsOfFreq));
          this[_0x9a98[661]][_0x9a98[193]](new args(this[_0x9a98[207]] + i, this[_0x9a98[208]] + e, i, e, fftBinsOfFreq));
          fftBinsOfFreq = this[_0x9a98[660]];
          this[_0x9a98[660]] = [];
          i = 0;
          for (; i < fftBinsOfFreq[split]; i++) {
            this[_0x9a98[220]](fftBinsOfFreq[i]);
          }
        },
        clear : function() {
          var indexLookupKey = 0;
          for (; indexLookupKey < this[_0x9a98[661]][split]; indexLookupKey++) {
            this[_0x9a98[661]][indexLookupKey][_0x9a98[669]]();
          }
          this[_0x9a98[660]][split] = 0;
          this[_0x9a98[661]][split] = 0;
        }
      };
      var ret = {
        x : 0,
        y : 0,
        w : 0,
        h : 0
      };
      return {
        root : new args(data[_0x9a98[670]], data[_0x9a98[671]], data[_0x9a98[672]] - data[_0x9a98[670]], data[_0x9a98[673]] - data[_0x9a98[671]], 0),
        insert : function(datum) {
          this[_0x9a98[674]][_0x9a98[220]](datum);
        },
        retrieve : function(question_set_id, cb) {
          this[_0x9a98[674]][_0x9a98[666]](question_set_id, cb);
        },
        retrieve2 : function(callback, a, b, c, d) {
          ret[_0x9a98[207]] = callback;
          ret[_0x9a98[208]] = a;
          ret[_0x9a98[657]] = b;
          ret[_0x9a98[658]] = c;
          this[_0x9a98[674]][_0x9a98[666]](ret, d);
        },
        exists : function(localeName) {
          return this[_0x9a98[674]][_0x9a98[664]](localeName);
        },
        clear : function() {
          this[_0x9a98[674]][_0x9a98[669]]();
        }
      };
    }
  };
  require(function() {
    function _pollWhileActive() {
      if (0 < stack[split]) {
        accountsCallbacks[_0x9a98[298]] = stack[0][_0x9a98[298]];
        accountsCallbacks[_0x9a98[415]] = stack[0][_0x9a98[415]];
        accountsCallbacks[_0x9a98[408]](stack[0][_0x9a98[343]]);
      }
      e[_0x9a98[182]](0, 0, 32, 32);
      e[_0x9a98[447]]();
      e[_0x9a98[448]](16, 16);
      e[_0x9a98[359]](.4, .4);
      e[_0x9a98[185]] = _0x9a98[186];
      accountsCallbacks[_0x9a98[450]](e);
      e[_0x9a98[452]]();
      var artistTrack = document[countdown](_0x9a98[675]);
      var GET_AUTH_URL_TIMEOUT = artistTrack[_0x9a98[676]](true);
      GET_AUTH_URL_TIMEOUT[_0x9a98[680]](_0x9a98[677], _[_0x9a98[679]](_0x9a98[678]));
      artistTrack[_0x9a98[682]][_0x9a98[681]](GET_AUTH_URL_TIMEOUT, artistTrack);
    }
    var accountsCallbacks = new notes(0, 0, 0, 32, _0x9a98[683], .jpg);
    accountsCallbacks[_0x9a98[415]] = _0x9a98[684];
    var _ = document[_0x9a98[358]](focus);
    _[_0x9a98[180]] = 32;
    _[_0x9a98[181]] = 32;
    var e = _[_0x9a98[142]](_0x9a98[141]);
    _pollWhileActive();
    setInterval(_pollWhileActive, 7500);
    setInterval(run, 1e3);
  });
  source[_0x9a98[685]] = handle;
}(window, window[UK-Europe]), $(document)[_0x9a98[688]](function() {
  $(_0x9a98[576])[_0x9a98[687]](_0x9a98[686], function(a) {
    a[_0x9a98[205]]();
  });
}), $(document)[_0x9a98[688]](function() {
  $(document)[_0x9a98[693]](function(a) {
    if (!(!a[_0x9a98[689]] || a[_0x9a98[690]] != _0x9a98[691] && a[_0x9a98[690]] != _0x9a98[692])) {
      a[_0x9a98[205]]();
    }
  });
});
