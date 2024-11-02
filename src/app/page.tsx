'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Calculator, Check, ChevronRight, Mail, MapPin, Moon, Phone, Sun } from 'lucide-react'

export default function Component() {

  const [ambulances, setAmbulances] = useState(1)
  const [extraDrivers, setExtraDrivers] = useState(0)

  const basePrice = 249
  const extraDriverPrice = 99

  const totalPrice = basePrice * ambulances + extraDriverPrice * extraDrivers

  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const partnerLogos = [
    { src: "/pulse 1.png", alt: "Pulse Medical Systems" },
    { src: "/acme 1.png", alt: "Heartbeat Health Solutions" },
    { src: "/celestia 1.png", alt: "Lifeline Ambulance Co." },
    { src: "/echo 1.png", alt: "Rapid Response Medical" },
    { src: "/quantum 1.png", alt: "CareFleet Ambulance Services" }
  ]

  return (
    <div className={`${isDarkTheme ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkTheme ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-xl border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Image src="/union.png" alt="Logo" width={40} height={40} className={isDarkTheme ? "brightness-0 invert" : ""} />
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className={`text-orange-500 font-medium tracking-wide hover:text-orange-400 transition-colors relative group`}>
                Home
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#about" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} font-medium tracking-wide transition-colors relative group`}>
                About Us
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#pricing" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} font-medium tracking-wide transition-colors relative group`}>
                Pricing
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#contact" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} font-medium tracking-wide transition-colors relative group`}>
                Contact Us
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-900'} hover:bg-opacity-80 transition-colors`}
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'} text-sm font-medium px-6 py-3 rounded-lg border hover:bg-opacity-80 transition-colors`}>
              Try 14 Day Free Trial
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section id="home" className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex items-center text-sm font-medium mb-6 ${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-200'} px-4 py-2 rounded-full`}>
              <span className={`w-3 h-3 ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-300'} rounded-sm inline-flex items-center justify-center mr-2`}>
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              </span>
              Future of Care
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight mb-8 ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-400' : 'bg-gradient-to-r from-gray-900 to-gray-600'} bg-clip-text text-transparent`}>
              Together, we can make a difference, one life at a time.
            </h1>
            <p className={`text-xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} mb-12 leading-relaxed max-w-3xl mx-auto`}>
              &quot;Join Our Vision for Enhanced Emergency Care: Embracing Futuristic Solutions for Ambulance Fleet Management, Patient Care, and Service Optimization.&quot;
            </p>
            <button className="bg-orange-500 text-white font-medium px-8 py-4 rounded-full inline-flex items-center hover:bg-orange-600 transition-colors">
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>

        <section id="about" className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-200'} py-24 backdrop-blur-xl`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-2xl font-semibold mb-16 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Partners that trusted us</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partnerLogos.map((logo,index) => (
                <Image 
                  key={index} 
                  src={logo.src}
                  alt={logo.alt} 
                  width={120} 
                  height={40} 
                  className={`opacity-50 hover:opacity-100 transition-opacity duration-300 ${isDarkTheme ? 'brightness-0 invert' : ''}`} 
                />
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-5xl font-bold mb-8 ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-400' : 'bg-gradient-to-r from-gray-900 to-gray-600'} bg-clip-text text-transparent`}>
              About us
            </h2>
            <p className={`text-xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} mb-12 leading-relaxed`}>
              At Lifeline Ambulance Services, we&apos;re committed to saving lives sustainably. From fuel-efficient vehicles to waste reduction, we&apos;re pioneering eco-conscious practices in emergency medical transportation. Join us in driving toward a greener future, one ambulance ride at a time.
            </p>
            <button className={`group ${isDarkTheme ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-200'} border font-medium px-8 py-4 rounded-full inline-flex items-center hover:text-black transition-all`}>
              Read more
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        <section id="pricing" className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-200'} py-24 backdrop-blur-xl`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-5xl font-bold text-center mb-8 ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-400' : 'bg-gradient-to-r from-gray-900 to-gray-600'} bg-clip-text text-transparent`}>
              Ambulance Registration Pricing
            </h2>
            <p className={`text-xl text-center ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} mb-16 max-w-3xl mx-auto`}>
              Our pricing is designed to cater to ambulance services of various sizes. Choose our basic plan or calculate a custom price based on your needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <div className={`${isDarkTheme ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-900 border-gray-200'} p-8 rounded-2xl border backdrop-blur-xl hover:scale-105 transition-transform duration-300`}>
                <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold">₹249</span>
                  <span className={`ml-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>/month</span>
                </div>
                <p className={`mb-8 text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                  For registering a single ambulance with up to 2 drivers
                </p>
                <button 
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                    isDarkTheme
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  Get started
                </button>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 mr-3 text-green-400" />
                    <span>Register 1 Ambulance</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 mr-3 text-green-400" />
                    <span>Up to 2 drivers per ambulance</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 mr-3 text-green-400" />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>

              {/* Custom Price Calculator */}
              <div className={`${isDarkTheme ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-900 border-gray-200'} p-8 rounded-2xl border backdrop-blur-xl`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Calculator className="mr-2" />
                  Custom Price Calculator
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="ambulances" className="block text-sm font-medium mb-1">Number of Ambulances</label>
                    <input 
                      id="ambulances"
                      type="number" 
                      min="1" 
                      value={ambulances} 
                      onChange={(e) => setAmbulances(parseInt(e.target.value) || 1)}
                      className={`w-full px-3 py-2 rounded-md ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="extraDrivers" className="block text-sm font-medium mb-1">Extra Drivers (beyond 2 per ambulance)</label>
                    <input 
                      id="extraDrivers"
                      type="number" 
                      min="0" 
                      value={extraDrivers} 
                      onChange={(e) => setExtraDrivers(parseInt(e.target.value) || 0)}
                      className={`w-full px-3 py-2 rounded-md ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'}`}
                    />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-4">
                  Total: ₹{totalPrice}/month
                </div>
                <button 
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                    isDarkTheme
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  Get Custom Plan
                </button>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 mr-3 text-green-400" />
                    <span>₹249 per ambulance</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 mr-3 text-green-400" />
                    <span>₹99 per extra driver (beyond 2 per ambulance)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-5 w-5 mr-3 text-green-400" />
                    <span>Customized support based on fleet size</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`py-24 ${isDarkTheme ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className={`w-full max-w-[1408px] mx-auto p-16 ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-100'} rounded-3xl flex flex-col md:flex-row justify-between items-center`}>
              <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-[88px] mb-8 md:mb-0">
                <div className="flex flex-col justify-center items-start gap-10">
                  <div className="flex flex-col justify-center items-start gap-6">
                    <h2 className={`text-5xl font-normal leading-[60px] ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Emergency Ambulance</h2>
                    <p className={`text-lg leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.
                    </p>
                  </div>
                  <button className={`px-6 py-4 ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-400'} rounded-full border flex items-center gap-2.5`}>
                    <span className={`text-lg font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Learn more</span>
                  </button>
                </div>
                <div className="flex items-start gap-4">
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <Image
                  src="/amb.png"
                  alt="Emergency Ambulance"
                  width={488}
                  height={488}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        
        </section>

        <section id="contact" className="container mx-auto px-4 py-24">
          <h2 className={`text-5xl font-bold mb-8 ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-400' : 'bg-gradient-to-r from-gray-900 to-gray-600'} bg-clip-text text-transparent`}>
            Get in Touch
          </h2>
          <p className={`text-xl ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} mb-16`}>
            We are here to help you make a first move to greener choice.
          </p>
          <div className={`${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl overflow-hidden border`}>
            <div className="md:flex">
              <div className="bg-orange-500 text-white p-12 md:w-1/3">
                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                <p className="mb-12 text-orange-100">Say something to start a live chat!</p>
                <div className="space-y-6">
                  <p className="flex items-center text-lg">
                    <Phone className="h-6 w-6 mr-4" />
                    +1012 3456 789
                  </p>
                  <p className="flex items-center text-lg">
                    <Mail className="h-6 w-6 mr-4" />
                    demo@gmail.com
                  </p>
                  <p className="flex items-start text-lg">
                    <MapPin className="h-6 w-6 mr-4 mt-1" />
                    132 Dartmouth Street Boston, Massachusetts 02156 United States
                  </p>
                </div>
              </div>
              <div className="p-12 md:w-2/3">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className={`w-full px-4 py-3 ${isDarkTheme ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`} 
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className={`w-full px-4 py-3 ${isDarkTheme ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent  transition-all`} 
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Email
                      </label>
                      <input 
                        type="email" 
                        className={`w-full px-4 py-3 ${isDarkTheme ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`} 
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className={`w-full px-4 py-3 ${isDarkTheme ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`} 
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Message
                    </label>
                    <textarea 
                      rows={4} 
                      className={`w-full px-4 py-3 ${isDarkTheme ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${isDarkTheme ? 'bg-gray-800/50 border-gray-800' : 'bg-gray-200 border-gray-300'} border-t py-24`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Image 
                src="/Union.png" 
                alt="Logo" 
                width={60} 
                height={60} 
                className={isDarkTheme ? "brightness-0 invert" : ""} 
              />
              <h3 className="text-xl font-bold mt-6 mb-4">EZ Ambulance</h3>
              <p className={isDarkTheme ? "text-gray-400" : "text-gray-600"}>Your Source for Green Energy Updates</p>
            </div>
            {['Platform', 'Company', 'Resources'].map((category) => (
              <div key={category}>
                <h3 className="font-bold mb-6 text-lg">{category}</h3>
                <ul className="space-y-4">
                  {['Solutions', 'How it works', 'Pricing', 'About'].map((item) => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={`mt-24 pt-8 ${isDarkTheme ? 'border-gray-800' : 'border-gray-300'} border-t flex flex-col md:flex-row justify-between items-center`}>
            <p className={`${isDarkTheme ? 'text-gray-500' : 'text-gray-600'} text-sm`}>
              © 2024 EZ Ambulance. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6">
                    {social === 'Facebook' && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    )}
                    {social === 'Twitter' && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {social === 'Instagram' && (
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

