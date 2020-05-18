import React from 'react';
import './App.css';

class ImgSelect extends React.Component{
    constructor(props) {
        super(props)
    }

    onChange = (id) => {
        let value = this.props.value;
        let index = value.indexOf(id);
        if ( index === -1) {
            value.push(id)
        } else {
            value.splice(index, 1)
        }
        this.props.onChange(value)
    }

    handleCheckAll = () => {
        let ids = []
        if (this.props.value.length !== this.props.pictures.length) {
            ids = this.props.pictures.map(value => {
                return value.id
            })
        }
        this.props.onChange(ids)
    }

    render() {
        return (
            <div className='img-container'>
                <div className='img-head'>
                    <input type='checkbox' checked={this.props.value.length === this.props.pictures.length} onChange={this.handleCheckAll}/>
                    全选
                </div>
                <div className='img-box'>
                    {
                        this.props.pictures.map(value => {
                            return(
                                <div className='img-item' key={value.id}>
                                    <input type='checkbox' checked={this.props.value.indexOf(value.id) > -1} onChange={() => this.onChange(value.id)}/>
                                    <img src={value.url} />
                                    <p>{value.name}</p>
                                </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        )
    }
}

export default ImgSelect