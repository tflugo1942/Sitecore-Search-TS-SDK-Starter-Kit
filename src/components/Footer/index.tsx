const Footer = (): JSX.Element => {
  return (
    <footer className='bg-black text-white pt-10 pb-8 px-5 w-full'>
      <div role="heading" className="w-3/4 mx-auto border-b-2 border-white uppercase text-xl mb-10 pb-3 pt-5"><span>Connect with us</span></div>
      <div id="FooterNavigation" className="w-3/4 mx-auto">
        <div className="grid grid-cols-6 mb-14">
          <div className="col-md-2">
            <div role="heading" className="mb-2 font-bold">Seattle office</div>
            <p>
              1301 Second Avenue<br />
              18th Floor<br />
              Seattle, WA 98101
            </p>
          </div>
          <div className="col-md-2">
            <div role="heading" className="mb-2 font-bold">Contact us</div>
            <ul>
              <li>
                  <a className="text-blue-500" href="tel:18004267969">1-800-426-7969</a>
              </li>
              <li>
                  <a className="text-blue-500" href="/us/contact-us">Email us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <div role="heading" className="mb-2 font-bold">Solutions</div>
              <ul>
                <li>
                    <a className="text-blue-500" href="/us/solutions/institutions/outsourced-cio-ocio">Outsourced CIO (OCIO)</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/solutions/institutions/funds-and-strategies">Funds and strategies</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/solutions/defined-benefit">DB plans</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/solutions/defined-contribution-plans">DC plans</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/solutions/non-profits">Non-profits</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/solutions/healthcare-systems">Healthcare systems</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/solutions/institutions/platform-solutions">Platform solutions</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div role="heading" className="mb-2 font-bold">Services</div>
                <ul>
                  <li>
                      <a className="text-blue-500" href="">Customized Portfolio Solutions</a>
                  </li>
                  <li>
                      <a className="text-blue-500" href="">Transition management</a>
                  </li>
                  <li>
                      <a className="text-blue-500" href="">Overlay services</a>
                  </li>
                  <li>
                      <a className="text-blue-500" href="">Currency management</a>
                  </li>
                  <li>
                      <a className="text-blue-500" href="">Trading and execution</a>
                  </li>
                  <li>
                      <a className="text-blue-500" href="">Completion portfolios</a>
                  </li>
                </ul>
            </div>
            <div className="col-md-2">
            <div role="heading" className="mb-2 font-bold">Research</div>
              <ul>
                <li>
                    <a className="text-blue-500" href="/us/solutions/institutions/outsourced-cio-ocio/ocio-fundamentals">OCIO fundamentals</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/solutions/institutions/investment-guidebooks">Investment guides</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/insights/managing-exposures-knowledge-exchange">Managing exposures</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/insights/articles">Research library</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/global-market-outlook">Global Market Outlook</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/insights/active-management-insights">Active Management Insights</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/insights/manager-esg-survey">Manager ESG Survey</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/private-markets">Private markets investing</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/blog">Institutional blog</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div role="heading" className="mb-2 font-bold">About us</div>
              <ul>
                <li>
                    <a className="text-blue-500" href="/us/about-us">Who we are</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/about-us/where-we-began">Our history</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/about-us/our-people">Our leaders</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/corporate-responsibility">Corporate responsibility</a>
                </li>
                <li>
                    <a className="text-blue-500" href="/us/about-us/newsroom">Newsroom</a>
                </li>
                <li>
                    <a className="text-blue-500" href="">Careers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
