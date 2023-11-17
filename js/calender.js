var day=0;
var selectedButton = null;
var selectedMonth=0;
function daysOfMonth(button){
    if(button.value==2){
        day=28;
        
    }
    else if(button.value==1||button.value==3||button.value==5||button.value==7||button.value==8||button.value==10||button.value==12){
        day=31;
    }
    else{
        day=30;
    } 
    changeButtonColorEvent(button);

    
}

function changeButtonColorEvent(button) {
    // Remove 'selected' class from the previously selected button
    if (selectedButton&& selectedButton.tagName === 'BUTTON') {
      selectedButton.removeAttribute("id");
    }

    // Add 'selected' class to the clicked button
    button.id="selected";

    // Update the reference to the currently selected button
    selectedButton = button;
    selectedMonth=button.value;
    console.log(selectedMonth);
    console.log(button.value);

    // Call your daysOfMonth function with the selected value

    makeCalendarEvent(day);
}

function presentMonth(){
    var now = new Date();	// 현재 날짜랑 시간
    var month = now.getMonth() + 1;	// 월만 쏙 빼오기
    
    // 아래와 같이 수정하여 버튼 객체를 만들어서 전달
    var button = document.querySelector('.monthButton[value="' + month + '"]');
    daysOfMonth(button);
    
    console.log(month); //배경화면 띄우기
}

function makeCalendarEvent(day){
    var calendarBox = document.getElementsByTagName("main")[0];
    calendarBox.innerHTML="";
    var days = document.createElement("div");
    days.id = "dayBox";
    calendarBox.appendChild(days);
    days.innerHTML="";
    for(var i = 0; i < day; i++){
        var dayBox = document.createElement("div");
        dayBox.className = "calendarDay";
        dayBox.setAttribute("onclick", "openModalEvent(" + selectedMonth + "," + (i + 1) + ")");
        dayBox.textContent=i + 1;
        days.appendChild(dayBox);
        if(i==18){
            var count = (document.createElement("span"));
            dayBox.appendChild(count);
            count.textContent="+3";
            count.setAttribute("class","countFont")
        }
        if(i==5){
            var count = (document.createElement("span"));
            dayBox.appendChild(count);
            count.textContent="+9";
            count.setAttribute("class","countFont")
        }
        if(i==20){
            var count = (document.createElement("span"));
            dayBox.appendChild(count);
            count.textContent="+1";
            count.setAttribute("class","countFont")
        }
        if ((i + 1) % 7 == 0) {
            days.appendChild(document.createElement("br"));
        }

    }
}

function showHidden(){
    var hidden = document.getElementById('hidden');
    var black = document.getElementById('blackBox');
    hidden.style.right="0";
    black.style.display="block";
}
function closeMenu(){
    var hidden = document.getElementById('hidden');
    var black = document.getElementById('blackBox');
    hidden.style.right="-320px";
    black.style.display="none";
}
function openModalEvent(selectedMonth, day) {
    var modal = document.getElementById('modal');
    var modalDate = document.getElementById('modalDate');
    
    // 전달받은 날짜를 모달 내부의 텍스트로 설정
    modalDate.textContent = selectedMonth+ "월 " + day + "일 " + "일정"; 
    modal.style.display = 'flex'; // Use flex to center the modal
}
function closeModalEvent() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}