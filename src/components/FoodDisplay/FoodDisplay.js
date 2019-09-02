import React from 'react';
import './FoodDisplay.css'

const FoodDisplay =({imageUrl,foods,error})=> {
	 const food=  foods.map(item=>{
	 	       return <li className=" f6 bg-near-white br--top  mv2 center3"
		 	       key={item.id}>
		 	       <span>
				 	 {item.name}
				 	 </span>
				 	 <span>
				 	 {item.value}
				     </span>
				 	 </li>
				 })

         if(error){
         	return(
         		 <h3 className='f2 white'>{error}</h3>
		         		)
		         }else{
			return (
			
				<div className='center2'>   
				 <div className='pa2 '>
				 	<img src={imageUrl} style={{width:'400px',height:'520px'}} alt=""/>
				 </div>
				 {food.length> 0 &&
				 <div className='ph0 br3 hidden ba b--black-10 display' >		
					 <ul className='mv0 ph0'>
					   <h2 className='center3 br3  f5'>Name<span className='center3 br3 f5'>Probability</span></h2>
					{food}
					
		             </ul>
	             </div>
        }
            </div>		
		
		)
	}
}

export default FoodDisplay;
