import React, { Component } from 'react'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username : 'abc',
            password : '',
            detail : '',
            gt : 0,
            chon : 'c1',
            check : false
        }
    }

    onHandleChange = (event) => {
        console.log(event.target.value)
        const target = event.target
        const name = target.name
        // const value = target.value // check lại value của checkbox ( trường hớp 1, lấy như này thì k lấy đc giá trị của checkbox )
        const value = target.type === 'checkbox' ? target.checked : target.value // nếu l có checkbox thì cũng không cần trường hợp này lắm
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render () {
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Panel title</h3>
                              </div>
                              <div className="panel-body">
                                    <form onSubmit={ this.onHandleSubmit }>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" className="form-control" value={ this.state.username } name='username' onChange={ this.onHandleChange }/>
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Input field" name='password' onChange={ this.onHandleChange }/>
                                        </div>

                                        <div className="form-group">
                                            <label>Mô tả</label>
                                            <textarea name='detail' onChange={ this.onHandleChange } className="form-control" rows="3"></textarea>
                                        </div>

                                        <select className="form-control" name='gt' onChange={ this.onHandleChange } value = { this.state.gt } >
                                            <option value={0} > Nam</option>
                                            <option value={1} > Nữ</option>
                                        </select>

                                        <label>Chọn</label>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name='chon' value='c1' onChange={ this.onHandleChange } checked = { this.state.chon === 'c1' }/>
                                                Chọn 1
                                            </label>

                                            <br />

                                            <label>
                                                <input type="radio" name='chon' value='c2' onChange={ this.onHandleChange } checked = { this.state.chon === 'c2' }/>
                                                Chọn 2
                                            </label>

                                            < br />

                                            <label>
                                                <input type="radio" name='chon' value='c3' onChange={ this.onHandleChange } checked = { this.state.chon === 'c3' }/>
                                                Chọn 3
                                            </label>
                                        </div>

                                        <br />

                                        <label>Check box</label>

                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value={true} name="check" onChange={ this.onHandleChange } checked = { this.state.check === true }/>
                                                Checkbox
                                            </label>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                                        <button type="reset" className="btn btn-default">Reset</button>
                                    </form>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
