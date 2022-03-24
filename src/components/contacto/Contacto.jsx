import React from 'react'
import '../contacto/contacto.css' 

function Contacto() {
    return (
        <>
            <main>
                <section>
                    <div className="container containerFormulario mt-5">
                        <div className="boxFormulario">

                            <h1 className="p-3 ps-2 text-start h3 wow animate__animated animate__fadeIn" data-wow-delay="1s">
                                Contactate con Nosotros
                            </h1>
                        
                            <form action="" className="ms-2 pb-4 fw-bold">

                                {/* <!-- Nombre y Email --> */}
                                <div className="row d-flex flex-column flex-md-row flex-lg-row wow animate__animated
                                                animate__fadeIn" data-wow-delay="0.3s">

                                    <div className="col mb-3">
                                        <label for="nombre" className="form-label">
                                            Nombre Completo
                                        </label>
                                        <input type="text" name="nombre" id="nombre" className="form-control"
                                            placeholder="Nombre Completo" required/>
                                    </div>

                                    <div className="col mb-3">
                                        <label for="email" className="form-label">
                                            Direccion de email
                                        </label>
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Email"
                                            required/>
                                    </div>

                                </div>

                                {/* <!-- Asunto - Lista desplegable --> */}
                                <div className="mb-3 wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                                    <label for="DataList" className="form-label">
                                        Asunto
                                    </label>
                                    <input className="form-control" list="datalistOptions" id="DataList"
                                        placeholder="Escriba o elija una opción"/>
                                    <datalist id="datalistOptions">
                                        <option value="Maquillaje"/>
                                        <option value="Pedicuria"/>
                                        <option value="Peinado"/>
                                        <option value="Pestañas"/>
                                        <option value="Uñas"/>
                                    </datalist>
                                </div>

                                {/* <!-- Mensaje --> */}
                                <div className="mb-3 wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                                    <label for="FormControlTextarea1" className="form-label">
                                        Mensaje
                                    </label>
                                    <textarea className="form-control" id="FormControlTextarea1" rows="3"
                                        placeholder="Mensaje">
                                    </textarea>
                                </div>

                                {/* <!-- Newsletter --> */}
                                <div className="form-check mb-3 wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                                    <input className="form-check-input" type="checkbox" id="flexCheckChecked"/>
                                    <label className="form-check-label" for="flexCheckChecked">
                                        ¿Desea recibir Newsletter?
                                    </label>
                                </div>

                                {/* <!-- Botones --> */}
                                <div className="d-grid gap-2 d-md-block wow animate__animated animate__fadeIn"
                                    data-wow-delay="0.6s">
                                    <button type="submit" className="btn btn-dark fw-bold">
                                        Enviar
                                    </button>

                                    <button type="reset" className="btn btn-dark fw-bold ms-2">
                                        Reset
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </section>    
            </main>

            <div classNameName="separador"></div>
        </>
    )
}

export default Contacto
