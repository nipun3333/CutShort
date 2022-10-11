import React from 'react'
import { Tick } from './svg/logos'

export default function Step5({ step, setStep }) {
  return (
    <div>
        <div>
          <div className='flex items-center justify-center'>
            <div className='px-5 py-5 rounded-full bg-steps'>
              <Tick />
            </div>
          </div>
          <div className='flex items-center justify-center mt-12'>
            <div className='text-center'>
              <h1 className='font-bold text-3xl'>Congratulations, Eren!</h1>
              <p className='text-text1'>You have completed onboarding, you can start using the eden.</p>
            </div>
          </div>

          <div className='flex items-center justify-center'>

          <div className='mt-12 inner-box'>
            <div className='mt-6 mb-32'>
              <button
                className='bg-steps text-white p-4 w-full rounded-md'
                onClick={() => setStep(1)}
              >
                Launch Eden
              </button>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}
