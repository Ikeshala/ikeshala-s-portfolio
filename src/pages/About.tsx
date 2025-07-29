import { useContent } from '../contexts/ContentContext'

const About = () => {
  const { content } = useContent()
  
  const skills = [
    { name: 'UI Design', icon: 'fas fa-palette' },
    { name: 'UX Research', icon: 'fas fa-users' },
    { name: 'Mobile Design', icon: 'fas fa-mobile-alt' },
    { name: 'Prototyping', icon: 'fas fa-code' },
    { name: 'Design Systems', icon: 'fas fa-layer-group' },
    { name: 'Analytics', icon: 'fas fa-chart-line' }
  ]

  const timeline = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      period: '2016 – 2020',
      subtitle: "Bachelor's in Information Technology",
      description: 'Graduated from the University of Moratuwa, where I built a solid technical foundation and developed an early interest in user-centered design and digital interfaces.',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-500'
    },
    {
      icon: 'fas fa-search',
      title: 'Career Foundation & Transition',
      period: '2015 – 2022',
      subtitle: 'Administrative Roles in the Higher Education Sector',
      description: 'While pursuing my degree, I worked in academic institutions, gaining hands-on experience in organization, documentation, and digital coordination — building a strong foundation that supported my transition into creative technology and design.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Design Exploration & Practice',
      period: '2022 – 2023',
      subtitle: 'Self-Directed UI/UX Learning',
      description: 'Actively pursued UI/UX design through personal practice, online learning, and tools like Figma, Balsamiq, and HTML/CSS. Focused on developing wireframes, prototypes, and user flows to build real-world skills.',
      color: 'from-pink-500 to-orange-500',
      bgColor: 'bg-pink-500'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'UI/UX Designer',
      period: '2023 – Present',
      subtitle: 'Design Role at a Creative Agency',
      description: 'Currently working on impactful digital projects across diverse sectors — including responsive interfaces, scalable design systems, and accessibility-focused designs aligned with WCAG standards. I collaborate closely with developers, provide design specifications, and refine interfaces to ensure usability and consistency.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500'
    }
  ]

  return (
    <div className="bg-deep-space min-h-screen pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 background-effects"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="gemini-gradient-text">About Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              {content.bio}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Design Philosophy */}
              <div className="glass-morphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300 fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-lightbulb text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Design Philosophy</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  I believe great design is invisible. It should solve problems effortlessly while creating emotional connections. Every pixel serves a purpose, every interaction tells a story, and every design decision is backed by user research and data.
                </p>
              </div>

              {/* Experience */}
              <div className="glass-morphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300 fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-rocket text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Experience</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  2+ years of experience in UI/UX design, working with startups and established companies to transform complex ideas into intuitive digital experiences. Specialized in mobile-first design, design systems, and user research.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Skills & Expertise */}
              <div className="glass-morphism rounded-2xl p-8 fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-tools text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Skills & Expertise</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item glass-morphism rounded-lg p-4 hover:scale-105 transition-all duration-300 group cursor-pointer">
                      <i className={`${skill.icon} text-2xl gemini-gradient-text mb-2 group-hover:scale-110 transition-transform duration-300`}></i>
                      <div className="text-sm font-medium text-white group-hover:text-white/90">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* At a Glance - now full width */}
          <div className="glass-morphism rounded-2xl p-6 sm:p-8 fade-in my-10 sm:my-12" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <i className="fas fa-chart-bar text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white">At a Glance</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <div className="text-3xl font-bold gemini-gradient-text mb-2">40+</div>
                <div className="text-sm text-white/70">UI/UX Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <div className="text-3xl font-bold gemini-gradient-text mb-2">3+</div>
                <div className="text-sm text-white/70">Years in Digital Design</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <div className="text-3xl font-bold gemini-gradient-text mb-2">15+</div>
                <div className="text-sm text-white/70">Brands Collaborated With</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <div className="text-3xl font-bold gemini-gradient-text mb-2">98%</div>
                <div className="text-sm text-white/70">Positive Client Feedback</div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-10 sm:mb-12 fade-in" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="gemini-gradient-text">My Journey</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto px-4">
                A timeline of my professional growth and key milestones in my design career
              </p>
            </div>
            
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between fade-in" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-5/12 glass-morphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                          <div className="flex items-center mb-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mr-3`}>
                              <i className={`${item.icon} text-white text-sm`}></i>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                              <p className="text-sm text-white/60">{item.period}</p>
                            </div>
                          </div>
                          <h5 className="text-white font-medium mb-2">{item.subtitle}</h5>
                          <p className="text-white/70 text-sm">{item.description}</p>
                        </div>
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.bgColor} rounded-full border-4 border-deep-space`}></div>
                        <div className="w-5/12"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-5/12"></div>
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.bgColor} rounded-full border-4 border-deep-space`}></div>
                        <div className="w-5/12 glass-morphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                          <div className="flex items-center mb-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mr-3`}>
                              <i className={`${item.icon} text-white text-sm`}></i>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                              <p className="text-sm text-white/60">{item.period}</p>
                            </div>
                          </div>
                          <h5 className="text-white font-medium mb-2">{item.subtitle}</h5>
                          <p className="text-white/70 text-sm">{item.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="fade-in" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                  <div className="glass-morphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                        <i className={`${item.icon} text-white text-lg`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-white/60 mb-2">{item.period}</p>
                        <h5 className="text-white font-medium mb-3">{item.subtitle}</h5>
                        <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 