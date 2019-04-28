import React from 'react';

class About extends React.Component {

    render(){
        return(
            <div>
                <div class='container mx-auto'>
                    <div class='row'>
                        <div class="dropdown" id='aboutDropdown'>
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                About CK
                </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" id='history'>Our History</a>
                                <a class="dropdown-item" id='culture'>The CK Culture</a>
                                <a class="dropdown-item" id='safety'>Saftey</a>
                            </div>
                        </div>
                    </div>
                    <div class='row mx-auto'>
                        <img id='aboutBackground' src='../CK_Images/Example.jpg' alt='example' />
                        <div id='aboutPageText'>
                            <div id='ourHistory'>
                                <h3>About CK</h3>
                                <p>CK Construction is a General Contractor and Steel Erection Firm headquartered in Northern Utah,
                                    serving the Wasatch
                                    Front and Intermountain West since 2002. We are builders without boundaries having completed
                                    projects in almost every
                                    state west of the Mississippi and always looking for opportunities to expand beyond. We take
                                    pride in having a
                                    diverse resume of new construction, renovations, and remodels of education facilities,
                                    churches,
                                    municipal facilities, fire stations, retail stores, office buildings, banks, airports,
                                    manufacturing facilities, and industrial projects.
                                    We are proud of the reputation we have built on service and sacrifice for our clients - always
                                    remembering who it is
                                    that keeps us in business. The foundation of our firm's service reputation and our dedication
                                    to our clients
                                    begins and ends with our core values: Consistency, Gratitude, Optimism, Respect and Teamwork.
                    </p>
                            </div>
                            <div id='CKCulture'>
                                {/* <!-- add an image of good team work and smiles lol --> */}
                </div>
                            <div id='safety'>
                                <h3>Saftey</h3>
                                <p>
                                    Safety first. Guaranteed.
                                    We don’t believe in cutting corners—it endangers lives.
                                    A successful project is a safe project, and CK Construction adheres to
                                    the strictest of safety guidelines and protocols on all of our projects,
                                    regardless of size. For us, making a profit is less important than keeping
                                    our employees, subcontractors, and clients safe and finishing a successful project.
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;