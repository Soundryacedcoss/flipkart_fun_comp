
import './componant3.css'
import img1 from './image/Screenshot_2022-09-29_18-04-56.png'
import img2 from './image/Screenshot_2022-09-29_18-05-16.png'
import img3 from './image/Screenshot_2022-09-29_18-05-34.png'
export default function Componant3() {
  return (
	<div class="container">
	
		<div class="content">
			<div class="slideshow">
			
				<button class="slide-btn slide-btn-1"></button>
				<button class="slide-btn slide-btn-2"></button>
				<button class="slide-btn slide-btn-3"></button>

				<div class="slideshow-wrapper">
					<div class="slide">
						<img className="slide-img" alt=''src={img1}/>
                        </div>
                        <div class="slide">
                        <img className="slide-img" alt=''src={img2}/>
					</div>
					<div class="slide">
          <img className="slide-img" alt=''src={img3}/>
					
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

