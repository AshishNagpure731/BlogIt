import React, { useEffect, useContext, useState } from 'react'

import { AppContext } from './Contaxt';
const Maincontent = () => {
    const { Auth, dispatchUserEvent, FindByID, UserName } = useContext(AppContext);
    const [DataID, setDataID] = useState([])
    const [AllComments, setAllComments] = useState([])
    const [Text, setText] = useState('')
    const [EmailUser, setEmailUser] = useState('')
    const getById = async () => {
        let headersList = {

        }

        let response = await fetch(`https://blog-it-e87y.onrender.com/posts/${FindByID}`, {//FindByID
            method: "GET",
            headers: headersList
        });

        let data = await response.json();
        setDataID(data)
        console.log(data);
    }
    const Submittext = (e) => {
        setText(e)
    }
    const fetchAllComments = async () => {
        let headersList = {

        }

        let response = await fetch("https://blog-it-e87y.onrender.com/comment", {
            method: "GET",
            headers: headersList
        });

        let data = await response.json();
        setAllComments(data)
        console.log(data);
    }
    const submitComment = async () => {
        // if (UserName !== '' && Text !== '') {
            
            let headersList = {
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({

                "user": UserName,
                "comment": Text
            });

            let response = await fetch("https://blog-it-e87y.onrender.com/comment", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await response.json();
            console.log(data);
        // }
    }
    
    useEffect(() => {
        // if (FindByID !== 0 ) {\
        getById()
        fetchAllComments()
        // }
    }, [])


    return (
        // <div style={{minHeight: '100%',flex:1,backgroundColor:'#e5ecf3',borderTopLeftRadius:'20px'}}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: '15%', marginRight: '15%', marginTop: '5%', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '10px' }}>

            {DataID.length === 0 && DataID.length === undefined ? <>No Content !</> :
                <>
                    <h1>{DataID.heading}</h1>
                    <div style={{ width: "80%", height: '400px', border: '2px solid #d7d7d7', borderRadius: '15px', color: '#d7d7d7', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bcbcbc' }}>IMAGE</div>
                    {/* <div>
                        <h3>Content</h3>
                        <p>why i am always</p>
                        <p>why i am always</p>
                        <p>why i am always</p>
                        <p>why i am always</p>
                    </div> */}
                    {DataID.content1 === '' ? <></> :
                        <div style={{ margin: '10px', backgroundColor: 'white', border: '2px solid white', borderRadius: "5px", width: '70%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {/* <h3>why i am always</h3> */}
                            <p style={{ margin: '10px' }}>{DataID.content1}</p>
                        </div>
                    }
                    {DataID.content2 === '' ? <></> :
                        <div style={{ margin: '10px', backgroundColor: 'white', border: '2px solid white', borderRadius: "5px", width: '70%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {/* <h3>why i am always</h3> */}
                            <p>{DataID.content2}</p>
                        </div>
                    }
                    {DataID.content3 === '' ? <></> :
                        <div style={{ margin: '10px', backgroundColor: 'white', border: '2px solid white', borderRadius: "5px", width: '70%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {/* <h3>why i am always</h3> */}
                            <p>{DataID.content3}</p>
                        </div>
                    }
                    {DataID.content4 === '' ? <></> :
                        <div style={{ margin: '10px', backgroundColor: 'white', border: '2px solid white', borderRadius: "5px", width: '70%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {/* <h3>why i am always</h3> */}
                            <p>{DataID.content4}</p>
                        </div>
                    }
                    {DataID.content5 === '' ? <></> :
                        <div style={{ margin: '10px', backgroundColor: 'white', border: '2px solid white', borderRadius: "5px", width: '70%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {/* <h3>why i am always</h3> */}

                            <p>{DataID.content5}</p>
                        </div>
                    }
                    {DataID.content6 === '' ? <></> :
                        <div style={{ margin: '10px', backgroundColor: 'white', border: '2px solid white', borderRadius: "5px", width: '70%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {/* <h3>why i am always</h3> */}
                            <p>{DataID.content6}</p>
                        </div>
                    }
                    <h2>Comments</h2>
                    {AllComments.length === 0 ? <></> : <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-start',flexDirection:'column' }}>
                        {AllComments.map((e,idx) => (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', border: '0.1px solid gray', width: '100%', backgroundColor: '#dadada',margin: '5px' }}>
                                <h3>{e.user}</h3> : <p>{e.comment}</p>
                            </div>
                        ))}
                    </div>}
                    <div style={{ display: 'flex', flexDirection: 'column', }}>

                        <textarea rows={10} cols={70} onChange={(e) => Submittext(e.target.value)} />
                        <button onClick={() => submitComment()}>Submit</button>
                        <div style={{ height: '10px' }}></div>
                    </div>
                </>

            }
        </div>
        // </div>
    )
}

export default Maincontent
