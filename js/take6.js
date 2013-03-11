function drawCard(number, w, h, x, y) {
  var card = new Kinetic.Layer({
    x: x,
    y: y,
    scale: 1
  });
  card.add(drawRect(w, h));
  if( 0 == (number % 5) && 0 == ( number % 11) ) {
    drawRawCard(card, number, 7);
  } else if( 0 == (number % 11) ) {
    drawRawCard(card, number, 5);
  } else if( 0 == (number % 10) ) {
    drawRawCard(card, number, 3);
  } else if( 0 == (number % 5) ) {
    drawRawCard(card, number, 2);
  } else {
    drawRawCard(card, number, 1);
  }
  return card;
}

function drawRect(w, h) {
  var rr = new Kinetic.Rect({
    width: w,
    height: h,
    stroke: 'black',
    strokeWidth: 3,
    fill: 'white',
    cornerRadius: 15
  });
  return rr;
}

function drawRawCard(card, number, score) {
  card.add(drawBackground(
      CARD_SPEC[score].BG.COLOR,
      CARD_SPEC[score].BG.DATA
  ));

  card.add(drawLogo(
    CARD_SPEC[score].LOGO.COLOR,
    CARD_SPEC[score].LOGO.SCALE,
    CARD_SPEC[score].LOGO.POS[0]
  ));

  for(var para in CARD_SPEC[score].SCORES.DATA ){
    card.add(drawLogo(
      CARD_SPEC[score].SCORES.COLOR,
      CARD_SPEC[score].SCORES.SCALE,
      CARD_SPEC[score].SCORES.DATA[para]
    ));
  }

  card.add(drawText(
    number,
    CARD_SPEC[score].NUMS.LARGE.SCALE,
    CARD_SPEC[score].NUMS.LARGE.COLOR_T,
    CARD_SPEC[score].NUMS.LARGE.COLOR_S,
    CARD_SPEC[score].NUMS.LARGE.POS[0]
  ));

  for(var para in CARD_SPEC[score].NUMS.SMALL.POS ){
    card.add(drawText(
      number,
      CARD_SPEC[score].NUMS.SMALL.SCALE,
      CARD_SPEC[score].NUMS.SMALL.COLOR_T,
      CARD_SPEC[score].NUMS.SMALL.COLOR_S,
      CARD_SPEC[score].NUMS.SMALL.POS[para]
    ));
  }
}

function drawLogo(color, scale, pos) {
  var TAKE6SVGDATA = 'm 35.9487,978.1695 c 0.52367,-4.0812 -0.32729,-5.5952 0.19639,-9.6763 -4.5821,-2.1064 -8.3787,-4.8052 -12.961,-6.9116 -0.98188,4.147 0.98187,9.0839 0,13.231 2.8802,2.5013 3.993,3.423 6.8732,5.9242 -6.4804,1.6456 -9.8188,3.4888 -16.299,5.1344 -0.45234,-10.207 4.5821,-20.8 7.0695,-33.373 -9.2781,13.991 -21.739,39.892 -20.619,41.865 0.66614,1.1741 18.787,2.4355 33.188,2.5673 -4.6476,5.1345 -9.2951,10.269 -13.943,15.403 5.0403,6.4512 10.081,12.902 15.121,19.352 -5.6294,2.1065 -11.259,4.2123 -16.888,6.3188 2.8802,3.0275 5.7604,6.0557 8.6405,9.0831 2.6183,-0.5264 5.2367,-1.0523 7.855,-1.579 0.13092,2.0404 0.26184,4.0812 0.39275,6.1215 3.2075,0.1973 6.2185,0.3951 9.424485,0.6085 3.205985,-0.1811 6.216985,-0.3789 9.424485,-0.5762 0.13091,-2.0403 0.26184,-4.0811 0.39275,-6.1215 2.6183,0.5267 5.2366,1.0526 7.855,1.579 2.8801,-3.0274 5.7603,-6.0556 8.6405,-9.0831 -5.629,-2.1065 -11.2586,-4.2123 -16.888,-6.3188 5.04,-6.45 10.0807,-12.9008 15.121,-19.352 -4.6479,-5.134 -9.2954,-10.2685 -13.943,-15.403 14.401,-0.1318 32.52187,-1.3932 33.188,-2.5673 1.12,-1.973 -11.3409,-27.874 -20.619,-41.865 2.4874,12.573 7.52184,23.166 7.0695,33.373 -6.4802,-1.6456 -9.8186,-3.4888 -16.299,-5.1344 2.8802,-2.5012 3.993,-3.4229 6.8732,-5.9242 -0.98188,-4.1471 0.98188,-9.084 0,-13.231 -4.5823,2.1064 -8.3789,4.8052 -12.961,6.9116 0.52367,4.0811 -0.32729,5.5951 0.19638,9.6763 -4.2548,-2.633 -3.7965,-1.3165 -8.05082,-3.96565 -4.25432,2.61685 -3.79602,1.30035 -8.05082,3.93335 z';
  var TAKE6SVGWIDTH = 88;
  var TAKE6SVGHEIGHT = 100;

  var take6 = new Kinetic.Path({
    data: TAKE6SVGDATA,
    x: pos[0],
    y: pos[1],
    width: TAKE6SVGWIDTH,
    height: TAKE6SVGHEIGHT,
    offset: {
      x: TAKE6SVGWIDTH / 2,
      y: 952.36218 + TAKE6SVGHEIGHT / 2,
    },
    scale: scale,
    fill: color
  });
  take6.setRotationDeg(pos[2]);
  return take6;
}

function drawBackground(color, data) {
  var polyBackground = new Kinetic.Polygon({
    points: data,
    fill: color,
    strokeWidth: 0
  });
  return polyBackground;
}

function drawText(number, scale, fill, stroke, pos) {
  var text = new Kinetic.Text({
    x: pos[0],
    y: pos[1],
    width: 60,
    height: 60,
    scale: scale,
    fontSize: 59,
    fontStyle: 'bold',
    fill: fill,
    stroke: stroke,
    strokeWidth: 2,
    align: 'center',
    offset: {
      x: 30,
      y: 30
    },
    text: number.toString()
  });
  text.setRotationDeg(pos[2]);
  return text;
}
