import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
export default function FirstComponent() {
  return (
    <div className="parent">
      <img src={img1} className="img1" />

      <div className="stars star1">
        <svg width="32" height="26" viewBox="0 0 32 26" fill="" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L19.5923 9.67376H31.2169L21.8124 15.6525L25.4046 25.3262L16 19.3475L6.59547 25.3262L10.1877 15.6525L0.783126 9.67376H12.4078L16 0Z" fill="#32CDB1" />
        </svg>
      </div>
      <div className="stars star2">
        <svg width="32" height="26" viewBox="0 0 32 26" fill="" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L19.5923 9.67376H31.2169L21.8124 15.6525L25.4046 25.3262L16 19.3475L6.59547 25.3262L10.1877 15.6525L0.783126 9.67376H12.4078L16 0Z" fill="#32CDB1" />
        </svg>

      </div>
      <div className="stars star3">
        <svg width="32" height="26" viewBox="0 0 32 26" fill="" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L19.5923 9.67376H31.2169L21.8124 15.6525L25.4046 25.3262L16 19.3475L6.59547 25.3262L10.1877 15.6525L0.783126 9.67376H12.4078L16 0Z" fill="#32CDB1" />
        </svg>

      </div>
      <div className="stars star4">
        <svg width="32" height="26" viewBox="0 0 32 26" fill="" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L19.5923 9.67376H31.2169L21.8124 15.6525L25.4046 25.3262L16 19.3475L6.59547 25.3262L10.1877 15.6525L0.783126 9.67376H12.4078L16 0Z" fill="#32CDB1" />
        </svg>

      </div>
      <div className="stars star5">
        <svg width="32" height="26" viewBox="0 0 32 26" fill="" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0L19.5923 9.67376H31.2169L21.8124 15.6525L25.4046 25.3262L16 19.3475L6.59547 25.3262L10.1877 15.6525L0.783126 9.67376H12.4078L16 0Z" fill="#32CDB1" />
        </svg>

      </div>
      <div className="tow_imgs_and_content">
        <div className="under_big_img">
          <div className="content_under_big_img">
            <span className="text_in"> EMG ML</span>
          </div>
        </div>
        <div className="tow_imgs_flex">
          <img src={img3} className="img3" />
          <img src={img2} className="img2" />
        </div>

      </div>
      <div className="parent_hr">
        <div className="hr" />
        
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="svg3"
          width="25"
          height="23"
          viewBox="0 0 28 28">
          <path d="M3 3 L3 25 L23 14 z" stroke="black" stroke-width="3" fill="black" />
        </svg>


      <div className="border_between" />
      <div className="circle" />
      <svg xmlns="http://www.w3.org/2000/svg" className="svg1"
        width="58"
        height="58"
        viewBox="0 0 28 28">
        <path d="M3 3 L3 25 L23 14 z" stroke="black" stroke-width="3" fill="black" />
      </svg>
   <div className="svg2_parent">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg2"
          width="58"
          height="58"
          viewBox="0 0 28 28">
          <path d="M3 3 L3 25 L23 14 z" stroke="black" stroke-width="3" fill="black" />
        </svg>
  
   </div>
    </div>
  )
}