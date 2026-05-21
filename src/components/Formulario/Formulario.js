

export const Formulario = () => {

    return(

        <div className="container mt-4">

            <h1>Formulario</h1>

            <div className="mb-3">

                <label className="form-label">
                    Nombre
                </label>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                />

            </div>

            <div className="mb-3">

                <label className="form-label">
                    Correo
                </label>

                <input
                    type="email"
                    className="form-control"
                    placeholder="Ingrese su correo"
                />

            </div>

            <div className="mb-3">

                <label className="form-label">
                    Contraseña
                </label>

                <input
                    type="password"
                    className="form-control"
                    placeholder="Ingrese su contraseña"
                />

            </div>

            <div className="mb-3">

                <label className="form-label">
                    Comentario
                </label>

                <textarea
                    className="form-control"
                    rows="3"
                ></textarea>

            </div>

            <button className="btn btn-primary">
                Enviar
            </button>

        </div>

    );

}