import React from 'react'
import Navbar from '../../../Navbar'
import Footer2 from '../../../Footer2'

const Case1 = () => {
  return (
    <article className='text-white'>
      <Navbar />

      <section>




        <div className="min-h-screen bg-black text-white p-8 sm:p-12 md:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-5xl font-semibold mb-10 tracking-wide">
              Summary
            </h1>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Text */}
              <div className="lg:col-span-2 text-lg space-y-6 leading-relaxed">
                <p>
                  The Scottish Government's need to rapidly scale up its COVID testing capacity led to the establishment of the{' '}
                  <strong className="font-medium">Lighthouse Laboratory</strong> - now one of the largest COVID diagnostic testing facilities in the United Kingdom.
                </p>
                <p>
                  Stakeholders identified a research laboratory at Queen Elizabeth University Hospital in Glasgow, Scotland as a site that could be repurposed as a COVID testing facility. In order for the lab to achieve scale in a short space of time, the team opted for <strong className="font-medium">agile project management approaches</strong>. The team also adopted <strong className="font-medium">lean principles</strong> to implement process improvements and used the <strong className="font-medium">theory of constraints</strong> to manage bottlenecks.
                </p>
                <p>
                  The Lighthouse Laboratory processed <strong className="font-medium">41 tests on the first day</strong>. Currently, it is capable of processing <strong className="font-medium">85,000 COVID tests</strong> within a 24-hour turnaround time.
                </p>
              </div>

              {/* Metadata Section */}
              <div className="lg:col-span-1 pt-6 border-t lg:border-t-0 lg:pt-0 lg:pl-8 lg:border-l border-gray-700">
                <dl className="space-y-4 text-base">
                  {/* Date */}
                  <div>
                    <dt className="text-gray-400 font-normal mb-1">Date</dt>
                    <dd className="text-white font-medium">August 2021</dd>
                  </div>

                  {/* Content Type */}
                  <div>
                    <dt className="text-gray-400 font-normal mb-1">Content Type</dt>
                    <dd className="text-purple-400 hover:text-purple-300 underline cursor-pointer font-medium">Case Study</dd>
                  </div>

                  {/* Topics */}
                  <div>
                    <dt className="text-gray-400 font-normal mb-1">Topics</dt>
                    <dd className="text-purple-400 hover:text-purple-300 underline cursor-pointer font-medium">Agile</dd>
                  </div>

                  {/* Industries */}
                  <div className="pt-2">
                    <dt className="text-gray-400 font-normal mb-1">Industries</dt>
                    <dd className="text-purple-400 hover:text-purple-300 underline cursor-pointer font-medium">Healthcare</dd>
                  </div>
                </dl>

                {/* How to cite */}
                <div className="mt-8 pt-4 border-t border-gray-700">
                  <h3 className="text-lg font-medium mb-2">How to cite:</h3>
                  <p className="text-base font-light">
                    Lighthouse Labs - Innovating in a Crisis (2021).
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>

      </section>

      <Footer2 />

    </article>
  )
}

export default Case1
