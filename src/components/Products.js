import React, { Component } from 'react'

class Products extends Component {
    render () {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img src="https://image.thanhnien.vn/768/uploaded/nthanhluan/2020_04_16/iphone-12-render-phone-arena-2_quuh.jpg" alt="dien thoai 1"></img>
                    <div className="caption">
                        <h3>Dien thoai 1</h3>
                        <p>
                            10000000 VND
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary">Mua Hang</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
