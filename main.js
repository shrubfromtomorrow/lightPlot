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

let width = (xS[xS.length-1] - xS[0])+10;
let height = (yS[yS.length-1] - yS[0])+10;
canvas.width = window.innerHeight;
canvas.height = window.innerWidth;


let lightOrder = [[111, 111, 111, 111, 111, 111, 110, 109, 109, 109, 109, 109, 109, 91, 91, 91, 92, 92, 92, 58, 58, 259, 259, 260, 260, 260, 40, 39, 39, 38, 38, 290, 289, 36, 35, 287, 286, 269, 269, 284, 69, 69, 81, 80, 118, 119, 129, 129, 219, 219, 219, 218, 182, 166, 166, 165, 185, 185, 186, 187, 160, 189, 191, 157, 193, 155, 154, 196, 152, 198, 200, 148, 148, 148, 50],
[111, 111, 111, 111, 111, 110, 109, 109, 109, 109, 109, 109, 91, 91, 91, 92, 92, 59, 59, 58, 259, 259, 260, 260, 260, 261, 39, 39, 38, 37, 37, 36, 36, 287, 287, 286, 269, 269, 284, 69, 69, 81, 81, 118, 119, 129, 129, 232, 219, 218, 218, 182, 166, 183, 165, 185, 186, 187, 187, 189, 189, 191, 157, 193, 155, 154, 196, 197, 200, 147, 148, 148, 100, 50, 50],
[111, 111, 111, 111, 111, 109, 109, 109, 109, 109, 109, 91, 91, 91, 91, 59, 59, 59, 59, 259, 260, 260, 260, 261, 261, 39, 263, 38, 37, 37, 36, 266, 287, 267, 286, 269, 269, 68, 69, 69, 81, 118, 118, 119, 129, 129, 232, 219, 218, 218, 166, 166, 184, 165, 185, 186, 187, 187, 189, 189, 191, 157, 193, 155, 154, 196, 198, 200, 147, 148, 148, 100, 50, 50, 50],
[111, 111, 111, 111, 111, 109, 109, 109, 109, 91, 91, 91, 91, 91, 59, 59, 59, 59, 259, 260, 260, 261, 261, 262, 262, 263, 263, 264, 264, 264, 266, 266, 267, 286, 269, 269, 68, 69, 69, 81, 118, 118, 130, 129, 232, 232, 219, 218, 218, 166, 166, 184, 185, 185, 186, 187, 187, 189, 189, 191, 157, 193, 155, 154, 196, 198, 200, 148, 148, 148, 100, 50, 50, 50, 49],
[111, 111, 111, 111, 111, 109, 109, 109, 91, 91, 91, 91, 91, 60, 59, 59, 59, 90, 260, 261, 261, 261, 262, 262, 263, 263, 264, 264, 265, 266, 266, 267, 286, 269, 269, 68, 68, 82, 82, 118, 118, 130, 129, 232, 232, 233, 218, 217, 166, 184, 184, 185, 186, 186, 187, 160, 189, 191, 191, 157, 193, 195, 196, 197, 198, 147, 148, 148, 100, 50, 50, 50, 50, 49, 49],
[111, 111, 111, 111, 109, 109, 109, 91, 91, 91, 91, 91, 60, 60, 60, 90, 90, 261, 261, 261, 261, 262, 262, 263, 263, 264, 264, 265, 266, 266, 267, 267, 269, 67, 68, 68, 82, 82, 118, 118, 130, 130, 232, 232, 233, 218, 217, 166, 184, 184, 185, 186, 162, 187, 160, 189, 191, 157, 157, 155, 195, 153, 197, 202, 147, 148, 148, 100, 50, 50, 50, 50, 49, 49, 2],
[111, 111, 111, 111, 109, 91, 91, 91, 91, 91, 91, 60, 60, 60, 90, 90, 261, 261, 261, 262, 262, 262, 263, 263, 264, 265, 265, 266, 266, 267, 267, 67, 67, 68, 68, 82, 82, 118, 117, 130, 130, 232, 232, 233, 217, 217, 184, 184, 164, 185, 186, 187, 187, 160, 189, 191, 157, 193, 155, 195, 153, 202, 202, 147, 146, 100, 100, 50, 50, 50, 49, 49, 49, 2, 1],
[111, 111, 111, 111, 91, 91, 91, 91, 91, 91, 60, 60, 90, 90, 90, 61, 261, 261, 262, 262, 262, 263, 263, 264, 265, 265, 266, 266, 267, 84, 67, 67, 68, 68, 82, 82, 117, 117, 130, 232, 232, 233, 233, 217, 217, 184, 184, 164, 163, 186, 187, 187, 189, 189, 191, 157, 193, 194, 195, 153, 202, 201, 146, 146, 100, 100, 50, 50, 50, 49, 49, 49, 2, 1, 1],
[111, 111, 111, 111, 91, 91, 91, 91, 91, 60, 60, 90, 90, 90, 61, 61, 262, 262, 262, 262, 263, 263, 265, 265, 265, 266, 266, 267, 84, 67, 67, 68, 68, 82, 117, 117, 117, 130, 232, 232, 233, 217, 217, 215, 184, 184, 164, 163, 162, 187, 160, 189, 189, 191, 157, 193, 156, 153, 153, 202, 201, 146, 100, 100, 50, 50, 50, 50, 49, 49, 2, 2, 1, 1, 0],
[111, 111, 111, 111, 91, 91, 91, 60, 60, 60, 90, 90, 61, 61, 61, 262, 262, 262, 262, 263, 263, 265, 265, 265, 265, 266, 84, 84, 84, 67, 67, 83, 82, 117, 117, 131, 131, 234, 234, 233, 217, 217, 215, 215, 164, 163, 163, 162, 187, 160, 189, 191, 191, 157, 193, 156, 153, 202, 202, 201, 146, 100, 100, 50, 50, 50, 49, 49, 49, 2, 2, 1, 1, 0, 0],
[111, 111, 111, 91, 91, 91, 60, 60, 90, 90, 90, 61, 61, 61, 61, 262, 262, 262, 63, 265, 265, 265, 265, 265, 266, 84, 84, 84, 67, 83, 83, 83, 131, 131, 131, 131, 234, 234, 234, 217, 217, 215, 215, 164, 163, 163, 162, 187, 160, 189, 191, 191, 192, 156, 156, 153, 202, 145, 145, 146, 100, 100, 50, 50, 50, 49, 49, 49, 2, 2, 1, 0, 0, 0, 299],
[111, 111, 111, 91, 91, 60, 60, 90, 90, 90, 61, 61, 61, 61, 262, 262, 63, 63, 63, 265, 265, 265, 265, 65, 84, 84, 84, 67, 83, 83, 83, 131, 131, 131, 116, 234, 234, 216, 216, 215, 215, 215, 164, 163, 162, 162, 188, 160, 159, 191, 157, 192, 156, 156, 153, 203, 145, 146, 100, 100, 100, 50, 50, 50, 49, 49, 49, 2, 1, 1, 0, 0, 299, 299, 299],
[111, 111, 111, 89, 89, 90, 90, 90, 61, 61, 61, 61, 61, 63, 63, 63, 63, 63, 265, 265, 265, 65, 65, 84, 84, 84, 67, 83, 83, 83, 131, 131, 116, 116, 234, 234, 216, 216, 215, 215, 215, 163, 163, 162, 161, 188, 160, 159, 158, 192, 192, 156, 156, 204, 203, 145, 146, 100, 100, 249, 50, 50, 50, 49, 49, 48, 2, 1, 1, 0, 0, 299, 299, 299, 298],
[111, 111, 89, 89, 89, 89, 89, 61, 61, 61, 61, 61, 62, 63, 63, 63, 63, 63, 265, 265, 65, 65, 85, 84, 84, 67, 83, 83, 83, 131, 116, 116, 116, 234, 234, 216, 216, 215, 215, 215, 163, 163, 161, 161, 188, 159, 190, 158, 192, 192, 156, 156, 204, 203, 145, 146, 100, 100, 50, 50, 50, 252, 49, 49, 2, 2, 1, 1, 0, 0, 299, 299, 299, 298, 298],
[111, 111, 89, 89, 89, 89, 89, 89, 89, 89, 89, 62, 63, 63, 63, 63, 63, 87, 65, 65, 65, 85, 66, 66, 67, 83, 83, 115, 132, 116, 116, 116, 234, 234, 216, 235, 215, 215, 215, 163, 163, 161, 161, 188, 159, 190, 158, 192, 192, 156, 204, 204, 203, 144, 101, 100, 249, 50, 50, 50, 49, 49, 49, 2, 2, 1, 0, 0, 0, 299, 299, 298, 298, 298, 298],
[111, 111, 89, 89, 89, 89, 89, 89, 89, 89, 62, 63, 63, 63, 63, 87, 87, 86, 65, 65, 65, 85, 66, 66, 83, 83, 115, 132, 116, 116, 234, 234, 234, 235, 235, 215, 215, 213, 213, 161, 161, 188, 188, 190, 190, 158, 192, 156, 206, 204, 204, 203, 144, 101, 100, 249, 50, 50, 50, 49, 49, 48, 2, 2, 1, 0, 0, 299, 299, 299, 298, 298, 298, 298, 16],
[111, 111, 89, 89, 89, 89, 89, 89, 89, 62, 62, 63, 63, 63, 87, 87, 87, 86, 65, 65, 85, 66, 66, 83, 115, 115, 132, 132, 116, 234, 234, 235, 235, 235, 215, 214, 213, 213, 161, 161, 188, 188, 190, 158, 158, 192, 206, 206, 204, 204, 144, 144, 101, 249, 249, 50, 50, 252, 49, 49, 48, 2, 2, 1, 0, 0, 299, 299, 299, 298, 298, 298, 16, 17, 18],
[111, 89, 89, 89, 89, 89, 89, 89, 62, 62, 88, 63, 63, 87, 87, 87, 86, 65, 65, 85, 85, 66, 115, 115, 115, 132, 132, 116, 133, 234, 235, 235, 236, 214, 214, 213, 213, 161, 161, 188, 190, 190, 158, 158, 206, 206, 205, 204, 204, 144, 144, 101, 249, 51, 51, 251, 252, 49, 49, 48, 2, 2, 1, 0, 0, 299, 299, 298, 298, 298, 298, 16, 17, 18, 29],
[111, 89, 89, 89, 89, 89, 89, 62, 62, 88, 88, 87, 87, 87, 87, 86, 86, 65, 85, 85, 85, 115, 115, 115, 132, 132, 133, 133, 234, 235, 236, 236, 214, 214, 213, 213, 161, 161, 188, 190, 190, 158, 158, 206, 206, 205, 204, 204, 144, 102, 101, 249, 51, 51, 251, 252, 49, 48, 48, 2, 2, 0, 0, 299, 299, 299, 298, 298, 298, 298, 16, 17, 18, 28, 28],
[111, 89, 89, 89, 89, 89, 89, 62, 88, 88, 87, 87, 87, 64, 86, 86, 86, 85, 85, 85, 115, 115, 115, 115, 132, 133, 133, 133, 236, 236, 236, 214, 213, 213, 213, 161, 161, 188, 190, 190, 158, 208, 206, 206, 205, 204, 204, 144, 102, 249, 249, 51, 51, 251, 252, 49, 48, 2, 2, 3, 0, 0, 299, 299, 299, 298, 298, 298, 13, 16, 18, 18, 28, 28, 26],
[111, 89, 89, 89, 89, 89, 62, 88, 88, 88, 87, 87, 64, 64, 86, 86, 86, 85, 114, 114, 115, 115, 115, 133, 133, 133, 133, 236, 236, 236, 214, 213, 213, 213, 211, 161, 188, 190, 190, 208, 208, 206, 206, 205, 204, 143, 144, 102, 249, 249, 51, 251, 252, 49, 48, 48, 2, 3, 3, 0, 0, 299, 299, 298, 298, 298, 298, 16, 16, 18, 18, 28, 28, 26, 23],
[111, 89, 89, 89, 89, 62, 88, 88, 88, 87, 87, 64, 64, 64, 86, 86, 85, 114, 114, 114, 115, 115, 133, 133, 133, 133, 236, 236, 236, 214, 213, 213, 213, 211, 211, 188, 209, 208, 208, 208, 206, 206, 205, 204, 143, 143, 248, 248, 99, 51, 251, 252, 253, 48, 48, 3, 3, 4, 0, 295, 299, 299, 298, 298, 298, 298, 16, 17, 18, 18, 28, 26, 26, 23, 276],
[111, 89, 89, 89, 89, 62, 88, 88, 87, 87, 64, 64, 64, 64, 86, 114, 114, 114, 114, 114, 133, 133, 133, 133, 133, 236, 236, 236, 213, 213, 213, 211, 211, 211, 210, 209, 208, 208, 208, 206, 205, 205, 143, 143, 104, 248, 248, 99, 52, 251, 252, 254, 48, 46, 3, 3, 4, 0, 295, 299, 298, 298, 298, 298, 13, 16, 17, 18, 18, 28, 26, 22, 23, 278, 277],
[111, 89, 89, 89, 62, 88, 88, 88, 64, 64, 64, 64, 64, 64, 114, 114, 114, 114, 114, 133, 133, 133, 133, 237, 237, 237, 237, 213, 213, 212, 211, 211, 211, 210, 209, 208, 208, 208, 207, 205, 205, 143, 143, 247, 248, 99, 99, 52, 250, 253, 254, 48, 46, 3, 4, 4, 295, 295, 299, 298, 298, 298, 298, 13, 16, 17, 18, 29, 28, 27, 22, 275, 278, 277, 75],
[111, 89, 89, 89, 88, 88, 88, 64, 64, 64, 64, 64, 64, 114, 114, 114, 114, 114, 134, 133, 133, 133, 237, 237, 237, 237, 213, 212, 212, 211, 211, 210, 210, 209, 208, 208, 207, 207, 205, 205, 142, 104, 247, 103, 99, 99, 250, 250, 253, 254, 46, 46, 3, 4, 4, 295, 295, 299, 298, 298, 298, 298, 14, 16, 17, 18, 29, 28, 27, 22, 275, 278, 74, 75, 123],
[111, 111, 89, 89, 88, 88, 64, 64, 64, 64, 64, 64, 114, 114, 114, 114, 114, 134, 134, 133, 133, 237, 237, 237, 237, 212, 212, 212, 211, 211, 210, 210, 209, 208, 208, 207, 207, 205, 142, 142, 104, 247, 103, 99, 52, 250, 253, 253, 254, 46, 45, 4, 4, 5, 295, 295, 298, 298, 298, 298, 13, 16, 16, 17, 18, 29, 28, 27, 279, 275, 278, 74, 75, 123, 125],
[111, 111, 89, 62, 88, 88, 64, 64, 64, 64, 64, 114, 114, 114, 114, 134, 134, 134, 113, 113, 237, 237, 237, 237, 212, 212, 212, 211, 211, 210, 210, 209, 208, 208, 207, 207, 244, 142, 142, 104, 247, 103, 99, 53, 250, 253, 254, 47, 46, 45, 4, 4, 5, 295, 295, 298, 298, 298, 297, 13, 16, 16, 18, 18, 29, 28, 27, 279, 278, 73, 76, 123, 123, 125, 224],
[111, 111, 89, 88, 88, 64, 64, 64, 64, 64, 114, 114, 114, 114, 134, 134, 113, 113, 113, 237, 237, 237, 238, 238, 212, 212, 211, 211, 210, 210, 209, 209, 208, 207, 207, 244, 142, 142, 104, 246, 103, 98, 53, 53, 253, 254, 47, 46, 45, 4, 5, 5, 296, 295, 297, 297, 297, 297, 13, 16, 17, 18, 18, 29, 28, 27, 279, 278, 73, 76, 123, 125, 125, 224, 224],
[111, 111, 111, 88, 88, 64, 64, 64, 64, 112, 114, 114, 114, 134, 113, 113, 113, 113, 237, 237, 238, 238, 238, 212, 211, 211, 210, 210, 210, 209, 209, 207, 207, 207, 244, 142, 142, 246, 246, 97, 97, 53, 255, 255, 47, 47, 45, 44, 6, 5, 5, 296, 296, 297, 297, 297, 13, 14, 16, 17, 18, 18, 29, 28, 274, 279, 278, 73, 76, 123, 125, 125, 224, 223, 223],
[111, 111, 111, 111, 111, 64, 64, 112, 112, 112, 112, 112, 113, 113, 113, 113, 113, 237, 238, 238, 238, 238, 212, 211, 211, 210, 210, 210, 209, 209, 207, 207, 243, 244, 142, 245, 246, 246, 97, 97, 54, 255, 255, 47, 46, 45, 44, 6, 5, 296, 296, 297, 297, 297, 297, 13, 14, 16, 17, 18, 18, 29, 21, 274, 279, 73, 77, 77, 123, 125, 125, 228, 223, 223, 171],
[111, 111, 111, 111, 111, 111, 112, 112, 112, 112, 112, 112, 113, 113, 113, 135, 135, 238, 238, 238, 238, 239, 239, 211, 210, 210, 210, 209, 209, 243, 243, 243, 244, 141, 245, 246, 246, 97, 54, 54, 255, 255, 47, 45, 45, 44, 6, 5, 296, 296, 297, 297, 297, 13, 13, 14, 16, 17, 18, 18, 29, 21, 274, 280, 73, 77, 126, 126, 125, 228, 228, 223, 223, 171, 170],
[111, 111, 111, 111, 111, 112, 112, 112, 112, 112, 112, 112, 135, 135, 135, 135, 238, 238, 238, 239, 239, 239, 240, 210, 210, 210, 209, 139, 243, 243, 243, 244, 141, 245, 246, 246, 97, 54, 54, 255, 256, 47, 45, 44, 6, 6, 7, 296, 296, 297, 297, 297, 13, 13, 16, 16, 17, 18, 19, 29, 281, 280, 280, 73, 77, 126, 126, 122, 228, 228, 223, 171, 179, 180, 180],
[111, 111, 111, 111, 111, 112, 112, 112, 112, 112, 112, 135, 135, 135, 135, 238, 238, 238, 239, 239, 239, 240, 240, 210, 210, 139, 139, 243, 243, 243, 141, 245, 245, 105, 96, 96, 54, 54, 255, 256, 47, 45, 44, 6, 6, 7, 296, 296, 297, 297, 297, 13, 14, 16, 16, 17, 18, 19, 20, 281, 280, 280, 73, 77, 126, 122, 122, 228, 229, 223, 171, 179, 180, 168, 167],
[111, 111, 111, 111, 111, 112, 112, 112, 112, 112, 135, 135, 135, 135, 135, 238, 239, 239, 239, 239, 240, 240, 240, 241, 139, 139, 243, 243, 243, 141, 245, 245, 105, 96, 96, 54, 255, 256, 256, 257, 44, 44, 6, 7, 7, 296, 9, 297, 297, 13, 13, 14, 16, 16, 17, 18, 19, 20, 281, 280, 72, 78, 77, 126, 122, 127, 229, 229, 221, 171, 180, 180, 168, 167, 183],
[111, 111, 111, 111, 111, 112, 112, 112, 112, 112, 135, 135, 135, 135, 238, 239, 239, 239, 239, 240, 240, 240, 241, 139, 139, 139, 243, 106, 106, 106, 245, 105, 96, 96, 55, 255, 256, 256, 257, 44, 44, 6, 7, 294, 9, 9, 10, 297, 13, 13, 14, 16, 16, 17, 18, 19, 281, 273, 280, 72, 78, 77, 126, 121, 127, 229, 222, 221, 171, 180, 168, 167, 167, 183, 165],
[111, 111, 111, 111, 111, 112, 112, 112, 112, 135, 135, 135, 135, 136, 239, 239, 239, 239, 240, 240, 241, 241, 139, 139, 139, 140, 140, 106, 106, 245, 95, 96, 55, 55, 256, 256, 257, 257, 43, 44, 7, 7, 294, 9, 10, 10, 13, 13, 13, 14, 16, 17, 18, 18, 30, 281, 273, 280, 72, 78, 126, 121, 127, 229, 229, 221, 221, 179, 180, 168, 167, 183, 183, 165, 186],
[111, 111, 111, 111, 111, 112, 112, 112, 112, 135, 135, 136, 136, 137, 239, 239, 240, 240, 240, 241, 241, 139, 139, 139, 140, 140, 106, 106, 245, 95, 95, 55, 55, 56, 256, 257, 257, 43, 42, 42, 8, 294, 9, 10, 10, 13, 13, 14, 14, 16, 17, 18, 30, 283, 282, 272, 72, 72, 79, 126, 121, 127, 229, 222, 221, 221, 169, 169, 168, 167, 183, 183, 185, 186, 187],
[111, 111, 111, 111, 111, 111, 112, 112, 135, 136, 136, 136, 137, 137, 137, 137, 240, 240, 241, 241, 139, 242, 242, 140, 107, 106, 106, 245, 95, 95, 55, 56, 56, 256, 257, 43, 43, 42, 42, 8, 294, 9, 10, 10, 13, 13, 14, 16, 16, 17, 18, 30, 283, 282, 272, 72, 72, 79, 121, 121, 127, 229, 222, 221, 221, 169, 168, 167, 167, 183, 165, 185, 187, 187, 189],
[111, 111, 111, 111, 111, 111, 111, 111, 136, 136, 136, 136, 137, 137, 137, 240, 240, 241, 241, 242, 242, 242, 107, 107, 106, 106, 95, 95, 95, 55, 56, 56, 257, 257, 258, 43, 42, 42, 8, 9, 10, 10, 10, 13, 13, 14, 16, 16, 17, 31, 283, 283, 272, 272, 71, 79, 79, 121, 127, 127, 222, 221, 221, 169, 169, 168, 167, 183, 183, 165, 185, 187, 187, 189, 189],
[111, 111, 111, 111, 111, 111, 111, 136, 136, 136, 136, 137, 137, 137, 110, 138, 241, 241, 242, 242, 242, 107, 107, 107, 106, 93, 95, 95, 55, 56, 56, 257, 258, 258, 43, 42, 41, 8, 293, 10, 10, 13, 13, 13, 14, 16, 16, 32, 31, 283, 282, 272, 70, 71, 79, 79, 120, 127, 127, 230, 221, 221, 169, 181, 168, 167, 183, 183, 185, 186, 187, 187, 189, 191, 157],
[111, 111, 111, 111, 111, 111, 111, 136, 136, 136, 137, 137, 137, 110, 110, 138, 138, 138, 242, 242, 107, 107, 107, 93, 93, 94, 94, 56, 56, 56, 257, 258, 258, 43, 42, 41, 293, 293, 10, 11, 13, 13, 14, 14, 16, 16, 32, 31, 283, 271, 272, 70, 71, 79, 120, 120, 127, 230, 230, 221, 220, 181, 181, 167, 167, 183, 165, 185, 186, 187, 189, 189, 191, 157, 193],
[111, 111, 111, 111, 111, 111, 111, 136, 136, 137, 137, 137, 110, 110, 138, 138, 138, 108, 108, 108, 107, 107, 93, 93, 94, 94, 94, 56, 56, 258, 258, 258, 42, 41, 41, 293, 293, 292, 11, 13, 13, 14, 15, 15, 33, 31, 270, 283, 271, 272, 70, 71, 79, 120, 120, 128, 230, 230, 220, 220, 181, 181, 167, 183, 183, 165, 185, 187, 187, 189, 189, 191, 157, 193, 154],
[111, 111, 111, 111, 111, 111, 136, 136, 136, 137, 110, 110, 110, 138, 138, 138, 108, 108, 108, 108, 93, 93, 93, 94, 94, 57, 56, 56, 259, 258, 258, 42, 41, 41, 293, 292, 292, 11, 13, 13, 14, 15, 33, 33, 31, 270, 271, 271, 70, 70, 79, 79, 120, 128, 128, 230, 230, 220, 220, 181, 182, 167, 183, 165, 185, 186, 187, 187, 189, 189, 157, 193, 155, 154, 154],
[111, 111, 111, 111, 111, 111, 136, 136, 137, 110, 110, 110, 138, 138, 138, 108, 108, 108, 108, 93, 93, 93, 93, 94, 57, 57, 56, 259, 259, 259, 41, 41, 40, 40, 292, 11, 12, 13, 289, 14, 15, 33, 33, 285, 270, 271, 271, 70, 70, 80, 79, 120, 128, 128, 230, 230, 220, 220, 181, 182, 167, 183, 165, 185, 186, 187, 187, 189, 189, 157, 193, 155, 154, 152, 199],
[111, 111, 111, 111, 111, 111, 136, 136, 110, 110, 110, 110, 138, 138, 108, 108, 108, 108, 93, 93, 93, 93, 94, 57, 57, 58, 259, 259, 259, 260, 40, 40, 40, 292, 11, 12, 289, 289, 288, 15, 33, 33, 285, 284, 271, 271, 70, 80, 80, 120, 120, 128, 128, 230, 231, 220, 181, 182, 182, 183, 183, 165, 185, 186, 187, 189, 189, 191, 157, 193, 155, 154, 152, 151, 150],
[111, 111, 111, 111, 111, 111, 136, 110, 110, 110, 110, 109, 109, 109, 108, 108, 108, 93, 93, 93, 93, 57, 57, 58, 58, 259, 259, 260, 260, 40, 40, 39, 291, 11, 12, 289, 289, 288, 34, 33, 268, 285, 284, 271, 271, 70, 80, 80, 120, 120, 128, 230, 230, 231, 220, 181, 182, 182, 183, 165, 185, 185, 187, 187, 189, 189, 191, 157, 193, 155, 154, 152, 151, 150, 149],
[111, 111, 111, 111, 111, 111, 110, 110, 110, 110, 109, 109, 109, 109, 108, 108, 93, 93, 93, 93, 92, 57, 58, 259, 259, 259, 260, 260, 40, 40, 39, 291, 291, 290, 289, 36, 35, 34, 286, 268, 269, 284, 271, 69, 81, 80, 80, 119, 119, 129, 230, 219, 231, 220, 182, 182, 166, 183, 165, 185, 186, 187, 187, 189, 189, 191, 157, 193, 154, 154, 152, 151, 200, 149, 148],
[111, 111, 111, 111, 111, 111, 110, 110, 109, 109, 109, 109, 109, 109, 91, 91, 93, 93, 92, 92, 58, 58, 259, 259, 259, 260, 260, 40, 39, 39, 291, 38, 290, 289, 36, 35, 34, 286, 268, 269, 284, 271, 69, 81, 80, 118, 119, 119, 129, 219, 219, 231, 218, 182, 182, 166, 183, 165, 185, 186, 187, 187, 189, 189, 191, 193, 155, 154, 154, 152, 198, 200, 149, 148, 148]]

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
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill()
  }
}

function DrawBacklights() {
  const unlitBalls = [];
  for (var i = 0; i < 300; i++) {
    let x = lightCoords[i][0];
    let y = lightCoords[i][1];
    let THPW = canvas.width/150;
    let THPH = 6;
    unlitBalls.push(new Circle(x, y, THPH, "#202020"));
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
    let PH = 5;
    litBalls.push(new Circle(x, y, PH, "white"));
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
    if (j > 8) {
      clearInterval(interval);
    }
    i = 0;
    j++;
  }
  Animate(i);
  i++;
}
let i = 0;
let interval = setInterval(iterate, 30)


// let j = 0;
// Animate(j);
