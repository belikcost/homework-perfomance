import { useDrop } from "react-dnd";

import { DRAGGABLE_BLOCK } from "../../constants";

import './DropArea.scss';


export const DropArea = ({ handleChangeBlockPosition, exceptions}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: DRAGGABLE_BLOCK,
        canDrop: ({ draggableBlockId }) => exceptions.indexOf(draggableBlockId) === -1,
        drop: ({ draggableBlockId }) => handleChangeBlockPosition(draggableBlockId),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }), [handleChangeBlockPosition]);

    return (
        <div ref={drop} className={`drop-area${isOver ? ' drop-area_over' : ''}`}/>
    );
}