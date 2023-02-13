import { useEffect, useState } from "react";
import * as S from "./styled";
import { Blog } from "../../pages/details/provider";
import { Input } from "./Input";
import { useForm } from "react-hook-form";

export interface FormProps {
    data: any;
    id: number;
    modal: () => void;
    clean: () => void;
}

export function Form({ data, id, modal, clean }: FormProps) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [idComment, setIdComment] = useState<any>();
    const [idAnswer, setIdAnswer] = useState<any>(null);
    const { addComment, updateComment } = Blog();

    const saveComment = (data: any) => {
        addComment({
            "postId": id,
            "parent_id": idAnswer,
            "user": data.user,
            "date": new Date().toISOString().slice(0, 10),
            "content": data.content
        })
        cleanValues();
    }

    const changeComment = (data: any) => {
        updateComment({
            "id": idComment.id,
            "postId": idComment.postId,
            "parent_id": null,
            "user": data.user,
            "date": idComment.date,
            "content": data.content
        })
        cleanValues();
    }

    function cleanValues() {
        setIdComment(null);
        setIdAnswer(null);
        setValue("user", null);
        setValue("content", null);
        clean();
        modal();
    }

    useEffect(() => {
        if (data.action === "Answer") {
            setValue("user", "");
            setValue("content", "");
            setIdAnswer(data.info);
        } else {
            if (data.info != null) {
                setValue("user", data.info.user);
                setValue("content", data.info.content);
            }
            setIdComment(data.info);
        }
    }, [])

    return (
        <S.Form onSubmit={
            handleSubmit(data.action === "Update" ? changeComment : saveComment)
        }>
            <Input
                withLabel
                label="Name"
                error={errors.user}
                errorMessage={"Name is required"}
                {...register("user", { required: true })}
            />
            <Input
                withLabel
                label="Comment"
                error={errors.content}
                errorMessage={"Name is required"}
                {...register("content", { required: true })}
            />
            <div className="buttons">
                <button type="button" onClick={() => { clean(); modal(); }}>
                    Cancel
                </button>
                <button type="submit">Save</button>
            </div>
        </S.Form>
    );
};