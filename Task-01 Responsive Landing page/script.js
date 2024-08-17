
     const menu=document.querySelector('.menu');
     const menuList=document.querySelector('nav ul')
     const navbar=document.querySelector('.navbar')

     menu.addEventListener('click',()=>{
        menuList.classList.toggle('showmenu')
     })
    
     function handleScroll(){
      if(window.scrollY > 50)
      {
         navbar.classList.add('scrolled');
      }
      else{
         navbar.classList.remove('scrolled');
      }
     }
     window.addEventListener('scroll', handleScroll);