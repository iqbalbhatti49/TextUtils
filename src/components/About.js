import React from 'react'

export default function About(props) {
  return (
    <>
      <div className={`accordion container my- pb-5`} style={{backgroundColor: "#34495E", color: "white"}} id="accordionPanelsStayOpenExample"> <hr />
      <h3 className='my-4'>About TextUtils</h3>
      <div className={``}>
        <p>TextUtils could potentially be a website or online tool designed to provide various text manipulation and analysis functionalities. Such a website might offer a range of features and tools that assist users in working with textual data. </p>
      </div>
      {/* 1st */}
        <div className={`accordion-item`}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Text Analysis</button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show`}>
            <div className="accordion-body">
              <strong>The website might provide tools</strong> to analyze text, including word frequency analysis, sentiment analysis, readability assessment, and more. Users could paste or upload text, and the website would generate insights and statistics about the text.
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">Text Formatting</button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <strong>Users could utilize tools</strong> for formatting text, such as converting between uppercase and lowercase, title case conversion, removing or adding line breaks, and applying different styles to text.
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">Character and Word Count</button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <strong>The website might offer a simple tool</strong> to count the number of characters, words, sentences, and paragraphs in a given text.
            </div>
          </div>
        </div>
      </div>
      <div className='mb-5'></div>
    </>
  )
}
