document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () {                     
        document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
    
    document.querySelector('.messages-close').addEventListener('click', function() {
      document.querySelector('.messages-section').classList.remove('show');
    });
  });


  const carousel = document.querySelector('#carousel-comp');
  const slider = document.querySelector('#slider-comp');

  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  let direction;
  let varTrans = 7;

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      varTrans = 25;
  }

  function prec(){
      direction = 1;
      slider.style.transform = 'translate('+ varTrans +'%)';
      for(i=0; i<document.getElementsByClassName("comp").length; i++){
          document.getElementsByClassName("comp")[i].firstElementChild.style.width = "80px";
          if(i==0)
              document.getElementsByClassName("comp")[i].firstElementChild.style.width = "120px";
      }
  }

  function suiv(){     
      direction = -1;
      carousel.style.justifyContent = 'flex-start';
      slider.style.transform = 'translate(-'+ varTrans +'%)';
      for(i=0; i<document.getElementsByClassName("comp").length; i++){
          document.getElementsByClassName("comp")[i].firstElementChild.style.width = "80px";
          if(i==2)
              document.getElementsByClassName("comp")[i].firstElementChild.style.width = "120px";
      }
  }

  //à chaque transition on ajoute un élément
  slider.addEventListener('transitionend', function(test) {
      if (test.propertyName == "transform"){
          if (direction === 1) {
              slider.prepend(slider.lastElementChild);
          } else {
              slider.appendChild(slider.firstElementChild);
          }

          slider.style.transition = 'none';
          slider.style.transform = 'translate(0)';

          setTimeout(() => {
              slider.style.transition = 'all 0.5s';
          })
          for(i=0; i<document.getElementsByClassName("comp").length; i++){
              document.getElementsByClassName("comp")[i].setAttribute("onclick","");
              if(i==0){
                  document.getElementsByClassName("comp")[i].setAttribute("onclick","prec()");
              }else if(i==2){
                  document.getElementsByClassName("comp")[i].setAttribute("onclick","suiv()");
              }
          }
      }
  }, false);