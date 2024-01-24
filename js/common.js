//검색 효과 누르면 검색창 생성
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



// 푸터부분 연도 바뀌게
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 년도 숫자가 나옴