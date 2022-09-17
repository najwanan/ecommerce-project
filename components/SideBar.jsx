import react from 'react'
import ReactDOM from 'react-dom'
import data from '../src/assets/stackline_frontend_assessment_data_2021.json'

export default function SideBar(props) {
    const productName = "Ninja Blender"
    console.log(data)
   console.log(props.image)
    return (
        <div className="sideBar">
            <img className="itemImage" src={props.image}></img>
            <p className="productTitle">
                <span>{props.title}</span>
            </p>
            
            <p>{props.subtitle}</p>
            <p className="itemTags">
                <span>{props.tags}</span>
            </p>
         
        </div>
       
    )
    
}