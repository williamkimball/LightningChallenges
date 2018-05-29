let sentence = ["Thus", "far", "at", "NSS", "we", "have", "covered", "many", "basic", "concepts", "such", "as", "loops", "functions", "and", "arrays", "and", "have", "built", "a", "web", "page", "for", "our", "personality", "type", "." ]

let print = () => {
    for (i=0; i< sentence.length; i++) {
        console.log(`${sentence[i]} `)
    }
}

print();

let printSent = () => {
    let sent = ""
    for (i=0; i< sentence.length; i++) {
        sent += `${sentence[i]} `;
    } console.log(sent);
}

printSent();