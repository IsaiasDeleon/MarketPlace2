import { Card } from "../components/Cards";

export const Inicio = () => {
    const data = [
        {
            id:1,
            img:1,
            empresa:"Badger",
            descripcion:"Tenis Puma Junior Unisex St Activate Zapato Deportivo Comodo",
            estrellas:4,
            monto:200
        },
        {
            id:2,
            img:2,
            empresa:"Badger",
            descripcion:"Lentes De Sol Hombre Polarizados Clásicos Uv400 De Piloto",
            estrellas:2,
            monto:100
        },
        {
            id:3,
            img:3,
            empresa:"Aplintec",
            descripcion:"Reloj Tsar Bomba Hombre Lujo Tonneau Cronógrafo Impermeable",
            estrellas:5,
            monto:100
        },
        {
            id:4,
            img:4,
            empresa:"Badger",
            descripcion:"Reloj Tsar Bomba Hombre Lujo Tonneau Cronógrafo Impermeable",
            estrellas:5,
            monto:700
        },
        {
            id:5,
            img:5,
            empresa:"Badger",
            descripcion:"Tenis Puma Junior Unisex St Activate Zapato Deportivo Comodo",
            estrellas:4,
            monto:200
        },
        {
            id:6,
            img:6,
            empresa:"Badger",
            descripcion:"Lentes De Sol Hombre Polarizados Clásicos Uv400 De Piloto",
            estrellas:2,
            monto:100
        },
        {
            id:7,
            img:7,
            empresa:"Aplintec",
            descripcion:"Reloj Tsar Bomba Hombre Lujo Tonneau Cronógrafo Impermeable",
            estrellas:5,
            monto:100
        },
        {
            id:8,
            img:8,
            empresa:"Badger",
            descripcion:"Reloj Tsar Bomba Hombre Lujo Tonneau Cronógrafo Impermeable",
            estrellas:5,
            monto:700
        }
    ];
    const data2 = [
        {
            id:1,
            img:5,
            empresa:"Badger",
            descripcion:"Tenis Puma Junior Unisex St Activate Zapato Deportivo Comodo",
            estrellas:4,
            monto:200
        },
        {
            id:2,
            img:6,
            empresa:"Badger",
            descripcion:"Lentes De Sol Hombre Polarizados Clásicos Uv400 De Piloto",
            estrellas:2,
            monto:100
        },
        {
            id:3,
            img:7,
            empresa:"Aplintec",
            descripcion:"Reloj Tsar Bomba Hombre Lujo Tonneau Cronógrafo Impermeable",
            estrellas:5,
            monto:100
        },
        {
            id:4,
            img:8,
            empresa:"Badger",
            descripcion:"Reloj Tsar Bomba Hombre Lujo Tonneau Cronógrafo Impermeable",
            estrellas:5,
            monto:700
        }
    ];
    return (
        <>
            <div className="p-4 contendorPrincipalIndex">
                <h2>Ofertas especiales</h2>
                <div className="p-3 contendorPrincipalIndexGrid">
                    <div className=" text-white p-3 divImg">
                        <div className="divImgsText">
                            <h2 className="fw-bold TextSinShadowH" >La mejor calidad en nuestros productos.</h2>
                            <p style={{ "fontWeight": "500" }}>Nuestro compromiso es brindar la mejor solución para aumentar al máximo la eficiencia de los procesos de nuestros clientes</p>
                            <button className="btn" style={{ "background": "#F1C40F"}}>Ver mas..</button>
                        </div>
                    </div>
                    <div  className=" text-dark p-3 divImg2">
                        <div className="divImgsText">
                            <h2 className="fw-bold" style={{ "letter-spacing": ".1rem" }}>Descuentos del 50%</h2>
                            <p style={{ "fontWeight": "500" }}>Ven y conoce nuestros productos que estan en descuento.</p>
                            <button className="btn" style={{ "background": "#F1C40F" }}>Ver mas..</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="p-4 contendorArticulo" >
                <div className="m-2" >
                    <h4>Articulos mas vendidos</h4>
                    <div className="d-flex ProbandoScroll contenedorCards" style={{ "overflowX":"scroll" }}>
                    {data.map((data) => (
                        <Card key={data.id} {...data} />
                        ))}
                    </div>
                </div>
                <div className="m-2">
                    <h4>Nuevos articulos</h4>
                    <div className="d-flex  ProbandoScroll contenedorCards " style={{ "overflowX":"scroll" }}>
                    {data2.map((d) => (
                        <Card key={d.id} {...d} />
                        ))}
                    </div>
                </div>
                

            </div>
        </>

    )
}