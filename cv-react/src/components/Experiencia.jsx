// function Experiencia() {
//     return (
//       <section>
//         <h3>Experiencia Laboral</h3>
//         <ul>
//           <li>Ayudante de construcción - Experiencia en obras civiles</li>
//           <li>Proyectos personales en React, Node.js y Python</li>
//         </ul>
//       </section>
//     );
//   }
  
//   export default Experiencia;
  

function Experiencia() {
  const experiencia = [
    {
      cargo: "Desarrollador de software",
      empresa: "Tata consultancy",
      año: 2023,
      descripcion: "Diseño de interfaces con React y tailwindcss"

    },
    {
      cargo: "Asistente de sistemas",
      empresa: "TechCorp",
      año:2022 ,
      descripcion: "Soporte tecnico y mantenimiento de equipos"

    },
    {
      cargo: "Proyecto personal",
      empresa: "Portafolio web",
      año:2023 ,
      descripcion: "Construccion de cv profecional con react"

    },
    {
      cargo: "Practicas desarrollo",
      empresa: "Innovassosf",
      año: 2021,
      descripcion: "Diseño de modulos UI para sistemas internos"

    },
    {
      cargo: "Freelancer",
      empresa: "CLiente independiente",
      año: 2024,
      descripcion: "Creacion de landing pages responsivas"

    },
    {
      cargo: "Auxiliar de construccion",
      empresa: "Porza",
      año: 2020,
      descripcion: "Apoyo general de obra civil"

    },
    {
      cargo: "Proyecto python",
      empresa: "Ejercicio academico",
      año: 2024,
      descripcion: "Creacion de automatizacion basica en python"

    },
    {
      cargo: "Proyecto react",
      empresa: "Ejercicio sena",
      año: 2024,
      descripcion: "Construccion de componentes dinamicos"

    },
    {
      cargo: "Practicas css",
      empresa: "Diseño web",
      año:2023,
      descripcion: "Maquetacion de interfases responsivas"

    },
    {
      cargo: "Proyecto Git",
      empresa: "Control de vercioneas",
      año:2024 ,
      descripcion: "Gestion de repositorios y ramas"

    },
  ]
  return(
    <div>
      <h2>Experiencia</h2>

      {experiencia.map((exp, index) =>(
        <div key={index} style={{marginBottom: "15px"}}>
          <h3>{exp.cargo} - {exp.empresa}</h3>
          <p><strong>año:</strong> {exp.año}</p>
          <p>{exp.descripcion}</p>
          </div>
      ))}
    </div>
  )
}
export default Experiencia;