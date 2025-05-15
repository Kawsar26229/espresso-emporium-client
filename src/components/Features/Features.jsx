import featureImg1 from '../../assets/icons/1.png'
import featureImg2 from '../../assets/icons/2.png'
import featureImg3 from '../../assets/icons/3.png'
import featureImg4 from '../../assets/icons/4.png'

function Features() {
  return (
    <div className="bg-[#ECEAE3]">
        <main className="w-9/12 mx-auto grid grid-cols-4 gap-4">
            <div className='p-10'>
                <img className='w-14' src={featureImg1} alt="Feature-1" />
                <h5 className='text-2xl my-2'>Awesome Aroma</h5>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='p-10'>
                <img className='w-14' src={featureImg2} alt="Feature-1" />
                <h5 className='text-2xl my-2'>High Quality</h5>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='p-10'>
                <img className='w-14' src={featureImg3} alt="Feature-1" />
                <h5 className='text-2xl my-2'>Pure Grades</h5>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='p-10'>
                <img className='w-14' src={featureImg4} alt="Feature-1" />
                <h5 className='text-2xl my-2'>Proper Roasting</h5>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </main>
    </div>
  )
}

export default Features