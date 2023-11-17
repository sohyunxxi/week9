function showPwEvent(){
    var hidden = document.getElementById('hiddenPW');
    var button = document.getElementById('checkButton');
    hidden.style.display="block";
    button.style.display="none";
}

// const btn = document.getElementById('popupBtn');
//     const modal = document.getElementById('modalWrap');
//     const closeBtn = document.getElementById('closeBtn');

//     btn.onclick = function() {
//     modal.style.display = 'block';
//     }
//     closeBtn.onclick = function() {
//     modal.style.display = 'none';
//     }

//     window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
//     }

function moveBackEvent(){
    window.history.back();
}

function updateEvent(){
    
}
function deleteEvent(){
    var returnValue = confirm("정말 탈퇴하시겠습니까?");
    if(returnValue){
        alert("회원을 탈퇴하였습니다.안녕히 가십시오.")
    }
}
