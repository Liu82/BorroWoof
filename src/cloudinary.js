// import React, { useState }from 'react';
// import './App.css'

// function App(){
//     const [image, setImage] = useState('')
//     const [loading, setLoading] = useState(false)

//     const uploadImage = async e=>{
//         const files = e.target.files
//         const data = new FormData()
//         data.append('file', files[0])
//         data.append('upload_present', 'n4ckgjus')
//         setLoading(true)
//         const res = await fetch(
//             'https://api.cloudinary.com/v1_1/borrowof/image/upload',
//             {
//                 method:'POST',
//                 body:'data'
//             }
//         )
//     const file = await res.json()

//     setImage(file.secure_url)
//     setLoading(false)
// }

// return(
//     <div>
//         <h1>Upload Image</h1>
//         <input
//         type="file"
//         name="file"
//         placeholder="Upload an Image"
//         onChange={uploadImage}
//         />
//         {loading ?(
//             <h3>Loading....</h3>
//         ):(
//             <img src={image}style={{width:'300px'}}/>
//         )}
//     </div>
// )
//     }
// export default App

// var myWidget = cloudinary.createUploadWidget({
//   cloudName: 'borrowoof', 
//   uploadPreset: 'n4ckgjus'}, (error, result) => { 
//     if (!error && result && result.event === "success") { 
//       console.log('Done! Here is the image info: ', result.info); 
//     }
//   }
// )

// document.getElementById("upload_widget").addEventListener("click", function(){
//     myWidget.open();
//   }, false);

