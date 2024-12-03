import { useEffect, useState } from "react";
import './Home.css';

const Home = () => {
    document.title = "choque de lanchas";

    const [eleccion, setEleccion] = useState('rider')

    function createRandomSparkle() {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        const sparkleSize = 20; // Ajusta según el tamaño del sparkle
        const randomX = Math.random() * (window.innerWidth - sparkleSize);
        const randomY = Math.random() * (window.innerHeight - sparkleSize);
        sparkle.style.left = `${randomX}px`;
        sparkle.style.top = `${randomY}px`;

        sparkle.style.width = '1vw';
        sparkle.style.height = '1vh';
        sparkle.style.maxWidth = '1vw';
        sparkle.style.maxHeight = '1vh';
    
        const randomXDirection = (Math.random() - 0.5)*10;
        const randomYDirection = (Math.random() - 0.5)*10;
        
        sparkle.style.setProperty("--randomXDirection", randomXDirection);
        sparkle.style.setProperty("--randomYDirection", randomYDirection);
        
        document.body.appendChild(sparkle);
        
        sparkle.style.animation = `sparkleAnimation 10s linear`; 
        
        sparkle.style.animationDirection = randomXDirection > 0 ? "normal" : "reverse";
    
        setTimeout(() => {
            sparkle.remove();
        }, 10000); 
    }

    useEffect(() => {
        if (eleccion === "formacion") setInterval(createRandomSparkle, 1000); 
    }, [eleccion])
    

    return (
        <>
            
            <h2 className="TitleFont">Choque de Lanchas</h2>
            <div className="Elecciones">
                <h3 className={`BotonEleccion ${eleccion === "rider" && 'Active'}`} onClick={() => setEleccion('rider')}>rider técnico</h3>
                <h3 className={`BotonEleccion ${eleccion === "formacion" && 'Active'}`} onClick={() => setEleccion('formacion')}>formación</h3>
            </div>

            {eleccion === "rider" && 
            <div className="RiderCont">
                <div className="BataCont">
                    <img src="drumJPG.jpg" alt="Bateria" className="ImgGif"/><p>retorno | microfono</p>
                </div>
                <div className="CuerdasCont">
                    <div>
                        <img src="guitarJPG.jpg" alt="Guitarra" className="ImgGif"/>
                        <p className="LililP">guitarra</p>
                        <p className="LilP">pedalboard</p>
                        <p>microfono</p>
                        <p>retorno</p>
                    </div>
                    <div>
                        <img src="bassJPG.jpg" alt="Bajo" className="ImgGif"/>
                        <p className="LililP">bajo</p>
                        <p className="LilP">pedalboard</p>
                        <p>microfono</p>
                        <p>retorno</p>
                    </div>
                </div>
            </div>}
            
            {eleccion === "formacion" &&
            <>
                <div className="FormaCont">
                    <h3>guitarra/voces: lennzon</h3>
                    <h3>bajo/voz: sasha</h3>
                    <h3>bateria/voces: ivi</h3>
                    <p className="LilP">sujeto a cambios ya que en algunos temas cambiamos de instrumento las cuerdas</p>
                </div>
            </>
            
            }
        </>
    )
}

export default Home;