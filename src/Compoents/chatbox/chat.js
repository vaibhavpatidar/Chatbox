import profilePic from '../../Pages/VaibhavProfilePhoto.jpg'


function Chat({list}) {

    console.log("~ ", list)
    var a=0
    return (

           <dix className="chatbox">
              <div class="flex-container">
              {list.map((item,index) => {
                 {if(a==item.isbot && index==0){
                  a=0
                }
                  else{
                    a=2
                  }
                }
                 return <div className={item.isbot > 0 ? "flex-item-left" : "flex-item-right"}>
                   <span className={item.isbot > 0 ? "flex-span-left" : "flex-span-right"}>
                   <img className={a > 0 ? "try " : item.isbot > 0 ? "flex-profile-left" : "flex-profile-right"} src={profilePic} alt="BigCo Inc. logo"/> 
                    {item.text}
                    </span>
                   </div>
  {a=item.isbot}
              })

              }
              </div>
          </dix>
      
    );
  }
  
  export default Chat;
  

    //   return <div className={item.isbot > 0 ? "itemleft" : "itemright"}>
                  
              //     <div className={item.isbot > 0 ? "msgleft" : "msgrigth"}><img className={item.isbot > 0 ? "msgleft chatleftprofile" : " chatrightprofile msgrigth"} src={profilePic} alt="BigCo Inc. logo"/> <p className={item.isbot > 0 ? "as" : "asr"}>{item.text}</p></div>
              // <br></br>
              //   </div>