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

    function checkLengthOnSubmit() {
        if (values.description.length < 2) {
            setHasError("Description must be at least 2 characters long!");
            return;
        }
    }

    return {
        values, setValues, hasError, setHasError, onInputChange, checkLengthOnSubmit
    }
}