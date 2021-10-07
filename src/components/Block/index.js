import { useDrag } from "react-dnd";
import { useEffect, useRef } from "react";

import { DRAGGABLE_BLOCK } from "../../constants";

import { Field } from "../base/Field";

import "./index.scss";


const Block = ({ block, onChangeBlock, onCreateBlock, isFocusing, onDeleteBlock }) => {
    const blockText = useRef(block.data);
    const blockRef = useRef();

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: DRAGGABLE_BLOCK,
        item: { draggableBlockId: block.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    const onKeyDown = (e) => {
        const selection = window.getSelection();
        switch (e.key) {
            case 'Enter':
                if (!e.shiftKey && ! e.ctrlKey) {
                    e.preventDefault();
                    const newBlockData = blockText.current.slice(selection.baseOffset);
                    const targetBlockData = blockText.current.replace(newBlockData, '');

                    onCreateBlock({ id: block.id, data: targetBlockData }, { data: newBlockData });
                }
                break;
            case 'Backspace':
                if (blockText.current.length === 0) {
                    onDeleteBlock(block.id);
                }
                break;
            default:
                break;
        }
    };

    const onChange = (e) => {
        const value = e.target.value;

        blockText.current = value;
        onChangeBlock(block.id, value);
    };

    const onPlus = () => {
        onCreateBlock(block, { data: '' });
    };

    useEffect(() => {
        if (isFocusing) {
            const element = blockRef.current.el.current;
            element.focus();
        }
    }, [isFocusing]);

    return (
        <div className="block" ref={preview}>
            {!isDragging && (
                <div className="block__handlers-group">
                    <span className="block_plus" onClick={onPlus}>+</span>
                    <span ref={drag} className="block_drag">::</span>
                </div>
            )}
            <Field
                value={blockText.current}
                onChange={onChange}
                onKeyDown={onKeyDown}
                fieldRef={blockRef}
            />
        </div>
    );
}

export default Block;