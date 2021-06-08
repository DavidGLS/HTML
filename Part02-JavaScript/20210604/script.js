let a = !Boolean(1);
let b = !Boolean(0);
let c = !Boolean(10);
let d = !Boolean(-10);

let e = !Boolean("1");
let f = !Boolean("-1");
let g = !Boolean("0");
let h = !Boolean("10a");

let i = !Boolean("");
let j = !Boolean(-"");
let k = !Boolean(NaN);
let l = !Boolean(-NaN);
let m = !Boolean(undefined);
let n = !Boolean(-undefined);
console.log(`${a}\n${b}\n${c}\n${d}\n${e}\n${f}\n${g}\n${h}\n${i}\n${j}\n${k}\n${l}\n${m}\n${n}`);