;(function($){

  var litho = {        
      init: function(){
          this.heaerFn();
          this.section1Fn();
          this.section2Fn();
          this.section3Fn();
          this.section4Fn();
          this.section5Fn();
          this.section6Fn();
          this.section7Fn();
          this.section8Fn();
          this.section9Fn();
          this.section10Fn();
          this.footerFn();
      },
      heaerFn:function(){
        //네비게이션
        //메인버튼(메뉴) - 1 Depth
        var $mainBtn =  $('.main-btn');
        var $sub =  $('.sub');
        var $navUlLi =  $('#nav>ul>li');

            //1Depth 이벤트
            $mainBtn.on({
              mouseenter:function(){
                $(this).next().stop().show(); //2Depth 보여라
              }
            });

            //메인메뉴와 서브메뉴 영역을 마우스가 떠나면 해당 서브메뉴 숨겨라
            $navUlLi.on({
              mouseleave:function(){
                $sub.stop().hide();   //2Depth 숨겨라
              }
            });  
            




            //2Depth 이벤트
            //서브-서브 메뉴 - 3 Depth 보여라
            // 서브 메뉴 버튼에 마우스 오버스
        var $subBtn = $('.sub-btn');
        var $subSub = $('.sub-sub');
            
            $subBtn.on({
              mouseenter:function(){
                $subSub.stop().hide();
                $(this).next().stop().show(); //3 Depth 보여라
              }
            });

            $navUlLi.on({
              mouseleave:function(){
                $subSub.stop().hide();  //3 Depth 숨겨라
              }
            });





          //3Depth 이벤트
          //서브-서브-서브 메뉴 - 4 Depth 보여라
          var $subSubBtn = $('.sub-sub-btn');  
          var $subSubSub = $('.sub-sub-sub');  
          var $subSub= $('.sub-sub');  

              $subSubBtn.on({
                mouseenter:function(){
                  $subSubSub.stop().hide();      //4 Depth 숨겨라
                  $(this).next().stop().show();  //해당 4 Depth만 보여라
                }
              });

              $subSub.on({
                mouseleave:function(){
                  $subSubSub.stop().hide();      //4 Depth 숨겨라
                }
              });



              //메인메뉴, 서브메뉴 객체와 배열
              var lithoNav = {
                  sub1:[
                    {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
                    {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                    {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                    {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                  ],
                  sub2:[
                    {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
                    {sub:"Services", subsub:["Our services","What we offer","Our process"]},
                    {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
                    {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
                  ],
                  sub3:[
                    {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                    {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                    {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                    {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                    {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                    {sub:"Portfolio switch image", subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                    {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                    {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
                  ],
                  sub4:[
                    {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                    {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                    {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                    {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
                  ],
                  sub5:[
                    {
                      sub:"Header and menu",
                      subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                      subsubsub:{
                        subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu hal"],
                        subsubsub2:["Left menu classic","Left menu modern"],
                        subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                        subsubsub4:["Classic","Modern","Full screen"]
                      }               
                    },
                    {
                      sub:"Footer", 
                      subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]
                    },
                    {
                      sub:"Page title", 
                      subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]
                    },
                    {
                      sub:"Modal popup", 
                      subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]
                    },
                    {
                      sub:"Icon packs", 
                      subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]
                    },
                    {
                      sub:"Animations"
                    }
                  ], 
                  sub6:[
                    {sub:"Blog grid"},                      
                    {sub:"Blog masonry"},                      
                    {sub:"Blog classic"},                      
                    {sub:"Blog simple"},                      
                    {sub:"Blog side image"},                      
                    {sub:"Blog metro"},                      
                    {sub:"Blog overlay image"},                      
                    {sub:"Blog modern"},                      
                    {sub:"Blog clean"},                      
                    {sub:"Blog widget"},                      
                    {sub:"Blog standard"},                      
                    {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},                      
                    {sub:"Post types", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width pos"]},                      
                  ],
                  sub7:[
                    {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                    {sub:["menu-banner-01.jpg"]},
                    {sub:["menu-banner-02.jpg"]}
                  ]
              }  //litho 객체 배열 메뉴



              function subObjectArrayFn(){
                  //litho 객체 배열 서브 메뉴를 
                  //콤포넌트 요서에 넣기
                  //서브1 코딩
                  var $col = $('#nav .col');
                  var txt = '';

                      //sub1 :  4열
                      //서브1 그룹 : 1~4열 반복
                      for(var i in lithoNav.sub1){
                        for(var j in lithoNav.sub1[i].sub){
                          if(j==0){
                            txt =  "<dt>" + lithoNav.sub1[i].sub[j] + "</dt>"; //서브메뉴 타이틀
                          }
                          else{
                            txt += "<dd><a href='#'>" + lithoNav.sub1[i].sub[j] + "</a></dd>"; //서브메뉴 목록                  
                          }
                        }
                        $col.eq(i).html( txt );
                        txt ='';
                      }
                    
                      //서브 2코딩
                    
                      $subBtn = $('.sub2 .sub-btn');
                      $ul = $('.sub2 .subsub');
                      //sub
                    
                      for(var i in lithoNav.sub2){
                        txt += lithoNav.sub2[i].sub + "<i class='fas fa-angle-right'></i>";
                        $subBtn.eq(i).html(txt);
                        txt = '';
                      }
                    
                      //subsub
                    
                      for(var i in lithoNav.sub2){
                        for(var j in lithoNav.sub2[i].subsub){
                          txt += "<li><a href='#'>" + lithoNav.sub2[i].subsub[j] + "</a></li>";
                        
                        }
                        $ul.eq(i).html(txt);
                        txt = '';
                      }
                    
                      //서브 3코딩
                    
                      var $subBtn = $('.sub3 .sub-btn');
                      var $ul = $('.sub3 .subsub');
                      txt = '';
                    
                      //sub
                    
                      for(var i in lithoNav.sub3){
                        txt += lithoNav.sub3[i].sub + "<i class='fas fa-angle-right'></i>";
                        $subBtn.eq(i).html( txt );
                        txt = '';
                      }
                      //subsub
                    
                      for(var i in lithoNav.sub3){
                        for(var j in lithoNav.sub3[i].subsub){
                          txt += "<li><a href='#'>" + lithoNav.sub3[i].subsub[j] + "</a></li>"
                        }
                        $ul.eq(i).html(txt);
                        txt = '';
                      }
                    
                      // 서브4 코딩
                      var $subMenu = $('.sub4 .sub-menu');
                      var txt = '';
                    
                      for(var i in lithoNav.sub4){
                        for(var j in lithoNav.sub4[i].sub){
                          if(j==0){
                            txt += "<dt>" + lithoNav.sub4[i].sub[j] + "</dt>"
                          }else{
                            txt += "<dd><a href='#'>" + lithoNav.sub4[i].sub[j] + "</a></dd>"
                          }
                        }
                        $subMenu.eq(i).html (txt);
                        txt = '';
                      }
                    
                      //서브5 코딩
                      var $sub5Btn = $('.sub5 .sub-btn');
                      var $sub5Menu = $('.sub5 .sub-menu');
                    
                    
                    
                      for(var i in lithoNav.sub5){
                        if(i == 5){
                          txt += lithoNav.sub5[i].sub;
                        }else{
                          txt += lithoNav.sub5[i].sub + "<i class='fas fa-angle-right'></i>";
                        }
                        $sub5Btn.eq(i).html( txt ) 
                        txt = '';
                      }
                    
                      for(var i in lithoNav.sub5){
                        for(var j in lithoNav.sub5[i].subsub){
                          if(j > 8 && i==0){
                            txt += "<li><a href='#'' class='sub-sub-btn'>" +lithoNav.sub5[i].subsub[j] +  "<i class='fas fa-angle-right'></i></a></li>" ;
                          }else{
                            txt += "<li><a href='#'' class='sub-sub-btn'>" +lithoNav.sub5[i].subsub[j] + "</a></li>" ;
                          }
                        }
                        $sub5Menu.eq(i).html(txt);
                        txt = '';
                      }
                    
                    
                      //4Depth
                      //서브서브서브 메뉴 10번째
                    
                      var $sub5Sub1 = $('.sub5-sub1>div>ul>li'); // 부모영역까지잡아주기

                      txt = $sub5Sub1.eq(9).html(); // 10번째 내용 가져오기
                    
                      txt += "<div class='sub-sub-sub  sub5-sub1-sub10'>";
                      txt +=    "<div class='sub-sub-sub-gap'>";
                      txt +=      "<ul class='subsubsub-menu'>"
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub1[0] + "</a></li>";
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub1[1] + "</a></li>";
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub1[2] + "</a></li>";
                      txt +=      "</ul>"
                      txt +=    "</div>"
                      txt += "</div>"
                      //10번째에 서브서브서브 추가하기
                      $sub5Sub1.eq(9).html( txt );
                      txt = '';
                    
                      //서브서브서브 메뉴 11번째
                      txt = $sub5Sub1.eq(10).html(); // 11번째 내용 가져오기
                    
                      txt += "<div class='sub-sub-sub  sub5-sub1-sub10'>";
                      txt +=    "<div class='sub-sub-sub-gap'>";
                      txt +=      "<ul class='subsubsub-menu'>"
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub2[0] + "</a></li>";
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub2[1] + "</a></li>";
                      txt +=      "</ul>"
                      txt +=    "</div>"
                      txt += "</div>"
                      //11번째에 서브서브서브 추가하기
                      $sub5Sub1.eq(10).html( txt );
                      txt = '';
                    

                      //서브서브서브 메뉴 12번째
                      txt = $sub5Sub1.eq(11).html(); // 12번째 내용 가져오기
                    
                      txt += "<div class='sub-sub-sub  sub5-sub1-sub10'>";
                      txt +=    "<div class='sub-sub-sub-gap'>";
                      txt +=      "<ul class='subsubsub-menu'>"
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub3[0] + "</a></li>";
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub3[1] + "</a></li>";
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub3[2] + "</a></li>";
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub3[3] + "</a></li>";
                      txt +=      "</ul>"
                      txt +=    "</div>"
                      txt += "</div>"
                      //12번째에 서브서브서브 추가하기
                      $sub5Sub1.eq(11).html( txt );
                      txt = '';
                    
                    
                      //서브서브서브 메뉴 13번째
                      txt = $sub5Sub1.eq(12).html(); // 13번째 내용 가져오기
                    
                      txt += "<div class='sub-sub-sub  sub5-sub1-sub10'>";
                      txt +=    "<div class='sub-sub-sub-gap'>";
                      txt +=      "<ul class='subsubsub-menu'>"
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub4[0] + "</a></li>";
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub4[1] + "</a></li>";
                      txt +=          "<li><a href='#'>" + lithoNav.sub5[0].subsubsub.subsubsub4[2] + "</a></li>";
                      txt +=      "</ul>"
                      txt +=    "</div>"
                      txt += "</div>"
                      //13번째에 서브서브서브 추가하기
                      $sub5Sub1.eq(12).html( txt );
                      txt = '';
                      // 서브 5-1 FINISH
                      // 서브서브서브 메뉴 FINISH
                    
                    //서브6 코딩
                    var $sub6Btn = $('.sub6 .sub-btn');
                    var $ul12 = $('.sub6 .sub6-sub12 ul');
                    var $ul13 = $('.sub6 .sub6-sub13 ul');
                    
                      //서브
                      for(var i in lithoNav.sub6){ // 0 ~ 12
                        if(i<11){  // 0 ~ 10
                            $sub6Btn.eq(i).html (lithoNav.sub6[i].sub);
                        }
                      }
                      $sub6Btn.eq(11).html (lithoNav.sub6[11].sub + "<i class='fas fa-angle-right'></i>");
                      $sub6Btn.eq(12).html (lithoNav.sub6[12].sub + "<i class='fas fa-angle-right'></i>");
                    
                      // 서브서브 12
                      for(var j in lithoNav.sub6[11].subsub){
                        txt += "<li><a href='#'>" + lithoNav.sub6[11].subsub[j] + "</a></li>"
                      }
                      $ul12.html(txt);
                      txt = '';

                      //서브서브 13
                      for(var j in lithoNav.sub6[12].subsub){
                        txt += "<li><a href='#'>" + lithoNav.sub6[12].subsub[j] + "</a></li>"
                      }
                      $ul13.html(txt);
                      txt = '';
                    
                    //서브7 코딩
                      var $sub7Dl1 = $('.sub7 dl').eq(0);
                      var $sub7Img = $('.sub7 dl img');   //이미지 2개
                    
                    
                        for(var i in lithoNav.sub7[0].sub){
                          if(i ==0  || i == 6){
                            txt += "<dt>" + lithoNav.sub7[0].sub[i] + "</dt>";
                          }else{
                            txt += "<dd><a href='#'>" + lithoNav.sub7[0].sub[i] + "</a></dd>";
                          }
                        }
                        $sub7Dl1.html( txt );
                        txt = '';
                      
                        for(var i=0; i<$sub7Img.length; i++){
                          txt = $sub7Img.eq(i).attr('src'); // 속성 가져오기
                          txt += lithoNav.sub7[i+1].sub[0];
                          $sub7Img.eq(i).attr( 'src', txt ); // 첫번째 이미지 소스(src) 를 변경
                          txt = '';
                        }
              }
              subObjectArrayFn();




                  //네비게이션
                  //메인버튼(메뉴) - 1 Depth
                  var $window    = $(window);
                  var $mainBtn   = $('#header .main-btn');
                  var $subBtn    = $('#header .sub-btn');
                  var $subSubBtn = $('#header .sub-sub-btn');  
                  var $navUlLi   = $('#header #nav>ul>li');
                  var $sub       = $('#header .sub');
                  var $subSub    = $('#header .sub-sub');
                  var $subSubSub = $('#header .sub-sub-sub');
                  var $mobileBtn = $('#header .mobile-btn');
                  var $bar       = $('#header .bar')
                  var $nav       = $('#header #nav');  



                //980px 초과에서만 클릭 이벤트 
                 function pcEventFn(){
                  $nav.stop().show();
                  $sub.stop().hide();
                  $subSub.stop().hide();
                  $subSubSub.stop().hide();

                  $mainBtn.off('click');


                  //1Depth 이벤트
                  $mainBtn.on({
                    mouseenter:function(e){
                      e.preventDefault();
                      $(this).next().stop().show(); 
                    }
                  });

                  $navUlLi.on({
                    mouseleave:function(e){
                      e.preventDefault();
                      $sub.stop().hide();
                    }
                  });  
                           
                  //2Depth 이벤트
                  $subBtn.on({
                    mouseenter:function(e){
                      e.preventDefault();
                      $subSub.stop().hide();
                      $(this).next().stop().show(); 
                    }
                  });
              
                  $navUlLi.on({
                    mouseleave:function(e){
                      e.preventDefault();
                      $subSub.stop().hide();
                    }
                  });

                  //3Depth 이벤트
                  $subSubBtn.on({
                    mouseenter:function(e){
                      e.preventDefault();
                      $subSubSub.stop().hide();
                      $(this).next().stop().show();
                    }
                  });
                
                  $subSub.on({
                    mouseleave:function(e){
                      e.preventDefault();
                      $subSubSub.stop().hide();
                    }
                  });
                 }//pc Event end
                

                //980px 이하에서만 클릭 이벤트
                //모바일 메뉴
                 function mobileEventFn(){
                  //초기화 설정 //pc 모드일때 설정해논 값이 있어 모바일할떄 초기화 해야함.
                    $sub.stop().hide();
                    $subSub.stop().show();
                    $subSubSub.stop().show();

                    $bar.removeClass('addMobile');
                    $nav.stop().slideDown(0);
                    $nav.stop().slideUp(0);

                    //이벤트삭제하기
                    $mainBtn.off('mouseenter');
                    $navUlLi.off('mouseleave');

                    $subBtn.off('mouseenter');
                    $navUlLi.off('mouseleave');    
                
                    $subSubBtn.off('mouseenter');
                    $subSub.off('mouseleave');

                    //햄버거 메뉴
                    $mobileBtn.on({
                      click:function(e){
                        e.preventDefault();
                        $bar.toggleClass('addMobile'); //toggleClass = removeClass+addClass
                        $nav.stop().slideToggle(300)
                      }
                    });

                    //메인메뉴 버튼
                    $mainBtn.on({
                      click:function(e){
                        e.preventDefault();
                        $sub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300); //서브메뉴 펼치기
                      }
                    });

                  }//mobile Event end

                  function pcMobileFn(){
                    if($window.innerWidth() > 980){
                      pcEventFn();
                    }
                    else if($window.innerWidth() <= 980){
                      mobileEventFn();
                    }
                  }

                  setTimeout(pcMobileFn, 100);


                  // Pc // Mobile
                  $window.resize(function(){
                    pcMobileFn();
                  });












      },
      section1Fn:function(){
      
        var $slide   = $('#section1 .slide');  
        var $window  = $(window);             
        var $winW    = $(window).width();     
        var $winH    = $(window).height();    
        var $slideWrap = $("#section1 .slide-wrap");
        var $nextBtn = $("#section1 .next-btn");
        var $prevBtn = $("#section1 .prev-btn");
        var $pageBtn = $("#section1 .page-btn");
        var $slideView = $("#section1 .slide-view"); // 터치 선택자(Touch selector)
        var $section1 = $('#section1');
        var cnt        = 0;
        var n          = $('#section1 .slide').length-2; //3 = 슬라이드 총갯수 - 2(맨앞1개 맨뒤1개)
        var setId = null;
        var setId2 = null;

              
              
            function resizeFn(){
              $winW    = $(window).width();
              $slide.css({width:$winW}); //즉시 변환 너비 높이 적용 실행

              if(window.orientation == 0 || window.orientation == 180){ //Portrait
                $winH = $(window).height();
              }
              else if(window.orientation == 90 || window.orientation == -90){ //Landscape
                if($winW > 980){
                  $winH = $(window).height();
                }else{
                  $winH = 600;
                }

              }
              
              $section1.css({width:$winW, height:$winH}); //즉시 변환 너비 높이 적용 실행  
              $slideWrap.stop().animate({left:-$winW*cnt},0);
            }

            setTimeout(resizeFn, 10); //0.01초 후에 resizeFn을 실행해라

            $window.resize(function(){ 
              resizeFn(); // 크기변경시에만 실행
            });
            


       //슬라이드
       //슬라이드 함수
            function slideFn(){
            
              $slideWrap.stop().animate({left:-$winW*cnt},600,'easeInOutExpo',function(){
                if(cnt>n-1){cnt=n-3}
                if(cnt<n-3){cnt=n-1}
                $slideWrap.stop().animate({left:-$winW*cnt},0);
              });
              pageBtnColorEventFn();
            }
       //카운트함수
            function nextSlideCountFn(){
              cnt++;
              slideFn();
            }
            function prevSlideCountFn(){
              cnt--;
              slideFn();
            }
       //클릭이벤트
            $nextBtn.on({
              click:function(){
                pauseTimerFn();
                if( !$slideWrap.is(':animated' )){
                  nextSlideCountFn();
              }
              }
            })
            $prevBtn.on({
              click:function(){
                pauseTimerFn();
                if( !$slideWrap.is(':animated' )){
                  prevSlideCountFn();
              }
              }
            })

            function pageBtnColorEventFn(){
              // var z = cnt;
              // if(z>=3){z=0;}
              $pageBtn.removeClass('addPage');
              $pageBtn.eq(cnt>n-1?0:cnt).addClass('addPage'); 
            }
            pageBtnColorEventFn();

            $pageBtn.each(function(idx){
              $(this).on({
              click:function(){
                pauseTimerFn();
                cnt=idx;
                slideFn();
              }
            });
          });


          //5.터치 스와이프
          //슬라이드를 오른쪽에서 왼쪽으로 터치하면 다음 슬라이드 카운트함수를 호출
          //슬라이드를 왼쪽에서 오른쪽으로 터치하면 이전 슬라이드 카운트함수를 호출

          $slideView.swipe({
            swipeLeft:function(e){ // 오른쪽에서 왼쪽으로
              pauseTimerFn();
              e.preventDefault();
              if( !$slideWrap.is(':animated') ){
                nextSlideCountFn();
              }
            },
            swipeRight:function(e){// 왼쪽에서 오른쪽으로
              pauseTimerFn();
              e.preventDefault();
              if( !$slideWrap.is(':animated') ){
                prevSlideCountFn();
              }
            },
          });


          //6.자동 타이머 실행
          //4초마다 자동으로 다음슬라이드로 넘어감
          function autoTimerFn(){
            setId = setInterval(nextSlideCountFn,4000)
          }
          autoTimerFn();

          // 7.슬라이드에서 이벤트(터치,클릭) 발생시 자동타이머를 일시중지 
          function pauseTimerFn(){
            var t = 0;
            clearInterval(setId);
            clearInterval(setId2); // 초기화
            //5초동안 아무 이벤트 없으면 다시 자동 타이머 실행
            setId2 = setInterval(function(){
              t++;
              console.log(t);
              if(t>=5){
                clearInterval(setId2);
                clearInterval(setId); 
                nextSlideCountFn();
                autoTimerFn();
              }
            },1000)
          }


            

      },
      section2Fn:function(){
          
      },
      section3Fn:function(){
          var $window = $(window);
          var $slideW = $('#section3 .slide').innerWidth(); // 반응형 슬라이드 너비
          var $slideWrap = $('#section3 .slide-wrap');
          var $nextBtn = $('#section3 .next-btn');
          var $prevBtn = $('#section3 .prev-btn');
          var cnt = 0; //카운트 변수는 반드시 숫자로 지정
          var $slideView = $('#section3 .slide-view');
          var setId = null; //메모리 할당 전형 안한 상태
          var setId2 = null;
          var $slideContentBox = $('#section3 .slide-content-box');
          var $slideContentBoxGap = $('#section3 .slide-content-box-gap');
          var $slide = $('#section3 .slide');
          var $slideContentBoxGapSpan = $('#section3 .slide-content-box-gap > span');
          var n = $('#section3 .slide').length-(4+4)-1; //4개(0,1,2,3)

          

          $slideContentBox.on({
            mouseenter:function(){
              $slideContentBox.removeClass('on');
              $(this).addClass('on');
            }
          });

          $slideContentBoxGap.on({
            mouseenter:function(){
              $slideContentBoxGap.removeClass('on');
              $(this).addClass('on');
            }
          });

          $slideContentBoxGapSpan.on({
            mouseenter:function(){
              $slideContentBoxGapSpan.removeClass('on');
              $(this).addClass('on');
            }
          });

          $slide.on({
            mouseleave:function(){
              $slideContentBoxGap.removeClass('on');
              $slideContentBox.removeClass('on');
              $slideContentBoxGapSpan.removeClass('on');
            }
          });
          
          // 반응형 슬라이드
          //1.반응형(response) 함수(function)
          function responseFn(){
            $slideW = $('#section3 .slide').innerWidth();
            $slideWrap.stop().animate({left:-$slideW*cnt},0);
          }

          setTimeout(responseFn, 100) // 0.3초 안에 실행해라

          //2.윈도우(window) 리사이즈(resize()) 메서드
          $window.resize(function(){
            responseFn(); // 반응형
          })


          // 슬라이드 JS
          //1
          function mainSlideFn(){
            $slideWrap.stop().animate({left:-$slideW*cnt},600, 'easeInOutExpo', function(){
              if(cnt>n) {cnt=0}
              if(cnt<0) {cnt=n}
              $slideWrap.stop().animate({left:-$slideW*cnt},0);
            })
          }
          //2
          function nextSlideCntFn(){
            cnt++;
            mainSlideFn();
          }

          function prevSlideCntFn(){
            cnt--;
            mainSlideFn();
          }
          //3
          $nextBtn.on({
            click:function(){
              callbacktimerFn();
              if(!$slideWrap.is(':animated')){
                nextSlideCntFn();
              }
            }
          });

          $prevBtn.on({
            click:function(){
              callbacktimerFn();
              if(!$slideWrap.is(':animated')){
                prevSlideCntFn();
              }
            }
          });
          //4
          $slideView.swipe({
            swipeLeft:function(){
              callbacktimerFn();
              if(!$slideWrap.is(':animated')){
                nextSlideCntFn();
              }
            },
            swipeRight:function(){
              callbacktimerFn();
              if(!$slideWrap.is(':animated')){
                prevSlideCntFn();
              }
            }
          });


          //5
          function autoPlay(){
            setId = setInterval(nextSlideCntFn, 4000);
          }
          autoPlay(); 


          function callbacktimerFn(){
            var t = 0;
            clearInterval(setId);
            clearInterval(setId2);
            setId2 = setInterval(function(){
              t++;
              if(t>=4){
                t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                nextSlideCntFn();
                autoPlay();
              }
            }, 1000)
          }

          
          

      },
      section4Fn:function(){
          
      },
      section5Fn:function(){
          
      },
      section6Fn:function(){
          
      },
      section7Fn:function(){
          
      },
      section8Fn:function(){

      },
      section9Fn:function(){

      },
      section10Fn:function(){

      },
      footerFn:function(){

      }
  } //객체 끝


  litho.init();

})(jQuery);