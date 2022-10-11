import {useEffect,useState} from 'react';
import axios from 'axios'
const Upload = () =>{
    const [Username,setUserName] = useState('')
    const [tags,setTags] = useState()
    const [description,setDescription] = useState('')
    const [file,setFile] = useState()
    const [title,setTitle] = useState('')
    const [uploadData,setUploadData] = useState({})
    const [status,setStatus] = useState('false')
    const imageUpload=(e)=>{
        setFile(e.target.files[0])
    }
    useEffect(()=>{
        console.log(uploadData)
        if (status!=='false'){
            let memory  = {...uploadData}
            axios.post("http://localhost:3001/uploadMemory",{memory,file}, {headers: {
                'Content-Type': 'multipart/form-data'
              }}).then(()=>setStatus('true')).catch(()=>setStatus('err'))
            
        }
    })
    const uploadMemory = (e) =>{
        e.preventDefault()
        let date = new Date()
        let stamp = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
            setStatus("true")
            setUploadData({
                name: "Javeria",
                title:title,
                tags: tags,
                description:description,
                uploadDate: stamp,
            })
    }

    return(
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto my-5">
                {status ==='true' &&
                     <div className="alert alert-success my-3">
                            uploaded!
                    </div>}
                    {status ==='err' &&
                     <div className="alert alert-danger my-3">
                            Something went wrong!
                    </div>}
                <form className='card card-body' onSubmit={uploadMemory}>
                    <div className="card-header">
                        <h3 className="text-center mx-auto p-2">Upload</h3>
                    </div>
                    <input required placeholder="Title" className="form-control my-2" name="title" onChange={(e)=>setTitle(e.target.value)}/>
                    <input required placeholder="Tags" className="form-control my-2" name="tags" onChange={e=>{setTags(e.target.value)}}/>
                    <input required placeholder="Description" className="form-control my-2" name='description' onChange={(e)=>setDescription(e.target.value)}/>
                    <input type="file" required className="form-control my-2" name='file' onChange={imageUpload}/>
                    <button type="submit" className='btn btn-primary w-100'>Upload</button>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Upload