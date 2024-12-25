const burgerIcon = document.querySelector ('.imburger');
const menu = document.querySelector('ul');

burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('bar_active');
});


// const mynum = document.querySelectorAll('.count');
// // console.log(mynum);
// mynum.forEach (  callbackfn:(mycount:Element) => {
//     console.log(mycount.innerText);

// });

// const mynum = document.querySelectorAll('.count');
// let speed = 200;
// // console.log(mynum);
// mynum.forEach((mycount) => {
//     // console.log(mycount.innerText)

//     let target_count = mycount.dataset.count;
//     let first_counnt = +mycount.innerText;
//     // console.log(first_counnt)
//      speed=Math.floor(x: target_count/ speed);
//      const updatenum = () => {
//        first_counnt = first_counnt + speed;
//         mycount.innerText = first_count;
//         if (first_count < target_count) {
//             setTimeout (()=>{
//                 updatenum();
//             },timeout:200) // Call updateNum after 100ms
//         } 
//      }
//     updatenum();
// });




const mynum = document.querySelectorAll('.count');
let speed = 200;

mynum.forEach((mycount) => {
    let target_count = +mycount.dataset.count; // Convert dataset.count to a number
    let first_count = +mycount.innerText; // Convert innerText to a number

    let new_increment_num = Math.floor(target_count / speed); // Adjust speed calculation

    const updateNum = () => {
        first_count +=  new_increment_num ;
        mycount.innerText = first_count; // Update innerText with first_count

        if (first_count < target_count) {
            setTimeout(() => {
                updateNum();
            }, 20); // Call updateNum after 200ms
        }
    };

    updateNum();
}); 
