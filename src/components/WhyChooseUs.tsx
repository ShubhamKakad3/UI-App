
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
function WhyChooseUs() {
    const arrayOfObjects = [
        {
          title: 'The best way to predict the future is to invent it.',
          description: 'Life is 10% what happens to us and 90% how we react to it.'
        },
        {
          title: 'Your time is limited, don’t waste it living someone else’s life.',
          description: 'The only way to do great work is to love what you do.'
        },
        {
          title: 'If you can dream it, you can achieve it.',
          description: 'Success is not the key to happiness. Happiness is the key to success.'
        },
        {
          title: 'In the end, we only regret the chances we didn’t take.',
          description: 'Believe you can and you’re halfway there.'
        },
        {
          title: 'The only limit to our realization of tomorrow is our doubts of today.',
          description: 'Act as if what you do makes a difference. It does.'
        },
        {
          title: 'Do not wait to strike till the iron is hot; but make it hot by striking.',
          description: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.'
        }
      ];
      
      console.log(arrayOfObjects);
  return (
    <div>
        <StickyScroll content={arrayOfObjects} />
    </div>
  )
}

export default WhyChooseUs