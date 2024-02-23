import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';

function Blog() {
  return (
    <div className="blog">
      <Container>
        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <p>From Blog</p>
          <h2>Latest Yoga Articles</h2>
        </div>
        <Row className="blog-carousel">
          <Col lg={4} md={6}>
            <Row>
              <div className="blog-item wow fadeInUp" data-wow-delay="0.1s" data-aos="fade-right">
                <div className="blog-img">
                  <img src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?cs=srgb&dl=pexels-elina-fairytale-3823039.jpg&fm=jpg" alt="Blog" />
                </div>
                <div className="blog-text">
                  <h2>Types of yoga</h2>
                  <div className="blog-meta">
                    <p><i className="far fa-list-alt"></i>Body Fitness</p>
                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                    <p><i className="far fa-comments"></i>5</p>
                  </div>
                  <p>
                  There are many types of yoga. Hatha (a combination of many styles) is one of the most popular styles. It is a more physical type of yoga rather than a still, meditative form. Hatha yoga focuses on pranayamas (breath-controlled exercises). These are followed by a series of asanas (yoga postures), which end with savasana (a resting period).                  </p>
                  <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                </div>
              </div>
            </Row>
          </Col>
          <Col lg={4} md={6}>
          <Row>
              <div className="blog-item wow fadeInUp" data-wow-delay="0.1s" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className="blog-img">
                  <img src="https://cdn.cdnparenting.com/articles/2019/01/25141047/515885956-H.webp" alt="Blog" />
                </div>
                <div className="blog-text">
                  <h2>A better body image</h2>
                  <div className="blog-meta">
                    <p><i className="far fa-list-alt"></i>Body Fitness</p>
                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                    <p><i className="far fa-comments"></i>5</p>
                  </div>
                  <p>
                  Yoga develops inner awareness. It focuses your attention on your body's abilities at the present moment. It helps develop breath and strength of mind and body. It's not about physical appearance.

Yoga studios typically don't have mirrors. This is so people can focus their awareness inward rather than how a pose — or the people around them — looks.                  </p>
                  <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                </div>
              </div>
            </Row>
          </Col>
          <Col lg={4} md={6}>
          <Row>
              <div className="blog-item wow fadeInUp" data-wow-delay="0.1s" data-aos="fade-left">
                <div className="blog-img">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/young-sporty-black-man-in-plank-pose-royalty-free-image-922344970-1534365835.jpg" alt="Blog" />
                </div>
                <div className="blog-text">
                  <h2>Becoming a mindful eater</h2>
                  <div className="blog-meta">
                    <p><i className="far fa-list-alt"></i>Body Fitness</p>
                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                    <p><i className="far fa-comments"></i>5</p>
                  </div>
                  <p>
                  Mindfulness refers to focusing your attention on what you are experiencing in the present moment without judging yourself.

Practicing yoga has been shown to increase mindfulness not just in class, but in other areas of a person's life.

Researchers describe mindful eating as a nonjudgmental awareness.... of the physical and emotional sensations associated with eating.                  </p>
                  <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
