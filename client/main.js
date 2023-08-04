const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const fortuneForm = document.getElementById("fortune-form")
const fortuneInput = document.getElementById("fortune-input")
const fortuneList = document.getElementById("fortune-list")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

// function to get random fortune from back end 
function getFortune() {
    axios
        .get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data)
        })
    
}

function handleSubmit(event) {
    event.preventDefault()
    let newFortune = fortuneInput.value
    console.log(newFortune)
    let bodyObj = {
        newFortune: newFortune
    }
    axios.post('http://localhost:4000/api/fortunes', bodyObj)
    .then((res) => {
        console.log(res.data)
        generateList(res.data)
        
    })
    .catch((err) => {
        console.error(err)
    })
}

function generateList(list) {
    fortuneList.innerHTML = ""
    list.forEach((fortune) => {
        let li = document.createElement('li')
        li.innerText = fortune
        fortuneList.appendChild(li)
    })
}

function getList() {
    axios
    .get('http://localhost:4000/api/fortunes')
    .then((res) => {
        generateList(res.data)
    })
    .catch((err) => {
        console.error(err)
    })
}




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
fortuneForm.addEventListener('submit',handleSubmit)
getList()