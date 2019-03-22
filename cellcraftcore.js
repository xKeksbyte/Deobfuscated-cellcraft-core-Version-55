function getGameMode(a) {
  var x = 7;
  if (a == "add") {
    gmselect++;
  } else {
    if (a == "remove") {
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
    gm = "102.407.134.60:2021";
    img = "craft";
    con = "NA";
  } else {
    if (1 == gmselect) {
      gm = "108.61.410.196:2021";
      img = "scania";
      con = "EU";
    } else {
      if (2 == gmselect) {
        gm = "102.407.126.439:2021";
        img = "windia";
        con = "NA";
      } else {
        if (3 == gmselect) {
          gm = "25.63.6.49:2021";
          img = "athena";
          con = "NA";
        } else {
          if (4 == gmselect) {
            gm = "107.191.26.131:240";
            img = "area51";
            con = "EU";
          } else {
            if (5 == gmselect) {
              gm = "25.63.6.49:2024";
              img = "instant";
              con = "NA";
            } else {
              if (6 == gmselect) {
                gm = "102.407.126.439:2024";
                img = "insane";
                con = "NA";
              } else {
                if (gmselect == x) {
                  gm = "102.438.158.53:2021";
                  img = "ice2pop";
                  con = "EU";
                }
              }
            }
          }
        }
      }
    }
  }
  setserver(gm);
  $("#GameDisplay").attr ("src", "img/" + img + ".png");
  $("#ContinentDisplay").attr ("src", "img/" + con + ".png");
  $("#invite-link").val ("http://cellcraft.io/?server=" + img);
}
function timer() {
  var minutes = Math.floor (seconds / 24 / 60 / 60);
  var delta = Math.floor (seconds - 86400 * minutes);
  var secs_remainder = Math.floor (delta / 3600);
  var deltaX = Math.floor (delta - 3600 * secs_remainder);
  var t = Math.floor (deltaX / 60);
  var s = seconds % 60;
  if (10 > s) {
    s = "0" + s;
  }
  document.getElementById ("countdown")["innerHTML"] = minutes + ":" + secs_remainder + ":" + t + ":" + s;
  if (0 == seconds) {
    clearInterval(countdownTimer);
    document.getElementById ("countdown")["innerHTML"] = "Completed";
  } else {
    seconds--;
  }
}
$(function() {
  $("#setting-table a:first").tab ("show");
  $("#ayarlar").on ("click", function() {
    var $realtime = $("#ayarlr");
    return $realtime.hasClass ("visible") ? ($realtime.removeClass ("visible").animate ({
      "margin-left" : "-300px"
    }), $("#content").css ({
      "margin-right" : "0px"
    })) : ($realtime.addClass ("visible").animate ({
      "margin-left" : "0px"
    }), $("#content").css ({
      "margin-right" : "-300px"
    })), $("#news").hide (), $("#about").hide ();
  });
}), $(function() {
  $("#scores-table a:first").tab ("show");
  $("#opener").on ("click", function() {
    var $realtime = $("#slide-panel");
    return $realtime.hasClass ("visible") ? ($realtime.removeClass ("visible").animate ({
      "margin-left" : "-300px"
    }), $("#content").css ({
      "margin-right" : "0px"
    })) : ($realtime.addClass ("visible").animate ({
      "margin-left" : "0px"
    }), $("#content").css ({
      "margin-right" : "-300px"
    })), $("#news").hide (), $("#about").hide ();
  });
});
var gmselect = 0;
var gm = "102.407.134.60:2021";
var img = "craft";
var con = "NA";
var getUrlParameter = function(t) {
  var o;
  var PL$17;
  var host_yaml_uri = decodeURIComponent(window["location"]["search"].substring (1));
  var PL$13 = host_yaml_uri.split ("&");
  PL$17 = 0;
  for (; PL$17 < PL$13["length"]; PL$17++) {
    if (o = PL$13[PL$17].split ("="), o[0] === t) {
      return void 0 === o[1] ? true : o[1];
    }
  }
};
srV = getUrlParameter("server");
var show = 0;
$(function() {
  setRegion("UK-Europe");
});
var CONNECTION_URL;
!function(source, require) {
  function handle() {
    reverseIsSingle = true;
    document.getElementById ("canvas").focus ();
    var hasSongChanged = false;
    if (supportTouch) {
      data["sSkins"] = arr["sSkins"] = false;
      data["sMinimap"] = arr["sMinimap"] = false;
      data["sCellBorders"] = arr["sCellBorders"] = false;
    }
    var node_json;
    if (null != source["localStorage"]["settings"]) {
      node_json = JSON.parse (source["localStorage"]["settings"]);
      if (typeof node_json["nickName"] !== "undefined") {
        data["nickName"] = node_json["nickName"];
      }
      if (typeof node_json["sSkins"] !== "undefined") {
        data["sSkins"] = node_json["sSkins"];
      }
      if (typeof node_json["sColors"] !== "undefined") {
        data["sColors"] = node_json["sColors"];
      }
      if (typeof node_json["sNames"] !== "undefined") {
        data["sNames"] = node_json["sNames"];
      }
      if (typeof node_json["sMass"] !== "undefined") {
        data["sMass"] = node_json["sMass"];
      }
      if (typeof node_json["sMapBorder"] !== "undefined") {
        data["sMapBorder"] = node_json["sMapBorder"];
      }
      if (typeof node_json["sGrid"] !== "undefined") {
        data["sGrid"] = node_json["sGrid"];
      }
      if (typeof node_json["sFancyGrid"] !== "undefined") {
        data["sFancyGrid"] = node_json["sFancyGrid"];
      }
      if (typeof node_json["sDark"] !== "undefined") {
        data["sDark"] = node_json["sDark"];
      }
      if (typeof node_json["sAcid"] !== "undefined") {
        data["sAcid"] = node_json["sAcid"];
      }
      if (typeof node_json["sZoom"] !== "undefined") {
        data["sZoom"] = node_json["sZoom"];
      }
      if (typeof node_json["sLeaderboard"] !== "undefined") {
        data["sLeaderboard"] = node_json["sLeaderboard"];
      }
      if (typeof node_json["sChat"] !== "undefined") {
        data["sChat"] = node_json["sChat"];
      }
      if (typeof node_json["sMinimap"] !== "undefined") {
        data["sMinimap"] = node_json["sMinimap"];
      }
      if (typeof node_json["sSmoothRender"] !== "undefined") {
        data["sSmoothRender"] = node_json["sSmoothRender"];
      }
      if (typeof node_json["sLargeNames"] !== "undefined") {
        data["sLargeNames"] = node_json["sLargeNames"];
      }
      if (typeof node_json["sTransparentViruses"] !== "undefined") {
        data["sTransparentViruses"] = node_json["sTransparentViruses"];
      }
      if (typeof node_json["sCellBorders"] !== "undefined") {
        data["sCellBorders"] = node_json["sCellBorders"];
      }
      if (typeof node_json["sPolygonShapes"] !== "undefined") {
        data["sPolygonShapes"] = node_json["sPolygonShapes"];
      }
      if (typeof node_json["sBubbleCells"] !== "undefined") {
        data["sBubbleCells"] = node_json["sBubbleCells"];
      }
    }
    a = false;
    if (data["nickName"]) {
      require("#nick").prop ("value", data["nickName"]);
    }
    require("#cSkins").prop ("checked", data["sSkins"]).change ();
    require("#cColors").prop ("checked", data["sColors"]).change ();
    require("#cNames").prop ("checked", data["sNames"]).change ();
    require("#cMass").prop ("checked", data["sMass"]).change ();
    require("#cMapBorder").prop ("checked", data["sMapBorder"]).change ();
    require("#cGrid").prop ("checked", data["sGrid"]).change ();
    require("#cFancyGrid").prop ("checked", data["sFancyGrid"]).change ();
    require("#cDark").prop ("checked", data["sDark"]).change ();
    require("#cAcid").prop ("checked", data["sAcid"]).change ();
    require("#cZoom").prop ("checked", data["sZoom"]).change ();
    require("#cLeaderboard").prop ("checked", data["sLeaderboard"]).change ();
    require("#cChat").prop ("checked", data["sChat"]).change ();
    require("#cMinimap").prop ("checked", data["sMinimap"]).change ();
    require("#cSmoothRender").prop ("checked", data["sSmoothRender"]).change ();
    require("#cLargeNames").prop ("checked", data["sLargeNames"]).change ();
    require("#cTransparentViruses").prop ("checked", data["sTransparentViruses"]).change ();
    require("#cCellBorders").prop ("checked", data["sCellBorders"]).change ();
    require("#cPolygonShapes").prop ("checked", data["sPolygonShapes"]).change ();
    require("#cBubbleCells").prop ("checked", data["sBubbleCells"]).change ();
    a = true;
    opfilter = canvas = document.getElementById ("canvas");
    callbacks = opfilter.getContext ("2d");
    matches = document.getElementById ("statsGraph");
    deactivatedEntityErr = document.getElementById ("mini-map");
    socketHandler = deactivatedEntityErr.getContext ("2d");
    opfilter["onmouseenter"] = function(a) {
      x = 1 * a["clientX"];
      endRange = 1 * a["clientY"];
      debug();
    };
    opfilter["onmousemove"] = function(a) {
      x = 1 * a["clientX"];
      endRange = 1 * a["clientY"];
      debug();
    };
    opfilter["oncontextmenu"] = function(a) {
      x = 1 * a["clientX"];
      endRange = 1 * a["clientY"];
      debug();
      scrollTo(true, 1);
    };
    if (supportTouch) {
      opfilter.addEventListener ("touchstart", disable, false);
      opfilter.addEventListener ("touchmove", snap, false);
      opfilter.addEventListener ("touchend", range, false);
    }
    opfilter["onmouseup"] = function() {
    };
    if (/firefox/i.test (navigator["userAgent"])) {
      document.addEventListener ("DOMMouseScroll", onDocumentKeyUp, false);
    } else {
      document["body"]["onmousewheel"] = onDocumentKeyUp;
    }
    opfilter["onfocus"] = function() {
      hasSongChanged = false;
    };
    opfilter["onmousedown"] = function() {
      require("#emojiDropdown").hide ();
    };
    document.getElementById ("overlays")["onmousedown"] = function() {
      require("#emojiDropdown").hide ();
    };
    document.getElementById ("chtbox")["onblur"] = function() {
      hasSongChanged = false;
    };
    document.getElementById ("chtbox")["onfocus"] = function() {
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
    source["onkeydown"] = function(canCreateDiscussions) {
      var dependencies = !hasSongChanged && !isReplayingSong;
      switch(canCreateDiscussions["keyCode"]) {
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
          source["isSpectating"] = false;
          break;
        case 13:
          if (hasSongChanged) {
            hasSongChanged = false;
            require("#emojiDropdown").hide ();
            document.getElementById ("chtbox").blur ();
            refresh(document.getElementById ("chtbox")["value"]);
            document.getElementById ("chtbox")["value"] = "";
          } else {
            if (!_x$2) {
              document.getElementById ("chtbox").focus ();
              hasSongChanged = true;
            }
          }
      }
    };
    source["onkeyup"] = function(a) {
      switch(a["keyCode"]) {
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
    source["onblur"] = function() {
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
    source["onresize"] = func;
    source.requestAnimationFrame (media);
    setInterval(scrollTo, 40);
    if (existingFilePath) {
      require("#region").val (existingFilePath);
    }
    f();
    resolve(require("#region").val ());
    if (null == socket && existingFilePath) {
      loop();
    }
    require("#overlays").show ();
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
    $("#news").hide ();
    $("#about").hide ();
    var i = 0;
    for (; i < events["changedTouches"]["length"]; i++) {
      var coord = events["changedTouches"][i];
      if (0 > c && coord["clientX"] < height / 2) {
        c = coord["identifier"];
        coordtransform.reset (coord["clientX"], coord["clientY"]);
        PL$133.copyFrom (ae);
        leftTouchStartPos.reset (0, 0);
      }
      var d = ~~(height / 7);
      if (coord["clientX"] > height - d && coord["clientY"] > number - d) {
        scrollTo();
        on(17);
      }
      if (coord["clientX"] > height - d && coord["clientY"] > number - 2 * d - 10 && coord["clientY"] < number - d - 10) {
        scrollTo();
        on(22);
      }
    }
    list = events["touches"];
  }
  function getEvent(delta) {
    delta = +delta;
    var x = Math.floor (delta / 3600);
    var _ = Math.floor (delta % 3600 / 60);
    var e = Math.floor (delta % 3600 % 60);
    return (x > 0 ? x + ":" + (10 > _ ? "0" : "") : "") + _ + ":" + (10 > e ? "0" : "") + e;
  }
  function addPoint() {
    if (drawCanvasAll(), matches) {
      var manipulateInstructions = matches.getContext ("2d");
      var opacity = matches["width"];
      var last = matches["height"];
      if (manipulateInstructions.clearRect (0, 0, opacity, last), 2 < props["length"]) {
        var boxes = 200;
        var propName = 0;
        for (; propName < props["length"]; propName++) {
          boxes = Math.max (props[propName], boxes);
        }
        manipulateInstructions["lineWidth"] = 3;
        manipulateInstructions["lineCap"] = "round";
        manipulateInstructions["lineJoin"] = "round";
        manipulateInstructions["strokeStyle"] = "#3071A9";
        manipulateInstructions["fillStyle"] = "#3071A9";
        manipulateInstructions.beginPath ();
        manipulateInstructions.moveTo (0, last - props[0] / boxes * (last - 10) + 10);
        propName = 1;
        for (; propName < props["length"]; propName = propName + Math.max (~~(props["length"] / opacity), 1)) {
          var alphaS = propName / (props["length"] - 1) * opacity;
          var minCircumeference = [];
          var suffix = -20;
          for (; 20 >= suffix; ++suffix) {
            if (!(0 > propName + suffix || propName + suffix >= props["length"])) {
              minCircumeference.push (props[propName + suffix]);
            }
          }
          minCircumeference = minCircumeference.reduce (function(h0, a) {
            return h0 + a;
          }) / minCircumeference["length"] / boxes;
          manipulateInstructions.lineTo (alphaS, last - minCircumeference * (last - 10) + 10);
        }
        manipulateInstructions.stroke ();
        manipulateInstructions["globalAlpha"] = .5;
        manipulateInstructions.lineTo (opacity, last);
        manipulateInstructions.lineTo (0, last);
        manipulateInstructions.fill ();
        manipulateInstructions["globalAlpha"] = 1;
      }
      totalSeconds = props["length"];
      var c = ((totalSeconds % 60).toFixed (0), totalSeconds / 60);
      var l = ((c % 60).toFixed (0), (c / 60).toFixed (0), Date.now ());
      getEvent((l - fl) / 1e3);
      document.getElementById ("statsTextTime")["innerHTML"] = getEvent((l - fl) / 1e3);
      document.getElementById ("statsTextMass")["innerHTML"] = "" + (actual / 100).toFixed (0);
      document.getElementById ("statsTextFood")["innerHTML"] = "" + axx;
      document.getElementById ("statsTextCell")["innerHTML"] = "" + _a1;
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
    a.preventDefault ();
    var arrayKey = 0;
    for (; arrayKey < a["changedTouches"]["length"]; arrayKey++) {
      var PL$89 = a["changedTouches"][arrayKey];
      if (c == PL$89["identifier"]) {
        PL$133.reset (PL$89["clientX"], PL$89["clientY"]);
        leftTouchStartPos.copyFrom (r);
        leftTouchStartPos.minusEq (ae);
        x = 3 * leftTouchStartPos["x"] + height / 2;
        endRange = 3 * leftTouchStartPos["y"] + number / 2;
        debug();
        scrollTo();
      }
    }
    list = a["touches"];
  }
  function intercept() {
    var a = ix + 1;
    if (a == key) {
      on(45);
    }
  }
  function range(a) {
    list = a["touches"];
    var id = 0;
    for (; id < a["changedTouches"]["length"]; id++) {
      var history = a["changedTouches"][id];
      if (c == history["identifier"]) {
        c = -1;
        leftTouchStartPos.reset (0, 0);
        break;
      }
    }
  }
  function onDocumentKeyUp(event) {
    n = n * Math.pow (.9, event["wheelDelta"] / -120 || event["detail"] || 0);
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
      var minX = Number["POSITIVE_INFINITY"];
      var minY = Number["POSITIVE_INFINITY"];
      var maxX = Number["NEGATIVE_INFINITY"];
      var maxY = Number["NEGATIVE_INFINITY"];
      var newDuration = 0;
      var i = 0;
      for (; i < args["length"]; i++) {
        var props = args[i];
        if (props.shouldRender () && !props["wasSimpleDrawing"] && 20 < props["size"] * max) {
          newDuration = Math.max (props["size"], newDuration);
          minX = Math.min (props["x"], minX);
          minY = Math.min (props["y"], minY);
          maxX = Math.max (props["x"], maxX);
          maxY = Math.max (props["y"], maxY);
        }
      }
      rng = pageSignUp.init ({
        minX : minX - (newDuration + 100),
        minY : minY - (newDuration + 100),
        maxX : maxX + (newDuration + 100),
        maxY : maxY + (newDuration + 100),
        maxChildren : 2,
        maxDepth : 4
      });
      i = 0;
      for (; i < args["length"]; i++) {
        if (props = args[i], props.shouldRender () && !props["wasSimpleDrawing"] && 20 < props["size"] * max) {
          minX = 0;
          for (; minX < props["points"]["length"]; ++minX) {
            minY = props["points"][minX]["x"];
            maxX = props["points"][minX]["y"];
            if (!(angle - height / 2 / max > minY || ha - number / 2 / max > maxX || minY > angle + height / 2 / max || maxX > ha + number / 2 / max)) {
              rng.insert (props["points"][minX]);
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
      if (require("#region").val () != configuredFilePath) {
        require("#region").val (configuredFilePath);
      }
      existingFilePath = source["localStorage"]["location"] = configuredFilePath;
      require(".btn-needs-play").prop ("disabled", false);
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
    fl = Date.now ();
    isReplayingSong = false;
    require("#advert").hide ();
    f();
  }
  function warnIfMissing() {
    setTimeout(spawn, 300);
    require("#overlays").fadeOut (300);
    require("#connecting").hide ();
    require("#advert").hide ();
  }
  function add(pendingInterestId) {
    return addPoint(), transform("Aww! Well lets<br>try again!"), require("#advert").fadeIn (1200), googletag.pubads ().refresh (), false;
  }
  function buildJS(buildingApp) {
    isReplayingSong = true;
    q = null;
    require("#connecting").hide ();
    if (0 == show) {
      require("#overlays").fadeIn (300);
    } else {
      require("#overlays").hide ();
      isReplayingSong = false;
    }
  }
  function f() {
    if (require("#region").val ()) {
      source["localStorage"]["location"] = require("#region").val ();
    } else {
      if (source["localStorage"]["location"]) {
        require("#region").val (source["localStorage"]["location"]);
      }
    }
    if (require("#region").val ()) {
      require("#locationKnown").append (require("#region"));
    } else {
      require("#locationUnknown").append (require("#region"));
    }
  }
  function loop() {
    if (reverseIsSingle && existingFilePath && null != CONNECTION_URL) {
      var src = CONNECTION_URL.replace (/\d/g, function(a) {
        return a == "2" ? "4" : a == "4" ? "2" : a;
      });
      onload("ws://" + src);
    }
  }
  function setCircular() {
    $(".progress-bar2").removeAttr ("style");
    var width_box = $(".progress-wrap2").data ("progress-percent") / 100;
    var i = $(".progress-wrap2").width ();
    var _ileft = width_box * i;
    var e = 3e3;
    $(".progress-bar2").stop ().animate ({
      left : _ileft
    }, e);
  }
  function onload(url) {
    if (null != url && null != CONNECTION_URL) {
      if (socket) {
        socket["onopen"] = null;
        socket["onmessage"] = null;
        socket["onclose"] = null;
        try {
          socket.close ();
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
      jQuery("#dispconn").show ();
      socket = new WebSocket(url);
      socket["binaryType"] = "arraybuffer";
      socket["onopen"] = init;
      socket["onmessage"] = onSocketMessage;
      socket["onclose"] = fn;
      socket["onerror"] = function() {
        console.log ("socket error", arguments);
      };
    }
  }
  function prepareData(a) {
    return new DataView(new ArrayBuffer(a));
  }
  function log(x) {
    socket.send (x["buffer"]);
  }
  function init() {
    jQuery("#dispconn").hide ();
    document.getElementById ("connecting")["style"]["visibility"] = "hidden";
    array.push ({
      name : "CellCraft.io",
      color : "#0AFF0A",
      message : "Welcome, Crafter! Ready to mine some cells?",
      time : Date.now (),
      cache : null
    });
    run();
    var msg;
    ngiScroll_timeout = 2e3;
    duedate = new Date;
    pixelSizeTargetMax = duedate;
    $("#curser").text ("");
    $("#curser").hide ();
    buildJS(true);
    console.log ("socket open");
    PL$120 = [];
    msg = prepareData(5);
    msg.setUint8 (0, 254);
    msg.setUint32 (1, 5, true);
    log(msg);
    msg = prepareData(5);
    msg.setUint8 (0, 255);
    msg.setUint32 (1, 1332775218, true);
    log(msg);
    runner();
  }
  function fn() {
    console.log ("socket close");
    jQuery("#dispconn").hide ();
    document.getElementById ("connecting")["style"]["visibility"] = "visible";
    jQuery("#connecting").show (400);
    array.push ({
      name : "CellCraft.io",
      color : "#FF0A0A",
      message : "Disconnected from server",
      time : Date.now (),
      cache : null
    });
    run();
    setTimeout(loop, ngiScroll_timeout);
    ngiScroll_timeout = ngiScroll_timeout * 1.5;
  }
  function onSocketMessage(data) {
    initialize(new DataView(data["data"]));
  }
  function parse(text, value) {
    var PL$17;
    var PL$13 = [{
      value : 1e18,
      symbol : "E"
    }, {
      value : 1e15,
      symbol : "P"
    }, {
      value : 1e12,
      symbol : "T"
    }, {
      value : 1e9,
      symbol : "G"
    }, {
      value : 1e6,
      symbol : "M"
    }, {
      value : 1e3,
      symbol : "k"
    }];
    PL$17 = 0;
    for (; PL$17 < PL$13["length"]; PL$17++) {
      if (text >= PL$13[PL$17]["value"]) {
        return (text / PL$13[PL$17]["value"]).toFixed (value).replace (/\.?0+$/, "") + PL$13[PL$17]["symbol"];
      }
    }
    return text;
  }
  function initialize(data) {
    function fixRootEm() {
      var hex;
      var signature = "";
      for (; 0 != (hex = data.getUint16 (value, true));) {
        value = value + 2;
        signature = signature + String.fromCharCode (hex);
      }
      return value = value + 2, signature;
    }
    var value = 0;
    var t = false;
    switch(240 == data.getUint8 (value) && (value = value + 5), data.getUint8 (value++)) {
      case 16:
        draw(data, value);
        break;
      case 17:
        newValue = data.getFloat32 (value, true);
        value = value + 4;
        horAdjust = data.getFloat32 (value, true);
        value = value + 4;
        w = data.getFloat32 (value, true);
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
        timeout = data.getInt16 (value, true);
        value = value + 2;
        response = data.getInt16 (value, true);
        value = value + 2;
        if (!Ax) {
          Ax = true;
          message = timeout;
          oldValue = response;
        }
        break;
      case 32:
        indexMap.push (data.getUint32 (value, true));
        value = value + 4;
        break;
      case 33:
        var id = data.getUint32 (value, true);
        value = value + 4;
        var name = data.getUint8 (value, true);
        value++;
        var map = cache[id];
        if (map) {
          map["animId"] = name;
          map["animStartTime"] = block;
        } else {
          signedTransactions.push ({
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
        var v = data.getUint32 (value, true);
        value = value + 4;
        fftBinsOfFreq = [];
        previousThumbValue = 0;
        for (; v > previousThumbValue; ++previousThumbValue) {
          var o = data.getUint32 (value, true);
          value = value + 4;
          fftBinsOfFreq.push ({
            id : o,
            name : fixRootEm()
          });
        }
        if (0 == Pa) {
          var pH = "";
          if (v >= 10) {
            pH = " or more";
          }
          jQuery("#onlinestat").html ("Players " + v + pH);
        }
        remove();
        break;
      case 50:
        bottom = [];
        var oldTermination = data.getUint32 (value, true);
        value = value + 4;
        var previousThumbValue = 0;
        for (; oldTermination > previousThumbValue; ++previousThumbValue) {
          bottom.push (data.getFloat32 (value, true));
          value = value + 4;
        }
        remove();
        break;
      case 64:
        node = data.getFloat64 (value, true);
        value = value + 8;
        match = data.getFloat64 (value, true);
        value = value + 8;
        type = data.getFloat64 (value, true);
        value = value + 8;
        old = data.getFloat64 (value, true);
        value = value + 8;
        newValue = (type - node) / 2;
        horAdjust = (old - match) / 2;
        w = 1;
        if (0 == stack["length"]) {
          angle = newValue;
          ha = horAdjust;
          max = w;
        }
        replyAsHtml = data.getInt16 (value, true);
        value = value + 2;
        pdz = data.getInt32 (value, true);
        value = value + 4;
        style = merge(pdz);
        break;
      case 80:
        ruleValidationResult = data.getUint16 (value, true);
        value = value + 2;
        var f = data.getUint8 (value++);
        Lx = !!(1 & f);
        inputWin = !!(2 & f);
        winRef = !!(4 & f);
        if (ruleValidationResult > 0) {
          if (!(inputWin || winRef)) {
            require("#info").hide ();
          }
          if (inputWin) {
            require("#info").show ();
            $("#frozenCellOn").show ();
            $("#frozenCellOff").hide ();
          } else {
            $("#frozenCellOn").hide ();
            $("#frozenCellOff").show ();
          }
          if (winRef) {
            require("#info").show ();
            $("#frozenMOn").show ();
            $("#frozenMOff").hide ();
          } else {
            $("#frozenMOn").hide ();
            $("#frozenMOff").show ();
          }
        }
        break;
      case 81:
        key = data.getUint8 (value, true);
        value = value + 1;
        break;
      case 89:
        var m;
        var d;
        var idx;
        var result = "";
        for (; 0 != (m = data.getUint16 (value, true));) {
          value = value + 2;
          result = result + String.fromCharCode (m);
        }
        value = value + 2;
        d = data.getUint8 (value++);
        idx = data.getUint16 (value, true);
        value = value + 2;
        if (_takingTooLongTimeout) {
          clearTimeout(_takingTooLongTimeout);
        }
        if (result == "") {
          require("#curser").fadeOut (600);
        } else {
          require("#curser").text (result);
          require("#curser").css ("color", 1 == d ? "#00C000" : "#FF0000");
          require("#curser").finish ().show ();
          if (idx > 0) {
            _takingTooLongTimeout = setTimeout(function() {
              $("#curser").fadeOut (600);
            }, 1e3 * idx);
          }
        }
        break;
      case 90:
        Pa = 1;
        uptime = data.getFloat64 (value, true);
        value = value + 8;
        var delta = Math.floor (uptime / 60);
        var deltaX = Math.floor (delta / 60);
        var slideWidth = Math.floor (deltaX / 24);
        deltaX = deltaX - 24 * slideWidth;
        delta = delta - 24 * slideWidth * 60 - 60 * deltaX;
        if (slideWidth > 0) {
          jQuery("#uptime").html (":: Uptime " + slideWidth + " day(s) " + deltaX + ":" + (10 > delta ? "0" : "") + delta + " ");
        } else {
          jQuery("#uptime").html (":: Uptime " + deltaX + ":" + (10 > delta ? "0" : "") + delta + " ");
        }
        onlinestat = data.getFloat64 (value, true);
        value = value + 8;
        jQuery("#onlinestat").html ("Players " + onlinestat);
        onlinestat = data.getFloat64 (value, true);
        value = value + 8;
        jQuery("#mapsize").html (parse(onlinestat, 1));
        onlinestat = data.getFloat64 (value, true);
        value = value + 8;
        jQuery("#mapfood").html (parse(onlinestat, 1));
        var timeSubmittedDiff = new Date - duedate;
        if (jQuery("#latency").html (" :: Latency " + timeSubmittedDiff + "ms"), data["byteLength"] > 36) {
          onlinestat = data.getFloat64 (value, true);
          m = min(onlinestat);
          if (mode != m) {
            mode = m;
            jQuery("#smode").html (mode);
          }
        }
        break;
      case 91:
        ban = data.getUint8 (value, true);
        ngiScroll_timeout = 5e3;
        value = value + 1;
        jQuery("#servermsg").empty ("<div>");
        jQuery("#servermsg").html ("<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>You have been banned!</h2></div>");
        jQuery("#warning").show ();
        setCircular();
        setTimeout("$("#warning").hide()", 3e3);
        break;
      case 92:
        connlimit = data.getUint8 (value, true);
        ngiScroll_timeout = 5e3;
        value = value + 1;
        jQuery("#servermsg").empty ("<div>");
        jQuery("#servermsg").html ("<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>Too many connections from your IP</h2></div>");
        jQuery("#warning").show ();
        setCircular();
        setTimeout("$("#warning").hide()", 3e3);
        break;
      case 93:
        slotslimit = data.getUint8 (value, true);
        ngiScroll_timeout = 5e3;
        value = value + 1;
        jQuery("#servermsg").empty ("<div>");
        jQuery("#servermsg").html ("<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>Server Full!, No more slots</h2></div>");
        jQuery("#warning").show ();
        setCircular();
        setTimeout("$("#warning").hide()", 3e3);
        break;
      case 94:
        nickslimit = data.getUint8 (value, true);
        jQuery(".btn-needs-nick").prop ("disabled", true);
        ngiScroll_timeout = 4e3;
        value = value + 1;
        jQuery("#servermsg").empty ("<div>");
        jQuery("#servermsg").html ("<div style='width: 336px; background-color: red; margin: 10px auto; border-radius: 15px; padding: 5px 15px 5px 15px;'><h2>The name you selected is already is in game</h2></div>");
        jQuery("#warning").show ();
        setCircular();
        setTimeout("$("#warning").hide()", 3e3);
        var autoResumeTimer = setTimeout(function() {
          autoResumeTimer = setInterval(window["location"].reload (), 100);
        }, 3e3);
        break;
      case 99:
        render(data, value);
        break;
      case 100:
        if (window["CC"] && window["CC"]["showCaptcha"]) {
          window["CC"].showCaptcha ();
          require("#overlays").fadeIn (100);
        }
    }
  }
  function min(context) {
    switch(context) {
      case 0:
        return "FFA";
      case 1:
        return "Teams";
      case 2:
        return "Experimental FFA";
      case 10:
        return "Tournament";
      case 11:
        return "HungerGames";
      case 12:
        return "Zombie FFA";
      case 13:
        return "Zombie Team";
      case 14:
        return "Experimental Team";
      case 20:
        return "Rainbow FFA";
      case 21:
        return "Debug FFA";
      case 22:
        return "Blackhole FFA";
    }
  }
  function render(fn, value) {
    function encode() {
      var i;
      var paginationStr = "";
      for (; 0 != (i = fn.getUint16 (value, true));) {
        value = value + 2;
        paginationStr = paginationStr + String.fromCharCode (i);
      }
      return value = value + 2, paginationStr;
    }
    var e = fn.getUint8 (value++);
    if (2 & e) {
      value = value + 4;
    }
    if (4 & e) {
      value = value + 8;
    }
    if (8 & e) {
      value = value + 16;
    }
    var longNameFlag = fn.getUint8 (value++);
    var shortNameFlag = fn.getUint8 (value++);
    var b = fn.getUint8 (value++);
    var glyphColor = (longNameFlag << 16 | shortNameFlag << 8 | b).toString(16);
    for (; glyphColor["length"] < 6;) {
      glyphColor = "0" + glyphColor;
    }
    glyphColor = "#" + glyphColor;
    array.push ({
      name : encode(),
      color : glyphColor,
      message : encode(),
      time : Date.now (),
      cache : null
    });
    run();
  }
  function run() {
    var n = 12;
    var duration = 0;
    var _ = Date.now ();
    if (array["length"] > 0) {
      duration = array[array["length"] - 1]["time"];
      var i = 0;
      for (; i < array["length"]; i++) {
        if (_ >= 12e4 + array[i]["time"] || i < array["length"] - n) {
          array.splice (i, 1);
          i--;
        }
      }
    }
    if (_x$2) {
      return e = null, void(sourceNode = null);
    }
    var stack = [];
    var t = array["length"];
    var start = t > n ? t - n : 0;
    var value = 0;
    i = 0;
    for (; t - start > i; i++) {
      var src = array[i + start];
      var o = false;
      if (null == src["cache"]) {
        src["cache"] = {
          chatCache1 : null,
          chatCache2 : null,
          emo : []
        };
        o = true;
      }
      var f = src["cache"];
      if (o) {
        f["chatCache1"] = new obj(15, src["color"], true, "#000000");
        f["chatCache1"].setValue (src["name"]);
        if (title) {
          f["chatCache2"] = new obj(15, "#F5F6CE");
        } else {
          f["chatCache2"] = new obj(15, "#444444");
        }
        var PL$13 = [];
        var start = 2;
        var artistTrack = ": " + src["message"].replace (emoRegExp, function(iccId, pos) {
          var i = emoMap[iccId];
          var subwiki = subwikiList[i];
          return null == subwiki && (subwikiList[i] = new Image, subwiki = subwikiList[i], subwiki["src"] = "emotes/" + i + ".png"), PL$13.push ({
            pos : pos + start,
            img : subwiki
          }), start = start + (5 - iccId["length"]), "     ";
        });
        f["chatCache2"].setValue (artistTrack);
      }
      var col = f["chatCache1"].render ();
      var finger = f["chatCache2"];
      if (title) {
        finger.setColor ("#F5F6CE");
      } else {
        finger.setColor ("#444444");
      }
      var p2 = finger.render ();
      var currentValue = col["width"] + p2["width"];
      if (currentValue > value && (value = currentValue), o) {
        var PL$17 = 0;
        for (; PL$17 < PL$13["length"]; PL$17++) {
          PL$13[PL$17]["pos"] = finger["_ctx"].measureText (artistTrack.substring (0, PL$13[PL$17]["pos"]))["width"];
        }
        f["emo"] = PL$13;
      }
      stack.push ({
        c1 : col,
        c2 : p2,
        emo : f["emo"]
      });
    }
    if (0 == stack["length"]) {
      return e = null, void(sourceNode = null);
    }
    var ratio = Math.max (Math.min (1.8 * number, height, 1e3) / 1e3, .5);
    if (!e) {
      e = document.createElement ("canvas");
      sourceNode = e.getContext ("2d");
    }
    e["width"] = Math.max (Math.min (value * ratio, height - 10), 1);
    e["height"] = Math.max (Math.min ((18 * stack["length"] + 2) * ratio, number - 50), 1);
    sourceNode.scale (ratio, ratio);
    i = 0;
    for (; i < stack["length"]; i++) {
      value = stack[i];
      start = value["c1"]["width"];
      duration = e["height"] / ratio - 18 * (stack["length"] - i);
      sourceNode["globalAlpha"] = title ? .75 : .9;
      sourceNode.drawImage (value["c1"], 0, duration);
      sourceNode.drawImage (value["c2"], start, duration);
      var PL$17 = 0;
      var PL$13 = value["emo"];
      for (; PL$17 < PL$13["length"]; PL$17++) {
        t = PL$13[PL$17];
        var val = t["img"];
        if (val && val["complete"] && 0 != val["width"]) {
          sourceNode["globalAlpha"] = title ? .85 : 1;
          sourceNode.drawImage (val, start + 2 + t["pos"], duration - 2);
        }
      }
    }
  }
  function normalizeDefault(val) {
    return val = val.replace ("/&/g", "&amp;"), val = val.replace ("/</g", "&lt;"), val = val.replace ("/>/g", "&gt;"), val = val.replace ("/"/g", "&quot;");
  }
  function extend(a, b) {
    var j = a["name"];
    var i = b["name"];
    if (j == "") {
      j = "An unnamed cell";
    }
    if (i == "") {
      i = "An unnamed cell";
    }
    var axx = Math.floor (b["size"] * b["size"] / 100);
    var h = false;
    "";
    if (PL$120["length"] > 12 && PL$120.splice (0, 1), axx >= 16 && !b["isVirus"] && j != i && (h = true, j == q ? axx > 1e3 ? transform("Wow! " + parse(axx, 1) + "<br>mass gained") : axx > 500 ? transform("Nice! " + parse(axx, 1) + "<br>mass gained") : 100 > axx && transform("Grr! Not the<br>small players!") : axx > 1e3 && j != i && transform("<font style='color:" + a["color"] + "'>" + normalizeDefault(j) + "</font> just<br>gained " + parse(axx, 1) + " mass!")), b["isVirus"] && (h = true, j == q)) {
      var tri = ["And a other<br>virus gone!", "Virus makes<br>your CELLcraft strong!", "Yumm, a virus!", "It's green and<br>gives mass!"];
      var j = Math.floor (Math.random () * tri["length"]);
      transform(tri[j]);
    }
    if (i == q && j != q) {
      transform("Yikes, Carfull!");
    }
    if (j == q && i != q && a["color"] != b["color"]) {
      if (15 > axx) {
        ++axx;
        if (45 == axx) {
          transform("Try splitting your<br>cell (space key)!");
        }
        if (100 == axx) {
          transform("Try eating a<br>green virus!");
        }
        if (axx % 1e3 == 0) {
          transform("WOW! " + parse(axx, 1) + " food<br>cells consumed!");
        }
      } else {
        ++_a1;
        if (10 == _a1) {
          transform("10 cells<br>consumed!");
        }
        if (_a1 % 100 == 0) {
          transform("Yay! " + parse(_a1, 1) + " cells<br>consumed!");
        }
      }
    }
    if (h) {
      if (PL$120["length"] > 12) {
        PL$120.splice (0, 1);
      }
      wrapOverride();
    }
  }
  function transform(srcTxt) {
  }
  function wrapOverride() {
    var dateString = "";
    if (PL$120["length"] > 0) {
      var PL$24 = 0;
      for (; PL$24 < PL$120["length"]; ++PL$24) {
        dateString = dateString + (PL$120[PL$24]["data"] + "<br>");
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
    var resumeJson = markup.getUint16 (data, true);
    data = data + 2;
    var signedTransactionsCounter = 0;
    for (; resumeJson > signedTransactionsCounter; ++signedTransactionsCounter) {
      var d = cache[markup.getUint32 (data, true)];
      var p = cache[markup.getUint32 (data + 4, true)];
      data = data + 8;
      if (d && p) {
        extend(d, p);
        p.destroy (true);
        p["ox"] = p["x"];
        p["oy"] = p["y"];
        p["oSize"] = p["size"];
        p["nx"] = d["x"];
        p["ny"] = d["y"];
        p["nSize"] = p["size"];
        p["updateTime"] = block;
      }
    }
    signedTransactionsCounter = 0;
    for (;;) {
      var i = markup.getUint32 (data, true);
      if (data = data + 4, 0 == i) {
        break;
      }
      ++signedTransactionsCounter;
      var value;
      var index;
      var key;
      key = markup.getInt32 (data, true);
      data = data + 4;
      index = markup.getInt32 (data, true);
      data = data + 4;
      value = markup.getUint16 (data, true);
      data = data + 2;
      var fileStatus = markup.getUint8 (data++);
      var field = !!(1 & fileStatus);
      if (field) {
        var filteredErrors = !!(2 & fileStatus);
        var modVal = !!(16 & fileStatus);
        var object = markup.getUint8 (data++);
        var tmp_result = object >= 4 ? markup.getUint8 (data++) : 0;
        var x = markup.getUint8 (data++);
        var y = markup.getUint8 (data++);
        var b = markup.getUint8 (data++);
        var i = (x << 16 | y << 8 | b).toString(16);
        for (; 6 > i["length"];) {
          i = "0" + i;
        }
        var newMax = "#" + i;
        var ret = "";
        if (0 == object) {
          var errors;
          for (; errors = markup.getUint16 (data, true), data = data + 2, 0 != errors;) {
            ret = ret + String.fromCharCode (errors);
          }
        }
      }
      var result = null;
      if (cache.hasOwnProperty (i)) {
        result = cache[i];
        result.updatePos ();
        result["shouldUpdate"] = true;
        result["ox"] = result["x"];
        result["oy"] = result["y"];
        result["oSize"] = result["size"];
        if (field) {
          result["color"] = newMax;
          result.setName (ret);
        }
      } else {
        if (!field) {
          newMax = "#000000";
          ret = "";
        }
        result = new notes(i, key, index, value, newMax, ret);
        if (field && 1 == object && 25 >= value) {
          result["smallFood"] = true;
          parts.push (result);
        } else {
          args.push (result);
        }
        cache[i] = result;
        result["ka"] = key;
        result["la"] = index;
        if (row && field && (0 == object || 3 == object)) {
          result["shape"] = options[i % 100];
          result["rotate"] = (2 * Math.random () - 1) * Math["PI"];
        }
      }
      if (result["nx"] = key, result["ny"] = index, result["nSize"] = value, result["updateTime"] = block, field) {
        if (result["smallFood"]) {
          result["colorDimmed"] = newMax;
        } else {
          i = (~~(x * s) << 16 | ~~(y * s) << 8 | ~~(b * s)).toString(16);
          for (; 6 > i["length"];) {
            i = "0" + i;
          }
          result["colorDimmed"] = "#" + i;
        }
        result["isVirus"] = filteredErrors;
        result["isAgitated"] = modVal;
        result["cellType"] = object;
        result["flag"] = fileStatus;
        if (1 != object) {
          result["imageId"] = tmp_result;
          result.reloadImage ();
          if (!(0 != object || result["ownCell"] || -1 == indexMap.indexOf (i) || -1 != stack.indexOf (result))) {
            stack.push (result);
            result["ownCell"] = true;
            if (1 == stack["length"]) {
              angle = (.1 * angle + result["x"]) / 1.1;
              ha = (.1 * ha + result["y"]) / 1.1;
            }
          }
        }
      }
    }
    resumeJson = markup.getUint32 (data, true);
    data = data + 4;
    signedTransactionsCounter = 0;
    for (; resumeJson > signedTransactionsCounter; signedTransactionsCounter++) {
      var i = markup.getUint32 (data, true);
      data = data + 4;
      result = cache[i];
      if (null != result) {
        result.destroy ();
      }
    }
    resumeJson = signedTransactions["length"];
    signedTransactionsCounter = 0;
    for (; resumeJson > signedTransactionsCounter; signedTransactionsCounter++) {
      result = cache[signedTransactions[signedTransactionsCounter]["nodeId"]];
      if (null != result) {
        result["animId"] = signedTransactions[signedTransactionsCounter]["animId"];
        result["animStartTime"] = block;
      }
    }
    signedTransactions = [];
    if (gx && 0 == stack["length"]) {
      add(false);
    }
  }
  function scrollTo(a, b) {
    var topS;
    if (requestAnimationFrame()) {
      topS = x - height / 2;
      var topE = endRange - number / 2;
      if (a || topS * topS + topE * topE >= 64 && !(.01 > Math.abs (descname - suspended) && .01 > Math.abs (start - copy))) {
        descname = suspended;
        start = copy;
        topS = prepareData(13);
        topS.setUint8 (0, 16);
        topS.setInt32 (1, suspended, true);
        topS.setInt32 (5, copy, true);
        if (b) {
          topS.setUint32 (9, b, true);
        } else {
          topS.setUint32 (9, 0, true);
        }
        log(topS);
      }
    }
  }
  function runner() {
    if (on(42), half_xgap = Date.now () - 20500, requestAnimationFrame() && third_hex && null != q) {
      var msg = prepareData(3 + 2 * q["length"]);
      msg.setUint8 (0, 0);
      var store = 0;
      for (; store < q["length"]; ++store) {
        if (0 == store) {
          msg.setUint16 (1 + 2 * store, 59, true);
        }
        msg.setUint16 (1 + 2 * (store + 1), q.charCodeAt (store), true);
      }
      log(msg);
    }
  }
  function refresh(PL$42) {
    if (requestAnimationFrame() && PL$42["length"] < 200 && PL$42["length"] > 0) {
      var data = prepareData(2 + 2 * PL$42["length"]);
      var i = 0;
      data.setUint8 (i++, 99);
      data.setUint8 (i++, 0);
      var PL$41 = 0;
      for (; PL$41 < PL$42["length"]; ++PL$41) {
        data.setUint16 (i, PL$42.charCodeAt (PL$41), true);
        i = i + 2;
      }
      log(data);
    }
  }
  function requestAnimationFrame() {
    return null != socket && socket["readyState"] == socket["OPEN"];
  }
  function on(position) {
    if (requestAnimationFrame()) {
      var data = prepareData(1);
      data.setUint8 (0, position);
      log(data);
    }
  }
  function func() {
    window.scrollTo (0, 0);
    height = source["innerWidth"];
    number = source["innerHeight"];
    canvas["width"] = height;
    canvas["height"] = number;
    var fake_module = require("#helloDialog");
    fake_module.css ("transform", "none");
    var f = fake_module.height ();
    if (f > number / 1.1) {
      fake_module.css ("transform", "translate(-50%, -50%) scale(" + number / f / 1.1 + ")");
    } else {
      fake_module.css ("transform", "translate(-50%, -50%)");
    }
    fake_module = require("#scorebox");
    fake_module.css ("transform", "none");
    f = fake_module.height ();
    if (f > number / 1.25) {
      fake_module.css ("transform", "translate(-50%, -50%) scale(" + number / f / 1.25 + ")");
    } else {
      fake_module.css ("transform", "translate(-50%, -50%)");
    }
    hide();
  }
  function getEl() {
    var dt;
    return dt = Math.max (number / 1080, height / 1920), isPaused ? dt * n * 1 : dt * n;
  }
  function each() {
    if (0 != stack["length"]) {
      var elWidth = 0;
      var i = 0;
      for (; i < stack["length"]; i++) {
        elWidth = elWidth + stack[i]["size"];
      }
      elWidth = Math.pow (Math.min (64 / elWidth, 1), .4) * getEl();
      max = (9 * max + elWidth) / 10;
    }
  }
  function hide() {
    var data;
    var key;
    var options;
    var b = Date.now ();
    if (++p, block = b, 0 < stack["length"]) {
      each();
      key = data = 0;
      var stack_i;
      var min = stack["length"];
      var i = 0;
      for (; min > i; i++) {
        stack_i = stack[i];
        if (stack_i["shouldUpdate"]) {
          stack_i.updatePos ();
        }
        data = data + stack_i["x"] / min;
        key = key + stack_i["y"] / min;
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
      callbacks.clearRect (0, 0, height, number);
    }
    if (name) {
      callbacks["fillStyle"] = title ? "#111111" : "#F2FBFF";
      callbacks["globalAlpha"] = .05;
      callbacks.fillRect (0, 0, height, number);
    } else {
      calcStatus();
    }
    args.sort (function(a, b) {
      return a["size"] == b["size"] ? a["id"] - b["id"] : a["size"] - b["size"];
    });
    callbacks.save ();
    callbacks.translate (height / 2, number / 2);
    callbacks.scale (max, max);
    callbacks.translate (-angle, -ha);
    callbacks["lineCap"] = "round";
    if (!flagQuiet) {
      callbacks["strokeStyle"] = "#CC3030";
      callbacks["lineWidth"] = 20;
      callbacks["lineJoin"] = "round";
      callbacks["globalAlpha"] = 1;
      if (match + 10 > ha - number / 2 / max) {
        callbacks.beginPath ();
        callbacks.moveTo (node, match);
        callbacks.lineTo (type, match);
        callbacks.stroke ();
      }
      if (angle + height / 2 / max > type - 10) {
        callbacks.beginPath ();
        callbacks.moveTo (type, match);
        callbacks.lineTo (type, old);
        callbacks.stroke ();
      }
      if (ha + number / 2 / max > old - 10) {
        callbacks.beginPath ();
        callbacks.moveTo (type, old);
        callbacks.lineTo (node, old);
        callbacks.stroke ();
      }
      if (node + 10 > angle - height / 2 / max) {
        callbacks.beginPath ();
        callbacks.moveTo (node, old);
        callbacks.lineTo (node, match);
        callbacks.stroke ();
      }
    }
    min = blockTimes["length"];
    i = 0;
    for (; min > i; i++) {
      blockTimes[i].drawOneCell (callbacks);
      if (blockTimes["length"] < min) {
        min--;
        i--;
      }
    }
    min = parts["length"];
    i = 0;
    for (; min > i; i++) {
      parts[i].drawOneCell (callbacks);
    }
    min = args["length"];
    i = 0;
    for (; min > i; i++) {
      args[i].drawOneCell (callbacks);
    }
    if (Ax) {
      message = (3 * message + timeout) / 4;
      oldValue = (3 * oldValue + response) / 4;
      callbacks.save ();
      callbacks["strokeStyle"] = "#FFAAAA";
      callbacks["lineWidth"] = 10;
      callbacks["lineJoin"] = "round";
      callbacks["globalAlpha"] = .5;
      callbacks.beginPath ();
      i = 0;
      for (; i < stack["length"]; i++) {
        callbacks.moveTo (stack[i]["x"], stack[i]["y"]);
        callbacks.lineTo (message, oldValue);
      }
      callbacks.stroke ();
      callbacks.restore ();
    }
    if (callbacks.restore (), callbacks["globalAlpha"] = 1, val && val["width"] && callbacks.drawImage (val, height - val["width"] - 10, 10), e && e["width"] && callbacks.drawImage (e, 10, number - e["height"] - 50), key = callback(), actual = Math.max (loc, key), loc = key, 0 != loc && (null == that ? that = new obj(24, title ? "#FFFFFF" : "#626262") : that.setColor (title ? "#FFFFFF" : "#626262"), that.setValue ("Mass: " + ~~(loc / 100)), 
    key = that.render (), callbacks["globalAlpha"] = 1, callbacks.drawImage (key, 15, 15)), (0 < stack["length"] || source["isSpectating"]) && (!result && (result = new obj(15, "#FFFFFF")), result.setValue ("x : " + angle.toFixed (0) + " / y : " + ha.toFixed (0)), key = result.render (), data = key["width"] + 20, options = key["height"] + 2, callbacks.beginPath (), callbacks.moveTo (18, 50), callbacks.arcTo (10 + data, 50, 10 + data, 
    50 + options, 8), callbacks.arcTo (10 + data, 50 + options, 10, 50 + options, 8), callbacks.arcTo (10, 50 + options, 10, 50, 8), callbacks.arcTo (10, 50, 10 + data, 50, 8), callbacks.closePath (), callbacks["globalAlpha"] = .7, callbacks["fillStyle"] = "#000000", callbacks.fill (), callbacks["globalAlpha"] = 1, callbacks.drawImage (key, 20, 51), value && value["width"] && callbacks.drawImage (value, 10, 85)), privacyCheckRequired && !user && deactivatedEntityErr) {
      socketHandler.clearRect (0, 0, 200, 200);
      socketHandler.save ();
      data = 200 / Math.max (type - node, old - match);
      socketHandler.scale (data, data);
      socketHandler.translate (-node, -match);
      socketHandler["globalAlpha"] = r ? .5 : .9;
      socketHandler["lineWidth"] = Math.ceil (1 / data);
      min = parts["length"];
      i = 0;
      for (; min > i; i++) {
        options = parts[i];
        if (options["shouldUpdate"] && (options["x"] != options["nx"] || options["y"] != options["ny"])) {
          options.drawMinimapCell (socketHandler, data);
        }
      }
      min = args["length"];
      i = 0;
      for (; min > i; i++) {
        options = args[i];
        if (3 != options["cellType"] && 1 != options["cellType"] || options["shouldUpdate"] && (options["x"] != options["nx"] || options["y"] != options["ny"])) {
          options.drawMinimapCell (socketHandler, data);
        }
      }
      socketHandler.restore ();
      privacyCheckRequired = false;
    }
    indexOf(callbacks);
    forEach(callbacks);
    var func_start_pos = Date.now () - b;
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
      options.save ();
      options["globalAlpha"] = 1;
      var j = 0;
      for (; j < list["length"]; j++) {
        var a = list[j];
        if (a["identifier"] == c) {
          options.beginPath ();
          options["strokeStyle"] = "#0096ff";
          options["lineWidth"] = 6;
          options.arc (coordtransform["x"], coordtransform["y"], 40, 0, 2 * Math["PI"], true);
          options.stroke ();
          options.beginPath ();
          options["strokeStyle"] = "#0096ff";
          options["lineWidth"] = 2;
          options.arc (coordtransform["x"], coordtransform["y"], 60, 0, 2 * Math["PI"], true);
          options.stroke ();
          options.beginPath ();
          options["strokeStyle"] = "#0096ff";
          options.arc (PL$133["x"], PL$133["y"], 40, 0, 2 * Math["PI"], true);
          options.stroke ();
        } else {
          options.beginPath ();
          options["strokeStyle"] = "#0096ff";
          options["lineWidth"] = 6;
          options.arc (a["clientX"], a["clientY"], 40, 0, 2 * Math["PI"], true);
          options.stroke ();
        }
      }
      options.restore ();
    }
  }
  function calcStatus() {
    callbacks["globalAlpha"] = 1;
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
      var index = title ? "grid_dark" : "grid_white";
      var img = images[index + dstWidth];
      if (null == img) {
        images[index + "1"] = new Image;
        images[index + "1"]["src"] = "img/" + index + "1.jpg";
        images[index + "2"] = new Image;
        images[index + "2"]["src"] = "img/" + index + "2.jpg";
        images[index + "4"] = new Image;
        images[index + "4"]["src"] = "img/" + index + "4.jpg";
        images[index + "8"] = new Image;
        images[index + "8"]["src"] = "img/" + index + "8.jpg";
        img = images[index + dstWidth];
      }
      cur = a = img && img["complete"] && 0 != img["width"];
    }
    if (a && cur || (title ? (callbacks["fillStyle"] = "#11111", callbacks["globalAlpha"] = .4) : (callbacks["fillStyle"] = "#F2FBFF", callbacks["globalAlpha"] = 1), callbacks.fillRect (0, 0, height, number)), a) {
      if (callbacks.save (), cur) {
        var i = 2 * dstWidth;
        callbacks["fillStyle"] = fp;
        callbacks.scale (i * max, i * max);
        var r = (-angle + aYs) % (img["width"] * i);
        var n = (-ha + aps) % (img["height"] * i);
        if (r > 0) {
          r = r - img["width"] * i;
        }
        if (n > 0) {
          n = n - img["height"] * i;
        }
        callbacks.translate (r / i, n / i);
        callbacks.fillRect (0, 0, (height / max - r) / i, (number / max - n) / i);
      } else {
        callbacks["lineWidth"] = 1 / max;
        var j = Math.min (.2 * max, .3);
        if (title) {
          var h1 = ~~(17 + 153 * j);
          var h2 = h1;
          var b = h1;
          var line = (h1 << 16 | h2 << 8 | b).toString(16);
          for (; 6 > line["length"];) {
            line = "0" + line;
          }
        } else {
          h1 = ~~(242 + -242 * j);
          h2 = ~~(251 + -251 * j);
          b = ~~(255 + -255 * j);
          line = (h1 << 16 | h2 << 8 | b).toString(16);
          for (; 6 > line["length"];) {
            line = "0" + line;
          }
        }
        callbacks["strokeStyle"] = "#" + line;
        if (title) {
          callbacks["strokeStyle"] = "#1c283d";
        }
        callbacks.scale (max, max);
        r = height / max;
        n = number / max;
        var GROUPSIZE = 50 * dstWidth;
        i = -.5 + (-angle + aYs) % GROUPSIZE;
        for (; r > i; i = i + GROUPSIZE) {
          callbacks.beginPath ();
          callbacks.moveTo (i, 0);
          callbacks.lineTo (i, n);
          callbacks.stroke ();
        }
        i = -.5 + (-ha + aps) % GROUPSIZE;
        for (; n > i; i = i + GROUPSIZE) {
          callbacks.beginPath ();
          callbacks.moveTo (0, i);
          callbacks.lineTo (r, i);
          callbacks.stroke ();
        }
      }
      callbacks.restore ();
    }
    callbacks["globalAlpha"] = .8;
  }
  function indexOf(callbacks) {
    if (Yx) {
      callbacks["globalAlpha"] = 1;
      var n = ~~(height / 7);
      if (body && body["complete"] && body["width"]) {
        callbacks.drawImage (body, height - n, number - n, n, n);
      }
      if (element && element["complete"] && element["width"]) {
        callbacks.drawImage (element, height - n, number - 2 * n - 10, n, n);
      }
    }
  }
  function callback() {
    var resp = 0;
    var i = 0;
    for (; i < stack["length"]; i++) {
      resp = resp + stack[i]["nSize"] * stack[i]["nSize"];
    }
    return resp;
  }
  function getStart(view, offset, start, len, pos, i, cmp, item) {
    if (typeof item == "undefined") {
      item = true;
    }
    if (typeof i === "undefined") {
      i = 5;
    }
    view.beginPath ();
    view.moveTo (offset + i, start);
    view.lineTo (offset + len - i, start);
    view.quadraticCurveTo (offset + len, start, offset + len, start + i);
    view.lineTo (offset + len, start + pos - i);
    view.quadraticCurveTo (offset + len, start + pos, offset + len - i, start + pos);
    view.lineTo (offset + i, start + pos);
    view.quadraticCurveTo (offset, start + pos, offset, start + pos - i);
    view.lineTo (offset, start + i);
    view.quadraticCurveTo (offset, start, offset + i, start);
    view.closePath ();
    if (item) {
      view.stroke ();
    }
    if (cmp) {
      view.fill ();
    }
  }
  function remove() {
    if (!save || null == bottom && 0 == fftBinsOfFreq["length"]) {
      val = null;
      battery = null;
    } else {
      if (!val) {
        val = document.createElement ("canvas");
        battery = val.getContext ("2d");
      }
      var me = battery;
      var y = 60;
      y = null == bottom ? y + 24 * fftBinsOfFreq["length"] : y + 180;
      var item = Math.min (.22 * number, Math.min (200, .3 * height)) / 200;
      val["width"] = 200 * item;
      val["height"] = y * item;
      me.scale (item, item);
      if (title) {
        me["globalAlpha"] = .8;
      } else {
        me["globalAlpha"] = .7;
      }
      me["strokeStyle"] = "#000000";
      me["fillStyle"] = "rgb(22, 32, 56)";
      if (!title) {
        me["fillStyle"] = "#000000";
      }
      me["lineWidth"] = 2;
      getStart(me, 0, 0, 200, y, 8, true, true);
      me["fillStyle"] = "#EE7744";
      if (!title) {
        me["fillStyle"] = "#FFFFFF";
      }
      var e = "Leaderboard";
      me["font"] = "30px Ubuntu";
      me["shadowColor"] = "black";
      if (!title) {
        me["shadowColor"] = "";
      }
      me["shadowOffsetX"] = 1;
      me["shadowOffsetY"] = 1;
      me.fillText (e, 100 - me.measureText (e)["width"] / 2, 40);
      if (!title) {
        me["globalAlpha"] = 1;
      }
      var i;
      var options = ["#FF5656", "#EC6856", "#D97B56", "#C68E56", "#B3A156", "#A1B356", "#8EC656", "#7BD956", "#68EC56", "#56FF56", "#66FF66", "#77FF77", "#88FF88", "#99FF99", "#AAFFAA", "#BBFFBB", "#CCFFCC", "#DDFFDD", "#EEFFEE", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      if (null == bottom) {
        me["font"] = "18px Ubuntu";
        i = 0;
        for (; i < fftBinsOfFreq["length"]; ++i) {
          e = fftBinsOfFreq[i]["name"] || "An unnamed cell";
          if (!test) {
            e = "An unnamed cell";
          }
          if (-1 != indexMap.indexOf (fftBinsOfFreq[i]["id"])) {
            if (stack[0]["name"]) {
              e = stack[0]["name"];
            }
            me["fillStyle"] = "#FFAAAA";
            if (!Wx) {
              e = i + 1 + ". " + e;
            }
            me.fillText (e, 100 - me.measureText (e)["width"] / 2, 70 + 24 * i);
          } else {
            me["fillStyle"] = options[i];
            if (!title) {
              me["fillStyle"] = "#FFFFFF";
            }
            if (!Wx) {
              e = i + 1 + ". " + e;
            }
            me.fillText (e, 100 - me.measureText (e)["width"] / 2, 70 + 24 * i);
          }
        }
      } else {
        i = e = 0;
        for (; i < bottom["length"]; ++i) {
          var o = e + bottom[i] * Math["PI"] * 2;
          me["fillStyle"] = params[i + 1];
          me.beginPath ();
          me.moveTo (100, 140);
          me.arc (100, 140, 80, e, o, false);
          me.fill ();
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
    var endPos = args["length"];
    var index = 0;
    for (; endPos > index; index++) {
      config = args[index];
      x = (config["color"] + "").replace (/[^0-9a-f]/gi, "");
      if (x["length"] < 6) {
        x = x[0] + x[0] + x[1] + x[1] + x[2] + x[2];
      }
      f = parseInt(x.substr (0, 2), 16);
      l = parseInt(x.substr (2, 2), 16);
      v1 = parseInt(x.substr (4, 2), 16);
      path = (~~(f * s) << 16 | ~~(l * s) << 8 | ~~(v1 * s)).toString(16);
      for (; 6 > path["length"];) {
        path = "0" + path;
      }
      config["colorDimmed"] = "#" + path;
    }
  }
  function updateDevicesAfterDelay() {
    var buildFile;
    var num = args["length"];
    var i = 0;
    for (; num > i; i++) {
      buildFile = args[i];
      if ((0 == buildFile["cellType"] || 3 == buildFile["cellType"]) && buildFile["shape"] < 3) {
        buildFile["shape"] = options[buildFile["id"] % 100];
        buildFile["rotate"] = (2 * Math.random () - 1) * Math["PI"];
      }
    }
  }
  function notes(velocity_, pan_, $http, val, count, format) {
    this["id"] = velocity_;
    this["ox"] = this["x"] = pan_;
    this["oy"] = this["y"] = $http;
    this["oSize"] = this["size"] = this["strokeSize"] = val;
    this["color"] = count;
    this["points"] = [];
    this["pointsAcc"] = [];
    this.setName (format);
  }
  function obj(b, x, method, object) {
    if (b) {
      this["_size"] = b;
    }
    if (x) {
      this["_color"] = x;
    }
    this["_stroke"] = !!method;
    if (object) {
      this["_strokeColor"] = object;
    }
  }
  function initSortMenu() {
    if (a) {
      data["sSkins"] = current;
      data["sColors"] = !state;
      data["sNames"] = test;
      data["sMass"] = id;
      data["sMapBorder"] = !flagQuiet;
      data["sGrid"] = i;
      data["sFancyGrid"] = b;
      data["sDark"] = title;
      data["sAcid"] = name;
      data["sZoom"] = model;
      data["sLeaderboard"] = save;
      data["sChat"] = !_x$2;
      data["sMinimap"] = user;
      data["sLargeNames"] = next;
      data["sTransparentViruses"] = mmConfig;
      data["sPolygonShapes"] = row;
      data["sBubbleCells"] = r;
      source["localStorage"]["settings"] = JSON.stringify (data);
    }
  }
  function less(v, n) {
    require("#" + v).prop ("checked", n).change ();
    var e = require("#" + v).closest ("label", document.getElementById ("settings"));
    if (e) {
      e.animate ({
        padding : "0px 0px 0px 5px"
      }, 50);
      e.animate ({
        padding : "0px"
      }, 150);
    }
  }
  if (source["setserver"] = function(status) {
    if (status != mode) {
      CONNECTION_URL = status;
      mode = $("#agarios").find ("option:selected").attr ("mode");
      loop();
      jQuery("#playBtn").show ();
      jQuery("#SettingsBtn").show ();
      Pa = 0;
      var x = $("#agarios option:selected:selected").attr ("sname");
      "img/bg_" + x + ".jpg";
    }
  }, srV) {
    var artistTrack = "";
    var oa = "craft";
    var ha = "NA";
    if (srV == "craft") {
      artistTrack = "102.407.134.60:2021";
      oa = "craft";
      ha = "NA";
    } else {
      if (srV == "scania") {
        artistTrack = "108.61.410.196:2021";
        oa = "scania";
        ha = "EU";
      } else {
        if (srV == "alpha") {
          artistTrack = "25.34.186.119:2021";
          oa = "alpha";
          ha = "EU";
        } else {
          if (srV == "windia") {
            artistTrack = "102.407.126.439:2021";
            oa = "windia";
            ha = "NA";
          } else {
            if (srV == "athena") {
              artistTrack = "25.63.6.49:2021";
              oa = "athena";
              ha = "NA";
            } else {
              if (srV == "area51") {
                artistTrack = "107.191.26.131:240";
                oa = "area51";
                ha = "EU";
              } else {
                if (srV == "cham") {
                  artistTrack = "102.438.172.185:2021";
                  oa = "cham";
                  ha = "EU";
                } else {
                  if (srV == "soulsplit") {
                    artistTrack = "25.76.81.402:2021";
                    oa = "soulsplit";
                    ha = "EU";
                  } else {
                    if (srV == "sparta") {
                      artistTrack = "102.438.183.31:2021";
                      oa = "sparta";
                      ha = "NA";
                    } else {
                      if (srV == "instant") {
                        artistTrack = "25.63.6.49:2024";
                        oa = "instant";
                        ha = "NA";
                      } else {
                        if (srV == "insane") {
                          artistTrack = "102.407.126.439:2024";
                          oa = "insane";
                          ha = "NA";
                        } else {
                          if (srV == "ice2pop") {
                            artistTrack = "102.438.158.53:2021";
                            oa = "ice2pop";
                            ha = "EU";
                          } else {
                            artistTrack = "cellcraft.io:2021";
                            oa = "craft";
                            ha = "NA";
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
    if (window["setserver"]) {
      setserver(artistTrack);
      setTimeout(function() {
        $("#GameDisplay").attr ("src", "img/" + oa + ".png");
        $("#ContinentDisplay").attr ("src", "img/" + ha + ".png");
        $("#invite-link").val ("http://cellcraft.io/?server=" + oa);
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
  var supportTouch = "createTouch" in document;
  var list = [];
  var c = -1;
  var ix = 0;
  var PL$133 = new Vector2(0, 0);
  var coordtransform = new Vector2(0, 0);
  var leftTouchStartPos = new Vector2(0, 0);
  var d = "http://cellcraft.io/skins/";
  var _takingTooLongTimeout = null;
  var isPaused = false;
  var media = function() {
    var position = Date.now ();
    var first = 1e3 / 60;
    return function() {
      source.requestAnimationFrame (media);
      var count = Date.now ();
      var diff = count - position;
      if (diff > .75 * first) {
        position = count - diff % first;
        var zeroSizeMax = Date.now ();
        if (!requestAnimationFrame() || 240 > zeroSizeMax - pixelSizeTargetMax) {
          hide();
        } else {
          console.warn ("Skipping draw");
        }
      }
    };
  }();
  var Va = source["location"]["protocol"];
  var Pa = ("https:" == Va, 0);
  var rng = null;
  var PL$120 = [];
  var cDateString = "";
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
  var mode = "";
  var bottom = null;
  var reverseIsSingle = false;
  var isReplayingSong = true;
  var Ax = false;
  var timeout = 0;
  var response = 0;
  var message = 0;
  var oldValue = 0;
  var _newsource = 0;
  var params = ["#333333", "#FF3333", "#33FF33", "#3333FF"];
  var ruleValidationResult = 0;
  var Lx = false;
  var inputWin = false;
  var winRef = false;
  var n = 1;
  var third_hex = false;
  var pixelSizeTargetMax = 0;
  var privacyCheckRequired = false;
  var Yx = "ontouchstart" in source && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test (navigator["userAgent"]);
  var Wx = false;
  if (Yx) {
    body = new Image;
    body["src"] = "img/split.png";
    element = new Image;
    element["src"] = "img/feed.png";
  }
  source["isSpectating"] = false;
  clearbubble = setInterval(function() {
    var w = Date.now ();
    if (w - half_xgap > 3e5) {
      var tri = ["You still there?", "I'm bored!", "Ohh wake up!", "Knock knock...", "Spectating?<br>Try to play!"];
      var j = Math.floor (Math.random () * tri["length"]);
      transform(tri[j]);
    }
  }, 2e4);
  google1 = setInterval(function() {
    if (console.log ("google"), typeof window["ga"] == "function") {
      var _adjPageUri;
      _adjPageUri = q == "" || null == q ? "Spectator" : q;
      window.ga ("send", "event", _adjPageUri, CONNECTION_URL, (loc / 100).toFixed (0));
    }
  }, 3e4);
  updatestat = setInterval(function() {
    if (null != CONNECTION_URL && (loc && props.push (loc / 100), duedate = new Date, requestAnimationFrame())) {
      var msg = prepareData(5);
      msg.setUint8 (0, 90);
      msg.setUint32 (1, 2200049715, true);
      log(msg);
    }
    if (PL$120["length"] > 0) {
      var x = Date.now ();
      var PL$24 = 0;
      for (; PL$24 < PL$120["length"]; PL$24++) {
        if (x >= 6e4 + PL$120[PL$24]["ts"]) {
          PL$120.splice (PL$24, 1);
        }
      }
      wrapOverride();
    }
  }, 1750);
  var arr = {
    nickName : "",
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
    nickName : arr["nickName"],
    sSkins : arr["sSkins"],
    sColors : arr["sColors"],
    sNames : arr["sNames"],
    sMass : arr["sMass"],
    sMapBorder : arr["sMapBorder"],
    sGrid : arr["sGrid"],
    sFancyGrid : arr["sFancyGrid"],
    sDark : arr["sDark"],
    sAcid : arr["sAcid"],
    sZoom : arr["sZoom"],
    sLeaderboard : arr["sLeaderboard"],
    sChat : arr["sChat"],
    sMinimap : arr["sMinimap"],
    sSmoothRender : arr["sSmoothRender"],
    sLargeNames : arr["sLargeNames"],
    sTransparentViruses : arr["sTransparentViruses"],
    sCellBorders : arr["sCellBorders"],
    sPolygonShapes : arr["sPolygonShapes"],
    sBubbleCells : arr["sBubbleCells"]
  };
  var a = false;
  var q = null;
  var current = arr["sSkins"];
  var state = !arr["sColors"];
  var test = arr["sNames"];
  var id = arr["sMass"];
  var flagQuiet = !arr["sMapBorder"];
  var i = arr["sGrid"];
  var b = arr["sFancyGrid"];
  var title = arr["sDark"];
  var s = title ? .75 : .9;
  var name = arr["sAcid"];
  var model = arr["sZoom"];
  var save = arr["sLeaderboard"];
  var _x$2 = !arr["sChat"];
  var user = arr["sMinimap"];
  var inverseFlag = arr["sSmoothRender"];
  var ccw_flag = inverseFlag ? 40 : .4;
  var next = arr["sLargeNames"];
  var mmConfig = arr["sTransparentViruses"];
  var stop = arr["sCellBorders"];
  var row = arr["sPolygonShapes"];
  var r = arr["sBubbleCells"];
  source["setNick"] = function(quicktext) {
    if (a) {
      if (quicktext["length"] < 1) {
        quicktext = " ";
      }
      q = quicktext;
      var probeManager = ["hitler", "nazi", "porno", "fuck", "lul", "eikel", "mivabe.nl", "isis", "mivabe.com", "isis", "penis", "admin", "administrator", "hate", "terrorist", "i s i s"];
      var e = quicktext.toLowerCase ();
      on(42);
      if (probeManager.indexOf (e) > -1) {
        alert("Please choose a correct name - bad Nick");
      } else {
        if (CONNECTION_URL == "102.407.126.439:2024") {
          colr(5);
        }
        warnIfMissing();
        loc = 0;
        require(".btn-needs-nick").prop ("disabled", false);
        data["nickName"] = q;
        initSortMenu();
      }
      if (-1 != g.indexOf (e)) {
        console.log ("showing skin");
        require("#skin").show ();
        require("#skin").css ("background-image", "url(" + d + e + ".png)");
      } else {
        console.log ("hid skin");
        require("#skin").hide ();
      }
      show = 1;
    }
  };
  source["sendCaptchaInput"] = function(attrs) {
    if (attrs["length"] > 0) {
      var value = prepareData(4 + 2 * attrs["length"]);
      value.setUint8 (0, 100);
      value.setUint16 (1, attrs["length"]);
      var data = 3;
      var a;
      for (a in attrs) {
        value.setUint16 (data, attrs.charCodeAt (a));
        data = data + 2;
      }
      log(value);
    }
  };
  source["setRegion"] = resolve;
  source["closeStats"] = function(a) {
    require("#overlays").fadeIn (100);
    require("#advert").hide ();
  };
  source["spectate"] = function() {
    show = 1;
    if (0 == stack["length"]) {
      q = null;
      source["isSpectating"] = true;
      on(1);
    }
    warnIfMissing();
  };
  source["setGameMode"] = function(option) {
    if (option != mode) {
      mode = option;
      loop();
    }
  };
  source["setSkins"] = function(data) {
    current = data;
    initSortMenu();
  };
  source["setColors"] = function(returnedState) {
    state = returnedState;
    initSortMenu();
  };
  source["setNames"] = function(stubs) {
    test = stubs;
    remove();
    initSortMenu();
  };
  source["setShowMass"] = function(moose) {
    id = moose;
    initSortMenu();
  };
  source["setKoseGoster"] = function(flagVerbose) {
    flagQuiet = !flagVerbose;
    initSortMenu();
  };
  source["setHideGrid"] = function(maxAtomIndex) {
    i = maxAtomIndex;
    initSortMenu();
  };
  source["setFancyGrid"] = function(lastTagName) {
    b = lastTagName;
    if (b && a) {
      a = false;
      less("cGrid", true);
      a = true;
    }
    initSortMenu();
  };
  source["setDarkTheme"] = function(hawk) {
    title = hawk;
    s = title ? .75 : .9;
    unicodeSuperscript();
    remove();
    run();
    initSortMenu();
  };
  source["setAcid"] = function(content_script) {
    name = content_script;
    initSortMenu();
  };
  source["setZoom"] = function(_TestMode_) {
    model = _TestMode_;
    initSortMenu();
  };
  source["setLeaderboard"] = function(result) {
    save = result;
    remove();
    initSortMenu();
  };
  source["setHideChat"] = function(a) {
    _x$2 = a;
    run();
    if (_x$2) {
      require("#chtbox").hide ();
      require("#emojiBtn").hide ();
      require("#emojiDropdown").hide ();
    } else {
      require("#chtbox").show ();
      require("#emojiBtn").show ();
    }
    initSortMenu();
  };
  source["setHideMap"] = function(updatedUser) {
    user = updatedUser;
    if (user) {
      require("#minimap").hide ();
    } else {
      privacyCheckRequired = true;
      if (deactivatedEntityErr) {
        socketHandler.clearRect (0, 0, 200, 200);
      }
      require("#minimap").show ();
    }
    initSortMenu();
  };
  source["setSmooth"] = function(applist) {
    inverseFlag = applist;
    ccw_flag = inverseFlag ? 40 : .4;
    initSortMenu();
  };
  source["setLargeName"] = function($7) {
    next = $7;
    initSortMenu();
  };
  source["setVirusTrans"] = function($mmConfig) {
    mmConfig = $mmConfig;
    initSortMenu();
  };
  source["setHideCellBorders"] = function(opt_stop) {
    stop = opt_stop;
    initSortMenu();
  };
  source["setPolygonShapes"] = function(min_row) {
    row = min_row;
    if (row) {
      updateDevicesAfterDelay();
    }
    initSortMenu();
  };
  source["setBubbleCells"] = function(n) {
    r = n;
    if (r && a) {
      a = false;
      less("cSkins", false);
      less("cTransparentViruses", true);
      less("cCellBorders", true);
      a = true;
    }
    initSortMenu();
  };
  source["setAntiLag"] = function() {
    a = false;
    less("cFancyGrid", false);
    less("cSmoothRender", true);
    less("cLargeNames", false);
    less("cCellBorders", false);
    a = true;
    initSortMenu();
  };
  source["setDefaults"] = function() {
    a = false;
    less("cSkins", arr["sSkins"]);
    less("cColors", arr["sColors"]);
    less("cNames", arr["sNames"]);
    less("cMass", arr["sMass"]);
    less("cMapBorder", arr["sMapBorder"]);
    less("cGrid", arr["sGrid"]);
    less("cFancyGrid", arr["sFancyGrid"]);
    less("cDark", arr["sDark"]);
    less("cAcid", arr["sAcid"]);
    less("cZoom", arr["sZoom"]);
    less("cLeaderboard", arr["sLeaderboard"]);
    less("cChat", arr["sChat"]);
    less("cMinimap", arr["sMinimap"]);
    less("cSmoothRender", arr["sSmoothRender"]);
    less("cLargeNames", arr["sLargeNames"]);
    less("cTransparentViruses", arr["sTransparentViruses"]);
    less("cCellBorders", arr["sCellBorders"]);
    less("cPolygonShapes", arr["sPolygonShapes"]);
    less("cBubbleCells", arr["sBubbleCells"]);
    a = true;
    initSortMenu();
  };
  if (null != source["localStorage"]) {
    if (null == source["localStorage"]["AB8"]) {
      source["localStorage"]["AB8"] = ~~(100 * Math.random ());
    }
    _newsource = +source["localStorage"]["AB8"];
    source["ABGroup"] = _newsource;
  }
  setTimeout(function() {
  }, 3e5);
  ({
    ZW : "EU-London"
  });
  source["connect"] = onload;
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
  var g = "nina;moan;sponge;dreams;9001;dream;onyx;lost;tb;scaryt;win;spqr;redux;scar;coolava;ayushreal;kobk clan;kobkclan;kobk;view godz;macce;meeseeks;siliconenutscom;blackp;jasong;ghoul;rsp4;meznik;charmander;minions;bkmc;bring the acid;mr.berglund;s1ka;zoom;superioryt;orbz;middle finger;nerf;prettylittleliars;oriongaming;svcgang;svc gang;superior;fade;hypergamer;meh;sans;apex;uprisenation;justjaw;kong;snorre;blenderbots;blizxyt;shutiisdumb;juliaa;cute;cgf;spineyyt;nukevip;savage;kylfoiyt;jade dragon;buelukeyt;pika;sithagario;sithyt;olaf;krak;gfm;koala;saber;chameleonyt;mjam.tv;m8;hero;zerthek;sirius;idk;agarvipbots.com;alpha;kawaii;pig;team;caz;kappa;snorre;plz;cellcraft;bots;hello;agarvipbots;dirt-block;dog;dollar;donut;donuts;enderman;euro;evil;eye-of-sauron;eye;finn;heroy;ais;amie8;andromedag;areyouread;ari;armys e;b1ll;bemybae4;benh;bh;blackmamba;bumie;bz2;caleb9mam;chib;chibikille;chickieeee;chixmal;cjc;clavies2;cod;crashtwins;cutedragon;dacheeko;dewriotz;dogex;dogs of wa;doy doy;eli;ender;evil aes;fallout ma;feelsmikam;flatronx;fluttering;flyawaydog;for;frieza;ghostgamingyt;harambe;doge;keemstar;leafy;shrek;shrekt;vip;zystro;gotabot;hentai;hexlynx;hr1;ichika;jayart;jiji10;kap38;kappaglxy;kimi;kuntry;laito17;ldshadowla;less;lpmaster26;matrix;mcvillager;meany;mfg overlordx19;mika5;miku26;mitsunari;naruhina14;nfkrz;nj13;nl;o23;ozzyplaysh;panpan;pegasusdxd;penguinswa;petofi;pheurnt;phira;prokitty;pumpkinnin;r3venge1;ragers;reddog;reedreg;rekt123;risino15;sam 2;sana;sardor662;satanist;seid;skl;strongmiku;sword3;the darkin;thebeat;then;tmlion;trunks;tweetwanus;uniman;wadengamin;wuf;xeonix;yato;zev11;2ch.hk;4chan;8ch;9gag;arsenal;australia;austria;barcelona;bayern munich;bosnia;botswana;brazil;bulgaria;canada;china;denmark;dortmund;ea;earth;european union;germany;greece;hitler;india;indiana;indonesia;iran;iraq;italy;pugrillayt;burmple;flurmple;2ch;european union;maldivas;russia;4chan;facepunch;mars;sanik;8ch;feminism;matriarchy;satanist;9gag;finland;mexico;scotland;argentina;france;sealand;australia;french kingdom;sir;austria;german eempire;somalia;ayy lmao;germany;moon;south korea;bait;greece;nasa;spain;bangladesh;hitler;nazi;stalin;belarus;hong kong;netherlands;steam;belgium;hungary;nigeria;stussy;bosnia;imperial japan;north korea;sweden;botswana;norway;switzerland;brazil;indiana;origin;taiwan;bulgaria;india;pakistan;texas;byzantium;indonesia;patriarchy;cambodia;iran;peru;thailand;canada;iraq;pewdiepie;tsarist russia;chile;ireland;piccolo;tumblr;china;isis;pokerface;turkey;cia;italy;poland;ukraine;confederate;jamaica;portugal;united kingdom;croatia;japan;prodota;usa;denmark;jara;prussia;ussr;doge;kc;qing dynasty;vinesauce;ea;latvia;quebec;wojak;earth;lithuania;reddit;yaranaika;estonia;luxembourg;romania".split (";");
  var elm = new Image;
  elm["src"] = "img/flash.png";
  notes["prototype"] = {
    id : 0,
    color : "",
    colorDimmed : "",
    points : null,
    pointsAcc : null,
    name : null,
    skinName : "",
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
      if (this["smallFood"]) {
        var length = parts["length"];
        i = 0;
        for (; length > i; i++) {
          if (parts[i] == this) {
            parts.splice (i, 1);
            break;
          }
        }
      } else {
        length = args["length"];
        i = 0;
        for (; length > i; i++) {
          if (args[i] == this) {
            args.splice (i, 1);
            break;
          }
        }
      }
      delete cache[this["id"]];
      if (this["ownCell"]) {
        i = stack.indexOf (this);
        if (-1 != i) {
          gx = true;
          stack.splice (i, 1);
        }
      }
      i = indexMap.indexOf (this["id"]);
      if (-1 != i) {
        indexMap.splice (i, 1);
      }
      this["destroyed"] = true;
      this["shouldUpdate"] = true;
      if (onlyCss && 0 < this["drawn"]) {
        blockTimes.push (this);
      }
    },
    getNameSize : function() {
      return next ? 50 + ~~(.3 * this["size"]) : Math.max (~~(.3 * this["size"]), 24);
    },
    setName : function(a) {
      if (a !== this["name"] && (this["name"] = a)) {
        var e = this["name"].toLowerCase ();
        var o = "";
        if (e && e[0] == "[" && -1 != e.indexOf ("]")) {
          a = e.indexOf ("]");
          var hash_1 = a;
          if (-1 != a) {
            if (-1 != e.indexOf ("] ")) {
              ++hash_1;
            }
            o = e.slice (1, a);
            e = e.slice (hash_1 + 1, e["length"]);
            if (-1 != g.indexOf (o)) {
              e = o;
            }
          }
        }
        if (e && -1 != g.indexOf (e)) {
          this["skinName"] = e;
        } else {
          this["skinName"] = "";
        }
        var GET_AUTH_URL_TIMEOUT = this["name"];
        if (o != "") {
          var nullMatch = this["name"].slice (1, a);
          GET_AUTH_URL_TIMEOUT = this["name"].slice (hash_1 + 1, this["name"]["length"]);
          if (null == this["rclanCache"]) {
            this["rclanCache"] = new obj(~~(this.getNameSize () / 2 + .5), "#FFFFFF", true, "#000000");
            this["rclanCache"].setValue (nullMatch);
          } else {
            this["rclanCache"].setSize (~~(this.getNameSize () / 2 + .5));
            this["rclanCache"].setValue (nullMatch);
          }
        }
        if (null == this["nameCache"]) {
          if (a == "OniNoby" || a == "LKD70") {
            this["nameCache"] = new obj(this.getNameSize (), "#FFFF00", true, "#000000");
          } else {
            this["nameCache"] = new obj(this.getNameSize (), "#FFFFFF", true, "#000000");
          }
          this["nameCache"].setValue (GET_AUTH_URL_TIMEOUT);
        } else {
          this["nameCache"].setSize (this.getNameSize ());
          this["nameCache"].setValue (GET_AUTH_URL_TIMEOUT);
        }
      }
    },
    reloadImage : function() {
      if (0 != this["imageId"]) {
        var authors = null;
        if (current) {
          authors = images[this["imageId"]];
          if (null == authors) {
            images[this["imageId"]] = new Image;
            authors = images[this["imageId"]];
            authors["src"] = "img/" + ("" + this["imageId"]) + ".png";
          }
        }
        this["hasImage"] = true;
        this["imgLoaded"] = authors && authors["complete"] && 0 != authors["width"] ? authors : null;
      } else {
        if (this["skinName"] != "" && 1 != replyAsHtml) {
          authors = null;
          if (current) {
            if (entry.hasOwnProperty (this["skinName"])) {
              authors = entry[this["skinName"]];
            } else {
              entry[this["skinName"]] = new Image;
              authors = entry[this["skinName"]];
              authors["src"] = d + this["skinName"] + ".png";
            }
          }
          this["hasImage"] = true;
          this["imgLoaded"] = authors && authors["complete"] && 0 != authors["width"] ? authors : null;
        } else {
          this["hasImage"] = false;
          this["imgLoaded"] = null;
        }
      }
    },
    createPoints : function() {
      var a = this.getNumPoints ();
      for (; this["points"]["length"] > a;) {
        var artistTrack = ~~(Math.random () * this["points"]["length"]);
        this["points"].splice (artistTrack, 1);
        this["pointsAcc"].splice (artistTrack, 1);
      }
      if (0 == this["points"]["length"] && a > 0) {
        this["points"].push ({
          ref : this,
          size : this["size"],
          x : this["x"],
          y : this["y"]
        });
        this["pointsAcc"].push (Math.random () - .5);
      }
      for (; this["points"]["length"] < a;) {
        var hashhexlower = ~~(Math.random () * this["points"]["length"]);
        var row = this["points"][hashhexlower];
        this["points"].splice (hashhexlower, 0, {
          ref : this,
          size : row["size"],
          x : row["x"],
          y : row["y"]
        });
        this["pointsAcc"].splice (hashhexlower, 0, this["pointsAcc"][hashhexlower]);
      }
    },
    initPoints : function() {
      var indexLookupKey = 0;
      for (; indexLookupKey < this["points"]["length"]; indexLookupKey++) {
        this["points"][indexLookupKey]["size"] = this["size"];
      }
    },
    getNumPoints : function() {
      if (0 == this["id"]) {
        return 16;
      }
      var n = this["size"] * h;
      if (this["isVirus"]) {
        return n > 30 ? 1e3 > n ? ~~n : 1e3 : 30;
      }
      var m = 20 > this["size"] ? 0 : 10;
      return n = n * max, n > m ? 200 > n ? ~~n : 200 : m;
    },
    movePoints : function() {
      this.createPoints ();
      var a = this["points"];
      var v = this["pointsAcc"];
      var b = a["length"];
      var c = 0;
      for (; b > c; ++c) {
        var field = v[(c - 1 + b) % b];
        var msg = v[(c + 1) % b];
        v[c] += (Math.random () - .5) * (this["isAgitated"] ? 3 : 1);
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
      var offset = this["isVirus"] ? 0 : (this["id"] / 1e3 + block / 1e4) % (2 * Math["PI"]);
      var maxDist = 0;
      var i = 0;
      for (; b > i; ++i) {
        var html = a[i]["size"];
        var n = a[(i - 1 + b) % b]["size"];
        var d = a[(i + 1) % b]["size"];
        if (15 < this["size"] && (null != rng || 4 == this["cellType"]) && 20 < this["size"] * max && 0 != this["id"]) {
          var maximizingNode = false;
          var n = a[i]["x"];
          var offset = a[i]["y"];
          if (null != rng && ((this["isVirus"] ? 100 : 60) < this["size"] || this["ownCell"])) {
            rng.retrieve2 (n - 5, offset - 5, 10, 10, function(a) {
              if (a["ref"] != updatedAt && 25 > (n - a["x"]) * (n - a["x"]) + (offset - a["y"]) * (offset - a["y"])) {
                maximizingNode = true;
              }
            });
          }
          if (4 == this["cellType"]) {
            maximizingNode = !maximizingNode;
          }
          if ((!maximizingNode && a[i]["x"] < node || a[i]["y"] < match || a[i]["x"] > type || a[i]["y"] > old) && this["x"] > node - 100 && this["y"] > match - 100 && this["x"] < type + 100 && this["y"] < old + 100) {
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
        html = this["isAgitated"] ? (19 * html + this["size"]) / 20 : (12 * html + this["size"]) / 13;
        a[i]["size"] = (n + d + 8 * html) / 10;
        n = 2 * Math["PI"] / b;
        d = a[i]["size"];
        if (this["isVirus"] && 0 == i % 2) {
          d = d + 5;
        }
        a[i]["x"] = this["x"] + Math.cos (n * i + offset) * d;
        a[i]["y"] = this["y"] + Math.sin (n * i + offset) * d;
        if (d > maxDist) {
          maxDist = d;
        }
      }
      this["strokeSize"] = maxDist;
    },
    updatePos : function() {
      if (0 == this["id"]) {
        return 1;
      }
      var a = (block - this["updateTime"]) / 120;
      var self = 0 > a ? 0 : a > 1 ? 1 : a;
      if (this["x"] = self * (this["nx"] - this["ox"]) + this["ox"], this["y"] = self * (this["ny"] - this["oy"]) + this["oy"], this["size"] = self * (this["nSize"] - this["oSize"]) + this["oSize"], self >= 1 && (this["shouldUpdate"] = false, this["destroyed"])) {
        var tagParseOptions = blockTimes.indexOf (this);
        if (-1 != tagParseOptions) {
          blockTimes.splice (tagParseOptions, 1);
        }
      }
      return self;
    },
    shouldRender : function() {
      return 0 == this["id"] ? true : !(this["x"] + this["size"] + 40 < angle - height / 2 / max || this["y"] + this["size"] + 40 < ha - number / 2 / max || this["x"] - this["size"] - 40 > angle + height / 2 / max || this["y"] - this["size"] - 40 > ha + number / 2 / max);
    },
    drawOneCell : function(a) {
      if (this.shouldRender ()) {
        ++this["drawn"];
        var previousRow = row && this["shape"] >= 3;
        var _ = !this["isVirus"] && (ccw_flag > max || 1.2 - .002 * this["size"] * this["size"] > max) && !this["isAgitated"] && 0 != this["id"] || previousRow || 5 > this.getNumPoints ();
        if (!_ && this["wasSimpleDrawing"]) {
          this.initPoints ();
        }
        this["wasSimpleDrawing"] = _;
        var j;
        var s;
        var i = this["shouldUpdate"] ? this.updatePos () : 1;
        if (a.beginPath (), _) {
          if (0 != this["cellType"] || .4 > max ? this["strokeSize"] = this["size"] : (s = this["size"] < this["strokeSize"] ? 2 : 12, this["strokeSize"] = (s * this["strokeSize"] + this["size"]) / (s + 1)), previousRow) {
            this["rotate"] -= Math["PI"] / 1e3;
            if (this["rotate"] < -Math["PI"]) {
              this["rotate"] += 2 * Math["PI"];
            }
            j = this["shape"];
            var sign = this["strokeSize"] * t[j];
            var value = this["rotate"];
            var DEADZONE = 2 * Math["PI"] / j;
            a.moveTo (this["x"] + sign * Math.cos (value), this["y"] - sign * Math.sin (value));
            s = 1;
            for (; j > s; s++) {
              value = value + DEADZONE;
              a.lineTo (this["x"] + sign * Math.cos (value), this["y"] - sign * Math.sin (value));
            }
            a.closePath ();
          } else {
            a.arc (this["x"], this["y"], this["strokeSize"], 0, 2 * Math["PI"], false);
          }
        } else {
          this.movePoints ();
          j = this.getNumPoints ();
          a.moveTo (this["points"][0]["x"], this["points"][0]["y"]);
          s = 1;
          for (; j > s; ++s) {
            a.lineTo (this["points"][s]["x"], this["points"][s]["y"]);
          }
          a.closePath ();
        }
        j = 25 < this["size"] || !_ || r && (max > .4 || 20 < this["size"]);
        s = r ? j || 1 != this["cellType"] ? this["isVirus"] && !mmConfig ? .7 : .4 : .95 : this["isVirus"] && mmConfig ? .7 : .95;
        a["globalAlpha"] = this["destroyed"] ? s * (1 - i) : s;
        a["fillStyle"] = state ? "#FFFFFF" : this["color"];
        a.fill ();
        if (!(!j || stop && !this["isVirus"])) {
          s = this["isVirus"] && mmConfig && !r ? .7 : .95;
          a["globalAlpha"] = this["destroyed"] ? s * (1 - i) : s;
          a["lineWidth"] = r ? this["isVirus"] || 25 < this["size"] ? 6 : 4 : this["isVirus"] && 80 > this["size"] ? 8 : 10;
          a["lineJoin"] = this["isVirus"] ? "miter" : "round";
          a["strokeStyle"] = state ? "#AAAAAA" : r ? this["color"] : this["colorDimmed"];
          a.stroke ();
        }
        if (this["hasImage"] && current) {
          if (!this["imgLoaded"]) {
            this.reloadImage ();
          }
          if (this["imgLoaded"]) {
            a.save ();
            s = r ? 0 != this["imageId"] ? .5 : .3 : 0 != this["imageId"] ? .85 : .95;
            a["globalAlpha"] = this["destroyed"] ? s * (1 - i) : s;
            a.clip ();
            s = previousRow ? this["strokeSize"] * t[this["shape"]] : this["strokeSize"];
            if (s < this["size"]) {
              s = this["size"];
            }
            a.drawImage (this["imgLoaded"], this["x"] - s, this["y"] - s, 2 * s, 2 * s);
            a.restore ();
          }
        }
        if (1 == this["animId"]) {
          this.drawFlash (a);
        }
        if (0 == this["cellType"] && 30 <= this["size"]) {
          this.drawText (a, i);
        }
      } else {
        if (this["shouldUpdate"]) {
          this.updatePos ();
        }
      }
    },
    drawFlash : function(a) {
      var volume = (block - this["animStartTime"]) / 800;
      if (volume = 0 > volume ? 0 : volume > 1 ? 1 : volume, volume >= 1) {
        this["animId"] = 0;
      } else {
        var factor;
        var e = elm;
        if (e && e["complete"] && 0 != e["width"]) {
          factor = .2 > volume ? volume / .2 : 1 - (volume - .2) / .8;
          var c = this["size"] / 20;
          var transX = e["width"] * c * factor;
          var y3 = e["height"] * c * factor;
          a["globalAlpha"] = .7 * factor * factor;
          a.drawImage (e, this["x"] - transX / 2, this["y"] - y3 / 2, transX, y3);
        }
        if (.9 > volume) {
          factor = volume / .9;
          a.beginPath ();
          a.arc (this["x"], this["y"], 1.3 * this["size"] + 500 * factor, 0, 2 * Math["PI"], false);
          a["globalAlpha"] = .2 * (1 - factor) * (1 - factor);
          a["lineWidth"] = ~~(20 + .02 * this["size"]);
          a["strokeStyle"] = "#90A0FF";
          a.stroke ();
        }
      }
    },
    drawText : function(g, txt) {
      var inputWin = (test || this["ownCell"]) && this["name"] && this["nameCache"];
      var winRef = id && (this["ownCell"] || 0 == stack["length"]);
      if (inputWin || winRef) {
        g["globalAlpha"] = this["destroyed"] ? 1 - txt : 1;
        var op;
        var totalBright;
        var i;
        var u;
        var animationRate = this["y"];
        var length = Math.ceil (10 * max) / 10;
        if (inputWin) {
          if (this["rclanCache"]) {
            op = this["rclanCache"];
            op.setSize (~~(this.getNameSize () / 2 + .5));
            op.setScale (length);
            u = op.render ();
            totalBright = u["width"] / length;
            i = u["height"] / length;
            g.drawImage (u, this["x"] - totalBright / 2, animationRate - i / 2 - (u["height"] / .75 / length + 2), totalBright, i);
          }
          op = this["nameCache"];
          op.setSize (this.getNameSize ());
          op.setScale (length);
          u = op.render ();
          totalBright = u["width"] / length;
          i = u["height"] / length;
          g.drawImage (u, this["x"] - totalBright / 2, animationRate - i / 2, totalBright, i);
          animationRate = animationRate + (u["height"] / 1.5 / length + 4);
        }
        if (winRef) {
          if (null == this["sizeCache"]) {
            this["sizeCache"] = new obj(~~(this.getNameSize () / 2 + .5), "#FFFFFF", true, "#000000");
          }
          op = this["sizeCache"];
          op.setSize (~~(this.getNameSize () / 2 + .5));
          op.setValue (~~(this["size"] * this["size"] / 100));
          op.setScale (length);
          u = op.render ();
          totalBright = u["width"] / length;
          i = u["height"] / length;
          g.drawImage (u, this["x"] - totalBright / 2, animationRate - i / 2, totalBright, i);
        }
      }
    },
    drawMinimapCell : function(progress, progressadvanced) {
      var neededStaticPorts = this["nSize"] * progressadvanced;
      var e = neededStaticPorts > .6 ? this["nSize"] : ~~(.6 / progressadvanced);
      if (progress.beginPath (), row && this["shape"] >= 3 && neededStaticPorts > 2) {
        var n = this["shape"];
        var temp = e * t[n];
        var value = this["rotate"];
        var s = 2 * Math["PI"] / n;
        progress.moveTo (this["nx"] + temp * Math.cos (value), this["ny"] - temp * Math.sin (value));
        var MAX_INT32 = 1;
        for (; n > MAX_INT32; MAX_INT32++) {
          value = value + s;
          progress.lineTo (this["nx"] + temp * Math.cos (value), this["ny"] - temp * Math.sin (value));
        }
        progress.closePath ();
      } else {
        progress.arc (this["nx"], this["ny"], e, 0, 2 * Math["PI"], false);
      }
      progress["fillStyle"] = state ? "#FFFFFF" : this["color"];
      progress.fill ();
      if (neededStaticPorts > 2 && !stop) {
        progress["strokeStyle"] = state ? "#666666" : this["isVirus"] ? this["colorDimmed"] : title ? "#444444" : "#666666";
        progress.stroke ();
      }
      if (1 == this["animId"]) {
        progress.save ();
        this.drawFlash (progress);
        progress.restore ();
      }
    }
  };
  obj["prototype"] = {
    _value : "",
    _color : "#000000",
    _stroke : false,
    _strokeColor : "#000000",
    _size : 16,
    _canvas : null,
    _ctx : null,
    _dirty : false,
    _scale : 1,
    setSize : function(noComponentMultiply) {
      if (this["_size"] != noComponentMultiply) {
        this["_size"] = noComponentMultiply;
        this["_dirty"] = true;
      }
    },
    setScale : function(s) {
      if (this["_scale"] != s) {
        this["_scale"] = s;
        this["_dirty"] = true;
      }
    },
    setColor : function(_clr_hex) {
      if (this["_color"] != _clr_hex) {
        this["_color"] = _clr_hex;
        this["_dirty"] = true;
      }
    },
    setStrokeColor : function(b) {
      if (this["_strokeColor"] != b) {
        this["_strokeColor"] = b;
        this["_dirty"] = true;
      }
    },
    setValue : function(rfcDate) {
      if (rfcDate != this["_value"]) {
        this["_value"] = rfcDate;
        this["_dirty"] = true;
      }
    },
    render : function() {
      if (null == this["_canvas"] && (this["_canvas"] = document.createElement ("canvas"), this["_ctx"] = this["_canvas"].getContext ("2d")), this["_dirty"]) {
        this["_dirty"] = false;
        var MEMOIZED_FACT = this["_canvas"];
        var map = this["_ctx"];
        var e = this["_value"];
        var n = this["_scale"];
        var i = this["_size"];
        var len = i + "px Ubuntu";
        var value = 3;
        if (this["_stroke"]) {
          value = .05 / n;
          value = .03 > value ? .03 : value > .06 ? .06 : value;
          value = (1 > n ? 4 : 3) + ~~(value * i);
        }
        map["font"] = len;
        var step = ~~(.2 * i);
        MEMOIZED_FACT["width"] = (map.measureText (e)["width"] + 2 * value) * n;
        MEMOIZED_FACT["height"] = (i + step) * n;
        map["font"] = len;
        map.scale (n, n);
        map["globalAlpha"] = 1;
        if (this["_stroke"]) {
          map["lineWidth"] = value;
          map["strokeStyle"] = this["_strokeColor"];
          map.strokeText (e, value, i - step / 2);
        }
        map["fillStyle"] = this["_color"];
        map.fillText (e, value, i - step / 2);
      }
      return this["_canvas"];
    },
    getWidth : function() {
      return callbacks.measureText (this._value)["width"] + 6;
    }
  };
  if (!Date["now"]) {
    Date["now"] = function() {
      return (new Date).getTime ();
    };
  }
  (function() {
    if (!source["requestAnimationFrame"]) {
      source["requestAnimationFrame"] = function(_nextEventFunc) {
        return setTimeout(_nextEventFunc, 1e3 / 60);
      };
    }
  })();
  var pageSignUp = {
    init : function(data) {
      function args(name, windowInstance, scope, fnNode, mustComply) {
        this["x"] = name;
        this["y"] = windowInstance;
        this["w"] = scope;
        this["h"] = fnNode;
        this["depth"] = mustComply;
        this["items"] = [];
        this["nodes"] = [];
      }
      var s = data["maxChildren"] || 2;
      var e = data["maxDepth"] || 4;
      args["prototype"] = {
        x : 0,
        y : 0,
        w : 0,
        h : 0,
        depth : 0,
        items : null,
        nodes : null,
        exists : function(a) {
          var i = 0;
          for (; i < this["items"]["length"]; ++i) {
            var g = this["items"][i];
            if (g["x"] >= a["x"] && g["y"] >= a["y"] && g["x"] < a["x"] + a["w"] && g["y"] < a["y"] + a["h"]) {
              return true;
            }
          }
          if (0 != this["nodes"]["length"]) {
            var indexesByNodeName = this;
            return this.findOverlappingNodes (a, function(name) {
              return indexesByNodeName["nodes"][name].exists (a);
            });
          }
          return false;
        },
        retrieve : function(question_set_id, cb) {
          var name = 0;
          for (; name < this["items"]["length"]; ++name) {
            cb(this["items"][name]);
          }
          if (0 != this["nodes"]["length"]) {
            var indexesByNodeName = this;
            this.findOverlappingNodes (question_set_id, function(name) {
              indexesByNodeName["nodes"][name].retrieve (question_set_id, cb);
            });
          }
        },
        insert : function(datum) {
          if (0 != this["nodes"]["length"]) {
            this["nodes"][this.findInsertNode (datum)].insert (datum);
          } else {
            if (this["items"]["length"] >= s && this["depth"] < e) {
              this.devide ();
              this["nodes"][this.findInsertNode (datum)].insert (datum);
            } else {
              this["items"].push (datum);
            }
          }
        },
        findInsertNode : function(a) {
          return a["x"] < this["x"] + this["w"] / 2 ? a["y"] < this["y"] + this["h"] / 2 ? 0 : 2 : a["y"] < this["y"] + this["h"] / 2 ? 1 : 3;
        },
        findOverlappingNodes : function(a, b) {
          return a["x"] < this["x"] + this["w"] / 2 && (a["y"] < this["y"] + this["h"] / 2 && b(0) || a["y"] >= this["y"] + this["h"] / 2 && b(2)) || a["x"] >= this["x"] + this["w"] / 2 && (a["y"] < this["y"] + this["h"] / 2 && b(1) || a["y"] >= this["y"] + this["h"] / 2 && b(3)) ? true : false;
        },
        devide : function() {
          var fftBinsOfFreq = this["depth"] + 1;
          var i = this["w"] / 2;
          var e = this["h"] / 2;
          this["nodes"].push (new args(this["x"], this["y"], i, e, fftBinsOfFreq));
          this["nodes"].push (new args(this["x"] + i, this["y"], i, e, fftBinsOfFreq));
          this["nodes"].push (new args(this["x"], this["y"] + e, i, e, fftBinsOfFreq));
          this["nodes"].push (new args(this["x"] + i, this["y"] + e, i, e, fftBinsOfFreq));
          fftBinsOfFreq = this["items"];
          this["items"] = [];
          i = 0;
          for (; i < fftBinsOfFreq["length"]; i++) {
            this.insert (fftBinsOfFreq[i]);
          }
        },
        clear : function() {
          var indexLookupKey = 0;
          for (; indexLookupKey < this["nodes"]["length"]; indexLookupKey++) {
            this["nodes"][indexLookupKey].clear ();
          }
          this["items"]["length"] = 0;
          this["nodes"]["length"] = 0;
        }
      };
      var ret = {
        x : 0,
        y : 0,
        w : 0,
        h : 0
      };
      return {
        root : new args(data["minX"], data["minY"], data["maxX"] - data["minX"], data["maxY"] - data["minY"], 0),
        insert : function(datum) {
          this["root"].insert (datum);
        },
        retrieve : function(question_set_id, cb) {
          this["root"].retrieve (question_set_id, cb);
        },
        retrieve2 : function(callback, a, b, c, d) {
          ret["x"] = callback;
          ret["y"] = a;
          ret["w"] = b;
          ret["h"] = c;
          this["root"].retrieve (ret, d);
        },
        exists : function(localeName) {
          return this["root"].exists (localeName);
        },
        clear : function() {
          this["root"].clear ();
        }
      };
    }
  };
  require(function() {
    function _pollWhileActive() {
      if (0 < stack["length"]) {
        accountsCallbacks["color"] = stack[0]["color"];
        accountsCallbacks["colorDimmed"] = stack[0]["colorDimmed"];
        accountsCallbacks.setName (stack[0]["name"]);
      }
      e.clearRect (0, 0, 32, 32);
      e.save ();
      e.translate (16, 16);
      e.scale (.4, .4);
      e["lineCap"] = "round";
      accountsCallbacks.drawOneCell (e);
      e.restore ();
      var artistTrack = document.getElementById ("favicon");
      var GET_AUTH_URL_TIMEOUT = artistTrack.cloneNode (true);
      GET_AUTH_URL_TIMEOUT.setAttribute ("href", _.toDataURL ("image/png"));
      artistTrack["parentNode"].replaceChild (GET_AUTH_URL_TIMEOUT, artistTrack);
    }
    var accountsCallbacks = new notes(0, 0, 0, 32, "#ED1C24", "");
    accountsCallbacks["colorDimmed"] = "#B1151B";
    var _ = document.createElement ("canvas");
    _["width"] = 32;
    _["height"] = 32;
    var e = _.getContext ("2d");
    _pollWhileActive();
    setInterval(_pollWhileActive, 7500);
    setInterval(run, 1e3);
  });
  source["onload"] = handle;
}(window, window["jQuery"]), $(document).ready (function() {
  $("#chtbox").bind ("cut copy paste", function(a) {
    a.preventDefault ();
  });
}), $(document).ready (function() {
  $(document).keydown (function(a) {
    if (!(!a["ctrlKey"] || a["which"] != "90" && a["which"] != "122")) {
      a.preventDefault ();
    }
  });
});
