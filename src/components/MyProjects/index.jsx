import "./MyProjects.css";
import WorkItem from "../WorkItem/index";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import data from "./../../works.json";

function MyProjects() {
    const [datas, setDatas] = useState([]);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });


    useEffect(() => {
        setDatas(data);
    }, []);


    return (
        <section
            className={`myProjects ${inView ? "show" : ""}`}
            ref={ref}
            id="myProjects"
        >
            <h1>
                <span>0112. </span>Mes projets deve
            </h1>
            <div className="workItems">
                {datas.map((item) => (
                    <WorkItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
}

export default MyProjects;
