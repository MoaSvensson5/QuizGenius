import React, { useState, useEffect } from 'react';
import { GetQuestions} from "../api/api";

export function RenderQuestions ({category}) {
    const [questions, setQuestions] = useState([])

    

    useEffect (() => {
        GetQuestions(category).then ((response) => {
            setQuestions(response.results);
        })
    }, [category]);

    console.log(questions);
    return(
        <div className="question-page">
        </div>
    )
}