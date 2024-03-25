import style from '../../Styles/style.module.css'
import Tech from '../../assets/Tech.png'
import Sections from './MainSection'


const Section = () => {
  return (
    <Sections>
       <div className={style.content}>
        <h1><span style={{color:"aqua"}}>Techno</span>2024</h1>
          <p>Technology continues to revolutionize daily</p>
          <p>life, with advancements in artificial intelligence</p>
          <p>and virtual reality shaping how we work,</p>
          <p>communicate, and experience the world</p>
       </div>

       <img src={Tech} alt="" />
    </Sections>
  )
}

export default Section