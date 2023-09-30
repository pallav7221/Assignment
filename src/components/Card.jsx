import { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import "./Card.css"
function Card({ data }) {
    console.log(data)
    const [year, setYear] = useState(data.postCreatedAt)
    useEffect(() => {
        const dateObject = new Date(data.postCreatedAt);
        const now = new Date();
        const currentYear = now.getFullYear();
        setYear(currentYear - dateObject.getFullYear())
    }, [year])

    return (
        <div className='box'>
            <div>
                <img className='profileImg' src={data.postPicture} />
            </div>
            <div className='cardMainContent' >
                <div className='innerData'>
                    <div>
                        <Avatar size="40" round={true} name={(data.postUsername[0])} />
                    </div>
                    <div className='userInfo'>
                        <div className='name'>{(data.postUsername).charAt(0).toUpperCase() + (data.postUsername).slice(1)}</div>
                        <div>
                            <span>{"@" + (data.postUsername).charAt(0).toUpperCase() + (data.postUsername).slice(1)}</span>
                            <span>.</span>
                            <span>{
                                year + " years ago"}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img width={"30px"} height={"30px"} src="https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" />
                </div>
            </div>
            <div style={{ width: "90%", padding: "10px" }}>{data.content}</div>
        </div>
    );
}

export default Card;
