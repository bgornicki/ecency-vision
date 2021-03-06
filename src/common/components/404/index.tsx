import React, {Component} from "react";

import {History} from "history";

import {Link} from "react-router-dom";

import Meta from "../meta";

const logoCircle = require("../../img/logo-circle.svg");

interface Props {
    history: History;
}

export class NotFound extends Component<Props> {
    goBack = () => {
        const {history} = this.props;

        history.goBack();
    };

    render() {
        const metaProps = {
            title: "404",
        };

        const {history} = this.props;

        // @ts-ignore make ide happy. code compiles without error.
        const entries = history.entries || {}
        // @ts-ignore
        const index = history.index || 0;

        const canGoBack = !!entries[index - 1];

        return (
            <>
                <Meta {...metaProps} />
                <div className="not-found-404">
                    <img src={logoCircle} className="logo" alt="Ecency"/>
                    <h1>This page doesn't exist.</h1>
                    <p className="links">
                        {canGoBack && <a href="#" onClick={(e) => {
                            e.preventDefault();
                            this.goBack();
                        }}>Back</a>}
                        <Link to="/">Home</Link>
                        <Link to="/created">New posts</Link>
                        <Link to="/hot">Hot posts</Link>
                        <Link to="/trending">Trending posts</Link>
                    </p>
                </div>
            </>
        );
    }
}

export default (p: Props) => {
    const props = {
        history: p.history
    }

    return <NotFound {...props}/>
}
