import photoBanner from '../../assets/study.svg'
import './banner.styles.css'

const Banner = () => {
    return(
        <>
        <div className='banner'>
        <img src={photoBanner} alt="ilustração de estudos" />
        <h2>Dicas para manter o foco</h2>
        </div>
        </>
    )
}

export default Banner