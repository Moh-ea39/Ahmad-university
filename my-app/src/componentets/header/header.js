import HeaderIMG from './headerimg.png'
export default function HeaderF(){
    return(
        <>
        <header>
            <span className="text_header" >
            electrical eng
            </span>
           <img src={HeaderIMG} className="img_header" />

        </header>
        </>
    )
}