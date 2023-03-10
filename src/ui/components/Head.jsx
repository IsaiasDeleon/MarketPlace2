export const Head = () => {
    return (
        <>
            <div class="text-center contenedorH">
                <div class="d-flex justify-content-around ContendorHeight">
                    <div className="d-flex justify-content-around ContenedorWidthH">
                        <a className="nav-link fw-bold TextShadowH"  href="#">Inicio</a>
                        <a className="nav-link fw-bold TextSinShadowH"  href="#">Productos nuevos</a>
                        <div className="input-group justify-content-center BuscadorH" >
                            <input type="text" className="form-control align-middle" placeholder="Buscar producto..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around InconosRight">
                        <div>
                            <a className="nav-link" href="#"><i class="bi bi-bell h5"></i>
                                <div  className="text-center Notificaciones"><p style={{ "marginTop": "-3px", "color": "#fff" }} >1</p></div></a>
                        </div>
                        <div>
                            <a className="nav-link" href="#"> <i class="bi bi-bag h5"></i>
                                <div className="text-center Notificaciones"><p style={{ "marginTop": "-3px", "color": "#fff" }} >7</p></div></a>
                        </div>
                        <div style={{ "alignItems": "center" }} className="d-flex">
                            <div class="dropdown">
                            <div className=" col-2 dropdown-toggle UserIcon" data-bs-toggle="dropdown" aria-expanded="false"></div>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Cambiar contraseña</a></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesion</a></li>
                                    
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <hr style={{ "width": "95%", "margin": "0", "marginLeft": "2.5%" }} />
            </div>
        </>
    )
}