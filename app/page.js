"use client";

import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const data = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Interfaces',
      backgroundColor: '#437EF7',
      borderColor: '#437EF7',
      borderWidth: 1,
      data: [25, 50, 75, 100, 50, 75, 100, 50, 75, 100, 25, 75],
      barThickness: 28,
    },
    {
      label: 'Build-ups',
      backgroundColor: '#5CB1FF',
      borderColor: '#5CB1FF',
      borderWidth: 1,
      data: [35, 65, 80, 95, 45, 70, 85, 60, 80, 95, 30, 85],
      barThickness: 28, 
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 10,
      bottom: 10,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 120,
      ticks: {
        stepSize: 20,
        callback: function(value) {
          return value;
        }
      },
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
      }
    },
    x: {
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
      }
    }
  }
};

export default function Home() {
  return (
<div className='d-flex '>
      {/* Sol Sidebar */}
      <div className='nns'>
        <div className='d-flex my-3' style={{height:"100vh"}}> 
          <div className='col-3 d-flex flex-column align-items-center justify-content-between'>
            <div className='d-flex flex-column align-items-center gap-3'>
              <a href=""><img src="side/Logo.svg" alt="" /></a>
              <a href=""><img src="side/zoom.svg" alt="" /></a>
              <a href=""><img src="side/horizontal.svg" alt="" /></a>
              <a href=""><img src="side/calendar.svg" alt="" /></a>
              <a href=""><img src="side/alt.svg" alt="" /></a>
            </div>
            <div className='d-flex flex-column align-items-center gap-3 mb-5 '>
              <a href=""><img src="side/2.svg" alt="" /></a>
              <a href=""><img src="side/mail.svg" alt="" /></a>
            </div>
          </div>

          <div className='col'>
            <a href="/" className="text-secondary d-flex align-items-center gap-2 text-decoration-none"><img src="side/left.svg"  />Lookscout Dashboard</a>
            <div className="position-relative mt-4">
                <img src="side/search.svg" className="position-absolute" style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}/>
                <input type="text" className="my-input form-control ps-5" placeholder="Search here.."/>
            </div>
            <div className="d-flex flex-column gap-3 mt-5">
              <a href="/" className="text-secondary d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/horizontal.svg" />
                <span>General</span>
              </a>
              <a href="/" className="text-secondary d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/mail.svg" />
                <span>Messages</span>
              </a>
              <a href="/" className="text-secondary d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/2.svg" />
                <span>Notifications</span>
              </a>
              <a href="/" className="d-flex text-secondary align-items-center gap-3 text-decoration-none">
                <img src="side/user.svg" />
                <span>Users</span>
              </a>
              <a href="/" className="text-secondary d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/circle.svg" />
                <span>Events & Logs</span>
              </a>
              <a href="/" className="text-secondary d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/bank.svg" />
                <span>Organization</span>
              </a>
              <a href="/" className="text-secondary d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/note.svg" />
                <span>Teams</span>
              </a>
          </div>
          </div>
        </div>
      </div>
      

      {/* Ana İçerik */}
      <div className="container flex-grow-1">
      {/* Üst Navbar */}
      <div className='none-navbar'>
      <div className='navbar'>
        <img src="Company Logo.svg" alt=""  />
        <img src="Group.svg" alt="" />
      </div>
      </div>
        <div className=" py-3">
          <div className='hdr'>
          <div className="row">
            <div className="col">
            <div className="header-conteiner-one d-flex none">
       <p className="d-flex align-items-center gap-2">Home <img src="right.svg" alt="" /></p>
       <p className="d-flex align-items-center gap-2">Setting <img src="right.svg" alt="" /></p>
       <p className="text-primary d-flex align-items-center gap-2">General <img src="right.svg" alt="" /></p>
   </div>
              <h1>Hey there, Brian Ford!</h1>
              <p>Welcome back, we’re happy to have you here!</p>
            </div>
          </div>
              <div className='button gap-2'>
                <button className="btn btn-outline-primary">Edit section</button>
                <button className="btn btn-primary">Add Item</button>
                <button className='btn-hamburger btn '><img src="dot menu.svg" alt="" />
                </button></div>
          </div>

            {/* Revenue Card */}
            <div className="row">
  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
    <div className="card p-3">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <h5 className="card-title mb-0">Revenue</h5>
        <img src="dot menu.svg" alt="Menu" className="img-fluid" style={{ width: '24px', height: '24px' }}/>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-0">$390</h2>
          <div className="d-flex align-items-center mt-2 gap-1">
          <button className="btn btn-sm text-primary" style={{ backgroundColor: '#F5FAFF',border: 'none'}}>New</button>
            <p className="m-0 text-muted">monthly growth</p>
          </div>
        </div>
        <img src="Graphics.svg" alt="Graphic" className="img-fluid" style={{ width: '98px', height: '70px' }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
    <div className="card p-3">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <h5 className="card-title mb-0">Expenses</h5>
        <img src="dot menu.svg" alt="Menu" className="img-fluid" style={{ width: '24px', height: '24px' }}/>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-0">$680</h2>
          <div className="d-flex align-items-center mt-2 gap-1">
          <button className="btn btn-sm text-danger" style={{ backgroundColor: 'rgba(255, 192, 203, 0.3)',border: 'none'}}>global</button>
            <p className="m-0 text-muted">monthly growth</p>
          </div>
        </div>
        <img src="Graphics (1).svg" alt="Graphic" className="img-fluid" style={{ width: '88px', height: '70px' }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
    <div className="card p-3">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <h5 className="card-title mb-0">Expenses</h5>
        <img src="dot menu.svg" alt="Menu" className="img-fluid" style={{ width: '24px', height: '24px' }}/>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-0">$680</h2>
          <div className="d-flex align-items-center mt-2 gap-1">
          <button className="btn btn-sm text-success" style={{ backgroundColor: '#F0FAF0',border: 'none'}}>intuitive</button>
            <p className="m-0 text-muted">monthly growth</p>
          </div>
        </div>
        <img src="Graphics (2).svg" alt="Graphic" className="img-fluid" style={{ width: '77px', height: '70px' }}/>
      </div>
    </div>
  </div>
</div>
          <div className="row mt-4">
            {/* Advanced Graphic */}
            <div className="col">
              <div className="card">
                <div className="card-body" style={{ position: 'relative', height: '440px' }}>
                  <h5 className="card-title">Advanced Graphic</h5>
                  <div style={{ height: '100%' }}>
                    <Bar data={data} options={options} />
                  </div>
                </div>
              <div className='border-top mt-3'>
                <div className='d-flex justify-content-between align-items-center px-4'>
                <p className='text-secondary m-0'>Data graph</p>
                <button className="btn text-primary mt-2 border-0"  >Open <img src="external link.svg" alt="" /></button>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {/* Lookscout Team */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                  <h5 className="card-title">Lookscout Team</h5>
                  <button className='btn-hamburger btn'><img src="dot menu.svg" alt="" /></button>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="anonim/Avatar.png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Latoya Langosh</p>
                          <p className="mb-0 text-muted">Dynamic</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-primary" style={{ backgroundColor: '#F5FAFF', border: 'none' }}>online</button>
                          <button className="btn"><img src="right.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="anonim/Avatar (1).png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Abel Mohr</p>
                          <p className="mb-0 text-muted">Dynamic</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-primary" style={{ backgroundColor: '#F5FAFF', border: 'none' }}>online</button>
                          <button className="btn"><img src="right.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="anonim/Avatar (2).png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Shari Stamm</p>
                          <p className="mb-0 text-muted">Chief</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-primary" style={{ backgroundColor: '#F5FAFF', border: 'none' }}>online</button>
                          <button className="btn"><img src="right.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="anonim/Avatar (3).png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Earl Johnson</p>
                          <p className="mb-0 text-muted">National</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-primary" style={{ backgroundColor: '#F5FAFF', border: 'none' }}>online</button>
                          <button className="btn"><img src="right.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="anonim/Avatar (4).png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Erick Champlin</p>
                          <p className="mb-0 text-muted">Central</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-primary" style={{ backgroundColor: '#F5FAFF', border: 'none' }}>online</button>
                          <button className="btn"><img src="right.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  </ul>
                  <div className="container">
  <button className="btn btn-primary w-100">View all</button>
</div>


                </div>
              </div>
            </div>

            {/* Updated Materials */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                  <h5 className="card-title">Updated Materials</h5>
                  <button className='btn-hamburger btn'><img src="dot menu.svg" alt="" /></button>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="pdf/Content.svg" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Lookscout Resources</p>
                          <p className="mb-0 text-muted">80.69 mb</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn"><img src="download.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="pdf/Content (1).svg" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Lookscout Updates</p>
                          <p className="mb-0 text-muted">320.32 mb</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn"><img src="download.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="pdf/Content.svg" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Lookscout Guides</p>
                          <p className="mb-0 text-muted">320.32 mb</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn"><img src="placeholder.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="pdf/Content (2).svg" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Lookscout Design System</p>
                          <p className="mb-0 text-muted">320.32 mb</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn"><img src="placeholder.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="pdf/Content (1).svg" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Lookscout Guides</p>
                          <p className="mb-0 text-muted">125.05 mb</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn"><img src="download.svg" alt="Right Arrow" /></button>
                        </div>
                    </div>
                  </li>
                  </ul>
                  <div className='d-flex gap-1'>
                  <button className="btn w-100">Cancel</button>
                  <button className="btn btn-primary w-100">Upload</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Tickets */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Support Tickets</h5>
                  <ul className="list-group list-group-flush">
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="Recent/Avatar (5).png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Pinterest Team</p>
                          <p className="mb-0 text-muted">Jan 23 2022</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-success" style={{ backgroundColor: '#F0FAF0', border: 'none' }}>Done</button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="Recent/Avatar (6).png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Sketch Team</p>
                          <p className="mb-0 text-muted">Jun 15 2022</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-danger" style={{ backgroundColor: '#FFF2F0', border: 'none' }}>Failed</button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="Recent/Avatar (7).png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Gitlab Team</p>
                          <p className="mb-0 text-muted">Jan 15 2022</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-success" style={{ backgroundColor: '#F0FAF0', border: 'none' }}>Done</button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="Recent/Avatar (8).png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Clickup</p>
                          <p className="mb-0 text-muted">Jan 15 2022</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-danger" style={{ backgroundColor: '#FFF2F0', border: 'none' }}>Failed</button>
                        </div>
                    </div>
                  </li>
                  <li className='list-group-item'> 
                      <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                          <img src="Recent/Avatar (9).png" alt="Avatar" width={50} height={50} className="me-2" />
                        <div className="d-block">
                          <p className="mb-1">Deliverooo</p>
                          <p className="mb-0 text-muted">Jan 15 2022</p>
                        </div>
                        </div>
                        <div>
                          <button className="btn btn-sm text-success" style={{ backgroundColor: '#F0FAF0', border: 'none' }}>Done</button>
                        </div>
                    </div>
                  </li>
                  </ul>
                  <button className="btn text-primary mt-2 border-0"  >Open <img src="external link.svg" alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
