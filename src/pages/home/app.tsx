import { useEffect, useState } from "react";
import api from "../../services/api";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { Container } from "../../Components/Sections/Container";

interface defaultValues {
    author: "",
    content: "",
    description: "",
    id: "",
    publish_date: "",
    slug: "",
    title: ""
};

export const Home = () => {
    const [response, setResponse] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        api.get("/posts")
            .then((data) => {
                setResponse(data.data.reverse());
            })
    }, []);

    return (
        <Container page={"home"}>
            <S.Content>
                {!!response?.length && response?.map((item: defaultValues) => (
                    <div key={item.id} className="item"
                        onClick={() => navigate("/details/" + item.id)}>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p className="description" dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                        <div className="footerCard">
                            <span>{item.author}</span>
                            <span>{item.publish_date}</span>
                        </div>
                    </div>
                ))}
            </S.Content>
        </Container >
    );
};