import React from "react";
import { DropArea } from "./DropArea";

import Block from "../Block";

import './index.scss';


const Content = ({
                     content,
                     onDeleteBlock,
                     onCreateBlock,
                     onChangeBlock,
                     onChangeBlockPosition,
                     focusBlockId
                 }) => {

    return (
        <div className="column-content">
            {content.map((block, index) => {
                const nextBlockId = content[index + 1]?.id;
                let key = block.id;

                if (nextBlockId !== undefined) {
                    key = `${block.id}-${nextBlockId}`;
                }

                return (
                    <React.Fragment key={key}>
                        {index === 0 && (
                            <DropArea
                                handleChangeBlockPosition={(draggableBlockId) => onChangeBlockPosition(draggableBlockId, null, block.id)}
                                exceptions={[block.id]}
                            />
                        )}
                        <Block
                            block={block}
                            onCreateBlock={onCreateBlock}
                            onDeleteBlock={onDeleteBlock}
                            onChangeBlock={onChangeBlock}
                            isFocusing={focusBlockId === block.id}
                        />
                        <DropArea
                            handleChangeBlockPosition={(draggableBlockId) => onChangeBlockPosition(draggableBlockId, block.id)}
                            exceptions={[block.id, nextBlockId]}
                        />
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Content;