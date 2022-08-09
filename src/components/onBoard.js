import React, { useState } from 'react'
import image from './images/logo.png'
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

export default function OnBoard() {
    const [step, setStep] = useState(1);
    return (
        <div>
            <div className="flex justify-center items-center mt-36">
                <div className="outer-box">
                    <div className='w-full flex justify-center items-center'>
                        <div className='flex gap-2 items-center'>
                            <img src={image} alt="logo" height="40px" width="40px" />
                            <h1 className='font-bold text-3xl'>Eden</h1>
                        </div>
                    </div>

                    <div className='mt-24 flex items-center justify-center'>
                        <div className='flex'>
                            <div className='flex items-center'>
                                <p className={'px-4 py-2 rounded-full w-fit text-base ' + (step >= 1 ? 'bg-steps text-white' : 'border border-border')}>1</p>
                                <hr className={'' + (step >= 1 ? 'text-steps ' : 'text-border')} />
                            </div>
                            <div className='flex items-center'>
                                <hr className={'' + (step >= 2 ? 'text-steps ' : 'text-border')} />
                                <p className={'px-4 py-2 rounded-full w-fit text-base ' + (step >= 2 ? 'bg-steps text-white' : 'border border-border')}>2</p>
                                <hr className={'' + (step >= 2 ? 'text-steps ' : 'text-border')} />
                            </div>
                            <div className='flex items-center'>
                                <hr className={'' + (step >= 3 ? 'text-steps ' : 'text-border')} />
                                <p className={'px-4 py-2 rounded-full w-fit text-base ' + (step >= 3 ? 'bg-steps text-white' : 'border border-border')}>3</p>
                                <hr className={'' + (step >= 3 ? 'text-steps ' : 'text-border')} />
                            </div>
                            <div className='flex items-center'>
                                <hr className={'' + (step >= 4 ? 'text-steps ' : 'text-border')} />
                                <p className={'px-4 py-2 rounded-full w-fit text-base ' + (step >= 4 ? 'bg-steps text-white' : 'border border-border')}>4</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-24'>
                        {(step == 1 ?
                            <div>
                                <Step1 step={step} setStep={setStep} />
                            </div>
                            :
                            (step == 2 ?
                                <div>
                                    <Step2 step={step} setStep={setStep} />
                                </div>
                                :
                                (step == 3 ?
                                    <Step3 step={step} setStep={setStep} />
                                    :
                                    <Step4 step={step} setStep={setStep} />
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
