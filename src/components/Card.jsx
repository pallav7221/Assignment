import { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
function Card({ cardData }) {
    const [year, setYear] = useState(cardData.postCreatedAt)
    useEffect(()=>{
        const dateObject = new Date(cardData.postCreatedAt);
        const now = new Date();
        const currentYear = now.getFullYear();
        setYear(currentYear - dateObject.getFullYear())
    },[year])
   
    return (
        <div style={{ border: "1px solid gray",height:"min-content" }}>
            <div>
                <img width={"100%"} height={"300px"} src={cardData.postPicture} />
            </div>
            <div style={{ display: "flex", padding: "10px", flexDirection: "row", gap: "30px" }} >
                {/* <div style={{borderRadius:"50%",width:"30px",height:"30px",backgroundColor:"red",textAlign:"center",justifyContent:"center"}}>{(cardData.postUsername[0])}</div> */}
                <div>
                    <Avatar size="40" round={true} name={(cardData.postUsername[0])} />
                </div>
                <div>
                    <div style={{ fontWeight: "bold" }}>{(cardData.postUsername).charAt(0).toUpperCase() + (cardData.postUsername).slice(1)}</div>
                    <div style={{ display: "flex", gap: "5px" }}>
                        <span>{"@" + (cardData.postUsername).charAt(0).toUpperCase() + (cardData.postUsername).slice(1)}</span>
                        <span style={{ textAlign: "center", justifyContent: "center", fontWeight: "400" }}>.</span>
                        <span>{
                            year + " years ago"}</span>
                    </div>
                </div>
                <div style={{ marginLeft: "30px" }}>
                    <img width={"30px"} height={"30px"} src="https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" />
                </div>
            </div>
            <div style={{ width: "90%", padding: "10px" }}>{cardData.content}</div>
        </div>
    );
}

export default Card;
