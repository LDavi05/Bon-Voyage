function menuVisible()
{
  let mobileMenu = document.querySelector('.mobile-menu');
  if(mobileMenu.classList.contains('open'))
  {
    mobileMenu.classList.remove('open');
    document.querySelector('.icon').src = "./assets/img/menu_white_36dp.svg";
  } else
    {
      mobileMenu.classList.add('open');
      document.querySelector('.icon').src = "./assets/img/close_white_36dp.svg";
    }
}
