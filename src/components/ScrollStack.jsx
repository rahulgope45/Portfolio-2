import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ScrollStackItem = ({ children, itemClassName = '' }) => {
  return (
    <div
      className={`scroll-stack-card w-full my-16 ${itemClassName}`}
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    >
      {children}
    </div>
  )
}

const ScrollStack = ({
  children,
  stackOffset = 40,
  scaleStep = 0.05,
  baseScale = 0.9,
}) => {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current

      cards.forEach((card, index) => {
        const scale = baseScale + index * scaleStep

        gsap.fromTo(
          card,
          {
            y: 0,
            scale: 1,
          },
          {
            y: -index * stackOffset,
            scale,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top center+=150',
              end: 'bottom center',
              scrub: true,
              pin: index === cards.length - 1,
              pinSpacing: false,
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [stackOffset, scaleStep, baseScale])

  return (
    <div ref={containerRef} className="relative">
      {children.map((child, i) => (
        <div
          key={i}
          ref={el => (cardsRef.current[i] = el)}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export default ScrollStack
