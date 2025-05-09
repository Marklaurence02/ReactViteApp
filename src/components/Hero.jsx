import React from 'react'
import Frame from '../assets/img/Hero/Frame.webp'
import teamImage from '../assets/img/Hero/Team.webp'
import CollaboratorImage from '../assets/img/Hero/Collaborator.webp'
import Dots from '../assets/img/illustrations/Dots.webp'
import Wave from '../assets/img/illustrations/Wave.svg'
import appstore from '../assets/img/logos/App_Store.webp'
import playstore from '../assets/img/logos/Play_Store.webp'



const Hero = () => {
  return (
    <>


      <section className="hero-section overflow-hidden position-relative z-0 mb-4 mb-lg-0" id="home">
        <div className="hero-background">
          <div className="container">
            <div className="row gy-4 gy-md-8 pt-9 pt-lg-0">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="fs-2 fs-lg-1 text-white fw-bold mb-2 mb-lg-x1 lh-base mt-3 mt-lg-0">
                  Manage your remote <span className="text-nowrap">team work</span>
                </h1>
                <p className="fs-8 text-white mb-3 mb-lg-4 lh-lg">
                  With lots of unique blocks, you can easily build a page without coding.
                  Build your next consultancy website within few minutes
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a className="btn btn-primary btn-lg lh-xl mb-4 mb-md-5 mb-lg-7" href="#!">Explore more</a>
                </div>
                <p className="mb-x1 fs-10 button-text text-uppercase fw-bold lh-base text-300">Download our app</p>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 position-relative z-2">
                  <a className="border-0 p-0 bg-transparent cursor-pointer rounded-1" href="#!">
                    <img className="img-fluid" src={appstore} alt="App Store" />
                  </a>
                  <a className="border-0 p-0 bg-transparent cursor-pointer rounded-1" href="#!">
                    <img className="img-fluid" src={playstore} alt="Play Store" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 position-lg-relative">
                <div className="position-lg-absolute z-1 text-center">
                  <img className="img-fluid chat-image" src={Frame} alt="Chat illustration" />
                  <div className="position-absolute dots d-none d-md-block">
                    <img className="img-fluid w-50 w-lg-75" src={Dots} alt="Dots decoration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0 z-1">
          <img className="wave mb-md-n2" src={Wave} alt="Wave" />
          <div className="bg-white py-2 py-md-5"></div>
        </div>
      </section>
      <section class="container border-bottom mb-8 mb-lg-10">
            <div class="row pb-6 pb-lg-8 g-3 g-lg-8 px-3">
              <div class="col-12 col-md-4">
                <h2 class="fs-3 fw-bold lh-sm mb-2 text-center" data-countup='{"endValue":6,"prefix":"0"}'>0</h2>
                <h6 class="fs-8 fw-normal lh-lg mb-0 opacity-70 text-center">Offices are available on different countries</h6>
              </div>
              <div class="col-12 col-md-4">
                <h2 class="fs-3 fw-bold lh-sm mb-2 text-center" data-countup='{"endValue":238}'>0</h2>
                <h6 class="opacity-70 fs-8 fw-normal lh-lg mb-0 text-center">Seats are available right now with support</h6>
              </div>
              <div class="col-12 col-md-4">
                <h2 class="fs-3 fw-bold lh-sm mb-2 text-center" data-countup='{"endValue":1395,"autoIncreasing":true}'>0</h2>
                <h5 class="opacity-70 fs-8 fw-normal lh-lg mb-0 text-center">People are using our co-work spaces right now</h5>
              </div>
            </div>
          </section>


          <section class="container mb-8 mb-lg-13" id="about">
            <div class="row align-items-center">
              <div class="col-12 col-lg-6 col-xl-7"><img class="img-fluid" src={teamImage} alt="Team" /></div>
              <div class="col-12 col-lg-6 col-xl-5">
                <div class="row justify-content-center justify-content-lg-start">
                  <div class="col-sm-10 col-md-8 col-lg-12">
                    <h2 class="fs-4 fs-lg-3 fw-bold mb-2 text-center text-lg-start">Collaborate with team members.</h2>
                    <p class="fs-8 mb-4 mb-lg-5 lh-lg text-center text-lg-start fw-normal">We share common trends and strategies for improving your rental income</p>
                  </div>
                  <div class="col-12">
                    <div class="mb-x1 mb-lg-3">
                      <h5 class="fs-8 fw-bold lh-lg mb-1">Project Based Groups </h5>
                      <p class="mb-0 lh-xl">You can use this module to monitor ongoing projects seamlessly.</p>
                    </div>
                    <div>
                      <h5 class="fs-8 fw-bold lh-lg mb-1"> Unlimited Video Meetings</h5>
                      <p class="lh-xl mb-0">Conduct unlimited video meetings with us for better business operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        
          <section class="container mb-8 mb-lg-13">
            <div class="row align-items-center">
              <div class="col-12 col-lg-6 col-xl-5 order-lg-1"><img class="img-fluid" src={CollaboratorImage} alt="" /></div>
              <div class="col-12 col-lg-6 col-xl-7">
                <div class="row justify-content-center justify-content-lg-start">
                  <div class="col-sm-10 col-md-8 col-lg-11">
                    <h2 class="fs-4 fs-lg-3 fw-bold mb-2 text-center text-lg-start"> Organize remote team fast & easily.</h2>
                    <p class="fs-8 mb-4 mb-lg-5 lh-lg text-center text-lg-start fw-normal">Organizing and managing your remote teams has never been this easy!</p>
                  </div>
                  <div class="col-12">
                    <div class="mb-x1 mb-lg-3">
                      <h5 class="fs-8 fw-bold lh-lg mb-1">Create Unlimited Teams </h5>
                      <p class="b-0 lh-xl">Create unlimited teams and boost productivity with efficient collaboration.</p>
                    </div>
                    <div>
                      <h5 class="fs-8 fw-bold lh-lg mb-1"> Hasslefree Chat with Everyone</h5>
                      <p class="lh-xl mb-0">With unique and simple UIs, keep yourself connected across all the teams.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section class="container mb-8 mb-lg-11">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-7">
                <h3 class="fs-4 fs-lg-3 fw-bold text-center mb-2 mb-lg-x1"> How does <span class="text-nowrap">it work?</span></h3>
                <p class="fs-8 mb-7 mb-lg-8 text-center lh-lg">You can use this as it is or tweak it as you seem necessary. you seem necessary.</p>
              </div>
              <div class="col-12">
                <div class="row g-sm-2 g-lg-3 align-items-center timeline">
                  <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column justify-content-center gap-2 gap-sm-x1 gap-md-4 gap-lg-0">
                    <div class="timeline-step-1 w-25 w-lg-100 mb-4 mb-lg-5 mb-xl-6">
                      <div class="timeline-item d-flex justify-content-center">
                        <div class="timeline-icon bg-primary rounded-circle d-flex justify-content-center align-items-center"><span class="fs-6 fs-lg-5 fs-xl-4 text-white"> 1</span></div>
                      </div>
                    </div>
                    <div class="py-1 py-lg-0 px-lg-5 w-75 w-sm-50 w-lg-100 timeline-content">
                      <h6 class="fs-8 fw-bold text-lg-center lh-lg mb-2">Install App</h6>
                      <p class="text-lg-center lh-xl mb-0">Install the app with a single click.</p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column justify-content-center gap-2 gap-sm-x1 gap-md-4 gap-lg-0">
                    <div class="timeline-step-2 w-25 w-lg-100 mb-4 mb-lg-5 mb-xl-6">
                      <div class="timeline-item d-flex justify-content-center">
                        <div class="timeline-icon bg-success rounded-circle d-flex justify-content-center align-items-center"><span class="fs-6 fs-lg-5 fs-xl-4 text-white"> 2</span></div>
                      </div>
                    </div>
                    <div class="py-1 py-lg-0 px-lg-5 w-75 w-sm-50 w-lg-100 timeline-content">
                      <h6 class="fs-8 fw-bold text-lg-center lh-lg mb-2">Add Team Members</h6>
                      <p class="text-lg-center lh-xl mb-0">Start with adding team members to <span class="text-nowrap">your channels. </span></p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column justify-content-center gap-2 gap-sm-x1 gap-md-4 gap-lg-0">
                    <div class="timeline-step-3 position-relative z-1 overflow-hidden w-25 w-lg-100 mb-4 mb-lg-5 mb-xl-6">
                      <div class="timeline-item d-flex justify-content-center">
                        <div class="timeline-icon bg-info rounded-circle d-flex justify-content-center align-items-center"><span class="fs-6 fs-lg-5 fs-xl-4 text-white"> 3</span></div>
                      </div>
                    </div>
                    <div class="py-1 py-lg-0 px-lg-5 w-75 w-sm-50 w-lg-100 timeline-content">
                      <h6 class="fs-8 fw-bold text-lg-center lh-lg mb-2">Start Rolling</h6>
                      <p class="text-lg-center lh-xl mb-0">Start operating your business in a simpler way <span class="text-nowrap">and grow!</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="experience position-relative overflow-hidden" id="service">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="position-relative z-1 text-center mb-8 mb-lg-9 video-player-paused" data-video-player-container="data-video-player-container"><video class="w-100 h-100 rounded-4" src="src/assets/video/Tech_video.mp4" poster="src/assets/img/Hero/experiences.webp" type="video/mp4" data-video-player="data-video-player"></video>
                    <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 rounded-4 bg-1100 object-cover" data-overlay="data-overlay"> </div><button class="btn play-button position-absolute justify-content-center align-items-center bg-white rounded-circle cursor-pointer" data-play-button="data-play-button"> <img class="play-icon w-25" src="src/assets/img/illustrations/play-solid.svg" alt="" data-play-icon="data-play-icon" /><img class="pause-icon w-25" src="src/assets/img/illustrations/pause-solid.svg" alt="" data-pause-icon="data-pause-icon" /></button>
                    <div class="position-absolute dots d-none d-sm-block"><img class="img-fluid w-100" src="assets/img/illustrations/Dots.webp" alt="" /></div>
                  </div>
                </div>
                <div class="col-md-8 col-lg-7">
                  <h2 class="fs-4 fs-lg-3 fw-bold text-center text-white mb-5 mb-lg-9 lh-sm">We made this app to solve your problems.</h2>
                </div>
                <div class="col-12">
                  <div class="row gy-4 g-md-3 pb-8 pb-lg-11 px-1">
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src="src/assets/img/icons/roadmap.svg" alt="" />
                      <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Unlimited Projects</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Manage multiple projects at once and for seamless business operation.</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src="src/assets/img/icons/users-wm.svg" alt="" />
                      <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Team Management</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Manage your cross-functional teams better than ever with our easily manageable app.</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src="src/assets/img/icons/share-91.svg" alt="" />
                      <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">File Sharing</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Easily share files where necessary and keep them safe with enhanced security and protection.</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src="src/assets/img/icons/video_meeting.svg" alt="" />
                      <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Video Meeting</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Conduct video meetings and keep records for further use with its cloud storage.</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src="src/assets/img/icons/opening-times.svg" alt="" />
                      <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Time Tracking</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">Track time to ensure meeting all the deadlines and never lag behind managing multiple projects.</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src="src/assets/img/icons/card-favorite.svg" alt="" />
                      <div>
                        <h5 class="fs-8 text-white lh-lg fw-bold">Payment System</h5>
                        <p class="text-white text-opacity-50 lh-xl mb-0">With its easy payment system create invoices and get paid all at the same place.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="position-absolute top-0 start-0 end-0">
              <div class="bg-white py-3 py-md-9 py-xl-10"> </div><img class="wave" src="src/assets/img/illustrations/Wave_2.svg" alt="" />
            </div>
          </section>
          <section class="bg-1100 mt-n1">
            <div class="mx-auto text-center">
              <hr class="horizontal-rule m-0 d-inline-block" />
            </div>
            <div class="container pb-8 pb-lg-10">
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-7">
                  <h2 class="fs-6 fs-lg-5 fw-bold text-white text-center pt-7 pb-4 pt-lg-9 pb-lg-6 lh-lg"> <span class="underline"> 1,749 remote teams </span>have shared their experience with our app!</h2>
                </div>
                <div class="col-12 mb-4 mb-lg-6">
                  <div class="row g-2">
                    <div class="swiper-theme-container">
                      <div class="swiper position-relative" data-swiper='{"spaceBetween":20,"mousewheel":{"forceToAxis":true,"sensitiviye":20,"releaseOnEdges":true},"autoplay":{"delay":3000,"disableOnInteraction":false},"breakpoints":{"0":{"slidesPerView":1,"direction":"horizontal","centeredSlide":true,"loop":true},"768":{"direction":"horizontal","centeredSlide":true,"slidesPerView":2,"loop":true},"992":{"slidesPerView":3,"direction":"vertical","loop":false}}}'>
                        <div class="swiper-wrapper">
                          <div class="col-12 swiper-slide">
                            <div class="d-flex justify-content-center gap-2">
                              <div class="d-flex flex-column flex-lg-row gap-2 px-4 py-x1 review-card-1">
                                <div class="text-center text-lg-start"><img class="card-image rounded-circle object-fit-cover" src="src/assets/img/feedback/reviewer_1.webp" alt="" /></div>
                                <div class="text-center text-lg-start">
                                  <p class="fs-8 mb-2 lh-lg line-clamp-3 text-1100">“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”</p>
                                  <p class="text-800 lh-xl mb-0">Isaac Olson</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 swiper-slide">
                            <div class="d-flex justify-content-center gap-2">
                              <div class="d-flex flex-column flex-lg-row gap-2 px-4 py-x1 review-card-2">
                                <div class="text-center text-lg-start"><img class="card-image rounded-circle object-fit-cover" src="src/assets/img/feedback/reviewer_2.webp" alt="" /></div>
                                <div class="text-center text-lg-start">
                                  <p class="fs-8 mb-2 lh-lg line-clamp-3 text-1100">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users who want success.”</p>
                                  <p class="text-800 lh-xl mb-0">Barry Young</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 swiper-slide">
                            <div class="d-flex justify-content-center gap-2">
                              <div class="d-flex flex-column flex-lg-row gap-2 px-4 py-x1 review-card-3">
                                <div class="text-center text-lg-start"><img class="card-image rounded-circle object-fit-cover" src="src/assets/img/feedback/reviewer_3.webp" alt="" /></div>
                                <div class="text-center text-lg-start">
                                  <p class="fs-8 mb-2 lh-lg line-clamp-3 text-1100">“Must have book for all, who want to be Product Designer or Interaction Designer.”</p>
                                  <p class="text-800 lh-xl mb-0">Esther Allison</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 swiper-slide">
                            <div class="d-flex justify-content-center gap-2">
                              <div class="d-flex flex-column flex-lg-row gap-2 px-4 py-x1 review-card-4">
                                <div class="text-center text-lg-start"><img class="card-image rounded-circle object-fit-cover" src="src/assets/img/feedback/kakashi.webp" alt="" /></div>
                                <div class="text-center text-lg-start">
                                  <p class="fs-8 mb-2 lh-lg line-clamp-3 text-1100">“Every day, I eat, sleep, and worry about stupid things. My job is to ensure that these kids have as many days as possible where they can be idiots like this.”</p>
                                  <p class="text-800 lh-xl mb-0">Kakashi Hatake</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 swiper-slide">
                            <div class="d-flex justify-content-center gap-2">
                              <div class="d-flex flex-column flex-lg-row gap-2 px-4 py-x1 review-card-5">
                                <div class="text-center text-lg-start"><img class="card-image rounded-circle object-fit-cover" src="src/assets/img/feedback/obito.webp" alt="" /></div>
                                <div class="text-center text-lg-start">
                                  <p class="fs-8 mb-2 lh-lg line-clamp-3 text-1100">“Life isn’t permanent or predictable. You never know when you will run out of time. The best thing you can do is to be honest with those around you and let them know how you really feel. You never know if you have a tomorrow to come.”</p>
                                  <p class="text-800 lh-xl mb-0">Obito Uchiha</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center"><a class="py-1 link-success" href="#!"><span>Read more reviews </span><span class="uil uil-arrow-right icon"></span></a></div>
              </div>
            </div>
          </section>
          <section class="bg-300" id="pricing">
            <div class="container py-8 py-lg-10">
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-7">
                  <h3 class="fs-4 fs-lg-3 fw-bold text-center mb-2 mb-lg-x1 lh-sm">Pricing made easy</h3>
                  <p class="fs-8 mb-7 mb-lg-8 text-center lh-lg fw-normal">Show your pricing to your customers once they’re here with easily modifiable pricing cards. </p>
                </div>
                <div class="col-12">
                  <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                    <div class="p-x1 text-center price-card-1 bg-transparent border mb-3 mb-md-0 rounded-2 pricing-card">
                      <p class="fs-10 text-uppercase mb-3 fw-bold text-primary ls-2"> Starter</p>
                      <h2 class="mb-3"><span class="fs-6 fs-md-7 fw-bold">$</span><span class="fs-2 fs-md-1 fw-bold">19</span><span class="fs-9 lh-xl font-sans-serif">/ mo</span></h2>
                      <ul class="list-unstyled fs-8 lh-xl fw-light text-1100 ls-1">
                        <li class="py-x1 px-1 border-top"> Upto 100 Team Members </li>
                        <li class="py-x1 px-1 border-top"> 100 GB Cloud Storage </li>
                        <li class="py-x1 px-1 border-top"> Unlimited Meetings </li>
                        <li class="py-x1 px-1 border-top"> Premium Support </li>
                        <li class="mt-1 d-grid"> <button class="btn btn-secondary btn-lg lh-xl">Get Started Now</button></li>
                      </ul>
                    </div>
                    <div class="p-x1 text-center bg-white border shadow-sm rounded-2 pricing-card">
                      <p class="fs-10 text-uppercase mb-3 fw-bold text-primary ls-2"> Unlimited</p>
                      <h2 class="mb-3"><span class="fs-6 fs-md-7 fw-bold">$</span><span class="fs-2 fs-md-1 fw-bold">99</span><span class="fs-9 lh-xl font-sans-serif">/ mo</span></h2>
                      <ul class="list-unstyled fs-8 lh-xl fw-light text-1100 ls-1">
                        <li class="py-x1 px-1 border-top"> Unlimited Team Members </li>
                        <li class="py-x1 px-1 border-top"> Unlimited Cloud Storage </li>
                        <li class="py-x1 px-1 border-top"> Unlimited Meetings </li>
                        <li class="py-x1 px-1 border-top"> Premium Support </li>
                        <li class="mt-1 d-grid"> <button class="btn btn-primary btn-lg lh-xl">Get Started Now</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="bg-1100">
            <div class="container">
              <div class="row py-8 py-md-10 py-lg-11">
                <div class="col-lg-6">
                  <div class="row justify-content-center justify-content-lg-start">
                    <div class="col-md-8 col-lg-12 col-xl-11">
                      <h2 class="text-white fs-4 fs-lg-3 lh-sm mb-2 text-center text-lg-start fw-bold">We are always here for your backup.</h2>
                      <p class="fs-8 text-white text-opacity-65 mb-4 mb-md-6 mb-lg-7 lh-lg mb-6 mb-lg-7 text-center text-lg-start"> We share common trends and strategies for creating & improving your text-nowrap rental income.</p>
                    </div>
                    <div class="col-lg-10">
                      <div class="d-flex gap-2 gap-lg-x1 mb-4 mb-lg-5">
                        <div>
                          <div class="check-icon bg-success mb-1 rounded-circle d-flex align-items-center justify-content-center"> <span class="uil uil-check text-white"></span></div>
                        </div>
                        <div>
                          <h5 class="fs-8 fw-bold lh-lg mb-1 text-white">Noise Free Locations</h5>
                          <p class="lh-xl text-white text-opacity-70 mb-0">We ensure noise-free locations for your peace of mind and sound sleep.</p>
                        </div>
                      </div>
                      <div class="d-flex gap-2 gap-lg-x1 mb-4 mb-lg-5">
                        <div>
                          <div class="check-icon bg-success mb-1 rounded-circle d-flex align-items-center justify-content-center"> <span class="uil uil-check text-white"></span></div>
                        </div>
                        <div>
                          <h5 class="fs-8 fw-bold lh-lg mb-1 text-white">24/7 Hour Support</h5>
                          <p class="lh-xl text-white text-opacity-70 mb-0">Get support from our efficient customer support team, 24/7, all year round.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="accordion mt-lg-4 ps-3 pe-x1 bg-white" id="accordion">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="heading1"><button class="accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expand="true" aria-controls="collapse1" data-accordion-button="data-accordion-button">How to setup BrainwaveIO?</button></h2>
                      <div class="accordion-collapse collapse show" id="collapse1" data-bs-parent="#accordion">
                        <div class="accordion-body lh-xl pt-0 pb-x1">Enjoy the easy setup process with little to no coding knowledge with us!</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="heading2"><button class="accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expand="false" aria-controls="collapse2" data-accordion-button="data-accordion-button">Can I use BrainwaveIO for my clients?</button></h2>
                      <div class="accordion-collapse collapse" id="collapse2" data-bs-parent="#accordion">
                        <div class="accordion-body lh-xl pt-0 pb-x1">Yes, you can. Enjoy special rates for your first client!</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="heading3"><button class="accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expand="false" aria-controls="collapse3" data-accordion-button="data-accordion-button">How often do you release update?</button></h2>
                      <div class="accordion-collapse collapse" id="collapse3" data-bs-parent="#accordion">
                        <div class="accordion-body lh-xl pt-0 pb-x1">We will keep updating the theme; stay with us to get updated!</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="heading4"><button class="accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expand="false" aria-controls="collapse4" data-accordion-button="data-accordion-button">How can I access to old version?</button></h2>
                      <div class="accordion-collapse collapse" id="collapse4" data-bs-parent="#accordion">
                        <div class="accordion-body lh-xl pt-0 pb-x1">Go to your cloud storage and provide the password. You’ll find it there..</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="heading5"><button class="accordion-button fs-8 lh-lg fw-bold pt-x1 pb-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expand="false" aria-controls="collapse5" data-accordion-button="data-accordion-button">How can I get your support?</button></h2>
                      <div class="accordion-collapse collapse" id="collapse5" data-bs-parent="#accordion">
                        <div class="accordion-body lh-xl pt-0 pb-x1">To reach our support team, simply send an email to support@brainwaveio.com. Our team will promptly address your inquiry and provide assistance as needed.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="bg-300 position-relative z-0" id="contact">
            <div class="container py-8 py-lg-9">
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-8">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                      <h2 class="fs-4 fs-lg-3 fw-bold text-center mb-2 lh-sm">Get latest updates</h2>
                      <p class="fs-8 mb-5 mb-lg-6 text-center lh-lg fw-normal"> Subscribe to our monthly newsletter to stay connected with everything you need!</p>
                    </div>
                    <div class="col-10 col-lg-7">
                      <form method="POST" onsubmit="return false;">
                        <div class="mb-2 w-100"><input class="form-control email-input" id="email" type="email" placeholder="Enter your email" required="required" /></div>
                        <div class="d-grid"><button class="btn btn-lg btn-primary lh-xl mb-x1" type="submit"> Subscribe </button></div>
                      </form>
                    </div>
                    <div class="col-10 col-lg-7">
                      <p class="text-center lh-lg mb-0">We’ll never share your details with third parties. View our Privacy Policy for more info.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="position-absolute bottom-0 end-0 z-n1 d-none d-lg-block"><img src="src/assets/img/illustrations/Green_dots.svg" alt="" /></div>
            <div class="position-relative bottom-0 start-0 z-1"><img class="img-fluid w-100" src="src/assets/img/illustrations/Wave_3.svg" alt="" /></div>
          </section>
     
          <button className="btn scroll-to-top text-white rounded-circle d-flex justify-content-center align-items-center bg-primary" data-scroll-top="data-scroll-top">
            <span className="uil uil-angle-up"></span>
          </button>
    </>

  )

}

export default Hero
