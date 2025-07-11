import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import AccountHeader from "@/components/AccountHeader"

const benefits = {
    'premium': [
        'Get all BENEFITS in Basic',
        'Access all courses',
        'Better chance for investors to find your pitch',
        'Mentoring discount'
    ],
    'basic': [
        'Fully access in BrighPitch Stage'
    ]
}

export default function YourMembershipPage() {

    const [plan, setPlan] = useState('premium')

    return(
        <>
            <AccountHeader title="Edit Membership Status"></AccountHeader>
            <main className="w-[90%] max-w-[720px] mx-auto mb-24 p-4">
                    <div className="flex flex-col items-center w-[196px] mb-8 mx-auto">
                        <div className="rounded-full bg-gray-400 w-[96px] h-[96px]"></div>
                        <p className="font-semibold text-lg my-2">Username</p>
                        <p className="text-gray-500 text-sm">Investor, Inventor, Mentor</p>
                        <p className="text-gray-500 text-sm">Literal address</p>
                    </div>
                    <section className="mb-12">
                        <h2 className="font-semibold text-2xl mb-4">Current Plan</h2>
                        <div className="flex items-center gap-x-6">
                            <div className="flex justify-center items-center bg-secondary p-4 rounded-lg w-[48px] h-[48px]">
                                <FontAwesomeIcon icon={faStar} className="text-xl" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-semibold text-lg">Premium</p>
                                <p className="text-sm text-gray-600">Renews on July 15, 2024</p>
                            </div>
                        </div>
                    </section>
                    <section className="mb-12">
                        <h2 className="font-semibold text-2xl mb-4">Benefits</h2>

                        {
                            (plan === 'premium') ? 
                            benefits['premium'].map(benefit => 
                                <div className="flex items-center gap-x-6 mb-4">
                                    <div className="flex justify-center items-center bg-secondary p-4 rounded-lg w-[48px] h-[48px]">
                                        <FontAwesomeIcon icon={faCheck} className="text-xl" />
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <p>{benefit}</p>
                                    </div>
                                </div>
                            )
                            :
                            benefits['basic'].map(benefit =>
                                <div className="flex items-center gap-x-6 mb-4">
                                    <div className="flex justify-center items-center bg-secondary p-4 rounded-lg w-[48px] h-[48px]">
                                        <FontAwesomeIcon icon={faCheck} className="text-xl" />
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <p>{benefit}</p>
                                    </div>
                                </div>
                            )
                        }   
                        <div className="flex items-center gap-x-6">
                            <div className="flex justify-center items-center bg-secondary p-4 rounded-lg w-[48px] h-[48px]">
                                <FontAwesomeIcon icon={faCheck} className="text-xl" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p>Access to all workshops</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="font-semibold text-2xl mb-4">Manage Membership</h2>
                        <button onClick={() => setPlan(plan === 'premium' ? 'basic' : 'premium')}>
                            {
                                plan === 'premium' ?
                                'Cancel membership'
                                :
                                'Upgrade to Premium'
                            }
                        </button>
                    </section>
                    
            </main>
        </>
    )
}