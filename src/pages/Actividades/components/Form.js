import React, { useState, useEffect } from "react";
import { Button, Label, TextInput } from "flowbite-react";

function Form() {
  const [tiposActividad, setTiposActividad] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "",
    precio: "",
  });

  useEffect(() => {
    // Fetch data from an external source (assuming it's an array of objects)
    const fetchData = async () => {
      await google.script.run
        .withSuccessHandler((data) => {
          setTiposActividad(data);
        })
        .getTiposActividad();
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    google.script.run
      .withSuccessHandler((response) => {
        alert("Éxito");
        console.log(response);
      })
      .insertActividad(formData);
  };

  const handleNombreChange = (e) => {
    const newName = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      nombre: newName,
    }));
  };

  const handlePrecioChange = (e) => {
    const newPrecio = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      precio: newPrecio,
    }));
  };

  const handleTipoChange = (selectedTipo) => {
    console.log("Selected Tipo:", selectedTipo);

    const selectedTipoObj = tiposActividad.find(
      (tipo) => tipo._id === selectedTipo
    );

    console.log("Selected Tipo Object:", selectedTipoObj);

    setFormData((prevData) => ({
      ...prevData,
      tipo: selectedTipoObj ? selectedTipoObj._id : "",
    }));
  };

  const handleTipoSelect = (e) => {
    const selectedValue = e.target.value;
    handleTipoChange(selectedValue);
  };
  return (
    <>
     <h1 className="PagesTitles">Formulario Actividades</h1>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="nombre" value="nombre" />
          </div>
          <TextInput
            addon="Nombre"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleNombreChange}
            required
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="tipo" value="tipo" />
          </div>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleTipoSelect}
            required
          >
            <option value="">Selecciona un tipo</option>
            {tiposActividad.map((tipo) => (
              <option key={tipo._id} value={tipo._id}>
                {tipo.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="precio" value="precio" />
          </div>
          <TextInput
            addon="$"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handlePrecioChange}
            required
          />
        </div>
        <Button type="submit" color="dark">
          Submit
        </Button>
      </form>
      <Button type="button" color="dark" href="/Actividades" className="button">
          Volver
        </Button>
    </>
  );
}
export default Form;
