// AdministracionForm.js
import React, { useState } from 'react';
import '../styles/Administracion.css';

const Administracion = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    tipoAlojamiento: '',
    latitud: '',
    longitud: '',
    precioPorDia: '',
    dormitorios: '',
    baños: '',
    estado: ''
  });

  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmptyField = Object.values(formData).some((value) => !value);
    if (isEmptyField) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }

    if (editIndex !== null) {
      const updatedData = data.map((item, index) => (index === editIndex ? formData : item));
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }

    setFormData({
      titulo: '',
      descripcion: '',
      tipoAlojamiento: '',
      latitud: '',
      longitud: '',
      precioPorDia: '',
      dormitorios: '',
      baños: '',
      estado: ''
    });
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <>
      <section className="formulario">
        <h2>Registra tu Alojamiento</h2>
        <div className="cuadro">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-column">
                {['titulo', 'tipoAlojamiento', 'latitud', 'precioPorDia', 'dormitorios'].map((key) => (
                  <div className="form-group" key={key}>
                    <label className="label" htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    {key === 'tipoAlojamiento' ? (
                      <select className="casilla" id={key} name={key} value={formData[key]} onChange={handleChange} required>
                        <option value="">Tipo de Alojamiento</option>
                        <option value="casa">Casa</option>
                        <option value="departamento">Departamento</option>
                        <option value="habitacion">Habitación</option>
                      </select>
                    ) : (
                      <input className="casilla" type={key === 'precioPorDia' || key === 'latitud' || key === 'longitud' ? 'text' : key === 'dormitorios' || key === 'baños' ? 'number' : 'text'} id={key} name={key} value={formData[key]} onChange={handleChange} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} required />
                    )}
                  </div>
                ))}
              </div>
              <div className="form-column">
                {['descripcion', 'longitud', 'baños', 'estado'].map((key) => (
                  <div className="form-group" key={key}>
                    <label className="label" htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    {key === 'descripcion' ? (
                      <textarea className="casilla" id={key} name={key} value={formData[key]} onChange={handleChange} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} required />
                    ) : (
                      <input className="casilla" type={key === 'precioPorDia' || key === 'latitud' || key === 'longitud' ? 'text' : key === 'dormitorios' || key === 'baños' ? 'number' : 'text'} id={key} name={key} value={formData[key]} onChange={handleChange} placeholder={key.charAt(0).toUpperCase() + key.slice(1)} required />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="boton-container">
              <button type="submit">{editIndex !== null ? 'Guardar cambios' : 'Registrar'}</button>
            </div>
          </form>
        </div>
      </section>

      <section className="tabla">
        <div className="contenido-centrado">
          <div className="tabla-container">
            <h2>Datos Registrados del cliente</h2>
            <table id="datosTabla">
              <thead>
                <tr>
                  {Object.keys(formData).map((key) => (
                    <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                  ))}
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    {Object.values(item).map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                    <td>
                      <button className="edit-btn" onClick={() => handleEdit(index)}>Editar</button>
                      <button className="delete-btn" onClick={() => handleDelete(index)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Administracion;