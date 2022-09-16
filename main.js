const canvas = document.querySelector('#main');



const ctx = canvas.getContext('2d');

let lightCoords = [[480, 504], [498, 532], [524, 534], [529, 523], [532, 501], [536, 477], [552, 476], [553, 457], [560, 438], [542, 414], [542, 402], [562, 380], [563, 371], [543, 346], [548, 330], [561, 306], [549, 284], [549, 263], [548, 244], [562, 219], [564, 199], [559, 181], [552, 156], [556, 142], [556, 126], [544, 128], [546, 151], [558, 170], [552, 195], [553, 204], [564, 222], [569, 252], [555, 271], [565, 287], [579, 305], [573, 316], [571, 333], [583, 362], [583, 376], [579, 398], [578, 418], [572, 436], [573, 455], [598, 476], [576, 488], [581, 514], [583, 522], [604, 523], [593, 555], [601, 574], [656, 599], [670, 573], [667, 559], [667, 542], [667, 527], [671, 501], [647, 484], [659, 462], [653, 454], [665, 444], [670, 420], [657, 403], [661, 380], [648, 370], [667, 346], [658, 324], [661, 304], [660, 281], [664, 258], [658, 235], [645, 202], [657, 185], [648, 166], [644, 141], [648, 116], [656, 95], [651, 115], [653, 139], [649, 162], [665, 183], [668, 208], [666, 227], [671, 247], [674, 275], [656, 299], [662, 310], [661, 329], [659, 353], [660, 374], [664, 387], [664, 414], [686, 426], [667, 448], [684, 463], [673, 470], [677, 496], [677, 509], [678, 532], [678, 542], [686, 551], [734, 594], [733, 577], [736, 571], [714, 547], [738, 533], [721, 509], [733, 482], [735, 464], [725, 440], [717, 422], [733, 404], [713, 376], [718, 357], [728, 333], [708, 322], [712, 295], [727, 276], [717, 249], [706, 227], [723, 213], [719, 180], [725, 158], [723, 132], [704, 108], [725, 83], [730, 114], [712, 135], [732, 161], [732, 185], [736, 214], [726, 229], [719, 256], [722, 285], [740, 308], [726, 330], [728, 357], [730, 380], [740, 392], [736, 422], [757, 449], [740, 466], [744, 493], [748, 515], [752, 539], [758, 561], [782, 582], [766, 599], [786, 617], [778, 632], [796, 648], [847, 638], [850, 607], [855, 593], [841, 562], [864, 557], [868, 522], [851, 517], [872, 485], [854, 462], [864, 435], [879, 418], [857, 390], [880, 371], [873, 344], [872, 321], [885, 298], [869, 271], [887, 248], [885, 224], [875, 211], [895, 179], [875, 162], [891, 130], [896, 98], [883, 80], [886, 58], [891, 86], [874, 117], [880, 147], [882, 171], [889, 198], [871, 219], [870, 252], [887, 284], [869, 301], [883, 328], [882, 352], [884, 379], [858, 400], [881, 425], [858, 437], [873, 465], [856, 489], [870, 512], [866, 522], [862, 552], [854, 569], [840, 591], [833, 597], [860, 619], [811, 617], [786, 599], [811, 581], [791, 556], [791, 542], [792, 515], [809, 496], [790, 483], [806, 461], [796, 437], [793, 419], [800, 389], [795, 371], [808, 352], [801, 329], [814, 306], [792, 288], [809, 270], [812, 248], [790, 227], [813, 203], [813, 180], [797, 159], [820, 136], [795, 117], [810, 89], [824, 88], [814, 107], [794, 129], [796, 155], [788, 188], [805, 208], [782, 235], [800, 253], [774, 277], [792, 297], [787, 323], [774, 340], [769, 361], [765, 383], [765, 409], [758, 426], [743, 446], [756, 471], [749, 493], [724, 506], [717, 521], [724, 545], [717, 554], [714, 577], [657, 559], [646, 576], [628, 572], [618, 554], [609, 547], [633, 520], [627, 509], [610, 489], [605, 475], [626, 448], [619, 429], [623, 412], [623, 397], [601, 374], [599, 359], [612, 344], [600, 320], [600, 307], [593, 283], [598, 269], [591, 252], [605, 225], [608, 200], [601, 183], [586, 167], [589, 143], [585, 125], [626, 99], [596, 131], [587, 150], [604, 174], [580, 190], [602, 212], [582, 229], [595, 251], [591, 266], [594, 285], [587, 307], [567, 328], [565, 342], [575, 362], [573, 384], [559, 396], [560, 416], [550, 434], [499, 443], [510, 440], [495, 404], [479, 408], [464, 437]];

let xS = [];
let yS = [];

for (let i=0; i<lightCoords.length; i++) {
  xS.push(lightCoords[i][0]);
  yS.push(lightCoords[i][1]);
}

xS.sort(function(a, b) {
  return a - b;
});
yS.sort(function(a, b) {
  return a - b;
});

canvas.width = 432 + 10;
canvas.height = 590 + 10;


function Circle (x, y, r, c) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;

  this.dx;
  this.dy;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(this.x + 5, this.y + 5, this.r, 0, Math.PI * 2);
    ctx.fill()
  }
}

function DrawBacklights() {
  const unlitBalls = [];
  for (var i = 0; i < 300; i++) {
    let x = lightCoords[i][0];
    let y = lightCoords[i][1];
    let THPW = 1;
    let THPH = 5;
    unlitBalls.push(new Circle(x - xS[0], y - yS[0], THPH, "#202020"));
  }
  for (let i = 0; i < unlitBalls.length; i++) {
    unlitBalls[i].draw();
  };
};

function DrawLights(rotNum) {
  let litBalls = [];
  for (var i = 0; i < lightOrder[rotNum].length; i++) {
    let x = lightCoords[lightOrder[rotNum][i]][0];
    let y = lightCoords[lightOrder[rotNum][i]][1];
    let PW = canvas.width/160;
    let PH = 4;
    litBalls.push(new Circle(x - xS[0], y - yS[0], PH, "white"));
  };
  return litBalls;
};

function Animate(rotNum) {
  DrawBacklights();
  let litBalls = DrawLights(rotNum);
  for (let i = 0; i < DrawLights(rotNum).length; i++) {
    litBalls[i].draw();
  }
};

let j = 0;
function iterate() {
  if (i >= lightOrder.length){
    if (j > 100) {
      clearInterval(interval);
    }
    i = 0;
    j++;
  }
  Animate(i);
  i++;
}
let i = 0;
let interval = setInterval(iterate, 25)


// let j = 0;
// Animate(j);
