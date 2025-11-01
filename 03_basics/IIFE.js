// Immediately Invoke Function Expression-

// function chai(){
//     console.log("DB Connected") // Normal Function
// }
// chai()

(function chai(){
    console.log("DB Connected") // Normal Function
}) ();  //--> (;)this is must in IIFE functions


( (name) => {
    console.log(`DB Connected Two ${name}`) // Normal Function
}) ("Hitesh");