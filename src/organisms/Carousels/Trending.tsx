'use client'

import React, { useState } from "react"
import "@/styles/globals.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Trending() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ef6aa9c4-a74e-45e3-9bad-b982d5b3f802.__CR0,0,970,300_PT0_SX970_V1___.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src="https://litoral.ufpr.br/wp-content/uploads/2021/03/PauloFreire_BannerSite.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src="https://m.media-amazon.com/images/S/aplus-media/vc/fc2d0733-3ab5-4c07-b2c5-1bd6d6e359d2.__CR0,0,970,300_PT0_SX970_V1___.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src="https://www.ubueditora.com.br/pub/media/catalog/product/cache/23ace5a67f8fffaa1ceb5cc9180b26d7/u/b/ubu0003_1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src="https://static1.squarespace.com/static/5b53b13285ede173115cb784/t/5f68df7a7a66516cb04a656d/1598490559386/Banner.jpg?format=1500w" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ef6aa9c4-a74e-45e3-9bad-b982d5b3f802.__CR0,0,970,300_PT0_SX970_V1___.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}


