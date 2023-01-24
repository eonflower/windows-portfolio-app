import React from "react";
import data from "../components/data"
import ProjectCard from "../components/ProjectCard";


export default function Projects() {
    const Project = data.map((item) => {
        return <ProjectCard
                key={item.id}
                {...item}
                />
    })
    return (
        <div>
        {Project}
        </div>
    )
}