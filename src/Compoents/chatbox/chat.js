

function Chat({list}) {

    console.log("~ ", list)
    return (

          <dix className="chatbox">
              {list.map((item,index) => {
                return <div className="items">
                  <div className={item.isbot > 0 ? "msgleft" : "msgrigth"}>{item.text}</div>
              <br></br>
                </div>
              })

              }
          </dix>
      
    );
  }
  
  export default Chat;
  