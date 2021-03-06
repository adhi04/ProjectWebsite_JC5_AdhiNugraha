import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies()


class AddCategory extends Component {

  state = {
    redirect: false,
}
  value = (e) => {
    axios.post(`http://localhost:8002/AddCategory`, {
        inputCategory: e.catfoot.value,
      }).then(
        (ambilData) => {
            console.log(ambilData.data);
            if (ambilData.data === 1) {
              this.setState({
                redirect: true
            });
            }
           
          })
          console.log(e.catfoot.value)
        }

  render() {
    if(cookies.get('sessionid') === undefined) return <Redirect to="/Login"/>
    if (this.state.redirect) return <Redirect to="/kategori" />

    return (
        <div className="page">
        {/* Main Navbar*/}
        <Header/>
        
        <div className="page-content d-flex align-items-stretch"> 
          {/* Side Navbar */}
          <Sidebar />
          <div className="content-inner">
            {/* Page Header*/}
            <header className="page-header">
              <div className="container-fluid">
                <h2 className="no-margin-bottom">Dashboard</h2>
              </div>
            </header>
            {/* Dashboard Counts Section*/}
            <section className="dashboard-counts no-padding-bottom">
              <div className="container-fluid">
                <div className="row bg-white has-shadow">
                  {/* Item */}
                  <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">
                      <div className="icon bg-violet"><i className="icon-user" /></div>
                      <div className="title"><span>New<br />Clients</span>
                        <div className="progress">
                          <div role="progressbar" style={{width: '25%', height: 4}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-violet" />
                        </div>
                      </div>
                      <div className="number"><strong>25</strong></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">
                      <div className="icon bg-red"><i className="icon-padnote" /></div>
                      <div className="title"><span>Work<br />Orders</span>
                        <div className="progress">
                          <div role="progressbar" style={{width: '70%', height: 4}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-red" />
                        </div>
                      </div>
                      <div className="number"><strong>70</strong></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">
                      <div className="icon bg-green"><i className="icon-bill" /></div>
                      <div className="title"><span>New<br />Invoices</span>
                        <div className="progress">
                          <div role="progressbar" style={{width: '40%', height: 4}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-green" />
                        </div>
                      </div>
                      <div className="number"><strong>40</strong></div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="col-xl-3 col-sm-6">
                    <div className="item d-flex align-items-center">
                      <div className="icon bg-orange"><i className="icon-check" /></div>
                      <div className="title"><span>Open<br />Cases</span>
                        <div className="progress">
                          <div role="progressbar" style={{width: '50%', height: 4}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} className="progress-bar bg-orange" />
                        </div>
                      </div>
                      <div className="number"><strong>50</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Dashboard Header Section    */}

            <section className="dashboard-header">
              <div className="container-fluid ">
                <div className="p-3 bg-white has-shadow">

                <form onSubmit={this.tambahData} encType="multipart/form-data">
            
                <legend>Tambah Kategori</legend>
                <hr/>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Kategori Makanan</label>
                    <div className="col-lg-12">
                        <input ref="catfoot" type="text" className="form-control" placeholder="Nama produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                        <Link to="#" type="button" onClick={() => this.value(this.refs)} className="btn btn-primary">
                          ADD
                        </Link>
                        {/* <button type="submit" onClick={() => this.value(this.ref="catfoot")} className="btn btn-primary">Submit</button> */}
                    </div>
                </div>
                  </form>
                </div>
              </div>
            </section>
            {/* Page Footer*/}
            
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AddCategory;


