// src/components/StackTecnologias.jsx
function StackTecnologias() {
    const tecnologias = [
        "JavaScript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "Python",
        "Git",
        "Vite",
        "Tailwind",
        "Express",
    ];

    const obtenerColor = (tech) => {
        if (tech === "JavaScript") return "gold";
        if (tech === "React") return "skyblue";
        if (tech === "Node.js") return "lightgreen";
        if (tech === "Python") return "#ffd43b";

        return "#ddd";
    };

    return (
        <div>
            <h2>Stack Tecnologías</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {tecnologias.map((tech, index) => (
                    <span
                        key={index}
                        style={{
                            padding: "8px 12px",
                            backgroundColor: obtenerColor(tech),
                            borderRadius: "8px",
                            fontWeight: "bold",
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
export default StackTecnologias;
