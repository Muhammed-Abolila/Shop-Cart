import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <section className="privacy pageStyle">
      <Container fluid>
        <article>
          <h6>Welcome to shopcart</h6>
          <p>
            This Privacy Policy sets out the basis on which any personal data,
            including but not limited to payment details and other information
            we collect from you or other sources or that you provide to us
            ("Information") will be handled by us in connection with your access
            and use of www.shopcart.netlify.com, and/or the noon mobile
            application (collectively, the "Platform"), services and
            applications (collectively, the "Services"). We understand the
            importance you place on the Information, and we are committed to
            protecting and respecting your privacy. Please read the following
            carefully to understand our practices regarding your Information. By
            using our Services, you agree to the handling of your Information in
            accordance with this Privacy Policy. References in this Privacy
            Policy to "we", "our" or "us" (or similar) are references to Noon E
            Commerce Owned By Noon AD Holdings One Person Company LLC.
            References to "user" or "you" (or similar) are references to you as
            an individual or legal entity as the case may be.
          </p>
        </article>
        <article>
          <h6>What information we may collect from you?</h6>
          <p>
            We may collect and process the following Information about you:{" "}
          </p>
          <ul>
            <li>
              Information that you provide by filling in forms on our Platform,
              including information provided at the time of registering to use
              our Platform and other co- registrations (e.g. social media
              logins), subscribing to our Services, posting material or
              requesting further services;
            </li>
            <li>
              the Information you provide when you enter a competition or
              promotion via our Platform, provide reviews, testimonials or
              feedback on our Platform;
            </li>
            <li>
              Information you provide us, or that we may collect from you, when
              you report a problem with our Platform;
            </li>
            <li>a record of correspondence if you contact us;</li>
            <li>
              general, aggregated, demographic and non-personal Information;
            </li>
            <li>
              details of transactions you carry out through our Platform and of
              the fulfilment of your orders;
            </li>
            <li>
              any other Information we consider necessary to enhance your
              experience on the Platform.
            </li>
          </ul>
        </article>
        <article>
          <h6>How we will use your information?</h6>
          <p>We may use Information held about you in the following ways:</p>
          <ul>
            <li>
              to provide you with information, products or services that you
              request from us or which we feel may interest you, where you have
              consented to be contacted for such purposes;
            </li>
            <li>
              to provide you with location-based services, such as advertising,
              search results and other personalised content;
            </li>
            <li>
              to carry out our obligations arising from any contracts entered
              into between you and another entity using our Platform or between
              you and us;
            </li>
            <li>
              to improve our Services and to deliver a better and more
              personalised service to you;
            </li>
            <li>
              to ensure that content from our Platform is presented in the most
              effective manner for you and the device you use to access our
              Platform;
            </li>
            <li>to notify you about changes to our Services;</li>
            <li>
              for any other reason which we deem necessary to enhance your
              experience of the Platform;
            </li>
          </ul>
        </article>
      </Container>
    </section>
  );
};

export default Privacy;
