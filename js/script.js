let text = prompt('1)Bob, 2)Jane, 3)Leo, 4)Alex, 5)Dick, 6)Roma, 7)Antony')
let word = ['Bob', 'Jane', "Leo", 'Alex', 'Dick','Roma', 'Antony']
if(text == 'bob' || text == 'Bob' || text == 1){
    word2 = word.slice(1)
    console.log(word2);
}
else if (text == 'jane' || text == 'Jane' || text == 2){
    let word2 = word.splice(1,1)
    console.log(word);
}
else if (text == 'leo' || text == 'Leo' || text == 3){
    let word2 = word.splice(2,1)
    console.log(word);
}else if (text == 'alex' || text == 'Alex' || text == 4){
    let word2 = word.splice(3,1)
    console.log(word);
}else if (text == 'dick' || text == 'Dick' || text == 5){
    let word2 = word.splice(4,1)
    console.log(word);
}else if (text == 'roma' || text == 'Roma' || text == 6){
    let word2 = word.splice(5,1)
    console.log(word);
}
else if (text == 'antony' || text == 'Antony' || text == 7){
    let word2 = word.splice(6,1)
    console.log(word);
}
else{
    alert('не правельно дано имя')
}

let names = ['Не','Придумал','Имена']

let obg ={
name1:'Andrey',
name2:'Sergey',
name3:'Rolton',
}
word.unshift(obg)

let names2 = names.concat(word)
console.log(names2);

