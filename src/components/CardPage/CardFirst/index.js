import React, { createContext, useEffect, useState } from 'react'
import { CardDetailPanel } from './CardDetailPanel'
import { Trans as T } from 'react-i18next'
import { getLocalImg, isMobile } from '../../../utils/helpers'
import { Slider } from './Slider'
import './Style.css'

export const SelectedContext = createContext()

export const CardFirst = () => {
  const [selected, setSelected] = useState(0)
  const [pause, setPause] = useState(false)
  const mobile = isMobile()
  let timeoutId

  useEffect(() => {
    if (timeoutId || pause) {
      clearTimeout(timeoutId)
      timeoutId = undefined
    }
    
    if (!pause) {
      timeoutId = setTimeout(() => {
        setSelected((selected + 1) % 3)
      }, 7000)
    }

    return () => clearTimeout(timeoutId)
  }, [selected, pause])

  return (
    <SelectedContext.Provider value={{ selected, setSelected, setPause }}>
      <section className="card_first text_center" style={{ backgroundImage: `url(${getLocalImg('webp-images/cards/card_first-bg.webp')})` }}>

        <div>
          {!mobile && 
            <h1 className="text_white main_title">
              <T>cardPage.first.title.0</T><br />
              <T>cardPage.first.title.1</T>
            </h1>
          }
          {mobile && <h1 className="text_white main_title">
            <T>cardPage.first.titleMobile.0</T> <br />
            <T>cardPage.first.titleMobile.1</T><br />
            <T>cardPage.first.titleMobile.2</T>
          </h1>}
        </div>

        <div className="card_btns mobile_none">
          <a href="#second" className="btn active"><T>cardPage.first.button.0</T></a>
          <a href="#third" className="btn bg_white"><T>cardPage.first.button.1</T> </a>
        </div>

        {mobile && <Slider />}
        <CardDetailPanel />
        {!mobile && <Slider />}

        <div className="card_btns order_card">
          <a href={`${process.env.REACT_APP_URL}signup`} className="btn bg_white"><T>cardPage.first.button.2</T></a>
        </div>

      </section>
    </SelectedContext.Provider>
  )
}