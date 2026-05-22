export const Formulario = () => {

    return(

        <div className="container mt-4">

            {/* TITULO */}
            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    Blog Personal
                </h1>

                <p>
                    Cocina, tutoriales, investigaciones y más
                </p>

            </div>

            {/* MENU */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4">

                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        Mi Blog
                    </a>

                    <div>

                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Inicio
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Tutoriales
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Cocina
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contacto
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

            {/* CONTENIDO */}
            <div className="row">

                <div className="col-md-4">

                    <div className="card mb-4 shadow">

                        <img
                            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
                            className="card-img-top"
                            alt="Cocina"
                        />

                        <div className="card-body">

                            <h5 className="card-title">
                                Recetas de Cocina
                            </h5>

                            <p className="card-text">
                                Aprende recetas fáciles y deliciosas para cualquier ocasión.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card mb-4 shadow">

                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                            className="card-img-top"
                            alt="Tutoriales"
                        />

                        <div className="card-body">

                            <h5 className="card-title">
                                Tutoriales
                            </h5>

                            <p className="card-text">
                                Tutoriales paso a paso sobre tecnología y programación.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card mb-4 shadow">

                        <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                            className="card-img-top"
                            alt="Investigación"
                        />

                        <div className="card-body">

                            <h5 className="card-title">
                                Investigación
                            </h5>

                            <p className="card-text">
                                Información y artículos interesantes para aprender más.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* FORMULARIO */}
            <div className="card shadow p-4 mt-4">

                <h2 className="mb-4">
                    Contáctanos
                </h2>

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
                        Comentario
                    </label>

                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Escriba su comentario"
                    ></textarea>

                </div>

                <button className="btn btn-primary">
                    Enviar
                </button>

            </div>

        </div>

    );

}