(()=>{
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  //castear a string
  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  // castear a number
  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
