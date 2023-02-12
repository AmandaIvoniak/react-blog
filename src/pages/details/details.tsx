import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import { Container } from "../../Sections/Container";
import { Blog } from "./provider";
import { ModeEdit } from '@mui/icons-material';
import { Form } from "../../Components/Form";
import Modal from "../../Components/Modal/index";

export const Details = () => {
    const [id] = useState(Number(useParams().id));
    const [post, setPost] = useState<any>();
    const [commentsItens, setCommentsItens] = useState<any>();
    const [infos, setInfos] = useState<any>();
    const [modal, setModal] = useState(false);

    const { posts, comments, getPosts, getComments } = Blog();

    useEffect(() => {
        async function getPost() {
            await getPosts(id);
        }
        async function getComment() {
            await getComments(id);
        }
        if (post === undefined) getPost();
        if (commentsItens === undefined) getComment();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post === undefined, commentsItens === undefined]);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        setPost(posts);
        const filterComments = comments.filter((item: any) => item.parent_id === null);
        const filterAnswer = comments.filter((item: any) => item.parent_id !== null);
        filterComments.map((item: any) => {
            return item.answer = filterAnswer.filter((answer: any) => answer.parent_id === item.id)
        })
        setCommentsItens(filterComments.reverse());

    }, [posts, comments]);

    return (
        <Container page={"details"}>
            <S.Content>
                <div className="comments">
                    <h3>{post?.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: post?.content }} ></p>
                    <div className="author">
                        <span><b>Author: </b>{post?.author}</span>
                        <span><b>Date: </b>{post?.publish_date}</span>
                    </div>
                </div>

                {commentsItens?.map((item: any) => (
                    <S.Comment key={item.id} item={item?.answer?.length !== 0 ? true : false}>
                        <div className="itemComment">
                            <div>
                                <h4>{item.user} said: </h4>
                                <p>{item.content}</p>

                            </div>
                            <div className="buttons">
                                <button type="button" onClick={() => { setModal(true); setInfos({ action: "Update", info: item }); goToTop(); }}>
                                    <ModeEdit />
                                    Update
                                </button>
                                <span onClick={() => { setModal(true); setInfos({ action: "Answer", info: item.id }); goToTop(); }}>
                                    Answer
                                </span>
                            </div>
                        </div>
                        {item?.answer?.length !== 0 && item?.answer?.map((answer: any, index: any) => (
                            <div className="answer" key={index}>
                                <h4>{answer.user} said: </h4>
                                <p>{answer.content}</p>
                            </div>
                        ))}
                    </S.Comment>
                ))}
                <button className="commentButton" onClick={() => { setModal(true); setInfos({ action: "Add", info: null }); goToTop(); }}>Comentar!</button>

                <Modal name={"Modal"} isOpen={modal} children={
                    <Form data={infos} id={id} modal={() => setModal(false)} clean={() => setCommentsItens(undefined)} />
                } divider={16} onClose={() => setModal(false)} />
            </S.Content>
        </Container>
    );
};