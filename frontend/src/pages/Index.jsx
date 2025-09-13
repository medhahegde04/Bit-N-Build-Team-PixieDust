import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Institutional <span className="bg-gradient-to-r bg-brand-medium bg-clip-text text-transparent">Fund</span> Tracker
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Bringing clarity and trust to institutional fund management. Track every Rupee or Dollar from budget allocation to final expenditure with complete transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="bg-gradient-to-r bg-brand-sky text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:bg-brand-medium transition-all duration-200 transform hover:scale-105">
              View Dashboard
            </Link>
            <Link to="/budget-flow" className="bg-gradient-to-r bg-brand-sky text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:bg-brand-medium  transition-all duration-200 transform hover:scale-105">
              Explore Fund Flow
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Complete Transparency</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our platform ensures every visitor can understand and trust how funds are managed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Clear Fund Flow</h3>
              <p className="text-slate-600">Visualize how budgets flow from departments to projects to vendors with interactive charts.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Verified Data</h3>
              <p className="text-slate-600">All financial data is authenticated and traceable, ensuring complete reliability and trust.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">For Everyone</h3>
              <p className="text-slate-600">Designed for citizens, students, parents, and all stakeholders to easily understand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r bg-brand-sky">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h2>
          <p className="text-xl text-blue-100 mb-8">See how your institution's funds are allocated and spent with complete transparency.</p>
          <Link to="/dashboard" className="bg-white text-brand-medium px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:text-brand-white hover:bg-brand-medium transition-all duration-200 transform hover:scale-105">
            Start Exploring
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Index;
