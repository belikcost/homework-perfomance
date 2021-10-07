import { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

import { Field } from "../base/Field";
import Content from "../Content";

import './index.scss';


const Page = ({ page, handleChangePage, handleCreateBlock, focusBlockId, handleFocusBlock, handleChangeTitle, debouncedOnChangePage }) => {
    const [isSmallDevice] = useState(window.innerWidth < 568);

    const onDeleteBlock = (blockId) => {
        handleChangePage((currentPage) => {
            if (currentPage.content.length > 1) {
                const deletedBlock = currentPage.content.find(block => block.id === blockId);
                const deletedBlockIndex = currentPage.content.indexOf(deletedBlock);
                const changedPage = {
                    ...currentPage,
                    content: currentPage.content.filter(block => block.id !== blockId)
                };

                handleFocusBlock(currentPage.content[deletedBlockIndex - 1].id);
                debouncedOnChangePage(changedPage);
                return changedPage;
            } else {
                return currentPage;
            }
        });
    };

    const onChangeBlock = (blockId, data) => handleChangePage((currentPage) => {
        const changedPage = {
            ...currentPage,
            content: currentPage.content.map(block => block.id === blockId ? { ...block, data } : block)
        };

        debouncedOnChangePage(changedPage);
        return changedPage;

    });

    const onChangeBlockPosition = (draggableBlockId, beforeBlockId, afterBlockId) => {

        handleChangePage((currentPage) => {
            const draggableBlock = currentPage.content.find(block => block.id === draggableBlockId);
            const changedPage = {
                ...currentPage,
                content: currentPage.content
                .filter(block => block.id !== draggableBlockId)
                .map(block => {
                    if (afterBlockId && block.id === afterBlockId) {
                        return [draggableBlock, block];
                    } else if (beforeBlockId && block.id === beforeBlockId) {
                        return [block, draggableBlock];
                    } else {
                        return block;
                    }
                })
                .flat()
            };

            debouncedOnChangePage(changedPage)
            return changedPage;

        });
    };

    const onKeyDownTitle = useCallback((e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleChangePage((currentPage) => {
                const firstBlock = currentPage.content[0].id;

                handleFocusBlock(firstBlock);
                return currentPage;
            })
        }
    }, []);

    return (
        <div className="page">
            <header className="page__header">
                <Field
                    className="field_heading"
                    isHeading={true}
                    value={page.title}
                    onKeyDown={onKeyDownTitle}
                    onChange={handleChangeTitle}
                />
            </header>
            <DndProvider backend={isSmallDevice ? TouchBackend : HTML5Backend}>
                <Content
                    content={page.content}
                    onDeleteBlock={onDeleteBlock}
                    onCreateBlock={handleCreateBlock}
                    onChangeBlock={onChangeBlock}
                    onChangeBlockPosition={onChangeBlockPosition}
                    focusBlockId={focusBlockId}
                />
            </DndProvider>
        </div>
    );
};

export default Page;
