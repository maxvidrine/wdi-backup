import React, { Component } from "react";
import Article from "./Article"

let articles = [
  {
    title: 'An Inquiring Mind',
    subtitle: 'Early Life and Biochemistry',
    list: [
        'Graduated from University of California, Davis',
        'Bachelors of Science in Molecular and Cellular Biology, with an emphasis in Biochemistry',
        'Six years experience working for the Public Library of Science',
        'Soft skills',
        'Statistical analysis using excel',
        'User-side software testing'
      ]
  },
  {
    title: 'General Assembly',
    subtitle: 'Web Development Intensive',
    list: [
        'HTML, CSS and Vanilla Javascript',
        'Bootstrap, JQuery, React',
        'Python and Django'
      ],
  },
];

class About extends Component {
  render() {
    articles = articles.map((article, idx) => {return <Article title={article.title} subtitle={article.subtitle} list={article.list} key={idx} />});
    return (
      <section id="about" className="single-column">
          <div className="column-container">
              <div>
                  <h3>About</h3>
                  <div className="column-container">
                      {articles}
                  </div>
              </div>
              <aside>
                  <img src="images/tuolumne.jpg" alt="Max tidepooling" />
              </aside>
          </div>
          <a href="#portfolio"><i className="fa fa-chevron-down fa-2x"></i></a>
      </section>
    )
  }
}

export default About;
