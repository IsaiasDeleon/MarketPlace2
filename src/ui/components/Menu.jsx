import * as React from 'react';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
function valuetext(value) {
    return `${value}°C`;
}

export const Menu = () => {

    const [value, setValue] = React.useState([1000, 4000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='contenedorM' >
                <div className="text-center align-middle contenedorMHead" >
                    <p style={{ "margin": "0" }} className="text-white fw-bold h5 p-4">Market place <b style={{ "color": "#F1C40F" }}>B</b><b style={{ "color": "#2980B9" }}>A</b></p>
                </div>
                <div style={{ "overflowY": "auto" }}>
                    <div className="p-4">
                        <p style={{ "margin": "0" }} className="text-white fw-bold h5"><i class="bi bi-filter"></i> Filtros</p>
                    </div>
                    <div className="p-3">
                        <p style={{ "margin": "0" }} className="text-white fw-bold"><i class="bi bi-cart"></i> Tiendas</p>
                        <div class="form-check m-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label text-white " for="flexCheckDefault">
                                Badger automation
                            </label>
                        </div>
                        <div class="form-check m-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label text-white " for="flexCheckChecked">
                                Aplintec
                            </label>
                        </div>
                    </div>
                    <hr style={{ "color": "#fff", "width": "90%", "marginLeft": "5%" }} />
                    <div className="p-3">
                        <p style={{ "margin": "0" }} className="text-white fw-bold"><i class="bi bi-box2"></i> Productos</p>
                        <div class="form-check m-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label text-white " for="flexCheckDefault">
                                Celulares
                            </label>
                        </div>
                        <div class="form-check m-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label text-white " for="flexCheckChecked">
                                Pantallas
                            </label>
                        </div>
                        <div class="form-check m-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label text-white " for="flexCheckDefault">
                                Calzado
                            </label>
                        </div>
                        <div class="form-check m-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label text-white " for="flexCheckChecked">
                                Muebles
                            </label>
                        </div>
                        <div class="form-check m-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label text-white " for="flexCheckDefault">
                                Otros
                            </label>
                        </div>

                    </div>
                    <hr style={{ "color": "#fff", "width": "90%", "marginLeft": "5%" }} />
                    <div className="p-3">
                        <p style={{ "margin": "0" }} className="text-white fw-bold mb-4"><i class="bi bi-currency-dollar"></i> Rango de precio</p>
                        <Stack spacing={2} direction="row" sx={{ mb: 1, mt: 4 }} alignItems="center">
                            <h6 className='text-white'>$500</h6>
                            <Slider
                                aria-label="Restricted values"
                                value={value}
                                onChange={handleChange}
                                min={500}
                                max={5000}
                                valueLabelDisplay="on"
                                step={50}
                                getAriaValueText={valuetext}
                                color="warning"
                                defaultValue={2000}
                            />
                            <h6 className='text-white'>$5000</h6>
                        </Stack>

                    </div>
                </div>

            </div>
        </>
    )
}