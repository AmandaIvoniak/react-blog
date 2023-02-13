
import img from "../../../images/estudo.png";
import * as S from "./styled";
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

export const Container = (props: any) => {
    const navigate = useNavigate();

    return (
        <>
            <S.Nav>
                {props.page !== "home" && (
                    <ArrowBack onClick={() => navigate("/")} />
                )}
                <h1>React Blog</h1>
                <S.Img src={img} />
            </S.Nav>
            <S.Content>
                {props.children}
            </S.Content>
        </>
    );
}