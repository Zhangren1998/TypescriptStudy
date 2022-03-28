function fn<T>(arg: T): T {
    return arg;
}
console.log(fn<number>(1));
console.log(fn<string>("1"));
fn<boolean>(true);
fn<number[]>([]);
fn<string[]>(["1"]);
fn<boolean[]>([true]);
interface I1 {
  length:number;
}
function fn1<T extends I1>(arg: T): number {
  return arg.length;
}
console.log(fn1('123'));
