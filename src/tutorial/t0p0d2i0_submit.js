import React from 'react';
import { Redirect } from "react-router-dom";


export default class t_sub extends React.Component{

    state = { redirect: "/menu"};
    render = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return(
            
            this.setState({ redirect: "/menu" })
        )

    }
}