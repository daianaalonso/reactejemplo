import React, {Component} from 'react'
import "./Estudiante.css";

export default class Estudiante extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            cursos: [{curso: 'Proyecto de Software', horas: '10'}],
            lista: [{curso: 'Ingles', horas: '7'},
                {curso: 'BD1', horas: '14'},
                {curso: 'Matematica', horas: '21'},
                {curso: 'Programacion orientada a objetos I', horas: '15'},
                {curso: 'Programacion concurrente', horas: '10'},
                {curso: 'Introduccion a los sistemas operativos', horas: '13'}]
        }
    }

    handleClick() {
        this.setState((state) => ({
            cursos: [...state.cursos, state.lista[Math.floor(Math.random() * 6)]]
        }));
    }

    render() {

        return (<div>
            <p className="estilo"> Estudiante: {this.props.estu.nombre} {this.props.estu.apellido} </p>
            <button className="boton" onClick={this.handleClick}>Inscribirme</button>
            <table border="1" className="tabla">
                <caption>Cursos:</caption>
                <tbody>
                <th>Curso</th>
                <th>Cantidad de Hs</th>
                {this.state.cursos.map((curso) => (<tr>
                    <td>{curso.curso}</td>
                    <td>{curso.horas} hs semanales</td>
                </tr>))}
                </tbody>
            </table>
        </div>)
    }
}