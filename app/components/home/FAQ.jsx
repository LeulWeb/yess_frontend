import React from 'react';

const FAQ = () => {
  return (
    <div className="faq h-full ">
      <div className=" px-2 md:mx-10 lg:mx-24 py-10 text-[30px] text-black">
        <h1 className="text-center font-bold tes  pb-10 pt-4 text-white">
          FAQ
        </h1>

        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 text-black  rtl:text-right   rounded-t-xl gap-3 py-5"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span className="text-black spa">1. What is Yess Ethiopia?</span>
              <svg
                data-accordion-icon
                className="w-5 h-5 rotate-180 text-black shrink-0 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 ">
              <p className="mb-2 font-serif spa">
              YessEthiopia is a non-profit organization dedicated to youth and education support services in Ethiopia. Established to address challenges such as unemployment among university graduates and issues related to the quality of education, YessEthiopia focuses on empowering youth through various initiatives.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 text-black  rtl:text-right   rounded-t-xl gap-3 py-5"
              data-accordion-target="#accordion-collapse-body-4"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-4"
            >
              <span className="text-black spa">
                2. Is Yess Ethiopia charity organization?
              </span>
              <svg
                data-accordion-icon
                className="w-5 h-5 text-black rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="p-5 ">
              <p className="mb-2 font-serif spa">
              Yes, Yess Ethiopia is described as a non-profit organization in the provided text. Non-profit organizations are often colloquially referred to as charities. The primary focus of YessEthiopia is on providing support and services related to youth and education in Ethiopia, addressing issues such as unemployment among university graduates, promoting education quality, and engaging in various charitable activities, including supporting schools, students, and teachers.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-5">
            <button
              type="button"
              className="flex items-center justify-start w-full text-black p-5 font-medium rtl:text-left gap-3 py-5"
              data-accordion-target="#accordion-collapse-body-5"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-5"
            >
              <span className="text-black items-start spa">
                3. What initiatives does Yess Ethiopia undertake to solve the
                problem of unemployability?
              </span>
              <svg
                data-accordion-icon
                className="w-5 h-5 rotate-180 shrink-0 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-5"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-5"
          >
            <div className="p-5">
              <p className="mb-2 font-serif spa">
              YessEthiopia undertakes several initiatives to address the issue of unemployability among the youth. Some of the key initiatives mentioned in the provided text include: <br/>
              - Training and Career Support <br/>
              - Business Startups <br/>
              - Youth Ideas and Inspirations <br/>
              - Collaboration with Organizations <br/>
              - Inspiration through Experience Sharing <br/>
              - Mentorship Programs <br/>
              - Collaborative Tailor-Made Training Proposals
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full text-black p-5 font-medium rtl:text-right gap-3 py-5"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span className="text-black spa">
                4. Is Yess Ethiopia only focused on education?
              </span>
              <svg
                data-accordion-icon
                className="w-5 h-5 rotate-180 shrink-0 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-5">
              <p className="mb-2 font-serif spa">
              While YessEthiopia has a strong focus on education, particularly in providing support services to address issues like unemployment among university graduates and enhancing the quality of education, the organization's scope extends beyond education alone. YessEthiopia is involved in various initiatives that encompass a broader spectrum of youth development and community support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
