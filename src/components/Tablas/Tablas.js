// src/components/Tablas/Tablas.js

import React from 'react';

export const Tablas = () => {

    return(

        <div className="container mt-4">

            <h1 className="mb-4">Tabla </h1>

            <table className="table table-hover">

                <thead>

                    <tr>
                        <th scope="col">Tipo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Ciudad</th>
                    </tr>

                </thead>

                <tbody>

                    <tr className="table-active">
                        <th scope="row">Activo</th>
                        <td>Juan</td>
                        <td>20</td>
                        <td>Santa Cruz</td>
                    </tr>

                    <tr>
                        <th scope="row">Default</th>
                        <td>Maria</td>
                        <td>22</td>
                        <td>Cochabamba</td>
                    </tr>

                    <tr className="table-primary">
                        <th scope="row">Primario</th>
                        <td>Carlos</td>
                        <td>25</td>
                        <td>La Paz</td>
                    </tr>

                    <tr className="table-secondary">
                        <th scope="row">Secundario</th>
                        <td>Lucia</td>
                        <td>19</td>
                        <td>Sucre</td>
                    </tr>

                    <tr className="table-success">
                        <th scope="row">Éxito</th>
                        <td>Miguel</td>
                        <td>24</td>
                        <td>Tarija</td>
                    </tr>

                    <tr className="table-danger">
                        <th scope="row">Peligro</th>
                        <td>Pedro</td>
                        <td>30</td>
                        <td>Beni</td>
                    </tr>

                    <tr className="table-warning">
                        <th scope="row">Advertencia</th>
                        <td>Sofia</td>
                        <td>18</td>
                        <td>Pando</td>
                    </tr>

                    <tr className="table-info">
                        <th scope="row">Información</th>
                        <td>Andrea</td>
                        <td>27</td>
                        <td>Oruro</td>
                    </tr>

                    <tr className="table-light">
                        <th scope="row">Luz</th>
                        <td>Diego</td>
                        <td>21</td>
                        <td>Potosí</td>
                    </tr>

                    <tr className="table-dark">
                        <th scope="row">Oscuro</th>
                        <td>Elena</td>
                        <td>23</td>
                        <td>Montero</td>
                    </tr>

                </tbody>

            </table>

        </div>

    );

}