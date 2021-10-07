import ContentEditable from "react-contenteditable";

import './Field.scss';


export const Field = ({ value, onChange, className, onKeyDown, fieldRef }) => {

    return (
        <ContentEditable
            ref={fieldRef}
            html={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className={`field ${className ? className : ''}`}
        />
    );
}