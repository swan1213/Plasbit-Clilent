import { gsap } from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SelectedContext } from '.'
import { getImg, isMobile } from '../../../utils/helpers'

const DetailText = ({ children, position }) => {
  const [text, setText] = useState(children)
  const el = useRef()

  useEffect(() => {
    gsap.timeline()
      .fromTo(el.current, {
        opacity: 0,
        duration: 1
      }, {
        opacity: 1,
        duration: 1,
        onStart: () => setText(children)
      })
  }, [children])

  const getWidth = () => {
    if (isMobile()) return '100%'
    else if (position === 0 || position === 2) return '350px'
    else return 'auto'
  }

  return (
    <div ref={el} style={{width: getWidth(), display: isMobile() && position !== 0 ? 'none' : 'block' }}>
      <img src={getImg('check.svg')} alt="check" />
      <span style={{marginLeft: '10px', verticalAlign: 'middle', fontSize: '26px', fontWeight: '700'}}>{text}</span>
    </div>
  )
}


/**
 * render the detail text panel above the cards.
 * @param {boolean} trigger
 * @param {float}   duration
 */
export const CardDetailPanel = () => {
  const { selected } = useContext(SelectedContext)
  const { t } = useTranslation()

  const details = [
    [t('cardPage.first.text.second.0'), t('cardPage.first.text.second.1'), t('cardPage.first.text.second.2')],
    [t('cardPage.first.text.third.0'), t('cardPage.first.text.third.1'), t('cardPage.first.text.third.2')],
    [t('cardPage.first.text.first.0'), t('cardPage.first.text.first.1'), t('cardPage.first.text.first.2')],
  ]

  return (
    <>
      <div className="card-detail-panel">
        <DetailText position={0}>{ details[selected][0] }</DetailText>
        <DetailText position={1}>{ details[selected][1] }</DetailText>
        <DetailText position={2}>{ details[selected][2] }</DetailText>
      </div>
    </>
  )
}