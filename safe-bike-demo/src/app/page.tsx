'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Shield, Brain, Cloud, MapPin, Activity, ChevronDown,
  Bike, Sun, CloudRain, CloudSnow, CloudLightning, Wind,
  Car, AlertTriangle, Users, Timer, Mountain, Route,
  Smartphone, Watch, Tablet, Monitor,
  Star, TrendingUp, Eye, Zap, Menu, X,
  ArrowRight, CheckCircle, BarChart3, Gauge, Navigation
} from 'lucide-react'
import dynamic from 'next/dynamic'

const MapSection = dynamic(() => import('@/components/MapSection'), { ssr: false })
const RouteMap = dynamic(() => import('@/components/RouteMap'), { ssr: false })

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDay, setActiveDay] = useState(0)
  const [userLevel, setUserLevel] = useState(0)
  const [weather, setWeather] = useState(2)
  const [traffic, setTraffic] = useState(1)
  const [safetyScore, setSafetyScore] = useState(0)
  const [targetScore, setTargetScore] = useState(78)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [profileLevel, setProfileLevel] = useState(1)
  const [modality, setModality] = useState(1)
  const [sex, setSex] = useState(1)
  const [age, setAge] = useState(3)
  const [device, setDevice] = useState(3)
  const [activeParams, setActiveParams] = useState<number[]>([])
  const [heroScore, setHeroScore] = useState(0)

  // Animate hero score
  useEffect(() => {
    const target = 87
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setHeroScore(target)
        clearInterval(timer)
      } else {
        setHeroScore(Math.round(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [])

  // Calculate safety score based on selections
  useEffect(() => {
    const weatherScores = [95, 80, 65, 45, 30, 55]
    const trafficScores = [90, 75, 55, 35]
    const levelBonus = [0, 5, 10, 15, 20]
    const base = (weatherScores[weather] + trafficScores[traffic]) / 2 + levelBonus[userLevel]
    setTargetScore(Math.min(99, Math.max(15, Math.round(base))))
  }, [weather, traffic, userLevel])

  // Animate AI parameters
  useEffect(() => {
    const interval = setInterval(() => {
      const randomParams = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100))
      setActiveParams(randomParams)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const processRoute = () => {
    setIsProcessing(true)
    setSafetyScore(0)
    setTimeout(() => {
      const duration = 1500
      const steps = 40
      const increment = targetScore / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= targetScore) {
          setSafetyScore(targetScore)
          clearInterval(timer)
          setIsProcessing(false)
          setShowResults(true)
        } else {
          setSafetyScore(Math.round(current))
        }
      }, duration / steps)
    }, 800)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    if (score >= 40) return 'text-orange-500'
    return 'text-red-500'
  }

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-green-400 to-emerald-600'
    if (score >= 60) return 'from-yellow-400 to-amber-600'
    if (score >= 40) return 'from-orange-400 to-orange-600'
    return 'from-red-400 to-red-600'
  }

  const getScoreStroke = (score: number) => {
    if (score >= 80) return '#4CAF50'
    if (score >= 60) return '#FFC107'
    if (score >= 40) return '#FF9800'
    return '#F44336'
  }

  const days = [
    { day: 'Dilluns', time: '8:30' },
    { day: 'Dimecres', time: '17:00' },
    { day: 'Dissabte', time: '9:00' },
    { day: 'Diumenge', time: '10:30' },
  ]

  const weatherOptions = [
    { icon: Sun, label: 'Sol' },
    { icon: Cloud, label: 'Núvols' },
    { icon: CloudRain, label: 'Pluja lleugera' },
    { icon: CloudRain, label: 'Pluja forta' },
    { icon: CloudSnow, label: 'Neu' },
    { icon: Wind, label: 'Vent fort' },
  ]

  const trafficOptions = [
    { icon: Route, label: 'Baix' },
    { icon: Car, label: 'Moderat' },
    { icon: Users, label: 'Alt' },
    { icon: AlertTriangle, label: 'Molt alt' },
  ]

  const paramCategories = [
    { name: 'Meteorologia', count: 24, icon: Cloud, color: 'bg-blue-500' },
    { name: 'Trànsit', count: 18, icon: Car, color: 'bg-orange-500' },
    { name: 'Superfície', count: 16, icon: MapPin, color: 'bg-green-500' },
    { name: 'Desnivell', count: 12, icon: Mountain, color: 'bg-purple-500' },
    { name: 'Incidències', count: 14, icon: AlertTriangle, color: 'bg-red-500' },
    { name: 'Perfil Ciclista', count: 10, icon: Bike, color: 'bg-cyan-500' },
    { name: 'Hora/Data', count: 8, icon: Timer, color: 'bg-amber-500' },
  ]

  const routes = [
    {
      name: 'Camp Nou - Tibidabo - Vallvidrera - Camp Nou',
      distance: '20 km',
      safety: 65,
      elevation: '490 m',
      surface: '38% pista',
      slope: '4.5%',
      time: '1h 50min',
      lat: 41.3818,
      lng: 2.1228,
    },
    {
      name: 'Carretera de les Aigües',
      distance: '6,23 km',
      safety: 98,
      elevation: '130 m',
      surface: '68% pista',
      slope: '0.5%',
      time: '55 min',
      lat: 41.4100,
      lng: 2.1300,
    },
    {
      name: 'Passeig Marítim - Port Olímpic',
      distance: '12 km',
      safety: 92,
      elevation: '15 m',
      surface: '95% carril bici',
      slope: '0.1%',
      time: '40 min',
      lat: 41.3851,
      lng: 2.1934,
    },
    {
      name: 'Montjuïc - Castell',
      distance: '8,5 km',
      safety: 55,
      elevation: '180 m',
      surface: '45% pista',
      slope: '6.2%',
      time: '1h 10min',
      lat: 41.3633,
      lng: 2.1586,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-navy-800/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Safe<span className="text-cyan-400">Bike</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Simulador', 'Perfil', 'Rutes', 'IA'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                Començar
              </button>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-navy-800/95 border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {['Home', 'Simulador', 'Perfil', 'Rutes', 'IA'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center animated-bg overflow-hidden">
        {/* Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-gray-300">IA en temps real · +100 paràmetres</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                Pedaleja<br />
                <span className="text-gradient">amb seguretat</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                La primera app que combina múltiples IAs especialitzades per analitzar
                meteorologia, trànsit, superfície, desnivell i incidències en temps real.
                Obté la teva puntuació de seguretat personalitzada.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#simulador"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
                >
                  Prova el Simulador <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#ia"
                  className="px-8 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/20 transition-all"
                >
                  Com funciona?
                </a>
              </div>

              <div className="flex gap-8 mt-12">
                {[
                  { value: '+100', label: 'Paràmetres' },
                  { value: '5', label: 'IAs Especialitzades' },
                  { value: '99.2%', label: 'Precisió' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.2 }}
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl animate-pulse-slow" />

                {/* Score Circle */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80" cy="80" r="70"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="80" cy="80" r="70"
                      fill="none"
                      stroke="url(#scoreGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={440}
                      strokeDashoffset={440 - (440 * heroScore) / 100}
                      className="transition-all duration-100"
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2196F3" />
                        <stop offset="100%" stopColor="#00BCD4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-6xl md:text-8xl font-display font-black text-white">
                      {heroScore}
                    </span>
                    <span className="text-lg text-cyan-400 font-semibold">Puntuació de Seguretat</span>
                    <div className="flex items-center gap-1 mt-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Ruta segura</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                {[
                  { icon: Cloud, label: 'Meteo', value: '92%', color: 'from-blue-500 to-blue-600', pos: 'top-4 -left-8' },
                  { icon: Car, label: 'Trànsit', value: '78%', color: 'from-orange-500 to-amber-600', pos: 'top-4 -right-8' },
                  { icon: Mountain, label: 'Terreny', value: '85%', color: 'from-green-500 to-emerald-600', pos: 'bottom-12 -left-12' },
                  { icon: Activity, label: 'Estat', value: '95%', color: 'from-purple-500 to-violet-600', pos: '-bottom-2 -right-8' },
                ].map((badge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.2, type: 'spring' }}
                    className={`absolute ${badge.pos}`}
                  >
                    <div className={`px-3 py-2 rounded-xl bg-gradient-to-r ${badge.color} shadow-lg flex items-center gap-2`}>
                      <badge.icon className="w-4 h-4 text-white" />
                      <div>
                        <div className="text-xs text-white/80">{badge.label}</div>
                        <div className="text-sm font-bold text-white">{badge.value}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* AI Parameters Section */}
      <section id="ia" className="py-24 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Intel·ligència Artificial Multimodal"
            subtitle="Combinem 5 IAs especialitzades que analitzen més de 100 paràmetres en temps real per garantir la teva seguretat"
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Parameter categories */}
            <div className="space-y-4">
              {paramCategories.map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-4 flex items-center gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center flex-shrink-0`}>
                    <cat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">{cat.name}</span>
                      <span className="text-cyan-400 text-sm font-mono">{cat.count} paràmetres</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${cat.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(cat.count / 24) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.15 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="glass rounded-2xl p-4 text-center">
                <span className="text-4xl font-display font-black text-gradient">102</span>
                <span className="text-gray-400 ml-2">paràmetres totals analitzats</span>
              </div>
            </div>

            {/* AI Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-cyan-400" />
                <h3 className="text-white font-display font-bold text-xl">Motor IA en Temps Real</h3>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs">ACTIU</span>
                </div>
              </div>

              {/* Neural network visualization */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {['Visió', 'NLP', 'Predicció', 'Fusió'].map((ai, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${
                      ['from-blue-500 to-blue-700', 'from-purple-500 to-purple-700',
                       'from-green-500 to-green-700', 'from-cyan-500 to-cyan-700'][i]
                    } flex items-center justify-center mb-2 shadow-lg`}>
                      {[<Eye key="e" />, <Brain key="b" />, <TrendingUp key="t" />, <Zap key="z" />][i]}
                    </div>
                    <span className="text-xs text-gray-400">{ai}</span>
                  </div>
                ))}
              </div>

              {/* Live parameter bars */}
              <div className="space-y-3">
                {['Velocitat vent', 'Probabilitat pluja', 'Densitat trànsit', 'Qualitat asfalt',
                  'Visibilitat', 'Temperatura', 'Índex UV', 'Risc incidència'].map((param, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-28 text-right">{param}</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${
                            i % 4 === 0 ? '#2196F3' : i % 4 === 1 ? '#4CAF50' : i % 4 === 2 ? '#FF9800' : '#9C27B0'
                          }, ${
                            i % 4 === 0 ? '#00BCD4' : i % 4 === 1 ? '#8BC34A' : i % 4 === 2 ? '#FFC107' : '#E040FB'
                          })`,
                        }}
                        animate={{ width: `${activeParams[i] || 50}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <span className="text-xs text-cyan-400 font-mono w-10 text-right">
                      {activeParams[i] || 50}%
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-gray-400 text-sm">Feedback de l&apos;usuari</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Route Simulator Section */}
      <section id="simulador" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Simulador de Seguretat"
            subtitle="Configura les condicions i descobreix la puntuació de seguretat de la teva ruta"
            dark
          />

          <div className="mt-16 space-y-12">
            {/* Day Selection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-display font-bold text-2xl text-navy-700 mb-6">DIA DE SORTIDA</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {days.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveDay(i)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeDay === i
                        ? 'bg-navy-700 text-white shadow-lg shadow-navy-700/30'
                        : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-navy-400'
                    }`}
                  >
                    {d.day} {d.time}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Simulator Controls */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12"
            >
              <h3 className="font-display font-bold text-2xl text-navy-700 mb-8 text-center">
                SIMULADOR DE SITUACIONS
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {/* User Level */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-4">Nivell usuari</h4>
                  <div className="flex gap-2">
                    {[
                      { label: 'Principiant', icon: '🚲' },
                      { label: 'Bàsic', icon: '🚴' },
                      { label: 'Intermedi', icon: '🚴‍♂️' },
                      { label: 'Avançat', icon: '🏆' },
                      { label: 'Expert', icon: '⭐' },
                    ].map((level, i) => (
                      <button
                        key={i}
                        onClick={() => setUserLevel(i)}
                        className={`icon-btn flex-1 text-center ${userLevel === i ? 'active' : ''}`}
                        title={level.label}
                      >
                        <span className="text-xl">{level.icon}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Weather */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-4">Meteorologia</h4>
                  <div className="flex gap-2 flex-wrap">
                    {weatherOptions.map((w, i) => (
                      <button
                        key={i}
                        onClick={() => setWeather(i)}
                        className={`icon-btn ${weather === i ? 'active' : ''}`}
                        title={w.label}
                      >
                        <w.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Traffic */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-4">Trànsit</h4>
                  <div className="flex gap-2">
                    {trafficOptions.map((t, i) => (
                      <button
                        key={i}
                        onClick={() => setTraffic(i)}
                        className={`icon-btn flex-1 text-center ${traffic === i ? 'active' : ''}`}
                        title={t.label}
                      >
                        <t.icon className="w-5 h-5 mx-auto" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Button */}
              <div className="text-center mt-10">
                <button
                  onClick={processRoute}
                  disabled={isProcessing}
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-navy-700 to-navy-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-navy-700/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processant ruta...
                    </>
                  ) : (
                    <>
                      <Navigation className="w-5 h-5" />
                      Processar ruta
                    </>
                  )}
                </button>
              </div>

              {/* Results */}
              <AnimatePresence>
                {(safetyScore > 0 || isProcessing) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-10"
                  >
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
                      <div className="relative w-48 h-48 mx-auto mb-4">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                          <circle cx="80" cy="80" r="70" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                          <circle
                            cx="80" cy="80" r="70"
                            fill="none"
                            stroke={getScoreStroke(safetyScore)}
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray={440}
                            strokeDashoffset={440 - (440 * safetyScore) / 100}
                            className="transition-all duration-300"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className={`text-5xl font-display font-black ${getScoreColor(safetyScore)}`}>
                            {safetyScore}
                          </span>
                          <span className="text-sm text-gray-500">Seguretat</span>
                        </div>
                      </div>

                      {showResults && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
                        >
                          {[
                            { label: 'Meteorologia', value: weatherOptions[weather].label, icon: Cloud },
                            { label: 'Trànsit', value: trafficOptions[traffic].label, icon: Car },
                            { label: 'Visibilitat', value: weather <= 1 ? 'Excel·lent' : 'Reduïda', icon: Eye },
                            { label: 'Recomanació', value: safetyScore >= 60 ? 'Apte' : 'Precaució', icon: Shield },
                          ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                              <item.icon className="w-5 h-5 text-navy-500 mx-auto mb-2" />
                              <div className="text-xs text-gray-500">{item.label}</div>
                              <div className="text-sm font-semibold text-navy-700">{item.value}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Route with Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-2xl text-navy-700 mb-2 text-center">
                CAMP NOU - TIBIDABO - VALLVIDRERA - CAMP NOU (20KMS)
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8" />
              <div className="rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 h-[400px]">
                <MapSection />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Profile Section */}
      <section id="perfil" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Perfil del Ciclista"
            subtitle="Personalitza el teu perfil perquè la IA s'adapti al teu nivell i necessitats"
            dark
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid lg:grid-cols-2 gap-12"
          >
            {/* Profile Controls */}
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 space-y-8">
              {/* Experience Level */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Nivell d&apos;experiència</h4>
                <div className="flex gap-2">
                  {['🌱 Novell', '🚲 Bàsic', '🚴 Intermedi', '🏅 Avançat', '⭐ Expert'].map((l, i) => (
                    <button
                      key={i}
                      onClick={() => setProfileLevel(i)}
                      className={`icon-btn flex-1 text-xs text-center ${profileLevel === i ? 'active' : ''}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modality */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Modalitat preferida</h4>
                <div className="flex gap-2">
                  {['🚲 Urbà', '🚵 MTB', '🏎️ Carretera', '🚴‍♀️ Gravel', '🎯 Mixed'].map((m, i) => (
                    <button
                      key={i}
                      onClick={() => setModality(i)}
                      className={`icon-btn flex-1 text-xs text-center ${modality === i ? 'active' : ''}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sex */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Sexe</h4>
                <div className="flex gap-2">
                  {['♂️ Home', '♀️ Dona'].map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setSex(i)}
                      className={`icon-btn flex-1 text-center ${sex === i ? 'active' : ''}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Edat</h4>
                <div className="flex gap-2">
                  {['1-12', '13-24', '25-45', '+45'].map((a, i) => (
                    <button
                      key={i}
                      onClick={() => setAge(i)}
                      className={`icon-btn flex-1 text-center font-mono text-sm ${age === i ? 'active' : ''}`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Device */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Dispositiu</h4>
                <div className="flex gap-2">
                  {[
                    { icon: Monitor, label: 'PC' },
                    { icon: Tablet, label: 'Tablet' },
                    { icon: Watch, label: 'Rellotge' },
                    { icon: Smartphone, label: 'Mòbil' },
                  ].map((d, i) => (
                    <button
                      key={i}
                      onClick={() => setDevice(i)}
                      className={`icon-btn flex-1 text-center ${device === i ? 'active' : ''}`}
                      title={d.label}
                    >
                      <d.icon className="w-5 h-5 mx-auto" />
                      <span className="text-xs mt-1 block">{d.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Map - Zona habitual */}
            <div>
              <h3 className="font-display font-bold text-xl text-navy-700 mb-4">Zona habitual</h3>
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 h-[450px]">
                <MapSection center={[41.3874, 2.1686]} zoom={12} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suggested Routes Section */}
      <section id="rutes" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Rutes Suggerides"
            subtitle="Rutes personalitzades segons el teu perfil amb puntuació de seguretat en temps real"
            dark
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {routes.map((route, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="route-card bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden"
              >
                {/* Safety badge */}
                <div className="px-6 pt-5 pb-3">
                  <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${getScoreGradient(route.safety)} text-white font-bold text-sm`}>
                    Seguretat: {route.safety}%
                  </div>
                </div>

                {/* Route Map */}
                <div className="h-48 mx-4">
                  <RouteMap lat={route.lat} lng={route.lng} routeIndex={i} />
                </div>

                {/* Route Info */}
                <div className="p-6">
                  <h4 className="font-display font-bold text-lg text-navy-700 mb-3">
                    {route.name} ({route.distance})
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-gray-400" />
                      Desnivell: {route.elevation}
                    </li>
                    <li className="flex items-center gap-2">
                      <Route className="w-4 h-4 text-gray-400" />
                      Via: {route.surface}
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      Pendent mitja: {route.slope}
                    </li>
                    <li className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-gray-400" />
                      Temps estimat: {route.time}
                    </li>
                  </ul>

                  <button className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-navy-700 to-navy-500 text-white font-semibold hover:shadow-lg hover:shadow-navy-700/20 transition-all">
                    Escollir ruta
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 animated-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Com Funciona?"
            subtitle="Un procés intel·ligent en 4 passos que aprèn i millora amb cada sortida"
          />

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              {
                step: '01',
                title: 'Configura el Perfil',
                desc: 'Indica el teu nivell, modalitat i zona habitual',
                icon: Users,
              },
              {
                step: '02',
                title: 'Escull la Ruta',
                desc: 'Selecciona o crea la teva ruta preferida',
                icon: MapPin,
              },
              {
                step: '03',
                title: 'Anàlisi IA',
                desc: '5 IAs analitzen +100 paràmetres en temps real',
                icon: Brain,
              },
              {
                step: '04',
                title: 'Puntuació',
                desc: 'Obté la teva puntuació de seguretat personalitzada',
                icon: Gauge,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass rounded-3xl p-6 text-center relative group hover:bg-white/20 transition-all"
              >
                <div className="text-6xl font-display font-black text-white/10 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                {i < 3 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-cyan-400/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Safe<span className="text-cyan-400">Bike</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm text-center">
              Seguretat intel·ligent per a ciclistes · Basat en IA · +100 paràmetres en temps real
            </p>
            <div className="flex gap-6">
              {['Home', 'Simulador', 'Perfil', 'Rutes'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
            © 2026 SafeBike. Demo interactiva · Tots els drets reservats.
          </div>
        </div>
      </footer>
    </main>
  )
}

function SectionHeader({ title, subtitle, dark = false }: { title: string; subtitle: string; dark?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className={`font-display text-4xl md:text-5xl font-black ${dark ? 'text-navy-700' : 'text-white'}`}>
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full my-6" />
      <p className={`text-lg ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
        {subtitle}
      </p>
    </motion.div>
  )
}
