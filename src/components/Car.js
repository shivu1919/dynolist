import React, { useState } from 'react'
import '../css/Car.css'
import fer from '../res/ferrari.png'

function Car() {
    const[car, setCar] = useState(["Kia","Creta"])

    function AddCar(){
        let flag;
        if(car.length<=4){
            let val = "Kia"
            for(let x in car){
                if(car[x]==val){
                    flag=true
                }
            }

            if(flag){
                alert('duplicate')
            }
            else{
                setCar([...car, val])
            }
            
        }
        else{
            alert('Not allowed')
        }
        
    }

  return (
    <div className='container'>
        <img src={fer} width="400"/>
        <h2 id="head">My Favourite Cars</h2>

        <div className='list'>
            <div>
            {car.map((x,index)=> <li key={index}>{x}</li>)}
            </div>
           
            
            <div >
                <button onClick={AddCar}>Add Your Fav Car</button>
                <br />
                <br/>
                <button>Delete the car</button>
            </div>
           
        </div>

    </div>
  )
}

export default Car