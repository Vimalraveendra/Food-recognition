import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm =({onChangeEvent,onSubmit,input})=> {
	
		return (
			
			<div>
			 <div>
			 	<p className='f3 white'>
			 	{'The magic brain will detect the foods in your pictures. Give it a try.'}
			 	</p>
			 </div>
				 <div className='center1'>
				  <div className='center1 pa4 br3 shadow-5 background'>
				   <input 
				   className='f4 pa2 w-70'
				   value={input}
				   type="text"
				   onChange={onChangeEvent}
				   />
			   <button 
			   onClick={onSubmit}
			   className='f5 w-30 pv2 ph3 grow bg-dark-green white link'
			   >
			   Detect</button>
			  </div>
			</div>
		  </div>
		)
	}


export default ImageLinkForm;
