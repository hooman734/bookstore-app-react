import React from "react";

interface BookCreateProps {
    onCreate: (name: string) => void;
}
function BookCreate({ onCreate }: BookCreateProps) {

    function onInputHandle(e: React.FormEvent<HTMLInputElement>) {
        onCreate(e.currentTarget.value)
    }

    return (
        <input onInput={onInputHandle}/>
    )
}

export default BookCreate