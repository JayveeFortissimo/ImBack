import style from '../../Styles/style.module.css'
import data from '../Data/Datas.js'
import Buton from '../Button.jsx'



const Goals = () => {
  return (
    <div className={style.Goal}>
    <h1>Goals</h1>

    <div className={style.parentCard}>
    {
     data.map((elements,index)=>{
          return(
            <div key={elements.id} className={style.cards}>
                <img src={elements.img} alt="" />
             <h3>{elements.title}</h3>
             <Buton id={style.BTN}>Click</Buton>
                </div>
          )
     })
}
    </div>

   
    </div>
  )
}

export default Goals