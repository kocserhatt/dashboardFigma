"use client";

import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
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
      barThickness: 12,
    },
    {
      label: 'Build-ups',
      backgroundColor: '#5CB1FF',
      borderColor: '#5CB1FF',
      borderWidth: 1,
      data: [35, 65, 80, 95, 45, 70, 85, 60, 80, 95, 30, 85],
      barThickness: 12, 
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
      },
      stacked: true, // Çubukları dikey olarak üst üste yığ
    },
    x: {
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
      },
      stacked: true, // Çubukları dikey olarak üst üste yığ
    }
  },
  plugins: {
    legend: {
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
        }
      }
    }
  }
};


export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);


  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Tarayıcı ortamında olduğumuzdan emin olalım (client-side)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('isDarkMode');
      setIsDarkMode(savedTheme === 'true');
    }
  }, []);
  
  useEffect(() => {
    // Tarayıcı ortamında olduğumuzdan emin olalım (client-side)
    if (typeof window !== 'undefined') {
      document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
      localStorage.setItem('isDarkMode', isDarkMode ? 'true' : 'false');
    }
  }, [isDarkMode]);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
    

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.side-menu');
      const button = document.querySelector('.navbar-toggler');
      if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
        closeMenu();
      }
    };
  
    useEffect(() => {
      if (isMenuOpen) {
        document.addEventListener('click', handleClickOutside);
      } else {
        document.removeEventListener('click', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isMenuOpen]);
  return (
    <>
    <div>
    <div className='none-navbar'>
      <div className='navbar'>
        <span>
          {isDarkMode ? (
            <img src="dark/Company Logo (1).svg" alt="Company Logo" />
          ) : (
            <img src="Company Logo.svg" alt="Company Logo" />
          )}
        </span>
        <button className=" nav-btn " type="button" onClick={toggleMenu}>
        <span>
          {isDarkMode ? (
            <img src="dark/big.svg" alt="Icon" width={40} height={40} />
          ) : (
            <img src="big.svg" alt="Icon" width={40} height={40}  />
          )}
        </span>
        </button>
      </div>

      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={closeMenu}>
        <span>{isDarkMode? <img src="close (1).png" alt="" /> : <img src="close (2).png" alt="" />}</span>
        </button>
        <ul className="list-unstyled">
  <div className="d-flex align-items-center gap-2">
    <img src="anonim/Avatar (4).png" alt="" />
    <h1 className="sidebar-name" style={{ fontSize: "18px" }}>Brian Ford</h1>
    <div className=''>
        <label className="switch">
            <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
            <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
            <input type="checkbox" className="input" checked={isDarkMode} onChange={toggleMode}/>
            <span className="slider"></span>
        </label>
    </div>
  </div>

  <li className="nav-item dropdown ">
    <a className="nav-link dropdown-toggle d-flex align-items-center gap-2 " href="#" id="dropdownDashboard" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="side/horizontal.svg" alt="" />
      <span className="color-white">Dashboard</span>
    </a>
    <ul className="dropdown-menu" aria-labelledby="dropdownDashboard">
    <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/horizontal.svg" />
                <span>General</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/mail.svg" />
                <span>Messages</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/2.svg" />
                <span>Notifications</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex  align-items-center gap-3 text-decoration-none">
                <img src="side/user.svg" />
                <span>Users</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/circle.svg" />
                <span>Events & Logs</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/bank.svg" />
                <span>Organization</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/note.svg" />
                <span>Teams</span>
              </a>
    </ul>
  </li>

  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" id="dropdownDate" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="side/calendar.svg" alt="" />
      <span className="color-white">Date</span>
    </a>
    <ul className="dropdown-menu" aria-labelledby="dropdownDate">
      <li><a className="dropdown-item" href="#">Aylık Görünüm</a></li>
      <li><a className="dropdown-item" href="#">Haftalık Görünüm</a></li>
      <li><a className="dropdown-item" href="#">Günlük Görünüm</a></li>
      <li><a className="dropdown-item" href="#">Etkinlikler</a></li>
    </ul>
  </li>

  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" id="dropdownDeneme" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="side/alt.svg" alt="" />
      <span className="color-white">Deneme</span>
    </a>
    <ul className="dropdown-menu" aria-labelledby="dropdownDeneme">
      <li><a className="dropdown-item" href="#">Bar Charts</a></li>
      <li><a className="dropdown-item" href="#">Sales Data</a></li>
      <li><a className="dropdown-item" href="#">Performance Metrics</a></li>
    </ul>
  </li>

  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" id="dropdownSettings" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="gear 1.svg" alt="" />
      <span className="color-white">Settings</span>
    </a>
    <ul className="dropdown-menu" aria-labelledby="dropdownSettings">
      <li><a className="dropdown-item" href="#">Account Settings</a></li>
      <li><a className="dropdown-item" href="#">Privacy Settings</a></li>
      <li><a className="dropdown-item" href="#">Notification Settings</a></li>
      <li><a className="dropdown-item" href="#">Language & Region</a></li>
    </ul>
  </li>

  <li className="nav-item">
    <a className="nav-link d-flex align-items-center gap-2" href="#">
      <img src="exit.svg" alt="" />
      <span className="color-white">Out</span>
    </a>
  </li>
</ul>

      </div>
    </div>
    </div>
<div className='body'>
<div className='d-flex gap-2'>
      {/* Sol Sidebar */}
      <div className='nns sidebar'>
        <div className='d-flex my-3' style={{height:"100vh"}}> 
          <div className='col-3 d-flex flex-column align-items-center justify-content-between'>
            <div className='d-flex flex-column align-items-center gap-3'>
              <a href="">{isDarkMode? <img src="dark/Logo Glyphs (1).svg" alt="" /> : <img src="side/Logo.svg" alt="" />}</a>
              <a href="#"><img src="side/zoom.svg" alt="" /></a>
              <a href="#"><img src="side/horizontal.svg" alt="" /></a>
              <a href="#"><img src="side/calendar.svg" alt="" /></a>
              <a href="#"><img src="side/alt.svg" alt="" /></a>
            </div>
            <div className='d-flex flex-column align-items-center gap-3 mb-5 '>
            <div className=''>
                <label className="switch">
                  <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
                  <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                  <input type="checkbox" className="input" checked={isDarkMode} onChange={toggleMode}/>
                  <span className="slider"></span>
                </label>
                </div>
              <a href="#"><img src="gear 1.svg" alt="" /></a>
              <a href="#"><img src="exit.svg" alt="" /></a>
            </div>
          </div>

          <div className='col font-16'>
            <a href="/" className="d-flex align-items-center gap-2 text-decoration-none sidebar-input-color"><img src="side/left.svg"  />Lookscout Dashboard</a>
            <div className="position-relative mt-4">
                <img src="side/search.svg" className="position-absolute" style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}/>
                <input type="text" className="w-100 ps-5 sidebar-input-color" placeholder="Search here.."/>
            </div>
            <div className="d-flex flex-column gap-3 mt-5">
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/horizontal.svg" />
                <span>General</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/mail.svg" />
                <span>Messages</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/2.svg" />
                <span>Notifications</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex  align-items-center gap-3 text-decoration-none">
                <img src="side/user.svg" />
                <span>Users</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/circle.svg" />
                <span>Events & Logs</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/bank.svg" />
                <span>Organization</span>
              </a>
              <a href="#" className="sidebar-input-color d-flex align-items-center gap-3 text-decoration-none">
                <img src="side/note.svg" />
                <span>Teams</span>
              </a>
          </div>
          <div className='d-flex justify-content-between align-items-center my-4'>
            <div className='d-flex align-items-center gap-2 '>
              <img src="anonim/Avatar (4).png" alt="" />
              <h1 className='sidebar-name' style={{fontSize:"18px"}}>Brian Ford</h1>
            </div>
            <button className='btn-hamburger btn'><img src="dot menu.svg" alt="" /></button>
          </div>
          <div className='sidebar-footer'>
            <div className='d-flex justify-content-between sidebar-footer '>
              <img src="Progress circle.svg" alt="" />
              <button className='btn'><img src="close cross.svg" alt="" /></button>  
            </div>
            <div className='sidebar-footer plan'>
              <h1 className='sidebar-name' style={{fontSize:"15px"}}>Subscription Plan</h1>
              <p className='sidebar-p'>Your Subscription plan will expire soon please upgrade!</p>
              <button className="btn text-primary">Upgrade</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      

      {/* Ana İçerik */}
      

      <div className="container flex-grow-1 body">
        <div className=" py-3">
          <div className='hdr'>
          <div className="row">
            <div className="col">
            <div className="header-conteiner-one d-flex justify-content-between ">
              <div>
                <p className="d-flex align-items-center gap-2 d-none d-md-inline home-color">Home {isDarkMode? <img src="dark/okDark.svg" alt="" /> : <img src="ok.svg" alt="" />}</p>
                <p className="d-flex align-items-center gap-2 d-none d-md-inline home-color">Setting{isDarkMode? <img src="dark/okDark.svg" alt="" /> : <img src="ok.svg" alt="" />}</p>
                <p className="text-primary d-flex align-items-center gap-2 d-none d-md-inline home-color">General</p>
                <p className="d-flex align-items-center gap-2 d-inline d-md-none home-color">{isDarkMode? <img src="dark/okDark.svg" alt="" style={{transform: "rotate(180deg)",  width: "16px", height: "auto", }} /> : <img src="ok.svg" alt="" style={{transform: "rotate(180deg)",  width: "16px", height: "auto", }} />}Back </p>
              </div>
            </div>
              <h1 className='color-white'>Hey there, Brian Ford!</h1>
              <p className='color-gray'>Welcome back, we’re happy to have you here!</p>
            </div>
          </div>

          <div className='d-flex gap-2 align-items-center my-2'>
            <button className="header-btn-text header-btn-bg p-2">Edit section</button>
            <button className="btn btn-primary">Add Item</button>
            <button className='btn btn-hamburger d-block d-md-none'>
            <span>{isDarkMode? <img src="dark/dot menu (1).svg" alt="" /> : <img src="dot menu.svg" alt="" />}</span>
            </button>
          </div>

          </div>

            {/* Revenue Card */}
            <div className="row">
  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
    <div className=" p-3 card-bg ">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <h5 className=" color-white mb-0">Revenue</h5>
        <span>{isDarkMode? <img src="dark/dot menu (1).svg" alt="" /> : <img src="dot menu.svg" alt="" />}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-0 color-white">$390</h2>
          <div className="d-flex align-items-center mt-2 gap-1">
          <button className="header-card-bg header-card-text ">New</button>
            <p className="m-0 color-gray">monthly growth</p>
          </div>
        </div>
        <img src="Graphics.svg" alt="Graphic" className="img-fluid" style={{ width: '98px', height: '70px' }}/>
      </div>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
    <div className="card-bg p-3">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <h5 className="color-white mb-0">Expenses</h5>
        <span>{isDarkMode? <img src="dark/dot menu (1).svg" alt="" /> : <img src="dot menu.svg" alt="" />}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-0 color-white">$680</h2>
          <div className="d-flex align-items-center mt-2 gap-1">
          <button className="header-card-text-red header-card-bg-red">global</button>
            <p className="m-0 color-gray">monthly growth</p>
          </div>
        </div>
        <img src="Graphics (1).svg" alt="Graphic" className="img-fluid" style={{ width: '88px', height: '70px' }}/>
      </div>
    </div>
  </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="card-bg p-3">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="color-white mb-0">Expenses</h5>
                  <span>{isDarkMode? <img src="dark/dot menu (1).svg" alt="" /> : <img src="dot menu.svg" alt="" />}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 className="mb-0 color-white">$680</h2>
                    <div className="d-flex align-items-center mt-2 gap-1">
                    <button className="header-card-text-green header-card-bg-green">intuitive</button>
                      <p className="m-0 color-gray">monthly growth</p>
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
              <div className="card-bg">
                <div className="card-body" style={{ position: 'relative', height: '440px' }}>
                  <div className='d-flex justify-content-between align-items-center m-2 '>
                  <h5 className="color-white pt-3 ">Advanced Graphic</h5>
                  <span>{isDarkMode? <img src="dark/dot menu (1).svg" alt="" /> : <img src="dot menu.svg" alt="" />}</span>
                  </div>
                  <div style={{ height: '100%' }}>
                    <Bar data={data} options={options} />
                  </div>
                </div>
              <div className='border-top mt-3'>
                <div className='d-flex justify-content-between align-items-center p-3'>
                <p className=' m-0 d-none d-md-inline color-gray'>Data graph</p>
                <button className="btn text-primary mt-2 border-0"  >Open <img src="external link.svg" alt="" /></button>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center flx-h1 mt-3">
    <h1  className="mb-2 mb-md-0 color-white" style={{fontSize:"18px"}}>Brian Ford</h1>
    <div className='d-flex gap-2'>
        <button className="header-btn-text header-btn-bg p-2">Edit section</button>
        <button className="btn btn-primary">Add Item</button>
        <button className='btn btn-hamburger d-block d-md-none'>
            <span>{isDarkMode? <img src="dark/dot menu (1).svg" alt="" /> : <img src="dot menu.svg" alt="" />}</span>
        </button>
    </div>
</div>


                    <div className="my-3 justify-content-center mx-4">
                        <div className="row cardss">
                        {/* İlk Kart */}
                            <div className="col-md-6 col-lg-4 mb-4">

                            <div className="card-bg">  
                                <ul className="list-group-ul list-group list-group-flush p-3 ">
                                    <li className="list-group-item-header d-flex align-items-center justify-content-between p-2 color-white"  >
                                        <h1 style={{fontSize:"16px"}}>Lookscout Team</h1>
                                        <span>{isDarkMode? <img src="dark/dot menu (1).svg" alt="" /> : <img src="dot menu.svg" alt="" />}</span>
                                    </li>
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4" >
                                        <div className="d-flex gap-3">
                                            <div>
                                                <img src="anonim/Avatar.png" alt="" className="rounded-circle"/>
                                            </div>
                                            <div className="list-content">
                                                <b className='color-white'>Latoya Langosh</b>
                                                <p className="fs-6 color-gray">Dynamic</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                            <button className="footer-bg footer-text ">Online</button>
                                            <span>{isDarkMode? <img src="dark/cardDark.svg" alt="" /> : <img src="right.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4">
                                        <div className="d-flex gap-4">
                                            <div>
                                                <img src="anonim/Avatar (1).png" alt="" className="rounded-circle"/>
                                            </div>
                                            <div className="list-content">
                                                <b className='color-white'>Abel Mohr</b>
                                                <p className="fs-6 color-gray">Dynamic</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                        <button className="footer-bg footer-text ">Online</button>
                                            <span>{isDarkMode? <img src="dark/cardDark.svg" alt="" /> : <img src="right.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4" >
                                        <div className="d-flex gap-4">
                                            <div>
                                                <img src="anonim/Avatar (2).png" alt="" className="rounded-circle"  />
                                            </div>
                                            <div className="list-content">
                                                <b className='color-white'>Shari Stamm</b>
                                                <p className="fs-6 color-gray">Chief</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                        <button className="footer-bg footer-text ">Online</button>
                                            <span>{isDarkMode? <img src="dark/cardDark.svg" alt="" /> : <img src="right.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4">
                                        <div className="d-flex gap-4">
                                            <div>
                                                <img src="anonim/Avatar (3).png" alt="" />
                                            </div>
                                            <div className="list-content">
                                                <b className='color-white'>Earl Johnson</b>
                                                <p className="fs-6 color-gray">National</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                        <button className="footer-bg footer-text ">Online</button>
                                            <span>{isDarkMode? <img src="dark/cardDark.svg" alt="" /> : <img src="right.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4" >
                                        <div className="d-flex gap-4">
                                            <div>
                                                <img src="anonim/Avatar (4).png" alt="" className="rounded-circle" />
                                            </div>
                                            <div className="list-content">
                                                <b className='color-white'>Erick Champlin</b>
                                                <p className="fs-6 color-gray">Central</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                        <button className="footer-bg footer-text ">Online</button>
                                            <span>{isDarkMode? <img src="dark/cardDark.svg" alt="" /> : <img src="right.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                                    <button className="viewall-btn btn btn-primary m-3">View All</button>
                                </ul>
                             </div>
                            </div>
                            {/* İkinci Kart */}
                            <div className="col-md-6 col-lg-4 mb-4 ">
                                <div className="card-bg">
                                    <ul className="list-group-ul list-group list-group-flush p-3"  >
                                        <li className="list-group-item-header d-flex align-items-center justify-content-between p-2 color-white" >
                                        <h1 style={{fontSize:"16px"}}>Updated Materials</h1>
                                        <span>{isDarkMode? <img src="dark/dot menu (1).svg" alt="" /> : <img src="dot menu.svg" alt="" />}</span>
                                        </li>
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between"  >
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf/Content.svg" alt="" className="rounded-circle" width={40} height={40}  />
                                                </div>
                                                <div className="list-content">
                                                    <b className='color-white'>Lookscout Resources</b>
                                                    <p className="fs-6 color-gray">80.69 mb</p>
                                                </div>
                                            </div> 
                                            <span>{isDarkMode? <img src="dark/download (1).svg" alt="" /> : <img src="download.svg" alt="" />}</span>
                                        </li> 
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between" >
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf/Content (1).svg" alt="" className="rounded-circle" width={40} height={40}  />
                                                </div>
                                                <div className="list-content">
                                                    <b className='color-white'>Lookscout Updates</b>
                                                    <p className="fs-6 color-gray">320.32mb</p>
                                                </div>
                                            </div>
                                            <span>{isDarkMode? <img src="dark/download (1).svg" alt="" /> : <img src="download.svg" alt="" />}</span>
                                        </li> 
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between " >
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf/Content.svg" alt="" className="rounded-circle" width={40} height={40}  />
                                                </div>
                                                <div className="list-content">
                                                    <b className='color-white'>Lookscout Guides</b>
                                                    <p className="fs-6 color-gray" >320.32 mb</p>
                                                </div>
                                            </div>
                                            <span>{isDarkMode? <img src="dark/download (1).svg" alt="" /> : <img src="download.svg" alt="" />}</span>
                                        </li> 
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between ">
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf/Content (2).svg" alt="" className="rounded-circle" width={40} height={40}  />
                                                </div>
                                                <div className="list-content">
                                                    <b className='color-white'>Lookscout Design System</b>
                                                    <p className="fs-6 color-gray" >320.32 mb</p>
                                                </div>
                                            </div>
                                            <span>{isDarkMode? <img src="dark/download (1).svg" alt="" /> : <img src="download.svg" alt="" />}</span>
                                        </li> 
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between " >
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf/Content (1).svg" alt="" className="rounded-circle" width={40} height={40}  />
                                                </div>
                                                <div className="list-content">
                                                    <b className='color-white'>Lookscout Guides</b>
                                                    <p className="fs-6 color-gray" >120.05 mb</p>
                                                </div>
                                            </div>
                                            <span>{isDarkMode? <img src="dark/download (1).svg" alt="" /> : <img src="download.svg" alt="" />}</span>
                                        </li> 
                                        <li className="list-group-item-li d-flex justify-content-between gap-2 p-3" >
                                            <button className="header-btn-text header-btn-bg p-2 w-100">Edit section</button>
                                            <button className="cancel-btn btn btn-primary w-100">Cancel</button>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                            {/* üçüncü Kart */}
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="card-bg"  >
                                    <ul className="list-group-ul list-group list-group-flush p-2" >
                                        <li className="list-group-item-header d-flex align-items-center justify-content-between p-2 color-white"  >
                                        <h1 style={{fontSize:"16px"}}>Recent Transactions</h1>
                                        </li>
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 " >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="Recent/Avatar (5).png" alt="" className="rounded-circle" />
                                                    </div>
                                                    <div className="list-content">
                                                        <b className='color-white'>Pinterest Team</b>
                                                        <p className="fs-6 color-gray"  >Jan 23 2022</p>
                                                    </div>
                                            </div>
                                            <button className="footer-bg2">Done</button>
                                        </li> 
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 " >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="Recent/Avatar (6).png" alt="" className="rounded-circle"  />
                                                    </div>
                                                    <div className="list-content">
                                                        <b className='color-white'>Sketch Team</b>
                                                        <p className="fs-6 color-gray"  >Jun 15 2022</p>
                                                    </div>
                                            </div>
                                                <button className="footer-bg3">Failed</button>
                                        </li> 
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 " >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="Recent/Avatar (7).png" alt="" className="rounded-circle"  />
                                                    </div>
                                                    <div className="list-content">
                                                        <b className='color-white'>Gitlab Team</b>
                                                        <p className="fs-6 color-gray" >Jan 15 2022</p>
                                                    </div>
                                            </div>
                                            <button className="footer-bg2">Done</button>
                                        </li> 
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 "  >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="Recent/Avatar (8).png" alt="" className="rounded-circle"  />
                                                    </div>
                                                    <div className="list-content">
                                                        <b className='color-white'>Clickup</b>
                                                        <p className="fs-6 color-gray">Jan 15 2022</p>
                                                    </div>
                                            </div>
                                            <button className="footer-bg3">Failed</button>
                                        </li> 
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 " >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="Recent/Avatar (9).png" alt="" className="rounded-circle" />
                                                    </div>
                                                    <div className="list-content">
                                                        <b className='color-white'>Deliverooo</b>
                                                        <p className="fs-6 color-gray">Jan 15 2022</p>
                                                    </div>
                                            </div>
                                            <button className="footer-bg2">Done</button>
                                        </li> 
                                        <div className="p-3">
                                            <p className="d-flex gap-2 text-primary">Open <img src="external link.svg" alt="" /></p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
