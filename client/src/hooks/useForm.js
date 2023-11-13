import { useState } from 'react';

export const useForm = () => {
    const initialValues = {
        description: "",
    };
    const [values, setValues] = useState(initialValues);
    const [hasError, setHasError] = useState(null);
    function onInputChange(e) {
        setValues((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    }

    return {
        values, setValues, hasError, setHasError, onInputChange
    }
}