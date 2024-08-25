import React, { useEffect, useState,useContext } from 'react'
import { AppContext } from './Contaxt'
import { useNavigate } from 'react-router-dom';

const AllBlog = () => {
     const navigate = useNavigate();
    const [DisplayData, setDisplayData] = useState([])
    const { dispatchUserEvent } = useContext(AppContext);

    const AllBlogApiCall = async () => {
        let headersList = {

        }

        let response = await fetch("http://localhost:8000/posts", {
            method: "GET",
            headers: headersList
        });

        let data = await response.json();
        setDisplayData(data)
    }
const ParticularBlog = async (id)=>{
    dispatchUserEvent('GET_ID', { userId: id});
    navigate("/Maincontent")
    }

    useEffect(() => {
        setDisplayData('')
        AllBlogApiCall()

    }, [])
 //overflowY: 'auto'
    return (
        <div style={{ flex: 1, display: 'flex',overflow:'auto'  }}> 
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                margin: '7px',
                width: '100%',
                gap: '10px'
            }}>
                {DisplayData.length === 0 ? <></> :
                    (DisplayData.map((e,idx) => (


                        <div key={idx} style={{
                            height: '300px', border: "2px solid #b7b7b7", width: "300px", boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(0, 0, 0, 0.2)', display: 'flex',          // Add this to use Flexbox
                            backgroundColor: '#bcbcbc', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center'
                        }}>
                            <div style={{ height: "200px", width: '90%', border: '2px solid #d7d7d7', margin: "3px", borderRadius: '5px', color: '#d7d7d7', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                IMAGE
                            </div>
                            <h3>{e.heading} <a style={{ fontSize: '12px' }} href='#' onClick={(f)=>ParticularBlog(e.id)}>Read More..</a></h3>

                        </div>
                    ))//map
                    )}

            </div>

        </div>

    )
}

export default AllBlog
