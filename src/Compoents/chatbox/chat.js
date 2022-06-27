import profilePic from '../../Pages/VaibhavProfilePhoto.jpg'


function Chat({list}) {

    console.log("~ ", list)
    return (

           <dix className="chatbox">
              <div class="flex-container">
              {list.map((item,index) => {
                 return <div className={item.isbot > 0 ? "flex-item-left" : "flex-item-right"}>
                   <span className={item.isbot > 0 ? "flex-span-left" : "flex-span-right"}>
                   <img className={item.isbot > 0 ? "flex-profile-left" : "flex-profile-right"} src={profilePic} alt="BigCo Inc. logo"/> 
                    {item.text}
                    </span>
                   </div>
                
 


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