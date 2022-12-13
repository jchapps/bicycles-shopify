
import React, { Children, isValidElement, useState } from "react"
import style from "./ProductSlider.module.css"
import { useKeenSlider } from "keen-slider/react"
import cn from "classnames"

interface Props {
  children: React.ReactNode
}

function ProductSlider({children}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      console.log("changing to slide: ", s.track.details.rel)
    },
  })
  console.log(currentSlide)

  return (
    <div className={style.root}>
      <div ref={sliderRef as any} className="keen-slider h-full transition-opacity">
        <button
          onClick={instanceRef.current?.prev}
          className={cn(style.leftControl, style.control)}
        />
        <button
          onClick={instanceRef.current?.next}
          className={cn(style.rightControl, style.control)}
        />
        { Children.map(children, child => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                } keen-slider__slide`
              }
            }

            // return React.cloneElement(child, {
            //   className: `${
            //     child.props.className ? `${child.props.className}` : ""
            //   } keen-slider__slide`
            // })
          }

          return child
        }
        )}
      </div>
    </div>
  )
}

export default ProductSlider
