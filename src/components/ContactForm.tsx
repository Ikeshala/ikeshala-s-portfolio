import React, { useState } from 'react'
import { useContent } from '../contexts/ContentContext'

const ContactForm = () => {
  const { content } = useContent()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="glass-morphism rounded-2xl p-8 mb-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Get in Touch Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Get in touch</h3>
          <p className="text-white/70 mb-6">
            Let's start a conversation!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full gradient-button flex items-center justify-center">
                <i className="fas fa-envelope text-white"></i>
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <a href={`mailto:${content.email}`} className="text-white/70 hover:text-white transition-colors">
                  ikeshala@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full gradient-button flex items-center justify-center">
                <i className="fab fa-linkedin text-white"></i>
              </div>
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ikeshala-peiris" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  linkedin.com/in/ikeshala
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full gradient-button flex items-center justify-center">
                <i className="fab fa-dribbble text-white"></i>
              </div>
              <div>
                <p className="text-white font-medium">Dribbble</p>
                <a href="https://dribbble.com/ikeshala" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  dribbble.com/ikeshala
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Message Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Quick Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-button px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <i className="fas fa-paper-plane"></i>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
      
      {/* Send Email Directly Button */}
      <div className="text-center mt-8">
        <a
          href={`mailto:${content.email}`}
          className="inline-block gradient-button px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
        >
          <i className="fas fa-envelope mr-2"></i>
          Send Email Directly
        </a>
      </div>
    </div>
  )
}

export default ContactForm 