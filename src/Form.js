import React from 'react';
import './form.css';

const initialState = {
    user: {
        name: '',
        email: ''
    },
    list: []
};

let list = [];

export default class Form extends React.Component{

    state = {...initialState};

    updateField(event){
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user});
    }

    save(){
        const user = this.state.user;
        if(list.length < 3){
            list.push(user);
            this.setState({ user: initialState.user, list});
        }else{
            alert('Memoria cheia!');
        }
        
    }

    delete(id){
        list.splice(id, 1);
        this.setState({list});
    }

    renderRows(){
        return this.state.list.map((item, id) =>{
            return (
                <div id="list" key={id}>
                   Nome:{item.name}
                   <br/>
                   Email:{item.email}
                   <br/>
                   <button onClick={ () => this.delete(id)}>Excluir</button>
                </div>
            )
        })
    }

    render(){
        return (
            <div>
            <form>
                <div>
                    <div className="input-label">
                        <label>Name:</label><br/>
                        <input type="text" name="name" value={this.state.user.name} onChange={e => this.updateField(e)} placeholder="Digite seu nome..." ></input>   
                    </div>
                    <div className="input-label">
                        <label>Email:</label><br/>
                        <input type="text" name="email" value={this.state.user.email} onChange={e => this.updateField(e)} placeholder="Digite seu email..."></input>   
                    </div>
                </div>
            </form>
            <div className="form-bnt">
                <button className="bnt" onClick={ e => this.save(e)}>salvar</button>
            </div>
            <label id="title-list">Lista</label>
            {this.renderRows()}

            </div>
        )
    }
}