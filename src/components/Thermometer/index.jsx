


import img from '../../assets/icon-cloudy.svg'


export default function Thermometer() {
    return (
        <div>
            <span>Passo Fundo - RS</span>
            <div>
                <img src={img} />
                <span>22º</span>
            </div>
        </div>
    )
}