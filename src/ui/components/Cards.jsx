export const Card = ({img,empresa,descripcion,estrellas,monto}) =>{
    return(
        <div className="card contenedorC">
            <div className="text-center divImgMT">
                <img src={`./assets/Art${img}.png`} alt="Image" className="ImgCard" />
            </div>
            <div className="content-txt TextCard">
                <h6 className="text-secondary">{empresa}</h6>
                <h6>{descripcion}</h6>
                <i style={{ "margin": "3px" }} className={`bi bi-star-fill ${(estrellas >= 1)?'text-warning':'' }`}></i>
                <i style={{ "margin": "3px" }} className={`bi bi-star-fill ${(estrellas >= 2)?'text-warning':'' }`}></i>
                <i style={{ "margin": "3px" }} className={`bi bi-star-fill ${(estrellas >= 3)?'text-warning':'' }`}></i>
                <i style={{ "margin": "3px" }} className={`bi bi-star-fill ${(estrellas >= 4)?'text-warning':'' }`}></i>
                <i style={{ "margin": "3px" }} className={`bi bi-star-fill ${(estrellas >= 5)?'text-warning':'' }`}></i>
                <div className="d-flex justify-content-between">
                    <h6 >${monto} </h6>
                    <div  className="text-center text-white IconTextCard">
                    <i class="bi bi-bag-plus"></i>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}