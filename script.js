let answers = []
let questions = [
    `Sizning mashinangiz`,
    `Mashinangiz haqida malumot`,
    `Mashinangiz raqami`
]

for (let i = 0; i < questions.length; i++){
    answers[i] = prompt(questions[i])
}

console.log(answers)

let value = confirm (`Mashinangiz GMnikimi`);

if ( value == true ) {
    console.log(`Gm mashinasi`);
} else {
    console.log(`Mashinangiz GM emas `);
}