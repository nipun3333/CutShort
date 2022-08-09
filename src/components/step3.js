import React, { useState } from 'react'
import { TeamBlack, TeamSelected, UserBlack, UserSelected } from './svg/logos'

export default function Step3({ step, setStep }) {
  const [selectedPlan, setSelectedPlan] = useState('single')
  return (
    <div>
      <div>
        <div>
          <div className='flex items-center justify-center'>
            <div className='text-center'>
              <h1 className='font-bold text-3xl'>How are you planning to use Eden?</h1>
              <p className='text-text1'>We'll streamline your setup experience accordingly.</p>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='mt-12 inner-box'>
              <div>
                <div className='flex justify-between gap-4'>
                  <div 
                    className={'w-1/2 cursor-pointer rounded-md p-4 ' + (selectedPlan==="single" ? "border border-steps" : "border border-border")}
                    onClick={() => setSelectedPlan('single')}
                  >
                    <div>
                      {selectedPlan==="single" ?
                        <UserSelected />
                      :
                        <UserBlack />
                      }
                    </div>
                    <p className='text-base mt-8'>For myself</p>
                    <p className='text-base mt-2 text-text1'>Write better. Think more clearly. Stay organized.</p>
                  </div>
                  <div 
                    className={'cursor-pointer w-1/2 rounded-md p-4 ' + (selectedPlan==="team" ? "border border-steps" : "border border-border")}
                    onClick={() => setSelectedPlan('team')}
                  >
                    <div>
                      {selectedPlan==="team" ?
                        <TeamSelected />
                      :
                        <TeamBlack />
                      }
                    </div>
                    <p className='text-base mt-8'>With my team</p>
                    <p className='text-base mt-2 text-text1'>Wikis, docs, talks & projects, all in one place.</p>
                  </div>
                </div>
                <div>

                </div>
              </div>
              <div className='mt-6 mb-32'>
                <button
                  className='bg-steps text-white p-4 w-full rounded-md'
                  onClick={() => setStep(4)}
                >
                  Create Workspace
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
