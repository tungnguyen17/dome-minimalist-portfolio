import React, { Component } from 'react';

import logo from "../assets/img/logo/dome.png";
import './app.scss';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <section class="navigation_container">
            <div class="content_limitter">
              <h1 class="site_logo">
                <a href="/">
                  <img alt="Dome Logo" class="logo_image" src={logo} />
                </a>
              </h1>
              <nav class="site_menu">
                <ul class="main_menu">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="clearfix"></div>
          </section>
        </header>
        <main>
          <section class="call_to_action_container background">
            <div class="content_limitter">
              <div class="introduction">
                <h3 class="heading">Hello World. I'm Tung Nguyen!</h3>
                <p class="content">Senior Software Engineering</p>
              </div>
            </div>
          </section>
          <section class="services_container section_container">
            <div class="content_limitter container">
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="icon"><i class="far fa-window"></i></div>
                  <h3 class="heading">Backend Development</h3>
                  <p class="content">
                    Manipulate data in database. Provide data to web or mobile via APIs. Process data based on business requirement.
                  </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="icon"><i class="far fa-cogs"></i></div>
                  <h3 class="heading">DevOps</h3>
                  <p class="content">
                    Leverage the the availability of scripting, operating system, tools to automate the tasks that we
                    usually. Self-administrive own website.
                  </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="icon"><i class="far fa-code"></i></div>
                  <h3 class="heading">Web Development</h3>
                  <p class="content">
                    Create a diversity type of website, apply responsive and understand browser capabilities to make website works property from handheld device to desktop computer.
                  </p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="icon"><i class="far fa-chart-network"></i></div>
                  <h3 class="heading">Deep Learning</h3>
                  <p class="content">
                    On my way to getting knowledge about big data processing. Learn the basics of ML framework and build example to understand how it works.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="about_container section_container">
            <div class="content_limitter container">
              <h2 class="heading">About me</h2>
              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <h3 class="skill">.NET</h3>
                  <div class="rating rating-350">
                    <div class="rating-4"></div>
                  </div>
                  <h3 class="skill">SQL Server</h3>
                  <div class="rating rating-350">
                    <div class="rating-3"></div>
                  </div>
                  <h3 class="skill">Angular</h3>
                  <div class="rating rating-350">
                    <div class="rating-2"></div>
                  </div>
                  <h3 class="skill">React</h3>
                  <div class="rating rating-350">
                    <div class="rating-3"></div>
                  </div>
                  <br/>
                </div>
                <div class="col-xs-12 col-md-8">
                  <p class="content">
                    Enthusiast software engineering with over 5 years of experience working with .NET and related technologies including: SQL Server, Angular, ReactJsâ€¦ Excellent problem-solving skills and ability to perform well in a team. Seeking for help company to create quality products, as well as develop my skills as full stack developer.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="experience_container section_container">
            <div class="content_limitter">
              <h2 class="heading">Experiences</h2>
              <div class="timeline">
                <div class="timeline-entry">
                  <div class="timeline-title">
                    <h3>Nash Tech Limited</h3>
                    <p>2018 - 2020</p>
                  </div>
                  <div class="timeline-body">
                    <p>Senior Software Developer</p>
                    <ul>
                      <li>Maintain, develop new features using Angular, ReactJs.</li>
                      <li>Work with technical architects in team to help design database, define solutions.</li>
                      <li>Developed and delivered a feature related to mobile with limited device support.</li>
                      <li>Mentored a group of 3 freshers.</li>
                    </ul>
                  </div>
                </div>
                <div class="timeline-entry">
                  <div class="timeline-title">
                    <h3>FPT Software</h3>
                    <p>2014 - 2017</p>
                  </div>
                  <div class="timeline-body">
                    <p>Software Developer</p>
                    <ul>
                      <li>Maintain old system using ASP.NET and Web API.</li>
                      <li>Helped team to deliver a demo using Xamarin Forms in time.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="contact_section section_container">
            <div class="content_limitter container">
              <h2 class="heading">Contact</h2>
              <div class="row">
                <div class="col-xs-12 col-sm-4 contact_info">
                  <h3 class="sub_heading">Contact information</h3>
                  <form>
                    <div>
                      <label for="footer-info-phone_number">Call me:</label>&nbsp;
                      <a href="tel:+84939718415">+84 939 718 415</a>
                    </div>
                    <div class="form-group">
                      <label for="footer-info-email">Email me:</label>&nbsp;
                      <a href="mailto:tung.nhatnguyen17@gmail.com">tung.nhatnguyen17@gmail.com</a>
                    </div>
                    <div class="form-group social-network">
                      <a href="https://facebook.com/mendozalz" target="_blank"><i class="fab fa-facebook-square"></i></a>&nbsp;
                      <a href="https://www.linkedin.com/in/tung-nguyen-nhat" target="_blank"><i class="fab fa-linkedin"></i></a>&nbsp;
                      <a href="https://join.skype.com/invite/UxBxdhmhaZQd" target="_blank"><i class="fab fa-skype"></i></a>
                    </div>
                  </form>
                </div>
                <div class="col-xs-12 col-sm-8 contact_form">
                  <h3 class="sub_heading">Leave me a message</h3>
                  <form>
                    <div class="row">
                      <div class="col-xs-12 col-sm-6 col-md-5">
                        <div class="form-group">
                          <label for="footer-contact-name">Name: </label>
                          <input class="form-control" id="footer-contact-name" placeholder="Name" type="email" />
                        </div>
                        <div class="form-group">
                          <label for="footer-contact-name">Email: </label>
                          <input class="form-control" id="footer-contact-name" placeholder="Email" type="email" />
                        </div>
                        <div class="form-group">
                          <label for="footer-contact-name">Subject: </label>
                          <input class="form-control" id="footer-contact-name" placeholder="Subject" type="email" />
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-7">
                        <div class="form-group">
                          <label for="footer-contact-name">Subject:</label>
                          <textarea class="form-control" id="footer-contact-name" placeholder="Subject" rows="3" type="email"></textarea>
                        </div>
                        <div class="form-group">
                          <button class="btn btn-primary form-control" type="button">Send message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <section class="copyright_section">
            <div class="content_limitter">
              <p class="content">
                Copyright &copy; 2020 Tung Nguyen. All right reservered.
              </p>
              <p class="content">
                Libraries, images, fonts used herein are the property of their respective owners, <a href="./copyright.html">click here for more information</a>.
              </p>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
