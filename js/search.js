let Allkeywords = [
    'Perlis',
    'Kedah',
    'Johor',
    'Kelantan',
    'Melaka',
    'Negeri Sembilan',
    'Pahang',
    'Penang',
    'Perak',
    'Sabah',
    'Sarawak',
    'Selangor',
    'Terengganu',
];

const resultBox = document.querySelector(".result-box"); //display suggestion keyword
const inputBox = document.getElementById("input-box"); //let user to input

inputBox.onkeyup = function(){ //when user typing
    let result = []; //store filter keyword
    let input = inputBox.value;

    if(input.length){
        result = Allkeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase()); //check keyword
        }); 
        console.log(result);
    }
    display(result);

    if(!result.length){ //no value in result
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{ //get each data from the array
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>" //make it as a String
}

function selectInput(list){
    inputBox.value = list.innerHTML; //display on the search box
    resultBox.innerHTML = '';
    

    if(Allkeywords.includes(inputBox.value)){

        if(inputBox.value == 'Negeri Sembilan'){
            inputBox.value = 'negerisembilan';
        } 
        
        let pageName = "../html/state/"+ inputBox.value + ".html";
        window.location.href = pageName; //link to the page
    }
}