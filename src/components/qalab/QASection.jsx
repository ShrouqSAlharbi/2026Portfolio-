import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bug, ArrowRight } from 'lucide-react'
import { challenges, qaLabIntro, totalBugs } from '../../data/qaLab.js'
import { fadeUp } from '../../lib/motion.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlowBackground from '../ui/GlowBackground.jsx'
import QAHud from './QAHud.jsx'
import ChallengeCard from './ChallengeCard.jsx'
import BugHuntChallenge from './BugHuntChallenge.jsx'
import EdgeCaseChallenge from './EdgeCaseChallenge.jsx'
import UXChallenge from './UXChallenge.jsx'
import ScoreBoard from './ScoreBoard.jsx'

const strengthBySkill = ['Attention to Detail', 'Edge Case Testing', 'Usability & UX Testing']

const challengeComponents = [BugHuntChallenge, EdgeCaseChallenge, UXChallenge]

export default function QASection() {
  const [phase, setPhase] = useState('intro') // intro | playing | results
  const [step, setStep] = useState(0)
  const [foundBugs, setFoundBugs] = useState(() => new Set())
  const [wrongByStep, setWrongByStep] = useState({ 0: 0, 1: 0, 2: 0 })

  const handleBugFound = (id) => {
    setFoundBugs((prev) => new Set(prev).add(id))
  }

  const handleMiss = () => {
    setWrongByStep((prev) => ({ ...prev, [step]: prev[step] + 1 }))
  }

  const goNext = () => {
    if (step < challenges.length - 1) setStep((s) => s + 1)
    else setPhase('results')
  }

  const restart = () => {
    setPhase('intro')
    setStep(0)
    setFoundBugs(new Set())
    setWrongByStep({ 0: 0, 1: 0, 2: 0 })
  }

  const results = useMemo(() => {
    const totalWrong = wrongByStep[0] + wrongByStep[1] + wrongByStep[2]
    const score = Math.max(70, 100 - totalWrong * 3)
    const testingStyle = totalWrong === 0 ? 'Meticulous Tester' : totalWrong <= 3 ? 'Exploratory Tester' : 'Persistent Tester'
    const bestStep = [0, 1, 2].reduce((best, i) => (wrongByStep[i] < wrongByStep[best] ? i : best), 0)
    return { score, testingStyle, strength: strengthBySkill[bestStep] }
  }, [wrongByStep])

  const current = challenges[step]
  const complete = current ? current.requiredBugs.every((id) => foundBugs.has(id)) : false
  const ActiveChallenge = challengeComponents[step]

  return (
    <section id="qa-lab" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <GlowBackground
        orbs={[{ color: 'cyan', top: '5%', left: '-8%', size: 420, opacity: 0.13 }]}
      />
      <SectionHeading kicker={qaLabIntro.kicker} title={qaLabIntro.title} />

      <AnimatePresence mode="wait">
        {phase === 'intro' && (
          <motion.div
            key="intro"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -12 }}
            className="glass-panel mx-auto max-w-2xl rounded-2xl p-6 text-center sm:p-10"
          >
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan text-void">
              <Bug size={24} />
            </div>
            <p className="mx-auto max-w-lg text-base font-medium text-ink sm:text-lg">
              {qaLabIntro.tagline}
            </p>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-dim">
              {qaLabIntro.body}
            </p>
            <button
              onClick={() => setPhase('playing')}
              data-cursor-hover
              className="mx-auto mt-7 flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-cyan px-6 py-3 font-mono text-xs uppercase tracking-wider text-void shadow-[0_0_30px_-6px_var(--color-cyan)]"
            >
              {qaLabIntro.cta}
              <ArrowRight size={14} />
            </button>
          </motion.div>
        )}

        {phase === 'playing' && (
          <motion.div
            key={`playing-${step}`}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -12 }}
          >
            <QAHud step={step} bugsFoundCount={foundBugs.size} />
            <ChallengeCard
              kicker={current.kicker}
              title={current.title}
              instructions={current.instructions}
              complete={complete}
              isLast={step === challenges.length - 1}
              onNext={goNext}
              onSkip={goNext}
            >
              <ActiveChallenge foundBugs={foundBugs} onBugFound={handleBugFound} onMiss={handleMiss} />
            </ChallengeCard>
          </motion.div>
        )}

        {phase === 'results' && (
          <motion.div key="results" initial="hidden" animate="show" variants={fadeUp}>
            <ScoreBoard
              bugsFoundCount={foundBugs.size}
              score={results.score}
              testingStyle={results.testingStyle}
              strength={results.strength}
              onRestart={restart}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {phase !== 'intro' && (
        <p className="mx-auto mt-6 max-w-2xl text-center text-[11px] text-ink-faint">
          {totalBugs} bugs planted across 3 fake app screens — every one is safe to click.
        </p>
      )}
    </section>
  )
}
