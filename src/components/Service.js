import React from "react";

export default function Service(props) {
    return (
    <>
    <div className={`accordion container my- pb-5`} style={{backgroundColor: "#34495E", color: "white"}} id="accordionPanelsStayOpenExample"> <hr />
      <h3 className='my-4'>Service</h3>
      <div className={``}>
        <p>Text-utilization services play a vital role in today's digital age, facilitating efficient communication, information dissemination, and data analysis across various industries and platforms. These services encompass a wide range of tools and technologies designed to maximize the value of textual content, enabling businesses and individuals to harness the power of language for diverse purposes.</p>
      </div>
        {/* 1st */}
        <div className={`accordion-item`}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Text Analysis and Sentiment Mining</button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show`}>
            <div className="accordion-body">
              These services employ natural language processing (NLP) techniques to analyze text for sentiment, tone, and context. By understanding the emotions and opinions expressed in textual content, businesses can gauge public perception, evaluate customer feedback, and make informed decisions.
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">Text Summarization</button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Text-utilization services offer summarization algorithms that condense lengthy articles, reports, or documents into concise and coherent summaries. This not only saves time but also enables quick comprehension of complex information.
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">Grammar and Style Checking</button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
            <div className="accordion-body">
              These services help writers and content creators ensure that their text is grammatically correct and adheres to specific style guidelines. Whether it's for academic writing, professional communication, or creative content, grammar and style checking tools enhance the quality and professionalism of written material.
            </div>
          </div>
        </div>
      </div>
      <div className='text-light text-center pt-4 pb-2 mt-5 container' style={{backgroundColor: "#34495E"}}>
        <p>&copy; 2023 Shots Inc. All rights reserved.</p>
      </div>
      <div className='mb-1'></div>
      </>
    );
}