import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import debounce from 'lodash.debounce';
import { v4 as UUIDv4 } from 'uuid';

import {
    changePageRequest, changePageTitleRequest,
    createPageRequest,
    deletePageRequest,
    focusBlock,
    getPagesRequest
} from "../redux/actions";
import { INITIAL_PAGE } from "../constants";

import { Layout } from "../components/base/Layout";
import Page from "../components/Page";


const App = ({
                 pages,
                 focusBlockId,
                 handleChangePage,
                 handleGetPages,
                 handleDeletePage,
                 handleCreatePage,
                 handleFocusBlock,
                 handleChangePageTitle
             }) => {
    const history = useHistory();
    const match = useRouteMatch('/:pageId');
    const pageId = match?.params?.pageId;

    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        if (pageId && pages) {
            const initialPage = pages.find(page => page.id === pageId);

            if (initialPage) {
                setCurrentPage(initialPage);
            } else if (pages.length !== 0) {
                history.push(`/${pages[0].id}`);
            }
        }
    }, [pageId, pages]);

    useEffect(() => {
        handleGetPages();
    }, []);

    const onDeletePage = useCallback((pageId) => {
        handleDeletePage(pageId);
        const { currentPageId } = match.params;

        if (currentPageId === pageId && pages.length !== 0) {
            history.push(`/${pages[0].id}`);
        }
    }, [pages, match?.params]);

    const onCreatePage = useCallback(() => handleCreatePage(INITIAL_PAGE), []);

    const debouncedOnChangePage = useCallback(debounce(handleChangePage, 2500), []);
    const debouncedOnChangePageTitle = useCallback(debounce(handleChangePageTitle, 2500), []);

    const onCreateBlock = useCallback((targetBlock, newBlock) => {
        const newBlockId = UUIDv4();

        handleFocusBlock(newBlockId);
        setCurrentPage((currentPage) => {
            const changedPage = {
                ...currentPage,
                content: currentPage.content
                .map(block => block.id === targetBlock.id ? [targetBlock, { ...newBlock, id: newBlockId }] : block)
                .flat()
            };

            debouncedOnChangePage(changedPage);
            return changedPage;
        });
    }, [debouncedOnChangePage]);

    const handleChangeTitle = (e) => {
        setCurrentPage((currentPage) => {
            const changedPage = {
                ...currentPage,
                title: e.target.value
            };

            debouncedOnChangePageTitle(changedPage);
            return changedPage;
        });
    };

    if (pages) {

        return (
            <Layout
                pages={pages}
                onDeletePage={onDeletePage}
                onCreatePage={onCreatePage}
            >
                {pages.length !== 0 ? (
                    <Switch>
                        <Route exact path="/">
                            <Redirect to={`/${pages[0].id}`}/>
                        </Route>
                        <Route path="/:pageId">
                            {currentPage && (
                                <Page
                                    page={currentPage}
                                    focusBlockId={focusBlockId}
                                    handleFocusBlock={handleFocusBlock}
                                    handleChangeTitle={handleChangeTitle}
                                    handleChangePage={setCurrentPage}
                                    handleCreateBlock={onCreateBlock}
                                    debouncedOnChangePage={debouncedOnChangePage}
                                />
                            )}
                        </Route>
                    </Switch>
                ) : (
                    <p>No pages</p>
                )}
            </Layout>
        );
    } else {
        return null;
    }
}

const mapStateToProps = (state) => ({
    pages: state.pages,
    focusBlockId: state.focusBlockId
});

const mapDispatchToProps = (dispatch) => ({
    handleChangePage: (data) => dispatch(changePageRequest(data)),
    handleGetPages: () => dispatch(getPagesRequest()),
    handleDeletePage: (data) => dispatch(deletePageRequest(data)),
    handleCreatePage: (data) => dispatch(createPageRequest(data)),
    handleFocusBlock: (data) => dispatch(focusBlock(data)),
    handleChangePageTitle: (data) => dispatch(changePageTitleRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);