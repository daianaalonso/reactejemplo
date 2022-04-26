import React, {Component} from 'react'
import "./Estudiante.css";

export default class Estudiante extends Component {
    constructor(props) {
        super(props);
        this.listarEstudiantes = this.listarEstudiantes.bind(this);
        this.state = {
            estudiantes: [],
            resultado: "",
        }
    }

    listarEstudiantes() {
        fetch("http://localhost:1234/estudiantes").then((resp) => resp.json()).then((json) => {
            this.setState({
                estudiantes: json.estudiantes,
                resultado: json.result,
            })
        })
    }

    render() {

        return (
            <div>
                <button onClick={this.listarEstudiantes}>Listar estudiantes</button>
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.estudiantes.map((e, index) => (
                        <tr key={index}>
                            <td>{e.nombre}</td>
                            <td>{e.apellido}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p>{this.state.resultado}</p>
            </div>)
    }
}