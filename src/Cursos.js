import React, {Component} from 'react';

export default class Cursos extends Component {
    constructor(props) {
        super(props);
        this.listarCursos = this.listarCursos.bind(this);
        this.listarCursosPorEstudiante = this.listarCursosPorEstudiante.bind(this);
        this.state = {
            cursos: [],
            resultado: "",
            estudiante: [],
        };
    }

    listarCursos() {
        fetch("http://localhost:1234/cursos")
            .then((resp) => resp.json())
            .then((json) => {
                this.setState({
                    cursos: json.cursos,
                    resultado: json.result,
                })
            })
    }

    listarCursosPorEstudiante() {
        fetch("http://localhost:1234/estudiantes?apellido=Alonso")
            .then((resp) => resp.json())
            .then((json) => {
                this.setState({
                    cursos: json.estudiantes[0].listaCursos,
                    resultado: json.result,
                })
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.listarCursos}>Listar cursos</button>
                <button onClick={this.listarCursosPorEstudiante}>Listar por estudiante</button>
                <hr/>
                <table>
                    <thead>
                    <tr>
                        <th>Cursos</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.cursos.map((e, index) => (
                        <tr key={index}>
                            <td>{e.nombre}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p>{this.state.resultado}</p>
            </div>
        );
    }
}