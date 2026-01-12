import React from 'react'
import { Link } from 'react-router-dom'
import { journals } from '../data/journals'

export default function Journal(){
  return (
    <div className="space-y-12">
      {/* Journal Cards Section */}
      <section>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Journals</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journals.map((journal, index) => {
            const gradients = [
              'from-cyan-500 to-blue-500',
              'from-purple-500 to-pink-500',
              'from-teal-500 to-cyan-500',
              'from-cyan-500 to-blue-500',
              'from-purple-500 to-pink-500',
              'from-teal-500 to-cyan-500'
            ]
            return (
              <Link 
                key={journal.id} 
                to={`/journal/${journal.id}`}
                className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 flex flex-col h-full`}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                  {journal.title}
                </h2>
                <p className="text-white/90 flex-grow">
                  {journal.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

    </div>
  )
}
