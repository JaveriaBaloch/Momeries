import axios from 'axios'
import {useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/fontawesome-free-solid'

const Home = () =>{
    let [uploads,setUpload] = useState([])
    axios.get("http://localhost:3001/").then(memories=>{
            setUpload(memories.data)
        },[])
    useEffect(()=>{
        axios.get("http://localhost:3001/").then(memories=>{
            setUpload(memories.data)
        },[])
        
    })
    return(
        <div className="container">
        <div className="row">
            {uploads.map(i=>{
                let str = '../uploads/'+i.img

               return(<div className="col-lg-4 col-md-6 col-sm-12 my-2">
                <div className="card card-body">
                    <div className="text-white" style={{background:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url(${require(`../uploads/${i.img}`)})`,height:'200px',backgroundSize:"cover"}}>
                    </div>
                    <h3 className="me-auto my-2">{i.data['memory[title]']}</h3>
                    
                    {i.data['memory[tags]'].map(tag=>(<b className="me-auto">#{tag} </b>))}
                    
                    <p className="me-auto my-2 text-left">{i.data['memory[description]']}</p>
                    <small className="me-auto my-2">uploaded on: {i.data['memory[uploadDate]']}</small>
                    <small className="me-auto my-2 text-left">Upload By: {i.data['memory[name]']}</small>
                    <div className='d-flex my-3 justify-content-between btn-group'>
                         <button className='btn btn-outline-primary border-0'>12<FontAwesomeIcon icon={faThumbsUp} className="ms-3"/> Like</button>
                         <button className='btn btn-outline-primary border-0'>44<FontAwesomeIcon icon={faThumbsDown} className="ms-3"/> Dislike</button>
                    </div>
                </div>
                </div>
               )
            })}
        </div>
        </div>
    )
}

export default Home