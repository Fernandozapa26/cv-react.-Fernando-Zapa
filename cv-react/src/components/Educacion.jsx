function Educacion() {
    const educacion = [
      {
        institucion: "SENA",
        curso: "Tecnologo en analisis y desarrollo de softwaare",
        año: "2023",
      },
      {
        institucion: "SENA",
        curso: "Python",
        año: "2023",
      },{
        institucion: "SENA",
        curso: "React",
        año: "2024",
      },{
        institucion: "SENA",
        curso: "Base de datos",
        año: "2024",
      },{
        institucion: "SENA",
        curso: "Logica de programacion",
        año: "2022",
      },{
        institucion: "SENA",
        curso: "JavaScript",
        año: "2025",
      }
    ]

    return(
      <div>
        <h2>Educacion</h2>

        {educacion.map((exp, index) =>(
          <div key={index} style={{marginBottom: "15px"}}>
            <h3>{exp.curso} - {exp.institucion} </h3>
            <p><strong>año:</strong> {exp.año}</p>
        
          </div>

        ))}

      </div>
    )
}

export default Educacion;
  