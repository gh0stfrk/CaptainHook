import { useState } from "react"
import { useNavigate } from "react-router-dom";
function TaskForm(){
    const [projectTitle, setProjectTitle] = useState("")
    const [description, setDescription] = useState("")
    const [scope, setScope] = useState("")
    const [deadline, setDeadline] = useState("")
    const [compensation, setCompensation] = useState("")
    const [resources, setResources] = useState("")
    const navigate = useNavigate()

    const jwtToken = localStorage.getItem("Jwt-Token")


    const handleSubmit = (event) => {
        event.preventDefault()
        if (!jwtToken){
            alert("You are not logged in!")
            navigate("/login")
        }

        const task = {
            title: projectTitle,
            description: description,
            scope_of_work: scope,
            deadline: deadline,
            compensation: compensation,
            resources: resources,
        }

        fetch("http://localhost:8080/task", {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Auth-Token':jwtToken
            },
            body: JSON.stringify(task)
        }).then(res => res.json()).then(data => console.log(data))
    }

    return(
        <div className=" flex justify-center p-2 mt-7 mb-7">
            <form action="" className="max-w-3xl flex-grow border flex flex-col p-3 gap-3 rounded-xl" onSubmit={handleSubmit}>
                <label htmlFor="project-title">Project Title</label>
                <input className="border rounded-lg p-2"
                onBlur={(e) => setProjectTitle(e.target.value)}
                type="text" name="project-title" id="project-title" placeholder="Crypto Mining with Polygon" />

                <label htmlFor="project-description">Description</label>
                <textarea
                className="border rounded-lg p-2 h-72"
                onBlur={(e) => setDescription(e.target.value)}
                type="text" name="description" id="project-description" placeholder="Describe the task" />
                
                <label htmlFor="scope">Scope of Work</label>
                <textarea
                className="border rounded-lg p-2" 
                onBlur={(e) => setScope(e.target.value)}
                type="text" name="scope" id="scope" placeholder="Scope of Work" />

                <label htmlFor="deadline">Deadline</label>
                <input
                className="border rounded-lg p-2" 
                onBlur={(e) => setDeadline(e.target.value)} type="date" name="deadline" id="deadline" placeholder="Deadline" />

                <label htmlFor="compensation">Compensation</label>
                <input
                className="border rounded-lg p-2" 
                onBlur={(e) => setCompensation(e.target.value)} type="number" name="compenstaion" id="compensation" placeholder="20$" />

                <label htmlFor="resources">Resources</label>
                <textarea 
                className="border rounded-lg p-2"
                onBlur={(e) => setResources(e.target.value)} type="text" name="resources" id="resources" placeholder="Resources to aid" />

                <input className="bg-green-700 p-2 rounded-xl text-white"
                type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default TaskForm