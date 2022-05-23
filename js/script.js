const txtelemnt = ['Freelancer', 'Web Developer', 'Graphic Designer'];
let count = 0;
let txtindex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

    console.log();

    if(count == txtelemnt.length){
        count = 0;
    }

    currentTxt = txtelemnt[count];

    words = currentTxt.slice(0, ++txtindex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtindex = 0;
    }

    setTimeout(ngetik, 500);

})();