function loadFile(input) {
    let file = input.files[0];	//선택된 파일 가져오기
    console.log(file)
    //미리 만들어 놓은 div에 text(파일 이름) 추가
    // let name = document.getElementById('fileName');
    // name.textContent = file.name;

  	//새로운 이미지 div 추가
    let newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');
    newImage.setAttribute("onclick", 'deleteImg(this)');

    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);   

    newImage.style.width = "100%";
    newImage.style.height = "100%";
    // newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지를 숨긴다
    newImage.style.objectFit = "cover";
    newImage.style.position = "absolute";
    newImage.style.left = 0;

    //이미지를 image-show div에 추가
    let container = input.parentNode;
    container.appendChild(newImage);
};

function deleteImg(a){
    a.remove()
}

var title ;
let titleBtn = document.getElementById("titleBtn"); // 확인 버튼
let titleInput = document.getElementById("titleInput"); //제목 input

//제목 처음 설정
function setTitle() { 
    title = titleInput.value;
}
//제목수정
function reTitle(a) { 
    titleInput.classList.remove('no-display'); //input 다시 나타내기
    titleInput.value = title ;
    titleInput.focus();
    a.remove();

    titleBtn.classList.remove('no-display'); //버튼 다시 나타내기
}

function buttonOn() {
    titleBtn.classList.remove('no-display'); //title input 클릭시 확인 버튼 나타내기
}

function buttonOff() {
    titleBtn.classList.add('no-display'); //확인 버튼 누르면 확인 버튼, input 사라지기
    titleInput.classList.add('no-display'); //확인 버튼 누르면 확인 버튼, input 사라지기

    //확인 버튼 누르면 input에 쓴 글 f-title에 나타내기
    let titleContainer = document.getElementsByClassName('f-title')[0];
    let titleContent = document.createElement('p');
    titleContent.setAttribute('onclick','reTitle(this)')
    titleContent.innerText = title 
    titleContainer.appendChild(titleContent)
}


//날짜설정
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();

let titleContainer = document.getElementsByClassName('f-date')[0];
titleContainer.innerText = year + "/"+month+"/"+date;

