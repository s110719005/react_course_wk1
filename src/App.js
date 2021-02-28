

function App() {
  return (
    <div className="App">
      <div className="set">
        <header>
            
            <div className="container-title">
                <div className="box-title">Vegetables</div>

                <img src="img/btn_facebook.png" alt="fb" className="title-pic"/>
                <img src="img/btn_instagram.png" alt="ig" className="title-pic"/>

                <div className="line"></div>

                <div className="login-box">LOGIN</div>
                <div className="join-box">JOIN</div>
            </div>
            
        </header>

        <nav className= "nav-container">
            <div className= "nav-box">
            <ul>
                <li className= "home-li">Home</li>
                <li className= "about-li">About Us</li>
                <li className= "vege-li">Vegetables</li>
                <li className= "online-li">Online</li>
                <li className= "contact-li">Contact</li>
            </ul>
            </div>
        </nav>

        <div className="mainpic">
            <img src="img/img_main_pumpkin.png" alt="pumpkin"/>
        </div>
        
        <div className="main-container">
            <aside>
                <div className="down-box">
                    Vegetables
                </div>

                <div className="asidepic-container">
                    <img src="img/img_vegetables_pepper.png" alt="pepper"/>
                    <img src="img/img_vegetables_carrot.png" alt="carrot"/>
                    <img src="img/img_vegetables_corn.png" alt="corn"/>
                </div>
            </aside>

            <article >
                <div className="down-box">
                    Contact
                </div>

                <div className="article-box">
                    <div className="articletext1">
                        For any questions or suggestions about Vegetables, Vegetables Club or your 
                        online order you can contact Vegetables Customer Service by phone, email 
                        or post and we’ll be happy to help.
                    </div>
                    <div className="articleline"></div>
                    <div className="articletext2">
                        E-mail : Vegetables@aaabbccc.com <br/>
                        PHONE : +886-123-456-789
                    </div>
                </div>
                
            </article>
        </div>

        </div>
    </div>
  );
}

export default App;
