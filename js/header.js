class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header id="navB" class="navbar">
            <div class="headerContainer">
                <div id="menuIC" class="menuIconContainer">
                    <span>
                        <div id="menuI" class="menuIcon" onclick="menuDropdown()">
                          <div class="bar1"></div>
                          <div class="bar2"></div>
                          <div class="bar3"></div>
                        </div>
                    </span>
                </div>
                <div class="logoContainer">
                    <a href="main.html"><img class="logo" src="../pict/nosh.jpg" alt="Nosh"></a>
                </div>
                <div class="navSelection">
                    <ul>
                        <li>
                            WEST MALAYSIA
                            <ul class="dropdown">
                                <li><a href="../html/state/johor.html">Johor</a></li>
                                <li><a href="../html/state/kedah.html">Kedah</a></li>
                                <li><a href="../html/state/kelantan.html">Kelantan</a></li>
                                <li><a href="../html/state/malacca.html">Malacca</a></li>
                                <li><a href="../html/state/negerisembilan.html">Negeri Sembilan</a></li>
                                <li><a href="../html/state/pahang.html">Pahang</a></li>
                                <li><a href="../html/state/penang.html">Penang</a></li>
                                <li><a href="../html/state/perak.html">Perak</a></li>
                                <li><a href="../html/state/perlis.html">Perlis</a></li>
                                <li><a href="../html/state/selangor.html">Selangor</a></li>
                                <li><a href="../html/state/terengganu.html">Terengganu</a></li>
                            </ul>
                        </li>
                        <li>
                            EAST MALAYSIA
                            <ul class="dropdown">
                                <li><a href="../html/state/sabah.html">Sabah</a></li>
                                <li><a href="../html/state/sarawak.html">Sarawak</a></li>
                            </ul>
                        </li>
                        <li>
                            POPULAR
                            <ul class="dropdown">
                                <li><a href="#">---</a></li>
                                <li><a href="#">---</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="../html/Tags.html">TAGS</a>
                        </li>
                    </ul>
                </div>   
                <div class="rightIconContainer">
                    <a href="../html/Search.html"><i class="fa fa-search" style="font-size:24px;color:white;padding:25px;"></i><a>
                    <a class="feed" href="../html/Feedback.html"><button type="button" class="feedbutton">Feedback</button></a>        
                </div> 
            </div>

            <div id="navM" class="navMobile">
                <ul>
                    <li>
                        <div class="firstRow" onclick="subDropdown('A','A1','A2')">
                            WEST MALAYSIA
                            <span class="upwardArrow">
                                    <div id="A1" class="upbar1"></div>
                                    <div id="A2" class="upbar2"></div>
                            </span>
                        </div>
                        <div id="A" class="dropdownSubMenu">
                            <ul >
                                <li><a href="../html/state/johor.html">Johor</a></li>
                                <li><a href="../html/state/kedah.html">Kedah</a></li>
                                <li><a href="../html/state/kelantan.html">Kelantan</a></li>
                                <li><a href="../html/state/malacca.html">Malacca</a></li>
                                <li><a href="../html/state/negerisembilan.html">Negeri Sembilan</a></li>
                                <li><a href="../html/state/pahang.html">Pahang</a></li>
                                <li><a href="../html/state/penang.html">Penang</a></li>
                                <li><a href="../html/state/perak.html">Perak</a></li>
                                <li><a href="../html/state/perlis.html">Perlis</a></li>
                                <li><a href="../html/state/selangor.html">Selangor</a></li>
                                <li><a href="../html/state/terengganu.html">Terengganu</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="firstRow" onclick="subDropdown('B','B1','B2')">
                            EAST MALAYSIA
                            <span class="upwardArrow">
                                    <div id="B1" class="upbar1"></div>
                                    <div id="B2" class="upbar2"></div>
                            </span>
                        </div>
                        <div id="B" class="dropdownSubMenu">
                            <ul >
                                <li><a href="../html/state/sabah.html">Sabah</a></li>
                                <li><a href="../html/state/sarawak.html">Sarawak</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="firstRow" onclick="subDropdown('C','C1','C2')">
                            POPULAR RECEPIE
                            <span class="upwardArrow">
                                    <div id="C1" class="upbar1"></div>
                                    <div id="C2" class="upbar2"></div>
                            </span>
                        </div>
                        <div id="C" class="dropdownSubMenu">
                            <ul >
                                <li><a href="../html/recipe/selangor/nasilemak.html">Nasi Lemak</a></li>
                                <li><a href="../html/recipe/selangor/roticanai.html">Roti Canai</a></li>
                                <li><a href="../html/recipe/penang/charkwayteow.html">Char Kuey Teow</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#"><div>ABOUT US</div></a>
                    </li>
                </ul>
                <div class="feedM">
                    <a href="Feedback.html"><button type="button" class="feedbutton">Feedback</button></a>        
                </div>
            </div>   
        </header>   
        `;
    }
  }
  
  customElements.define('header-component', Header);

  function menuDropdown() { 
      document.getElementById("menuI").classList.toggle("change");
      document.getElementById("navM").classList.toggle("dropdownMenu");
      document.getElementById("navB").classList.toggle("changeWidth");
      document.getElementById("menuIC").classList.toggle("changeColor");
      document.getElementById('content').classList.toggle('hidden');
      document.getElementById('foot').classList.toggle('hidden');
  }

  function subDropdown(id, id1, id2) {
      document.querySelectorAll('.dropdownSubMenu').forEach(elt => {
          if(elt.getAttribute('id') != id){
              elt.classList.remove('dropdownSubMenuOpen');
          };
      });
      document.querySelectorAll('.upbar1').forEach(elt => {
          if(elt.getAttribute('id') != id){
              elt.classList.remove('downbar1');
          };
      });
      document.querySelectorAll('.upbar2').forEach(elt => {
          if(elt.getAttribute('id') != id){
              elt.classList.remove('downbar2');
          };
      });

      var x = document.getElementById(id).classList;
      var y = document.getElementById(id1).classList;
      var z = document.getElementById(id2).classList;
      if(x != "dropdownSubMenu dropdownSubMenuOpen"){
          document.querySelector('#'+id).classList.add('dropdownSubMenuOpen');
          document.querySelector('#'+id1).classList.add('downbar1');
          document.querySelector('#'+id2).classList.add('downbar2');
      }else{
          x.remove('dropdownSubMenuOpen');
          y.remove('downbar1');
          z.remove('downbar2');
      }
  }