import React from 'react'

export default function Step2({ step, setStep }) {
  return (
    <div>
      <div>
        <div>
          <div className='flex items-center justify-center'>
            <div className='text-center'>
              <h1 className='font-bold text-3xl'>Let's set up a home for all your work</h1>
              <p className='text-text1'>You can always create another workspace later.</p>
            </div>
          </div>

          <div className='flex items-center justify-center'>

          <div className='mt-12 inner-box'>
            <div>
              <p className='text-base text-text2'>
                Workspace Name
              </p>
              <input type="text" name="wname" className='p-2 w-full mt-1 text-text3 outline-none border border-border rounded-md' placeholder='Eden' />
            </div>
            <div className='mt-6'>
              <p className='text-base text-text2'>
                Worspace URL <span className='text-text1'>(optional)</span>
              </p>
              <div className='flex border border-border rounded-md'>
                <p className='box1-url url-box p-2 text-text3 border-r border-r-border text-center bg-bg1'>www.eden.com/</p>
                <input type="text" name='dname' className='box2-url p-2 outline-none' placeholder='Steve Jobs' />
              </div>
            </div>
            <div className='mt-6 mb-32'>
              <button
                className='bg-steps text-white p-4 w-full rounded-md'
                onClick={() => setStep(3)}
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
