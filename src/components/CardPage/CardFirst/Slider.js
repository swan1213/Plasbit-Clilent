import { gsap } from 'gsap'
import React, { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { SelectedContext } from '.'
import { getLocalImg } from '../../../utils/helpers'

/**
 * 
 * @param {string} image
 * @param {integer} position : it's matched with the text in CardDetailPanel
 * @returns 
 */
const AnimatingCard = ({ image, position }) => {
  const [initialize, setInitialize] = useState(false)
  const el = useRef()

  useEffect(() => {
    setInitialize(true)
  }, [])

  useLayoutEffect(() => {
    const element = el.current
    element.removeEventListener('pointermove', shakingCard)
    element.removeEventListener('pointerout', resetShakingCard)

    switch (position) {
      case 0:
        gsap.to(element, {
            scale: .7,
            zIndex: 0,
            duration: initialize ? 1.5 : 0,
            rotateY: '-45deg',
            transform: 'translate(-50%, -50%) translateX(calc(1 * var(--card-width) * 1.3))'
          })
        break
      case 1:
        gsap.to(element, {
            scale: 1.2,
            zIndex: 2,
            rotateY: 0,
            duration: initialize ? 1.5 : 0,
            transform: 'translate(-50%, -50%) translateX(0)',
            onComplete: () => {
              element.addEventListener('pointermove', shakingCard)
              element.addEventListener('pointerout', resetShakingCard)
            }
          })
        break
      case 2:
        gsap.to(element, {
          scale: .7,
          zIndex: 1,
          duration: initialize ? 1.5 : 0,
          rotateY: '45deg',
          transform: 'translate(-50%, -50%) translateX(calc(-1 * var(--card-width) * 1.3))'
        })
        break
      default: break
    }

    return () => {
      element.removeEventListener('pointermove', shakingCard)
      element.removeEventListener('pointerout', resetShakingCard)
    }
  }, [position, initialize])

  const shakingCard = (ev) => {
    const box = el.current.getBoundingClientRect()
    const centerPosition = {
      x: box.left + box.width / 2,
      y: box.top + box.height / 2,
    }
    const angle = Math.atan2(ev.pageX - centerPosition.x, 0) * (35 / Math.PI)
    gsap.to(el.current, {
      duration: 2,
      rotateY: `${angle}deg`,
    })
  }

  const resetShakingCard = () => {
    gsap.killTweensOf(el.current)
    gsap.to(el.current, {
      rotateY: 0
    })
  }

  return (
    <div ref={el} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%)'}}>
      <img src={getLocalImg(image)} alt={`${image}`} style={{width: 'var(--card-width)', height: 'var(--card-height)'}} />
    </div>
  )
}

const ControlButton = ({ prev, next }) => {
  const el = useRef()

  return (
    <div style={{width: '42px', margin: 'auto', textAlign: 'center', zIndex: 10}}>
      <button ref={el} 
        onClick={() => prev ? prev() : next()}
        style={{width: '40px', height: '40px', border: 0, outline: 'none', backgroundColor: 'transparent', textAlign: 'center', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <span style={{width: '12px', height: '12px', border: '3px solid #0f5db7', borderBottom: 0, borderLeft: 0, position: 'absolute', rotate: prev ? '45deg' : '-135deg'}}></span>
      </button>
    </div>
  )
}

export const Slider = () => {
  const { selected, setSelected, setPause } = useContext(SelectedContext)
  const el = useRef()

  const onMouseOver = useCallback(() => setPause(true), [setPause])
  const onMouseOut = useCallback(() => setPause(false), [setPause])

  useLayoutEffect(() => {
    const element = el.current
    element.addEventListener('mouseover', onMouseOver)
    element.addEventListener('mouseout', onMouseOut)

    return () => {
      element.removeEventListener('mouseover', onMouseOver)
      element.removeEventListener('mouseout', onMouseOut)
    }
  }, [onMouseOver, onMouseOut])

  const onPrev = () => {
    if (selected === 0)
      setSelected(2)
    else
      setSelected(selected - 1)
  }

  const onNext = () => {
    if (selected === 2)
      setSelected(0)
    else
      setSelected(selected + 1)
  }

  return (
    <div className="card-list" ref={el}>
      <ControlButton next={onNext} />

      <div style={{flexGrow: 1, position: 'relative', width: '100%', height: '100%', perspective: '1000px'}}>
        <AnimatingCard image={'webp-images/credit-cards/card-grey.webp'}
          position={(selected + 2) % 3}
        />
        <AnimatingCard image={'webp-images/credit-cards/card-blue.webp'}
          position={(selected + 1) % 3}
        />
        <AnimatingCard image={'webp-images/credit-cards/card-black.webp'}
          position={selected}
        />
      </div>

      <ControlButton prev={onPrev} />
    </div>
  )
}