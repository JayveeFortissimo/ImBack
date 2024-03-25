import style from '../../Styles/style.module.css'


const Navigation = () => {
  return (
    <header>
        <nav>
            <h2>Technology</h2>

            <div className={style.Humburger}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={style.links}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Goal</a>
            </div>
        </nav>
    </header>
  )
}

export default Navigation