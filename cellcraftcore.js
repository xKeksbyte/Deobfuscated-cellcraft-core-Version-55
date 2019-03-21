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
      if (typeof node_json[undefined] !== nickName) {
        data[undefined] = node_json[undefined];
      }
      if (typeof node_json[sColors] !== nickName) {
        data[sColors] = node_json[sColors];
      }
      if (typeof node_json[sNames] !== nickName) {
        data[sNames] = node_json[sNames];
      }
      if (typeof node_json[sMass] !== nickName) {
        data[sMass] = node_json[sMass];
      }
      if (typeof node_json[sMapBorder] !== nickName) {
        data[sMapBorder] = node_json[sMapBorder];
      }
      if (typeof node_json[sGrid] !== nickName) {
        data[sGrid] = node_json[sGrid];
      }
      if (typeof node_json[sFancyGrid] !== nickName) {
        data[sFancyGrid] = node_json[sFancyGrid];
      }
      if (typeof node_json[sDark] !== nickName) {
        data[sDark] = node_json[sDark];
      }
      if (typeof node_json[sAcid] !== nickName) {
        data[sAcid] = node_json[sAcid];
      }
      if (typeof node_json[sZoom] !== nickName) {
        data[sZoom] = node_json[sZoom];
      }
      if (typeof node_json[sLeaderboard] !== nickName) {
        data[sLeaderboard] = node_json[sLeaderboard];
      }
      if (typeof node_json[sSkins] !== nickName) {
        data[sSkins] = node_json[sSkins];
      }
      if (typeof node_json[sChat] !== nickName) {
        data[sChat] = node_json[sChat];
      }
      if (typeof node_json[sSmoothRender] !== nickName) {
        data[sSmoothRender] = node_json[sSmoothRender];
      }
      if (typeof node_json[sLargeNames] !== nickName) {
        data[sLargeNames] = node_json[sLargeNames];
      }
      if (typeof node_json[sMinimap] !== nickName) {
        data[sMinimap] = node_json[sMinimap];
      }
      if (typeof node_json[sTransparentViruses] !== nickName) {
        data[sTransparentViruses] = node_json[sTransparentViruses];
      }
      if (typeof node_json[sPolygonShapes] !== nickName) {
        data[sPolygonShapes] = node_json[sPolygonShapes];
      }
    }
    a = false;
    if (data[parse]) {
      require(prop)[value](sBubbleCells, data[parse]);
    }
    require(checked)[value](change, data[canvas])[#nick]();
    require(#cSkins)[value](change, data[undefined])[#nick]();
    require(#cColors)[value](change, data[sColors])[#nick]();
    require(#cNames)[value](change, data[sNames])[#nick]();
    require(#cMass)[value](change, data[sMass])[#nick]();
    require(#cMapBorder)[value](change, data[sMapBorder])[#nick]();
    require(#cGrid)[value](change, data[sGrid])[#nick]();
    require(#cFancyGrid)[value](change, data[sFancyGrid])[#nick]();
    require(#cDark)[value](change, data[sDark])[#nick]();
    require(#cAcid)[value](change, data[sAcid])[#nick]();
    require(#cZoom)[value](change, data[sZoom])[#nick]();
    require(#cLeaderboard)[value](change, data[sLeaderboard])[#nick]();
    require(#cChat)[value](change, data[sSkins])[#nick]();
    require(#cMinimap)[value](change, data[sChat])[#nick]();
    require(#cSmoothRender)[value](change, data[sSmoothRender])[#nick]();
    require(#cLargeNames)[value](change, data[sLargeNames])[#nick]();
    require(#cTransparentViruses)[value](change, data[sMinimap])[#nick]();
    require(#cCellBorders)[value](change, data[sTransparentViruses])[#nick]();
    require(#cPolygonShapes)[value](change, data[sPolygonShapes])[#nick]();
    a = true;
    opfilter = canvas = document[countdown](focus);
    callbacks = opfilter[2d](#cBubbleCells);
    matches = document[countdown](getContext);
    deactivatedEntityErr = document[countdown](statsGraph);
    socketHandler = deactivatedEntityErr[2d](#cBubbleCells);
    opfilter[mini-map] = function(a) {
      x = 1 * a[onmouseenter];
      endRange = 1 * a[clientX];
      debug();
    };
    opfilter[clientY] = function(a) {
      x = 1 * a[onmouseenter];
      endRange = 1 * a[clientX];
      debug();
    };
    opfilter[onmousemove] = function(a) {
      x = 1 * a[onmouseenter];
      endRange = 1 * a[clientX];
      debug();
      scrollTo(true, 1);
    };
    if (supportTouch) {
      opfilter[touchstart](oncontextmenu, disable, false);
      opfilter[touchstart](addEventListener, snap, false);
      opfilter[touchstart](touchmove, range, false);
    }
    opfilter[touchend] = function() {
    };
    if (/firefox/i[userAgent](navigator[onmouseup])) {
      document[touchstart](test, onDocumentKeyUp, false);
    } else {
      document[onmousewheel][DOMMouseScroll] = onDocumentKeyUp;
    }
    opfilter[body] = function() {
      hasSongChanged = false;
    };
    opfilter[onfocus] = function() {
      require(onmousedown)[addClass]();
    };
    document[countdown](#emojiDropdown)[onfocus] = function() {
      require(onmousedown)[addClass]();
    };
    document[countdown](onblur)[overlays] = function() {
      hasSongChanged = false;
    };
    document[countdown](onblur)[body] = function() {
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
    source[chtbox] = function(canCreateDiscussions) {
      var dependencies = !hasSongChanged && !isReplayingSong;
      switch(canCreateDiscussions[blur]) {
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
          source[onkeydown] = false;
          break;
        case 13:
          if (hasSongChanged) {
            hasSongChanged = false;
            require(onmousedown)[addClass]();
            document[countdown](onblur)[isSpectating]();
            refresh(document[countdown](onblur)[sBubbleCells]);
            document[countdown](onblur)[sBubbleCells] = .jpg;
          } else {
            if (!_x$2) {
              document[countdown](onblur)[http://cellcraft.io/skins/]();
              hasSongChanged = true;
            }
          }
      }
    };
    source[keyCode] = function(a) {
      switch(a[blur]) {
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
    source[overlays] = function() {
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
    source[onkeyup] = func;
    source[onresize](media);
    setInterval(scrollTo, 40);
    if (existingFilePath) {
      require(requestAnimationFrame)[http://cellcraft.io/?server=](existingFilePath);
    }
    f();
    resolve(require(requestAnimationFrame)[http://cellcraft.io/?server=]());
    if (null == socket && existingFilePath) {
      loop();
    }
    require(#region)[]();
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
    for (; i < events[#overlays][split]; i++) {
      var coord = events[#overlays][i];
      if (0 > c && coord[onmouseenter] < height / 2) {
        c = coord[changedTouches];
        coordtransform[identifier](coord[onmouseenter], coord[clientX]);
        PL$133[reset](ae);
        leftTouchStartPos[identifier](0, 0);
      }
      var d = ~~(height / 7);
      if (coord[onmouseenter] > height - d && coord[clientX] > number - d) {
        scrollTo();
        on(17);
      }
      if (coord[onmouseenter] > height - d && coord[clientX] > number - 2 * d - 10 && coord[clientX] < number - d - 10) {
        scrollTo();
        on(22);
      }
    }
    list = events[copyFrom];
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
      var manipulateInstructions = matches[2d](#cBubbleCells);
      var opacity = matches[touches];
      var last = matches[width];
      if (manipulateInstructions[height](0, 0, opacity, last), 2 < props[split]) {
        var boxes = 200;
        var propName = 0;
        for (; propName < props[split]; propName++) {
          boxes = Math[clearRect](props[propName], boxes);
        }
        manipulateInstructions[max] = 3;
        manipulateInstructions[lineWidth] = lineCap;
        manipulateInstructions[round] = lineCap;
        manipulateInstructions[lineJoin] = strokeStyle;
        manipulateInstructions[#3071A9] = strokeStyle;
        manipulateInstructions[fillStyle]();
        manipulateInstructions[beginPath](0, last - props[0] / boxes * (last - 10) + 10);
        propName = 1;
        for (; propName < props[split]; propName = propName + Math[clearRect](~~(props[split] / opacity), 1)) {
          var alphaS = propName / (props[split] - 1) * opacity;
          var minCircumeference = [];
          var suffix = -20;
          for (; 20 >= suffix; ++suffix) {
            if (!(0 > propName + suffix || propName + suffix >= props[split])) {
              minCircumeference[moveTo](props[propName + suffix]);
            }
          }
          minCircumeference = minCircumeference[push](function(h0, a) {
            return h0 + a;
          }) / minCircumeference[split] / boxes;
          manipulateInstructions[reduce](alphaS, last - minCircumeference * (last - 10) + 10);
        }
        manipulateInstructions[lineTo]();
        manipulateInstructions[stroke] = .5;
        manipulateInstructions[reduce](opacity, last);
        manipulateInstructions[reduce](0, last);
        manipulateInstructions[globalAlpha]();
        manipulateInstructions[stroke] = 1;
      }
      totalSeconds = props[split];
      var c = ((totalSeconds % 60)[fill](0), totalSeconds / 60);
      var l = ((c % 60)[fill](0), (c / 60)[fill](0), Date[toFixed]());
      getEvent((l - fl) / 1e3);
      document[countdown](now)[0] = getEvent((l - fl) / 1e3);
      document[countdown](statsTextTime)[0] = "" + (actual / 100)[fill](0);
      document[countdown](statsTextMass)[0] = "" + axx;
      document[countdown](statsTextFood)[0] = "" + _a1;
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
    a[statsTextCell]();
    var arrayKey = 0;
    for (; arrayKey < a[#overlays][split]; arrayKey++) {
      var PL$89 = a[#overlays][arrayKey];
      if (c == PL$89[changedTouches]) {
        PL$133[identifier](PL$89[onmouseenter], PL$89[clientX]);
        leftTouchStartPos[reset](r);
        leftTouchStartPos[preventDefault](ae);
        x = 3 * leftTouchStartPos[minusEq] + height / 2;
        endRange = 3 * leftTouchStartPos[x] + number / 2;
        debug();
        scrollTo();
      }
    }
    list = a[copyFrom];
  }
  function intercept() {
    var a = ix + 1;
    if (a == key) {
      on(45);
    }
  }
  function range(a) {
    list = a[copyFrom];
    var id = 0;
    for (; id < a[#overlays][split]; id++) {
      var history = a[#overlays][id];
      if (c == history[changedTouches]) {
        c = -1;
        leftTouchStartPos[identifier](0, 0);
        break;
      }
    }
  }
  function onDocumentKeyUp(event) {
    n = n * Math[detail](.9, event[y] / -120 || event[wheelDelta] || 0);
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
      var minX = Number[pow];
      var minY = Number[pow];
      var maxX = Number[POSITIVE_INFINITY];
      var maxY = Number[POSITIVE_INFINITY];
      var newDuration = 0;
      var i = 0;
      for (; i < args[split]; i++) {
        var props = args[i];
        if (props[NEGATIVE_INFINITY]() && !props[shouldRender] && 20 < props[wasSimpleDrawing] * max) {
          newDuration = Math[clearRect](props[wasSimpleDrawing], newDuration);
          minX = Math[size](props[minusEq], minX);
          minY = Math[size](props[x], minY);
          maxX = Math[clearRect](props[minusEq], maxX);
          maxY = Math[clearRect](props[x], maxY);
        }
      }
      rng = pageSignUp[min]({
        minX : minX - (newDuration + 100),
        minY : minY - (newDuration + 100),
        maxX : maxX + (newDuration + 100),
        maxY : maxY + (newDuration + 100),
        maxChildren : 2,
        maxDepth : 4
      });
      i = 0;
      for (; i < args[split]; i++) {
        if (props = args[i], props[NEGATIVE_INFINITY]() && !props[shouldRender] && 20 < props[wasSimpleDrawing] * max) {
          minX = 0;
          for (; minX < props[init][split]; ++minX) {
            minY = props[init][minX][minusEq];
            maxX = props[init][minX][x];
            if (!(angle - height / 2 / max > minY || ha - number / 2 / max > maxX || minY > angle + height / 2 / max || maxX > ha + number / 2 / max)) {
              rng[points](props[init][minX]);
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
      if (require(requestAnimationFrame)[http://cellcraft.io/?server=]() != configuredFilePath) {
        require(requestAnimationFrame)[http://cellcraft.io/?server=](configuredFilePath);
      }
      existingFilePath = source[settings][search] = configuredFilePath;
      require(disabled)[value](insert, false);
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
    fl = Date[toFixed]();
    isReplayingSong = false;
    require(.btn-needs-play)[addClass]();
    f();
  }
  function warnIfMissing() {
    setTimeout(spawn, 300);
    require(#region)[#advert](300);
    require(fadeOut)[addClass]();
    require(.btn-needs-play)[addClass]();
  }
  function add(pendingInterestId) {
    return addPoint(), transform(fadeIn), require(.btn-needs-play)[#connecting](1200), googletag[refresh]()[Aww! Well lets<br>try again!](), false;
  }
  function buildJS(buildingApp) {
    isReplayingSong = true;
    q = null;
    require(fadeOut)[addClass]();
    if (0 == show) {
      require(#region)[#connecting](300);
    } else {
      require(#region)[addClass]();
      isReplayingSong = false;
    }
  }
  function f() {
    if (require(requestAnimationFrame)[http://cellcraft.io/?server=]()) {
      source[settings][search] = require(requestAnimationFrame)[http://cellcraft.io/?server=]();
    } else {
      if (source[settings][search]) {
        require(requestAnimationFrame)[http://cellcraft.io/?server=](source[settings][search]);
      }
    }
    if (require(requestAnimationFrame)[http://cellcraft.io/?server=]()) {
      require(append)[pubads](require(requestAnimationFrame));
    } else {
      require(#locationKnown)[pubads](require(requestAnimationFrame));
    }
  }
  function loop() {
    if (reverseIsSingle && existingFilePath && null != CONNECTION_URL) {
      var src = CONNECTION_URL[4](/\d/g, function(a) {
        return a == #locationUnknown ? 2 : a == 2 ? #locationUnknown : a;
      });
      onload(replace + src);
    }
  }
  function setCircular() {
    $(stop)[style](ws://);
    var width_box = $(.progress-bar2)[progress-percent](.progress-bar1) / 100;
    var i = $(.progress-bar2)[touches]();
    var _ileft = width_box * i;
    var e = 3e3;
    $(stop)[.progress-wrap1]()[-300px]({
      left : _ileft
    }, e);
  }
  function onload(url) {
    if (null != url && null != CONNECTION_URL) {
      if (socket) {
        socket[.progress-wrap2] = null;
        socket[onopen] = null;
        socket[onmessage] = null;
        try {
          socket[onclose]();
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
      jQuery(#dispconn)[]();
      socket = new WebSocket(url);
      socket[close] = arraybuffer;
      socket[.progress-wrap2] = init;
      socket[onopen] = onSocketMessage;
      socket[onmessage] = fn;
      socket[binaryType] = function() {
        console[log]( buffer, arguments);
      };
    }
  }
  function prepareData(a) {
    return new DataView(new ArrayBuffer(a));
  }
  function log(x) {
    socket[visibility](x[visibility]);
  }
  function init() {
    jQuery(#dispconn)[addClass]();
    document[countdown](connecting)[ws://][send] = hidden;
    array[moveTo]({
      name : CellCraft.io,
      color : #0AFF0A,
      message : Welcome, Crafter! Ready to mine some cells?,
      time : Date[toFixed](),
      cache : null
    });
    run();
    var msg;
    ngiScroll_timeout = 2e3;
    duedate = new Date;
    pixelSizeTargetMax = duedate;
    $(#curser)[text](.jpg);
    $(#curser)[addClass]();
    buildJS(true);
    console[log](socket open);
    PL$120 = [];
    msg = prepareData(5);
    msg[setUint8](0, 254);
    msg[setUint32](1, 5, true);
    log(msg);
    msg = prepareData(5);
    msg[setUint8](0, 255);
    msg[setUint32](1, 1332775218, true);
    log(msg);
    runner();
  }
  function fn() {
    console[log](socket close);
    jQuery(#dispconn)[addClass]();
    document[countdown](connecting)[ws://][send] = #ayarlr;
    jQuery(fadeOut)[](400);
    array[moveTo]({
      name : CellCraft.io,
      color : #FF0A0A,
      message : Disconnected from server,
      time : Date[toFixed](),
      cache : null
    });
    run();
    setTimeout(loop, ngiScroll_timeout);
    ngiScroll_timeout = ngiScroll_timeout * 1.5;
  }
  function onSocketMessage(data) {
    initialize(new DataView(data[progress-percent]));
  }
  function parse(text, value) {
    var PL$17;
    var PL$13 = [{
      value : 1e18,
      symbol : E
    }, {
      value : 1e15,
      symbol : P
    }, {
      value : 1e12,
      symbol : T
    }, {
      value : 1e9,
      symbol : G
    }, {
      value : 1e6,
      symbol : M
    }, {
      value : 1e3,
      symbol : k
    }];
    PL$17 = 0;
    for (; PL$17 < PL$13[split]; PL$17++) {
      if (text >= PL$13[PL$17][sBubbleCells]) {
        return (text / PL$13[PL$17][sBubbleCells])[fill](value)[4](/\.?0+$/, .jpg) + PL$13[PL$17][symbol];
      }
    }
    return text;
  }
  function initialize(data) {
    function fixRootEm() {
      var hex;
      var signature = .jpg;
      for (; 0 != (hex = data[getUint16](value, true));) {
        value = value + 2;
        signature = signature + String[fromCharCode](hex);
      }
      return value = value + 2, signature;
    }
    var value = 0;
    var t = false;
    switch(240 == data[getUint8](value) && (value = value + 5), data[getUint8](value++)) {
      case 16:
        draw(data, value);
        break;
      case 17:
        newValue = data[getFloat32](value, true);
        value = value + 4;
        horAdjust = data[getFloat32](value, true);
        value = value + 4;
        w = data[getFloat32](value, true);
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
        timeout = data[getInt16](value, true);
        value = value + 2;
        response = data[getInt16](value, true);
        value = value + 2;
        if (!Ax) {
          Ax = true;
          message = timeout;
          oldValue = response;
        }
        break;
      case 32:
        indexMap[moveTo](data[getUint32](value, true));
        value = value + 4;
        break;
      case 33:
        var id = data[getUint32](value, true);
        value = value + 4;
        var name = data[getUint8](value, true);
        value++;
        var map = cache[id];
        if (map) {
          map[animId] = name;
          map[animStartTime] = block;
        } else {
          signedTransactions[moveTo]({
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
        var v = data[getUint32](value, true);
        value = value + 4;
        fftBinsOfFreq = [];
        previousThumbValue = 0;
        for (; v > previousThumbValue; ++previousThumbValue) {
          var o = data[getUint32](value, true);
          value = value + 4;
          fftBinsOfFreq[moveTo]({
            id : o,
            name : fixRootEm()
          });
        }
        if (0 == Pa) {
          var pH = .jpg;
          if (v >= 10) {
            pH =  or more;
          }
          jQuery(#onlinestat)[html](Players  + v + pH);
        }
        remove();
        break;
      case 50:
        bottom = [];
        var oldTermination = data[getUint32](value, true);
        value = value + 4;
        var previousThumbValue = 0;
        for (; oldTermination > previousThumbValue; ++previousThumbValue) {
          bottom[moveTo](data[getFloat32](value, true));
          value = value + 4;
        }
        remove();
        break;
      case 64:
        node = data[getFloat64](value, true);
        value = value + 8;
        match = data[getFloat64](value, true);
        value = value + 8;
        type = data[getFloat64](value, true);
        value = value + 8;
        old = data[getFloat64](value, true);
        value = value + 8;
        newValue = (type - node) / 2;
        horAdjust = (old - match) / 2;
        w = 1;
        if (0 == stack[split]) {
          angle = newValue;
          ha = horAdjust;
          max = w;
        }
        replyAsHtml = data[getInt16](value, true);
        value = value + 2;
        pdz = data[getInt32](value, true);
        value = value + 4;
        style = merge(pdz);
        break;
      case 80:
        ruleValidationResult = data[getUint16](value, true);
        value = value + 2;
        var f = data[getUint8](value++);
        Lx = !!(1 & f);
        inputWin = !!(2 & f);
        winRef = !!(4 & f);
        if (ruleValidationResult > 0) {
          if (!(inputWin || winRef)) {
            require(#info)[addClass]();
          }
          if (inputWin) {
            require(#info)[]();
            $(#frozenCellOn)[]();
            $(#frozenCellOff)[addClass]();
          } else {
            $(#frozenCellOn)[addClass]();
            $(#frozenCellOff)[]();
          }
          if (winRef) {
            require(#info)[]();
            $(#frozenMOn)[]();
            $(#frozenMOff)[addClass]();
          } else {
            $(#frozenMOn)[addClass]();
            $(#frozenMOff)[]();
          }
        }
        break;
      case 81:
        key = data[getUint8](value, true);
        value = value + 1;
        break;
      case 89:
        var m;
        var d;
        var idx;
        var result = .jpg;
        for (; 0 != (m = data[getUint16](value, true));) {
          value = value + 2;
          result = result + String[fromCharCode](m);
        }
        value = value + 2;
        d = data[getUint8](value++);
        idx = data[getUint16](value, true);
        value = value + 2;
        if (_takingTooLongTimeout) {
          clearTimeout(_takingTooLongTimeout);
        }
        if (result == .jpg) {
          require(#curser)[#advert](600);
        } else {
          require(#curser)[text](result);
          require(#curser)[0px](color, 1 == d ? #00C000 : #FF0000);
          require(#curser)[finish]()[]();
          if (idx > 0) {
            _takingTooLongTimeout = setTimeout(function() {
              $(#curser)[#advert](600);
            }, 1e3 * idx);
          }
        }
        break;
      case 90:
        Pa = 1;
        uptime = data[getFloat64](value, true);
        value = value + 8;
        var delta = Math[server](uptime / 60);
        var deltaX = Math[server](delta / 60);
        var slideWidth = Math[server](deltaX / 24);
        deltaX = deltaX - 24 * slideWidth;
        delta = delta - 24 * slideWidth * 60 - 60 * deltaX;
        if (slideWidth > 0) {
          jQuery(#uptime)[html](:: Uptime  + slideWidth +  day(s)  + deltaX + getElementById + (10 > delta ? floor : .jpg) + delta +  );
        } else {
          jQuery(#uptime)[html](:: Uptime  + deltaX + getElementById + (10 > delta ? floor : .jpg) + delta +  );
        }
        onlinestat = data[getFloat64](value, true);
        value = value + 8;
        jQuery(#onlinestat)[html](Players  + onlinestat);
        onlinestat = data[getFloat64](value, true);
        value = value + 8;
        jQuery(#mapsize)[html](parse(onlinestat, 1));
        onlinestat = data[getFloat64](value, true);
        value = value + 8;
        jQuery(#mapfood)[html](parse(onlinestat, 1));
        var timeSubmittedDiff = new Date - duedate;
        if (jQuery(#latency)[html]( :: Latency  + timeSubmittedDiff + ms), data[byteLength] > 36) {
          onlinestat = data[getFloat64](value, true);
          m = min(onlinestat);
          if (mode != m) {
            mode = m;
            jQuery(#smode)[html](mode);
          }
        }
        break;
      case 91:
        ban = data[getUint8](value, true);
        ngiScroll_timeout = 5e3;
        value = value + 1;
        jQuery(#servermsg)[empty](<div>);
        jQuery(#servermsg)[html](<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>You have been banned!</h2></div>);
        jQuery(#warning)[]();
        setCircular();
        setTimeout($("#warning").hide(), 3e3);
        break;
      case 92:
        connlimit = data[getUint8](value, true);
        ngiScroll_timeout = 5e3;
        value = value + 1;
        jQuery(#servermsg)[empty](<div>);
        jQuery(#servermsg)[html](<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>Too many connections from your IP</h2></div>);
        jQuery(#warning)[]();
        setCircular();
        setTimeout($("#warning").hide(), 3e3);
        break;
      case 93:
        slotslimit = data[getUint8](value, true);
        ngiScroll_timeout = 5e3;
        value = value + 1;
        jQuery(#servermsg)[empty](<div>);
        jQuery(#servermsg)[html](HungerGames);
        jQuery(#warning)[]();
        setCircular();
        setTimeout($("#warning").hide(), 3e3);
        break;
      case 94:
        nickslimit = data[getUint8](value, true);
        jQuery(Zombie FFA)[value](insert, true);
        ngiScroll_timeout = 4e3;
        value = value + 1;
        jQuery(#servermsg)[empty](<div>);
        jQuery(#servermsg)[html](Zombie Team);
        jQuery(#warning)[]();
        setCircular();
        setTimeout($("#warning").hide(), 3e3);
        var autoResumeTimer = setTimeout(function() {
          autoResumeTimer = setInterval(window[search][Experimental Team](), 100);
        }, 3e3);
        break;
      case 99:
        render(data, value);
        break;
      case 100:
        if (window[Rainbow FFA] && window[Rainbow FFA][Debug FFA]) {
          window[Rainbow FFA][Debug FFA]();
          require(#region)[#connecting](100);
        }
    }
  }
  function min(context) {
    switch(context) {
      case 0:
        return Blackhole FFA;
      case 1:
        return #;
      case 2:
        return time;
      case 10:
        return splice;
      case 11:
        return cache;
      case 12:
        return chatCache1;
      case 13:
        return #000000;
      case 14:
        return name;
      case 20:
        return setValue;
      case 21:
        return chatCache2;
      case 22:
        return #444444;
    }
  }
  function render(fn, value) {
    function encode() {
      var i;
      var paginationStr = .jpg;
      for (; 0 != (i = fn[getUint16](value, true));) {
        value = value + 2;
        paginationStr = paginationStr + String[fromCharCode](i);
      }
      return value = value + 2, paginationStr;
    }
    var e = fn[getUint8](value++);
    if (2 & e) {
      value = value + 4;
    }
    if (4 & e) {
      value = value + 8;
    }
    if (8 & e) {
      value = value + 16;
    }
    var longNameFlag = fn[getUint8](value++);
    var shortNameFlag = fn[getUint8](value++);
    var b = fn[getUint8](value++);
    var glyphColor = (longNameFlag << 16 | shortNameFlag << 8 | b).toString(16);
    for (; glyphColor[split] < 6;) {
      glyphColor = floor + glyphColor;
    }
    glyphColor = #F5F6CE + glyphColor;
    array[moveTo]({
      name : encode(),
      color : glyphColor,
      message : encode(),
      time : Date[toFixed](),
      cache : null
    });
    run();
  }
  function run() {
    var n = 12;
    var duration = 0;
    var _ = Date[toFixed]();
    if (array[split] > 0) {
      duration = array[array[split] - 1][: ];
      var i = 0;
      for (; i < array[split]; i++) {
        if (_ >= 12e4 + array[i][: ] || i < array[split] - n) {
          array[emotes/](i, 1);
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
      if (null == src[     ]) {
        src[     ] = {
          chatCache1 : null,
          chatCache2 : null,
          emo : []
        };
        o = true;
      }
      var f = src[     ];
      if (o) {
        f[message] = new obj(15, src[color], true, render);
        f[message][pos](src[setColor]);
        if (title) {
          f[measureText] = new obj(15, emo);
        } else {
          f[measureText] = new obj(15, _ctx);
        }
        var PL$13 = [];
        var start = 2;
        var artistTrack = createElement + src[drawImage][4](emoRegExp, function(iccId, pos) {
          var i = emoMap[iccId];
          var subwiki = subwikiList[i];
          return null == subwiki && (subwikiList[i] = new Image, subwiki = subwikiList[i], subwiki[ice2pop] = scale + i + img/), PL$13[moveTo]({
            pos : pos + start,
            img : subwiki
          }), start = start + (5 - iccId[split]), c1;
        });
        f[measureText][pos](artistTrack);
      }
      var col = f[message][c2]();
      var finger = f[measureText];
      if (title) {
        finger[img](emo);
      } else {
        finger[img](_ctx);
      }
      var p2 = finger[c2]();
      var currentValue = col[touches] + p2[touches];
      if (currentValue > value && (value = currentValue), o) {
        var PL$17 = 0;
        for (; PL$17 < PL$13[split]; PL$17++) {
          PL$13[PL$17][complete] = finger[&amp;][/&/g](artistTrack[#invite-link](0, PL$13[PL$17][complete]))[touches];
        }
        f[/</g] = PL$13;
      }
      stack[moveTo]({
        c1 : col,
        c2 : p2,
        emo : f[/</g]
      });
    }
    if (0 == stack[split]) {
      return e = null, void(sourceNode = null);
    }
    var ratio = Math[clearRect](Math[size](1.8 * number, height, 1e3) / 1e3, .5);
    if (!e) {
      e = document[&lt;](focus);
      sourceNode = e[2d](#cBubbleCells);
    }
    e[touches] = Math[clearRect](Math[size](value * ratio, height - 10), 1);
    e[width] = Math[clearRect](Math[size]((18 * stack[split] + 2) * ratio, number - 50), 1);
    sourceNode[/>/g](ratio, ratio);
    i = 0;
    for (; i < stack[split]; i++) {
      value = stack[i];
      start = value[&gt;][touches];
      duration = e[width] / ratio - 18 * (stack[split] - i);
      sourceNode[stroke] = title ? .75 : .9;
      sourceNode[/"/g](value[&gt;], 0, duration);
      sourceNode[/"/g](value[&quot;], start, duration);
      var PL$17 = 0;
      var PL$13 = value[/</g];
      for (; PL$17 < PL$13[split]; PL$17++) {
        t = PL$13[PL$17];
        var val = t[An unnamed cell];
        if (val && val[isVirus] && 0 != val[touches]) {
          sourceNode[stroke] = title ? .85 : 1;
          sourceNode[/"/g](val, start + 2 + t[complete], duration - 2);
        }
      }
    }
  }
  function normalizeDefault(val) {
    return val = val[4](Wow! , <br>mass gained), val = val[4](Nice! , Grr! Not the<br>small players!), val = val[4](<font style='color:, '>), val = val[4](</font> just<br>gained ,  mass!);
  }
  function extend(a, b) {
    var j = a[setColor];
    var i = b[setColor];
    if (j == .jpg) {
      j = And a other<br>virus gone!;
    }
    if (i == .jpg) {
      i = And a other<br>virus gone!;
    }
    var axx = Math[server](b[wasSimpleDrawing] * b[wasSimpleDrawing] / 100);
    var h = false;
    .jpg;
    if (PL$120[split] > 12 && PL$120[emotes/](0, 1), axx >= 16 && !b[Virus makes<br>your CELLcraft strong!] && j != i && (h = true, j == q ? axx > 1e3 ? transform(Yumm, a virus! + parse(axx, 1) + It's green and<br>gives mass!) : axx > 500 ? transform(random + parse(axx, 1) + It's green and<br>gives mass!) : 100 > axx && transform(Yikes, Carfull!) : axx > 1e3 && j != i && transform(Try splitting your<br>cell (space key)! + a[color] + Try eating a<br>green virus! + normalizeDefault(j) + WOW!  + parse(axx, 1) +  food<br>cells consumed!)), b[Virus makes<br>your CELLcraft strong!] && (h = true, j == q)) {
      var tri = [10 cells<br>consumed!, Yay! ,  cells<br>consumed!, <br> ];
      var j = Math[server](Math[destroy]() * tri[split]);
      transform(tri[j]);
    }
    if (i == q && j != q) {
      transform(ox);
    }
    if (j == q && i != q && a[color] != b[color]) {
      if (15 > axx) {
        ++axx;
        if (45 == axx) {
          transform(oy);
        }
        if (100 == axx) {
          transform(oSize);
        }
        if (axx % 1e3 == 0) {
          transform(nx + parse(axx, 1) + ny);
        }
      } else {
        ++_a1;
        if (10 == _a1) {
          transform(nSize);
        }
        if (_a1 % 100 == 0) {
          transform(updateTime + parse(_a1, 1) + hasOwnProperty);
        }
      }
    }
    if (h) {
      if (PL$120[split] > 12) {
        PL$120[emotes/](0, 1);
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
        dateString = dateString + (PL$120[PL$24][progress-percent] + updatePos);
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
    var resumeJson = markup[getUint16](data, true);
    data = data + 2;
    var signedTransactionsCounter = 0;
    for (; resumeJson > signedTransactionsCounter; ++signedTransactionsCounter) {
      var d = cache[markup[getUint32](data, true)];
      var p = cache[markup[getUint32](data + 4, true)];
      data = data + 8;
      if (d && p) {
        extend(d, p);
        p[shouldUpdate](true);
        p[setName] = p[minusEq];
        p[smallFood] = p[x];
        p[ka] = p[wasSimpleDrawing];
        p[la] = d[minusEq];
        p[shape] = d[x];
        p[rotate] = p[wasSimpleDrawing];
        p[PI] = block;
      }
    }
    signedTransactionsCounter = 0;
    for (;;) {
      var i = markup[getUint32](data, true);
      if (data = data + 4, 0 == i) {
        break;
      }
      ++signedTransactionsCounter;
      var value;
      var index;
      var key;
      key = markup[getInt32](data, true);
      data = data + 4;
      index = markup[getInt32](data, true);
      data = data + 4;
      value = markup[getUint16](data, true);
      data = data + 2;
      var fileStatus = markup[getUint8](data++);
      var field = !!(1 & fileStatus);
      if (field) {
        var filteredErrors = !!(2 & fileStatus);
        var modVal = !!(16 & fileStatus);
        var object = markup[getUint8](data++);
        var tmp_result = object >= 4 ? markup[getUint8](data++) : 0;
        var x = markup[getUint8](data++);
        var y = markup[getUint8](data++);
        var b = markup[getUint8](data++);
        var i = (x << 16 | y << 8 | b).toString(16);
        for (; 6 > i[split];) {
          i = floor + i;
        }
        var newMax = #F5F6CE + i;
        var ret = .jpg;
        if (0 == object) {
          var errors;
          for (; errors = markup[getUint16](data, true), data = data + 2, 0 != errors;) {
            ret = ret + String[fromCharCode](errors);
          }
        }
      }
      var result = null;
      if (cache[colorDimmed](i)) {
        result = cache[i];
        result[isAgitated]();
        result[cellType] = true;
        result[setName] = result[minusEq];
        result[smallFood] = result[x];
        result[ka] = result[wasSimpleDrawing];
        if (field) {
          result[color] = newMax;
          result[flag](ret);
        }
      } else {
        if (!field) {
          newMax = render;
          ret = .jpg;
        }
        result = new notes(i, key, index, value, newMax, ret);
        if (field && 1 == object && 25 >= value) {
          result[imageId] = true;
          parts[moveTo](result);
        } else {
          args[moveTo](result);
        }
        cache[i] = result;
        result[imageId] = key;
        result[ownCell] = index;
        if (row && field && (0 == object || 3 == object)) {
          result[indexOf] = options[i % 100];
          result[nodeId] = (2 * Math[destroy]() - 1) * Math[abs];
        }
      }
      if (result[la] = key, result[shape] = index, result[rotate] = value, result[PI] = block, field) {
        if (result[imageId]) {
          result[abs] = newMax;
        } else {
          i = (~~(x * s) << 16 | ~~(y * s) << 8 | ~~(b * s)).toString(16);
          for (; 6 > i[split];) {
            i = floor + i;
          }
          result[abs] = #F5F6CE + i;
        }
        result[Virus makes<br>your CELLcraft strong!] = filteredErrors;
        result[setUint16] = modVal;
        result[charCodeAt] = object;
        result[readyState] = fileStatus;
        if (1 != object) {
          result[OPEN] = tmp_result;
          result[Skipping draw]();
          if (!(0 != object || result[warn] || -1 == indexMap[scrollTo](i) || -1 != stack[scrollTo](result))) {
            stack[moveTo](result);
            result[warn] = true;
            if (1 == stack[split]) {
              angle = (.1 * angle + result[minusEq]) / 1.1;
              ha = (.1 * ha + result[x]) / 1.1;
            }
          }
        }
      }
    }
    resumeJson = markup[getUint32](data, true);
    data = data + 4;
    signedTransactionsCounter = 0;
    for (; resumeJson > signedTransactionsCounter; signedTransactionsCounter++) {
      var i = markup[getUint32](data, true);
      data = data + 4;
      result = cache[i];
      if (null != result) {
        result[shouldUpdate]();
      }
    }
    resumeJson = signedTransactions[split];
    signedTransactionsCounter = 0;
    for (; resumeJson > signedTransactionsCounter; signedTransactionsCounter++) {
      result = cache[signedTransactions[signedTransactionsCounter][innerWidth]];
      if (null != result) {
        result[animId] = signedTransactions[signedTransactionsCounter][animId];
        result[animStartTime] = block;
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
      if (a || topS * topS + topE * topE >= 64 && !(.01 > Math[innerHeight](descname - suspended) && .01 > Math[innerHeight](start - copy))) {
        descname = suspended;
        start = copy;
        topS = prepareData(13);
        topS[setUint8](0, 16);
        topS[#helloDialog](1, suspended, true);
        topS[#helloDialog](5, copy, true);
        if (b) {
          topS[setUint32](9, b, true);
        } else {
          topS[setUint32](9, 0, true);
        }
        log(topS);
      }
    }
  }
  function runner() {
    if (on(42), half_xgap = Date[toFixed]() - 20500, requestAnimationFrame() && third_hex && null != q) {
      var msg = prepareData(3 + 2 * q[split]);
      msg[setUint8](0, 0);
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
      data[setUint8](i++, 99);
      data[setUint8](i++, 0);
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
      data[setUint8](0, position);
      log(data);
    }
  }
  function func() {
    window[_0x9a98[432]](0, 0);
    height = source[_0x9a98[433]];
    number = source[_0x9a98[434]];
    canvas[touches] = height;
    canvas[width] = number;
    var fake_module = require(_0x9a98[435]);
    fake_module[0px](_0x9a98[436], _0x9a98[437]);
    var f = fake_module[width]();
    if (f > number / 1.1) {
      fake_module[0px](_0x9a98[436], _0x9a98[438] + number / f / 1.1 + _0x9a98[439]);
    } else {
      fake_module[0px](_0x9a98[436], _0x9a98[440]);
    }
    fake_module = require(_0x9a98[441]);
    fake_module[0px](_0x9a98[436], _0x9a98[437]);
    f = fake_module[width]();
    if (f > number / 1.25) {
      fake_module[0px](_0x9a98[436], _0x9a98[438] + number / f / 1.25 + _0x9a98[439]);
    } else {
      fake_module[0px](_0x9a98[436], _0x9a98[440]);
    }
    hide();
  }
  function getEl() {
    var dt;
    return dt = Math[clearRect](number / 1080, height / 1920), isPaused ? dt * n * 1 : dt * n;
  }
  function each() {
    if (0 != stack[split]) {
      var elWidth = 0;
      var i = 0;
      for (; i < stack[split]; i++) {
        elWidth = elWidth + stack[i][wasSimpleDrawing];
      }
      elWidth = Math[detail](Math[size](64 / elWidth, 1), .4) * getEl();
      max = (9 * max + elWidth) / 10;
    }
  }
  function hide() {
    var data;
    var key;
    var options;
    var b = Date[toFixed]();
    if (++p, block = b, 0 < stack[split]) {
      each();
      key = data = 0;
      var stack_i;
      var min = stack[split];
      var i = 0;
      for (; min > i; i++) {
        stack_i = stack[i];
        if (stack_i[cellType]) {
          stack_i[isAgitated]();
        }
        data = data + stack_i[minusEq] / min;
        key = key + stack_i[x] / min;
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
      callbacks[height](0, 0, height, number);
    }
    if (name) {
      callbacks[#3071A9] = title ? _0x9a98[442] : _0x9a98[443];
      callbacks[stroke] = .05;
      callbacks[_0x9a98[444]](0, 0, height, number);
    } else {
      calcStatus();
    }
    args[_0x9a98[446]](function(a, b) {
      return a[wasSimpleDrawing] == b[wasSimpleDrawing] ? a[_0x9a98[445]] - b[_0x9a98[445]] : a[wasSimpleDrawing] - b[wasSimpleDrawing];
    });
    callbacks[_0x9a98[447]]();
    callbacks[_0x9a98[448]](height / 2, number / 2);
    callbacks[/>/g](max, max);
    callbacks[_0x9a98[448]](-angle, -ha);
    callbacks[lineWidth] = lineCap;
    if (!flagQuiet) {
      callbacks[lineJoin] = _0x9a98[449];
      callbacks[max] = 20;
      callbacks[round] = lineCap;
      callbacks[stroke] = 1;
      if (match + 10 > ha - number / 2 / max) {
        callbacks[fillStyle]();
        callbacks[beginPath](node, match);
        callbacks[reduce](type, match);
        callbacks[lineTo]();
      }
      if (angle + height / 2 / max > type - 10) {
        callbacks[fillStyle]();
        callbacks[beginPath](type, match);
        callbacks[reduce](type, old);
        callbacks[lineTo]();
      }
      if (ha + number / 2 / max > old - 10) {
        callbacks[fillStyle]();
        callbacks[beginPath](type, old);
        callbacks[reduce](node, old);
        callbacks[lineTo]();
      }
      if (node + 10 > angle - height / 2 / max) {
        callbacks[fillStyle]();
        callbacks[beginPath](node, old);
        callbacks[reduce](node, match);
        callbacks[lineTo]();
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
      callbacks[lineJoin] = _0x9a98[451];
      callbacks[max] = 10;
      callbacks[round] = lineCap;
      callbacks[stroke] = .5;
      callbacks[fillStyle]();
      i = 0;
      for (; i < stack[split]; i++) {
        callbacks[beginPath](stack[i][minusEq], stack[i][x]);
        callbacks[reduce](message, oldValue);
      }
      callbacks[lineTo]();
      callbacks[_0x9a98[452]]();
    }
    if (callbacks[_0x9a98[452]](), callbacks[stroke] = 1, val && val[touches] && callbacks[/"/g](val, height - val[touches] - 10, 10), e && e[touches] && callbacks[/"/g](e, 10, number - e[width] - 50), key = callback(), actual = Math[clearRect](loc, key), loc = key, 0 != loc && (null == that ? that = new obj(24, title ? _0x9a98[453] : _0x9a98[454]) : that[img](title ? _0x9a98[453] : _0x9a98[454]), that[pos](_0x9a98[455] + ~~(loc / 100)), 
    key = that[c2](), callbacks[stroke] = 1, callbacks[/"/g](key, 15, 15)), (0 < stack[split] || source[onkeydown]) && (!result && (result = new obj(15, _0x9a98[453])), result[pos](_0x9a98[456] + angle[fill](0) + _0x9a98[457] + ha[fill](0)), key = result[c2](), data = key[touches] + 20, options = key[width] + 2, callbacks[fillStyle](), callbacks[beginPath](18, 50), callbacks[_0x9a98[458]](10 + data, 50, 10 + data, 
    50 + options, 8), callbacks[_0x9a98[458]](10 + data, 50 + options, 10, 50 + options, 8), callbacks[_0x9a98[458]](10, 50 + options, 10, 50, 8), callbacks[_0x9a98[458]](10, 50, 10 + data, 50, 8), callbacks[_0x9a98[459]](), callbacks[stroke] = .7, callbacks[#3071A9] = render, callbacks[globalAlpha](), callbacks[stroke] = 1, callbacks[/"/g](key, 20, 51), value && value[touches] && callbacks[/"/g](value, 10, 85)), privacyCheckRequired && !user && deactivatedEntityErr) {
      socketHandler[height](0, 0, 200, 200);
      socketHandler[_0x9a98[447]]();
      data = 200 / Math[clearRect](type - node, old - match);
      socketHandler[/>/g](data, data);
      socketHandler[_0x9a98[448]](-node, -match);
      socketHandler[stroke] = r ? .5 : .9;
      socketHandler[max] = Math[_0x9a98[460]](1 / data);
      min = parts[split];
      i = 0;
      for (; min > i; i++) {
        options = parts[i];
        if (options[cellType] && (options[minusEq] != options[la] || options[x] != options[shape])) {
          options[_0x9a98[461]](socketHandler, data);
        }
      }
      min = args[split];
      i = 0;
      for (; min > i; i++) {
        options = args[i];
        if (3 != options[charCodeAt] && 1 != options[charCodeAt] || options[cellType] && (options[minusEq] != options[la] || options[x] != options[shape])) {
          options[_0x9a98[461]](socketHandler, data);
        }
      }
      socketHandler[_0x9a98[452]]();
      privacyCheckRequired = false;
    }
    indexOf(callbacks);
    forEach(callbacks);
    var func_start_pos = Date[toFixed]() - b;
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
      options[stroke] = 1;
      var j = 0;
      for (; j < list[split]; j++) {
        var a = list[j];
        if (a[changedTouches] == c) {
          options[fillStyle]();
          options[lineJoin] = _0x9a98[462];
          options[max] = 6;
          options[_0x9a98[463]](coordtransform[minusEq], coordtransform[x], 40, 0, 2 * Math[abs], true);
          options[lineTo]();
          options[fillStyle]();
          options[lineJoin] = _0x9a98[462];
          options[max] = 2;
          options[_0x9a98[463]](coordtransform[minusEq], coordtransform[x], 60, 0, 2 * Math[abs], true);
          options[lineTo]();
          options[fillStyle]();
          options[lineJoin] = _0x9a98[462];
          options[_0x9a98[463]](PL$133[minusEq], PL$133[x], 40, 0, 2 * Math[abs], true);
          options[lineTo]();
        } else {
          options[fillStyle]();
          options[lineJoin] = _0x9a98[462];
          options[max] = 6;
          options[_0x9a98[463]](a[onmouseenter], a[clientX], 40, 0, 2 * Math[abs], true);
          options[lineTo]();
        }
      }
      options[_0x9a98[452]]();
    }
  }
  function calcStatus() {
    callbacks[stroke] = 1;
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
        images[index + #locationUnknown] = new Image;
        images[index + #locationUnknown][ice2pop] = src + index + _0x9a98[468];
        images[index + 2] = new Image;
        images[index + 2][ice2pop] = src + index + _0x9a98[469];
        images[index + _0x9a98[470]] = new Image;
        images[index + _0x9a98[470]][ice2pop] = src + index + _0x9a98[471];
        img = images[index + dstWidth];
      }
      cur = a = img && img[isVirus] && 0 != img[touches];
    }
    if (a && cur || (title ? (callbacks[#3071A9] = _0x9a98[472], callbacks[stroke] = .4) : (callbacks[#3071A9] = _0x9a98[443], callbacks[stroke] = 1), callbacks[_0x9a98[444]](0, 0, height, number)), a) {
      if (callbacks[_0x9a98[447]](), cur) {
        var i = 2 * dstWidth;
        callbacks[#3071A9] = fp;
        callbacks[/>/g](i * max, i * max);
        var r = (-angle + aYs) % (img[touches] * i);
        var n = (-ha + aps) % (img[width] * i);
        if (r > 0) {
          r = r - img[touches] * i;
        }
        if (n > 0) {
          n = n - img[width] * i;
        }
        callbacks[_0x9a98[448]](r / i, n / i);
        callbacks[_0x9a98[444]](0, 0, (height / max - r) / i, (number / max - n) / i);
      } else {
        callbacks[max] = 1 / max;
        var j = Math[size](.2 * max, .3);
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
        callbacks[lineJoin] = #F5F6CE + line;
        if (title) {
          callbacks[lineJoin] = _0x9a98[473];
        }
        callbacks[/>/g](max, max);
        r = height / max;
        n = number / max;
        var GROUPSIZE = 50 * dstWidth;
        i = -.5 + (-angle + aYs) % GROUPSIZE;
        for (; r > i; i = i + GROUPSIZE) {
          callbacks[fillStyle]();
          callbacks[beginPath](i, 0);
          callbacks[reduce](i, n);
          callbacks[lineTo]();
        }
        i = -.5 + (-ha + aps) % GROUPSIZE;
        for (; n > i; i = i + GROUPSIZE) {
          callbacks[fillStyle]();
          callbacks[beginPath](0, i);
          callbacks[reduce](r, i);
          callbacks[lineTo]();
        }
      }
      callbacks[_0x9a98[452]]();
    }
    callbacks[stroke] = .8;
  }
  function indexOf(callbacks) {
    if (Yx) {
      callbacks[stroke] = 1;
      var n = ~~(height / 7);
      if (body && body[isVirus] && body[touches]) {
        callbacks[/"/g](body, height - n, number - n, n, n);
      }
      if (element && element[isVirus] && element[touches]) {
        callbacks[/"/g](element, height - n, number - 2 * n - 10, n, n);
      }
    }
  }
  function callback() {
    var resp = 0;
    var i = 0;
    for (; i < stack[split]; i++) {
      resp = resp + stack[i][rotate] * stack[i][rotate];
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
    view[fillStyle]();
    view[beginPath](offset + i, start);
    view[reduce](offset + len - i, start);
    view[_0x9a98[474]](offset + len, start, offset + len, start + i);
    view[reduce](offset + len, start + pos - i);
    view[_0x9a98[474]](offset + len, start + pos, offset + len - i, start + pos);
    view[reduce](offset + i, start + pos);
    view[_0x9a98[474]](offset, start + pos, offset, start + pos - i);
    view[reduce](offset, start + i);
    view[_0x9a98[474]](offset, start, offset + i, start);
    view[_0x9a98[459]]();
    if (item) {
      view[lineTo]();
    }
    if (cmp) {
      view[globalAlpha]();
    }
  }
  function remove() {
    if (!save || null == bottom && 0 == fftBinsOfFreq[split]) {
      val = null;
      battery = null;
    } else {
      if (!val) {
        val = document[&lt;](focus);
        battery = val[2d](#cBubbleCells);
      }
      var me = battery;
      var y = 60;
      y = null == bottom ? y + 24 * fftBinsOfFreq[split] : y + 180;
      var item = Math[size](.22 * number, Math[size](200, .3 * height)) / 200;
      val[touches] = 200 * item;
      val[width] = y * item;
      me[/>/g](item, item);
      if (title) {
        me[stroke] = .8;
      } else {
        me[stroke] = .7;
      }
      me[lineJoin] = render;
      me[#3071A9] = _0x9a98[475];
      if (!title) {
        me[#3071A9] = render;
      }
      me[max] = 2;
      getStart(me, 0, 0, 200, y, 8, true, true);
      me[#3071A9] = _0x9a98[476];
      if (!title) {
        me[#3071A9] = _0x9a98[453];
      }
      var e = _0x9a98[477];
      me[_0x9a98[478]] = _0x9a98[479];
      me[_0x9a98[480]] = _0x9a98[481];
      if (!title) {
        me[_0x9a98[480]] = .jpg;
      }
      me[_0x9a98[482]] = 1;
      me[_0x9a98[483]] = 1;
      me[_0x9a98[484]](e, 100 - me[/&/g](e)[touches] / 2, 40);
      if (!title) {
        me[stroke] = 1;
      }
      var i;
      var options = [_0x9a98[485], _0x9a98[486], _0x9a98[487], _0x9a98[488], _0x9a98[489], _0x9a98[490], _0x9a98[491], _0x9a98[492], _0x9a98[493], _0x9a98[494], _0x9a98[495], _0x9a98[496], _0x9a98[497], _0x9a98[498], _0x9a98[499], _0x9a98[500], _0x9a98[501], _0x9a98[502], _0x9a98[503], _0x9a98[453], _0x9a98[453], _0x9a98[453], _0x9a98[453], _0x9a98[453], _0x9a98[453]];
      if (null == bottom) {
        me[_0x9a98[478]] = _0x9a98[504];
        i = 0;
        for (; i < fftBinsOfFreq[split]; ++i) {
          e = fftBinsOfFreq[i][setColor] || And a other<br>virus gone!;
          if (!test) {
            e = And a other<br>virus gone!;
          }
          if (-1 != indexMap[scrollTo](fftBinsOfFreq[i][_0x9a98[445]])) {
            if (stack[0][setColor]) {
              e = stack[0][setColor];
            }
            me[#3071A9] = _0x9a98[451];
            if (!Wx) {
              e = i + 1 + _0x9a98[505] + e;
            }
            me[_0x9a98[484]](e, 100 - me[/&/g](e)[touches] / 2, 70 + 24 * i);
          } else {
            me[#3071A9] = options[i];
            if (!title) {
              me[#3071A9] = _0x9a98[453];
            }
            if (!Wx) {
              e = i + 1 + _0x9a98[505] + e;
            }
            me[_0x9a98[484]](e, 100 - me[/&/g](e)[touches] / 2, 70 + 24 * i);
          }
        }
      } else {
        i = e = 0;
        for (; i < bottom[split]; ++i) {
          var o = e + bottom[i] * Math[abs] * 2;
          me[#3071A9] = params[i + 1];
          me[fillStyle]();
          me[beginPath](100, 140);
          me[_0x9a98[463]](100, 140, 80, e, o, false);
          me[globalAlpha]();
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
      x = (config[color] + "")[4](/[^0-9a-f]/gi, .jpg);
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
      config[abs] = #F5F6CE + path;
    }
  }
  function updateDevicesAfterDelay() {
    var buildFile;
    var num = args[split];
    var i = 0;
    for (; num > i; i++) {
      buildFile = args[i];
      if ((0 == buildFile[charCodeAt] || 3 == buildFile[charCodeAt]) && buildFile[indexOf] < 3) {
        buildFile[indexOf] = options[buildFile[_0x9a98[445]] % 100];
        buildFile[nodeId] = (2 * Math[destroy]() - 1) * Math[abs];
      }
    }
  }
  function notes(velocity_, pan_, $http, val, count, format) {
    this[_0x9a98[445]] = velocity_;
    this[setName] = this[minusEq] = pan_;
    this[smallFood] = this[x] = $http;
    this[ka] = this[wasSimpleDrawing] = this[_0x9a98[507]] = val;
    this[color] = count;
    this[init] = [];
    this[_0x9a98[508]] = [];
    this[flag](format);
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
      data[undefined] = !state;
      data[sColors] = test;
      data[sNames] = id;
      data[sMass] = !flagQuiet;
      data[sMapBorder] = i;
      data[sGrid] = b;
      data[sFancyGrid] = title;
      data[sDark] = name;
      data[sAcid] = model;
      data[sZoom] = save;
      data[sLeaderboard] = !_x$2;
      data[sSkins] = user;
      data[sSmoothRender] = next;
      data[sLargeNames] = mmConfig;
      data[sTransparentViruses] = row;
      data[sPolygonShapes] = r;
      source[settings][sCellBorders] = JSON[_0x9a98[533]](data);
    }
  }
  function less(v, n) {
    require(#F5F6CE + v)[value](change, n)[#nick]();
    var e = require(#F5F6CE + v)[_0x9a98[607]](_0x9a98[606], document[countdown](sCellBorders));
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
    var position = Date[toFixed]();
    var first = 1e3 / 60;
    return function() {
      source[onresize](media);
      var count = Date[toFixed]();
      var diff = count - position;
      if (diff > .75 * first) {
        position = count - diff % first;
        var zeroSizeMax = Date[toFixed]();
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
  var Yx = _0x9a98[519] in source && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[userAgent](navigator[onmouseup]);
  var Wx = false;
  if (Yx) {
    body = new Image;
    body[ice2pop] = _0x9a98[520];
    element = new Image;
    element[ice2pop] = _0x9a98[521];
  }
  source[onkeydown] = false;
  clearbubble = setInterval(function() {
    var w = Date[toFixed]();
    if (w - half_xgap > 3e5) {
      var tri = [_0x9a98[522], _0x9a98[523], _0x9a98[524], _0x9a98[525], _0x9a98[526]];
      var j = Math[server](Math[destroy]() * tri[split]);
      transform(tri[j]);
    }
  }, 2e4);
  google1 = setInterval(function() {
    if (console[log](_0x9a98[527]), typeof window[_0x9a98[528]] == _0x9a98[529]) {
      var _adjPageUri;
      _adjPageUri = q == .jpg || null == q ? _0x9a98[530] : q;
      window[_0x9a98[528]](visibility, _0x9a98[531], _adjPageUri, CONNECTION_URL, (loc / 100)[fill](0));
    }
  }, 3e4);
  updatestat = setInterval(function() {
    if (null != CONNECTION_URL && (loc && props[moveTo](loc / 100), duedate = new Date, requestAnimationFrame())) {
      var msg = prepareData(5);
      msg[setUint8](0, 90);
      msg[setUint32](1, 2200049715, true);
      log(msg);
    }
    if (PL$120[split] > 0) {
      var x = Date[toFixed]();
      var PL$24 = 0;
      for (; PL$24 < PL$120[split]; PL$24++) {
        if (x >= 6e4 + PL$120[PL$24][_0x9a98[532]]) {
          PL$120[emotes/](PL$24, 1);
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
    sColors : arr[undefined],
    sNames : arr[sColors],
    sMass : arr[sNames],
    sMapBorder : arr[sMass],
    sGrid : arr[sMapBorder],
    sFancyGrid : arr[sGrid],
    sDark : arr[sFancyGrid],
    sAcid : arr[sDark],
    sZoom : arr[sAcid],
    sLeaderboard : arr[sZoom],
    sChat : arr[sLeaderboard],
    sMinimap : arr[sSkins],
    sSmoothRender : arr[sChat],
    sLargeNames : arr[sSmoothRender],
    sTransparentViruses : arr[sLargeNames],
    sCellBorders : arr[sMinimap],
    sPolygonShapes : arr[sTransparentViruses],
    sBubbleCells : arr[sPolygonShapes]
  };
  var a = false;
  var q = null;
  var current = arr[canvas];
  var state = !arr[undefined];
  var test = arr[sColors];
  var id = arr[sNames];
  var flagQuiet = !arr[sMass];
  var i = arr[sMapBorder];
  var b = arr[sGrid];
  var title = arr[sFancyGrid];
  var s = title ? .75 : .9;
  var name = arr[sDark];
  var model = arr[sAcid];
  var save = arr[sZoom];
  var _x$2 = !arr[sLeaderboard];
  var user = arr[sSkins];
  var inverseFlag = arr[sChat];
  var ccw_flag = inverseFlag ? 40 : .4;
  var next = arr[sSmoothRender];
  var mmConfig = arr[sLargeNames];
  var stop = arr[sMinimap];
  var row = arr[sTransparentViruses];
  var r = arr[sPolygonShapes];
  source[_0x9a98[534]] = function(quicktext) {
    if (a) {
      if (quicktext[split] < 1) {
        quicktext =  ;
      }
      q = quicktext;
      var probeManager = [_0x9a98[535], _0x9a98[536], _0x9a98[537], _0x9a98[538], _0x9a98[539], _0x9a98[540], _0x9a98[541], _0x9a98[542], _0x9a98[543], _0x9a98[542], _0x9a98[544], _0x9a98[545], _0x9a98[546], _0x9a98[547], _0x9a98[548], _0x9a98[549]];
      var e = quicktext[_0x9a98[550]]();
      on(42);
      if (probeManager[scrollTo](e) > -1) {
        alert(_0x9a98[551]);
      } else {
        if (CONNECTION_URL == instant) {
          colr(5);
        }
        warnIfMissing();
        loc = 0;
        require(Zombie FFA)[value](insert, false);
        data[parse] = q;
        initSortMenu();
      }
      if (-1 != g[scrollTo](e)) {
        console[log](_0x9a98[552]);
        require(_0x9a98[553])[]();
        require(_0x9a98[553])[0px](_0x9a98[554], _0x9a98[555] + d + e + _0x9a98[556]);
      } else {
        console[log](_0x9a98[557]);
        require(_0x9a98[553])[addClass]();
      }
      show = 1;
    }
  };
  source[_0x9a98[558]] = function(attrs) {
    if (attrs[split] > 0) {
      var value = prepareData(4 + 2 * attrs[split]);
      value[setUint8](0, 100);
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
    require(#region)[#connecting](100);
    require(.btn-needs-play)[addClass]();
  };
  source[_0x9a98[561]] = function() {
    show = 1;
    if (0 == stack[split]) {
      q = null;
      source[onkeydown] = true;
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
      require(onmousedown)[addClass]();
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
        socketHandler[height](0, 0, 200, 200);
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
    less(_0x9a98[594], arr[undefined]);
    less(_0x9a98[595], arr[sColors]);
    less(_0x9a98[596], arr[sNames]);
    less(_0x9a98[597], arr[sMass]);
    less(_0x9a98[570], arr[sMapBorder]);
    less(_0x9a98[590], arr[sGrid]);
    less(_0x9a98[598], arr[sFancyGrid]);
    less(_0x9a98[599], arr[sDark]);
    less(_0x9a98[600], arr[sAcid]);
    less(_0x9a98[601], arr[sZoom]);
    less(_0x9a98[602], arr[sLeaderboard]);
    less(_0x9a98[603], arr[sSkins]);
    less(_0x9a98[591], arr[sChat]);
    less(_0x9a98[592], arr[sSmoothRender]);
    less(_0x9a98[587], arr[sLargeNames]);
    less(_0x9a98[588], arr[sMinimap]);
    less(_0x9a98[604], arr[sTransparentViruses]);
    less(_0x9a98[605], arr[sPolygonShapes]);
    a = true;
    initSortMenu();
  };
  if (null != source[settings]) {
    if (null == source[settings][_0x9a98[609]]) {
      source[settings][_0x9a98[609]] = ~~(100 * Math[destroy]());
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
      if (this[imageId]) {
        var length = parts[split];
        i = 0;
        for (; length > i; i++) {
          if (parts[i] == this) {
            parts[emotes/](i, 1);
            break;
          }
        }
      } else {
        length = args[split];
        i = 0;
        for (; length > i; i++) {
          if (args[i] == this) {
            args[emotes/](i, 1);
            break;
          }
        }
      }
      delete cache[this[_0x9a98[445]]];
      if (this[warn]) {
        i = stack[scrollTo](this);
        if (-1 != i) {
          gx = true;
          stack[emotes/](i, 1);
        }
      }
      i = indexMap[scrollTo](this[_0x9a98[445]]);
      if (-1 != i) {
        indexMap[emotes/](i, 1);
      }
      this[_0x9a98[617]] = true;
      this[cellType] = true;
      if (onlyCss && 0 < this[_0x9a98[618]]) {
        blockTimes[moveTo](this);
      }
    },
    getNameSize : function() {
      return next ? 50 + ~~(.3 * this[wasSimpleDrawing]) : Math[clearRect](~~(.3 * this[wasSimpleDrawing]), 24);
    },
    setName : function(a) {
      if (a !== this[setColor] && (this[setColor] = a)) {
        var e = this[setColor][_0x9a98[550]]();
        var o = .jpg;
        if (e && e[0] == _0x9a98[619] && -1 != e[scrollTo](_0x9a98[620])) {
          a = e[scrollTo](_0x9a98[620]);
          var hash_1 = a;
          if (-1 != a) {
            if (-1 != e[scrollTo](_0x9a98[621])) {
              ++hash_1;
            }
            o = e[_0x9a98[622]](1, a);
            e = e[_0x9a98[622]](hash_1 + 1, e[split]);
            if (-1 != g[scrollTo](o)) {
              e = o;
            }
          }
        }
        if (e && -1 != g[scrollTo](e)) {
          this[_0x9a98[623]] = e;
        } else {
          this[_0x9a98[623]] = .jpg;
        }
        var GET_AUTH_URL_TIMEOUT = this[setColor];
        if (o != .jpg) {
          var nullMatch = this[setColor][_0x9a98[622]](1, a);
          GET_AUTH_URL_TIMEOUT = this[setColor][_0x9a98[622]](hash_1 + 1, this[setColor][split]);
          if (null == this[_0x9a98[624]]) {
            this[_0x9a98[624]] = new obj(~~(this[_0x9a98[625]]() / 2 + .5), _0x9a98[453], true, render);
            this[_0x9a98[624]][pos](nullMatch);
          } else {
            this[_0x9a98[624]][_0x9a98[626]](~~(this[_0x9a98[625]]() / 2 + .5));
            this[_0x9a98[624]][pos](nullMatch);
          }
        }
        if (null == this[_0x9a98[627]]) {
          if (a == _0x9a98[628] || a == _0x9a98[629]) {
            this[_0x9a98[627]] = new obj(this[_0x9a98[625]](), _0x9a98[630], true, render);
          } else {
            this[_0x9a98[627]] = new obj(this[_0x9a98[625]](), _0x9a98[453], true, render);
          }
          this[_0x9a98[627]][pos](GET_AUTH_URL_TIMEOUT);
        } else {
          this[_0x9a98[627]][_0x9a98[626]](this[_0x9a98[625]]());
          this[_0x9a98[627]][pos](GET_AUTH_URL_TIMEOUT);
        }
      }
    },
    reloadImage : function() {
      if (0 != this[OPEN]) {
        var authors = null;
        if (current) {
          authors = images[this[OPEN]];
          if (null == authors) {
            images[this[OPEN]] = new Image;
            authors = images[this[OPEN]];
            authors[ice2pop] = src + ("" + this[OPEN]) + img/;
          }
        }
        this[_0x9a98[631]] = true;
        this[_0x9a98[632]] = authors && authors[isVirus] && 0 != authors[touches] ? authors : null;
      } else {
        if (this[_0x9a98[623]] != .jpg && 1 != replyAsHtml) {
          authors = null;
          if (current) {
            if (entry[colorDimmed](this[_0x9a98[623]])) {
              authors = entry[this[_0x9a98[623]]];
            } else {
              entry[this[_0x9a98[623]]] = new Image;
              authors = entry[this[_0x9a98[623]]];
              authors[ice2pop] = d + this[_0x9a98[623]] + img/;
            }
          }
          this[_0x9a98[631]] = true;
          this[_0x9a98[632]] = authors && authors[isVirus] && 0 != authors[touches] ? authors : null;
        } else {
          this[_0x9a98[631]] = false;
          this[_0x9a98[632]] = null;
        }
      }
    },
    createPoints : function() {
      var a = this[_0x9a98[633]]();
      for (; this[init][split] > a;) {
        var artistTrack = ~~(Math[destroy]() * this[init][split]);
        this[init][emotes/](artistTrack, 1);
        this[_0x9a98[508]][emotes/](artistTrack, 1);
      }
      if (0 == this[init][split] && a > 0) {
        this[init][moveTo]({
          ref : this,
          size : this[wasSimpleDrawing],
          x : this[minusEq],
          y : this[x]
        });
        this[_0x9a98[508]][moveTo](Math[destroy]() - .5);
      }
      for (; this[init][split] < a;) {
        var hashhexlower = ~~(Math[destroy]() * this[init][split]);
        var row = this[init][hashhexlower];
        this[init][emotes/](hashhexlower, 0, {
          ref : this,
          size : row[wasSimpleDrawing],
          x : row[minusEq],
          y : row[x]
        });
        this[_0x9a98[508]][emotes/](hashhexlower, 0, this[_0x9a98[508]][hashhexlower]);
      }
    },
    initPoints : function() {
      var indexLookupKey = 0;
      for (; indexLookupKey < this[init][split]; indexLookupKey++) {
        this[init][indexLookupKey][wasSimpleDrawing] = this[wasSimpleDrawing];
      }
    },
    getNumPoints : function() {
      if (0 == this[_0x9a98[445]]) {
        return 16;
      }
      var n = this[wasSimpleDrawing] * h;
      if (this[Virus makes<br>your CELLcraft strong!]) {
        return n > 30 ? 1e3 > n ? ~~n : 1e3 : 30;
      }
      var m = 20 > this[wasSimpleDrawing] ? 0 : 10;
      return n = n * max, n > m ? 200 > n ? ~~n : 200 : m;
    },
    movePoints : function() {
      this[_0x9a98[634]]();
      var a = this[init];
      var v = this[_0x9a98[508]];
      var b = a[split];
      var c = 0;
      for (; b > c; ++c) {
        var field = v[(c - 1 + b) % b];
        var msg = v[(c + 1) % b];
        v[c] += (Math[destroy]() - .5) * (this[setUint16] ? 3 : 1);
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
      var offset = this[Virus makes<br>your CELLcraft strong!] ? 0 : (this[_0x9a98[445]] / 1e3 + block / 1e4) % (2 * Math[abs]);
      var maxDist = 0;
      var i = 0;
      for (; b > i; ++i) {
        var html = a[i][wasSimpleDrawing];
        var n = a[(i - 1 + b) % b][wasSimpleDrawing];
        var d = a[(i + 1) % b][wasSimpleDrawing];
        if (15 < this[wasSimpleDrawing] && (null != rng || 4 == this[charCodeAt]) && 20 < this[wasSimpleDrawing] * max && 0 != this[_0x9a98[445]]) {
          var maximizingNode = false;
          var n = a[i][minusEq];
          var offset = a[i][x];
          if (null != rng && ((this[Virus makes<br>your CELLcraft strong!] ? 100 : 60) < this[wasSimpleDrawing] || this[warn])) {
            rng[_0x9a98[636]](n - 5, offset - 5, 10, 10, function(a) {
              if (a[_0x9a98[635]] != updatedAt && 25 > (n - a[minusEq]) * (n - a[minusEq]) + (offset - a[x]) * (offset - a[x])) {
                maximizingNode = true;
              }
            });
          }
          if (4 == this[charCodeAt]) {
            maximizingNode = !maximizingNode;
          }
          if ((!maximizingNode && a[i][minusEq] < node || a[i][x] < match || a[i][minusEq] > type || a[i][x] > old) && this[minusEq] > node - 100 && this[x] > match - 100 && this[minusEq] < type + 100 && this[x] < old + 100) {
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
        html = this[setUint16] ? (19 * html + this[wasSimpleDrawing]) / 20 : (12 * html + this[wasSimpleDrawing]) / 13;
        a[i][wasSimpleDrawing] = (n + d + 8 * html) / 10;
        n = 2 * Math[abs] / b;
        d = a[i][wasSimpleDrawing];
        if (this[Virus makes<br>your CELLcraft strong!] && 0 == i % 2) {
          d = d + 5;
        }
        a[i][minusEq] = this[minusEq] + Math[_0x9a98[637]](n * i + offset) * d;
        a[i][x] = this[x] + Math[_0x9a98[638]](n * i + offset) * d;
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
      var a = (block - this[PI]) / 120;
      var self = 0 > a ? 0 : a > 1 ? 1 : a;
      if (this[minusEq] = self * (this[la] - this[setName]) + this[setName], this[x] = self * (this[shape] - this[smallFood]) + this[smallFood], this[wasSimpleDrawing] = self * (this[rotate] - this[ka]) + this[ka], self >= 1 && (this[cellType] = false, this[_0x9a98[617]])) {
        var tagParseOptions = blockTimes[scrollTo](this);
        if (-1 != tagParseOptions) {
          blockTimes[emotes/](tagParseOptions, 1);
        }
      }
      return self;
    },
    shouldRender : function() {
      return 0 == this[_0x9a98[445]] ? true : !(this[minusEq] + this[wasSimpleDrawing] + 40 < angle - height / 2 / max || this[x] + this[wasSimpleDrawing] + 40 < ha - number / 2 / max || this[minusEq] - this[wasSimpleDrawing] - 40 > angle + height / 2 / max || this[x] - this[wasSimpleDrawing] - 40 > ha + number / 2 / max);
    },
    drawOneCell : function(a) {
      if (this[NEGATIVE_INFINITY]()) {
        ++this[_0x9a98[618]];
        var previousRow = row && this[indexOf] >= 3;
        var _ = !this[Virus makes<br>your CELLcraft strong!] && (ccw_flag > max || 1.2 - .002 * this[wasSimpleDrawing] * this[wasSimpleDrawing] > max) && !this[setUint16] && 0 != this[_0x9a98[445]] || previousRow || 5 > this[_0x9a98[633]]();
        if (!_ && this[shouldRender]) {
          this[_0x9a98[639]]();
        }
        this[shouldRender] = _;
        var j;
        var s;
        var i = this[cellType] ? this[isAgitated]() : 1;
        if (a[fillStyle](), _) {
          if (0 != this[charCodeAt] || .4 > max ? this[_0x9a98[507]] = this[wasSimpleDrawing] : (s = this[wasSimpleDrawing] < this[_0x9a98[507]] ? 2 : 12, this[_0x9a98[507]] = (s * this[_0x9a98[507]] + this[wasSimpleDrawing]) / (s + 1)), previousRow) {
            this[nodeId] -= Math[abs] / 1e3;
            if (this[nodeId] < -Math[abs]) {
              this[nodeId] += 2 * Math[abs];
            }
            j = this[indexOf];
            var sign = this[_0x9a98[507]] * t[j];
            var value = this[nodeId];
            var DEADZONE = 2 * Math[abs] / j;
            a[beginPath](this[minusEq] + sign * Math[_0x9a98[637]](value), this[x] - sign * Math[_0x9a98[638]](value));
            s = 1;
            for (; j > s; s++) {
              value = value + DEADZONE;
              a[reduce](this[minusEq] + sign * Math[_0x9a98[637]](value), this[x] - sign * Math[_0x9a98[638]](value));
            }
            a[_0x9a98[459]]();
          } else {
            a[_0x9a98[463]](this[minusEq], this[x], this[_0x9a98[507]], 0, 2 * Math[abs], false);
          }
        } else {
          this[_0x9a98[640]]();
          j = this[_0x9a98[633]]();
          a[beginPath](this[init][0][minusEq], this[init][0][x]);
          s = 1;
          for (; j > s; ++s) {
            a[reduce](this[init][s][minusEq], this[init][s][x]);
          }
          a[_0x9a98[459]]();
        }
        j = 25 < this[wasSimpleDrawing] || !_ || r && (max > .4 || 20 < this[wasSimpleDrawing]);
        s = r ? j || 1 != this[charCodeAt] ? this[Virus makes<br>your CELLcraft strong!] && !mmConfig ? .7 : .4 : .95 : this[Virus makes<br>your CELLcraft strong!] && mmConfig ? .7 : .95;
        a[stroke] = this[_0x9a98[617]] ? s * (1 - i) : s;
        a[#3071A9] = state ? _0x9a98[453] : this[color];
        a[globalAlpha]();
        if (!(!j || stop && !this[Virus makes<br>your CELLcraft strong!])) {
          s = this[Virus makes<br>your CELLcraft strong!] && mmConfig && !r ? .7 : .95;
          a[stroke] = this[_0x9a98[617]] ? s * (1 - i) : s;
          a[max] = r ? this[Virus makes<br>your CELLcraft strong!] || 25 < this[wasSimpleDrawing] ? 6 : 4 : this[Virus makes<br>your CELLcraft strong!] && 80 > this[wasSimpleDrawing] ? 8 : 10;
          a[round] = this[Virus makes<br>your CELLcraft strong!] ? _0x9a98[641] : lineCap;
          a[lineJoin] = state ? _0x9a98[642] : r ? this[color] : this[abs];
          a[lineTo]();
        }
        if (this[_0x9a98[631]] && current) {
          if (!this[_0x9a98[632]]) {
            this[Skipping draw]();
          }
          if (this[_0x9a98[632]]) {
            a[_0x9a98[447]]();
            s = r ? 0 != this[OPEN] ? .5 : .3 : 0 != this[OPEN] ? .85 : .95;
            a[stroke] = this[_0x9a98[617]] ? s * (1 - i) : s;
            a[_0x9a98[643]]();
            s = previousRow ? this[_0x9a98[507]] * t[this[indexOf]] : this[_0x9a98[507]];
            if (s < this[wasSimpleDrawing]) {
              s = this[wasSimpleDrawing];
            }
            a[/"/g](this[_0x9a98[632]], this[minusEq] - s, this[x] - s, 2 * s, 2 * s);
            a[_0x9a98[452]]();
          }
        }
        if (1 == this[animId]) {
          this[_0x9a98[644]](a);
        }
        if (0 == this[charCodeAt] && 30 <= this[wasSimpleDrawing]) {
          this[_0x9a98[645]](a, i);
        }
      } else {
        if (this[cellType]) {
          this[isAgitated]();
        }
      }
    },
    drawFlash : function(a) {
      var volume = (block - this[animStartTime]) / 800;
      if (volume = 0 > volume ? 0 : volume > 1 ? 1 : volume, volume >= 1) {
        this[animId] = 0;
      } else {
        var factor;
        var e = elm;
        if (e && e[isVirus] && 0 != e[touches]) {
          factor = .2 > volume ? volume / .2 : 1 - (volume - .2) / .8;
          var c = this[wasSimpleDrawing] / 20;
          var transX = e[touches] * c * factor;
          var y3 = e[width] * c * factor;
          a[stroke] = .7 * factor * factor;
          a[/"/g](e, this[minusEq] - transX / 2, this[x] - y3 / 2, transX, y3);
        }
        if (.9 > volume) {
          factor = volume / .9;
          a[fillStyle]();
          a[_0x9a98[463]](this[minusEq], this[x], 1.3 * this[wasSimpleDrawing] + 500 * factor, 0, 2 * Math[abs], false);
          a[stroke] = .2 * (1 - factor) * (1 - factor);
          a[max] = ~~(20 + .02 * this[wasSimpleDrawing]);
          a[lineJoin] = _0x9a98[646];
          a[lineTo]();
        }
      }
    },
    drawText : function(g, txt) {
      var inputWin = (test || this[warn]) && this[setColor] && this[_0x9a98[627]];
      var winRef = id && (this[warn] || 0 == stack[split]);
      if (inputWin || winRef) {
        g[stroke] = this[_0x9a98[617]] ? 1 - txt : 1;
        var op;
        var totalBright;
        var i;
        var u;
        var animationRate = this[x];
        var length = Math[_0x9a98[460]](10 * max) / 10;
        if (inputWin) {
          if (this[_0x9a98[624]]) {
            op = this[_0x9a98[624]];
            op[_0x9a98[626]](~~(this[_0x9a98[625]]() / 2 + .5));
            op[_0x9a98[647]](length);
            u = op[c2]();
            totalBright = u[touches] / length;
            i = u[width] / length;
            g[/"/g](u, this[minusEq] - totalBright / 2, animationRate - i / 2 - (u[width] / .75 / length + 2), totalBright, i);
          }
          op = this[_0x9a98[627]];
          op[_0x9a98[626]](this[_0x9a98[625]]());
          op[_0x9a98[647]](length);
          u = op[c2]();
          totalBright = u[touches] / length;
          i = u[width] / length;
          g[/"/g](u, this[minusEq] - totalBright / 2, animationRate - i / 2, totalBright, i);
          animationRate = animationRate + (u[width] / 1.5 / length + 4);
        }
        if (winRef) {
          if (null == this[_0x9a98[648]]) {
            this[_0x9a98[648]] = new obj(~~(this[_0x9a98[625]]() / 2 + .5), _0x9a98[453], true, render);
          }
          op = this[_0x9a98[648]];
          op[_0x9a98[626]](~~(this[_0x9a98[625]]() / 2 + .5));
          op[pos](~~(this[wasSimpleDrawing] * this[wasSimpleDrawing] / 100));
          op[_0x9a98[647]](length);
          u = op[c2]();
          totalBright = u[touches] / length;
          i = u[width] / length;
          g[/"/g](u, this[minusEq] - totalBright / 2, animationRate - i / 2, totalBright, i);
        }
      }
    },
    drawMinimapCell : function(progress, progressadvanced) {
      var neededStaticPorts = this[rotate] * progressadvanced;
      var e = neededStaticPorts > .6 ? this[rotate] : ~~(.6 / progressadvanced);
      if (progress[fillStyle](), row && this[indexOf] >= 3 && neededStaticPorts > 2) {
        var n = this[indexOf];
        var temp = e * t[n];
        var value = this[nodeId];
        var s = 2 * Math[abs] / n;
        progress[beginPath](this[la] + temp * Math[_0x9a98[637]](value), this[shape] - temp * Math[_0x9a98[638]](value));
        var MAX_INT32 = 1;
        for (; n > MAX_INT32; MAX_INT32++) {
          value = value + s;
          progress[reduce](this[la] + temp * Math[_0x9a98[637]](value), this[shape] - temp * Math[_0x9a98[638]](value));
        }
        progress[_0x9a98[459]]();
      } else {
        progress[_0x9a98[463]](this[la], this[shape], e, 0, 2 * Math[abs], false);
      }
      progress[#3071A9] = state ? _0x9a98[453] : this[color];
      progress[globalAlpha]();
      if (neededStaticPorts > 2 && !stop) {
        progress[lineJoin] = state ? _0x9a98[649] : this[Virus makes<br>your CELLcraft strong!] ? this[abs] : title ? _ctx : _0x9a98[649];
        progress[lineTo]();
      }
      if (1 == this[animId]) {
        progress[_0x9a98[447]]();
        this[_0x9a98[644]](progress);
        progress[_0x9a98[452]]();
      }
    }
  };
  obj[_0x9a98[616]] = {
    _value : .jpg,
    _color : render,
    _stroke : false,
    _strokeColor : render,
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
      if (null == this[_0x9a98[653]] && (this[_0x9a98[653]] = document[&lt;](focus), this[&amp;] = this[_0x9a98[653]][2d](#cBubbleCells)), this[_0x9a98[650]]) {
        this[_0x9a98[650]] = false;
        var MEMOIZED_FACT = this[_0x9a98[653]];
        var map = this[&amp;];
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
        MEMOIZED_FACT[touches] = (map[/&/g](e)[touches] + 2 * value) * n;
        MEMOIZED_FACT[width] = (i + step) * n;
        map[_0x9a98[478]] = len;
        map[/>/g](n, n);
        map[stroke] = 1;
        if (this[_0x9a98[511]]) {
          map[max] = value;
          map[lineJoin] = this[_0x9a98[512]];
          map[_0x9a98[655]](e, value, i - step / 2);
        }
        map[#3071A9] = this[_0x9a98[510]];
        map[_0x9a98[484]](e, value, i - step / 2);
      }
      return this[_0x9a98[653]];
    },
    getWidth : function() {
      return callbacks[/&/g](this._value)[touches] + 6;
    }
  };
  if (!Date[toFixed]) {
    Date[toFixed] = function() {
      return (new Date)[_0x9a98[656]]();
    };
  }
  (function() {
    if (!source[onresize]) {
      source[onresize] = function(_nextEventFunc) {
        return setTimeout(_nextEventFunc, 1e3 / 60);
      };
    }
  })();
  var pageSignUp = {
    init : function(data) {
      function args(name, windowInstance, scope, fnNode, mustComply) {
        this[minusEq] = name;
        this[x] = windowInstance;
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
            if (g[minusEq] >= a[minusEq] && g[x] >= a[x] && g[minusEq] < a[minusEq] + a[_0x9a98[657]] && g[x] < a[x] + a[_0x9a98[658]]) {
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
            this[_0x9a98[661]][this[_0x9a98[667]](datum)][points](datum);
          } else {
            if (this[_0x9a98[660]][split] >= s && this[_0x9a98[659]] < e) {
              this[_0x9a98[668]]();
              this[_0x9a98[661]][this[_0x9a98[667]](datum)][points](datum);
            } else {
              this[_0x9a98[660]][moveTo](datum);
            }
          }
        },
        findInsertNode : function(a) {
          return a[minusEq] < this[minusEq] + this[_0x9a98[657]] / 2 ? a[x] < this[x] + this[_0x9a98[658]] / 2 ? 0 : 2 : a[x] < this[x] + this[_0x9a98[658]] / 2 ? 1 : 3;
        },
        findOverlappingNodes : function(a, b) {
          return a[minusEq] < this[minusEq] + this[_0x9a98[657]] / 2 && (a[x] < this[x] + this[_0x9a98[658]] / 2 && b(0) || a[x] >= this[x] + this[_0x9a98[658]] / 2 && b(2)) || a[minusEq] >= this[minusEq] + this[_0x9a98[657]] / 2 && (a[x] < this[x] + this[_0x9a98[658]] / 2 && b(1) || a[x] >= this[x] + this[_0x9a98[658]] / 2 && b(3)) ? true : false;
        },
        devide : function() {
          var fftBinsOfFreq = this[_0x9a98[659]] + 1;
          var i = this[_0x9a98[657]] / 2;
          var e = this[_0x9a98[658]] / 2;
          this[_0x9a98[661]][moveTo](new args(this[minusEq], this[x], i, e, fftBinsOfFreq));
          this[_0x9a98[661]][moveTo](new args(this[minusEq] + i, this[x], i, e, fftBinsOfFreq));
          this[_0x9a98[661]][moveTo](new args(this[minusEq], this[x] + e, i, e, fftBinsOfFreq));
          this[_0x9a98[661]][moveTo](new args(this[minusEq] + i, this[x] + e, i, e, fftBinsOfFreq));
          fftBinsOfFreq = this[_0x9a98[660]];
          this[_0x9a98[660]] = [];
          i = 0;
          for (; i < fftBinsOfFreq[split]; i++) {
            this[points](fftBinsOfFreq[i]);
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
          this[_0x9a98[674]][points](datum);
        },
        retrieve : function(question_set_id, cb) {
          this[_0x9a98[674]][_0x9a98[666]](question_set_id, cb);
        },
        retrieve2 : function(callback, a, b, c, d) {
          ret[minusEq] = callback;
          ret[x] = a;
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
        accountsCallbacks[color] = stack[0][color];
        accountsCallbacks[abs] = stack[0][abs];
        accountsCallbacks[flag](stack[0][setColor]);
      }
      e[height](0, 0, 32, 32);
      e[_0x9a98[447]]();
      e[_0x9a98[448]](16, 16);
      e[/>/g](.4, .4);
      e[lineWidth] = lineCap;
      accountsCallbacks[_0x9a98[450]](e);
      e[_0x9a98[452]]();
      var artistTrack = document[countdown](_0x9a98[675]);
      var GET_AUTH_URL_TIMEOUT = artistTrack[_0x9a98[676]](true);
      GET_AUTH_URL_TIMEOUT[_0x9a98[680]](_0x9a98[677], _[_0x9a98[679]](_0x9a98[678]));
      artistTrack[_0x9a98[682]][_0x9a98[681]](GET_AUTH_URL_TIMEOUT, artistTrack);
    }
    var accountsCallbacks = new notes(0, 0, 0, 32, _0x9a98[683], .jpg);
    accountsCallbacks[abs] = _0x9a98[684];
    var _ = document[&lt;](focus);
    _[touches] = 32;
    _[width] = 32;
    var e = _[2d](#cBubbleCells);
    _pollWhileActive();
    setInterval(_pollWhileActive, 7500);
    setInterval(run, 1e3);
  });
  source[_0x9a98[685]] = handle;
}(window, window[UK-Europe]), $(document)[_0x9a98[688]](function() {
  $(_0x9a98[576])[_0x9a98[687]](_0x9a98[686], function(a) {
    a[statsTextCell]();
  });
}), $(document)[_0x9a98[688]](function() {
  $(document)[_0x9a98[693]](function(a) {
    if (!(!a[_0x9a98[689]] || a[_0x9a98[690]] != _0x9a98[691] && a[_0x9a98[690]] != _0x9a98[692])) {
      a[statsTextCell]();
    }
  });
});
