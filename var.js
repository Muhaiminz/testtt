// // arrow function
// let mul=value=>value*value;
// console.log(mul(22))
// let printsomething= () => console.log("i am here")
// printsomething();
// let add=(value1,value2)=> {
//     console.log(value1+value2);
// }
// add(34,56);
// let complexfunction=()=>{
//     // multiple lines of code
// }
// const obj={
//     traditionalfunction : function(){
//         console.log("traditional function",this);
//     },
//     arrowfunction: () => {
//         console.log("traditionalkkk function",this);
//     },
// };
// obj.traditionalfunction();
const obj = {
    traditionalfuntion: function () {
      console.log("Traditional function", this);
    },
    arrowfunction: () => {
      console.log("Arrowfunction function", this);
    },
  };
  console.log('This is enviroment',this)
  obj.traditionalfuntion();
  obj.arrowfunction();