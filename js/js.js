const gnbBtn = document.querySelector('.gnbBtntrigger')
const gnb = document.querySelector('.gnb')
const dark = document.querySelector('.dark')


gnbBtn.onclick=()=>{
  gnb.style = 'transform:translateX(0)'
  dark.style.display = 'block'
}

dark.onclick = () => {
gnb.style = 'trnasform:translateX(-100%)'
dark.style.display = 'none'
loginPop.style.display ='none';
}

// 이모디콘 검색

const emoSearch = document.querySelector('.search_btn')
const search = document.querySelector('.search_icon')
const black = document.querySelector('.black')

emoSearch.onclick=()=>{
  search.style.display = 'block'
  black.style.display = 'block'
}
  black.onclick = () => {
  search.style = 'transform:translateY(0)'
  black.style.display = 'none'
  }




 // 로그인 팝업
 const log = document.querySelectorAll('.list_menu1')
 const loginPop = document.querySelector('.loginPopup')
 const loginPopClose = document.querySelector('.close')
 const talk_btn = document.querySelector('.talk_btn')

 // 로그인 팝업 - 띄우기
 log.forEach((logBtn)=>{
   logBtn.addEventListener('click',()=>{
   loginPop.style.display ='block';
   dark.style.display = 'block';
   gnb.style = 'trnasform:translateX(-100%)'
   })
 })

 // 로그인 팝업 - 닫기
 loginPopClose.addEventListener('click',()=>{
   loginPop.style.display ='none';
   dark.style.display = 'none'
   
 })

