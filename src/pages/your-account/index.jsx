import { RateMentor } from "@/components/RateMentor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import AccountHeader from "@/components/AccountHeader"
import { useEffect, useState } from "react"
import supabase from "@/lib/db"

export default function YourProfilePage() {

    const [userProfile, setUserProfile] = useState()

    useEffect(() => {        
        const fetchUserProfile = async () => {
            const {
                data: { session },
                error: sessionError,
            } = await supabase.auth.getSession()

            if (!session) {
                console.warn('No session found')
                return
            }

            const { data: profile, error } = await supabase
                .from('user_profiles')
                .select('*')
                .eq('id', session.user.id) // or `user_id`, depending on your schema
                .single()

            if (error) {
                console.error('Error fetching profile:', error)
            } else {
                setUserProfile(profile)
                console.log(profile)
            }
        }

        fetchUserProfile()
    }, [])

    return(
        <>
            <AccountHeader title='Your Profile'></AccountHeader>
            <main className="p-4">
                <div className="w-[90%] max-w-[720px] mx-auto">
                    <div className="flex flex-col items-center w-[196px] mb-8 mx-auto">
                        <div className="rounded-full bg-gray-400 w-[96px] h-[96px]"></div>
                        <p className="font-semibold text-lg my-2">{userProfile?.username}</p>
                        <p className="text-gray-500 text-sm">Investor, Inventor, Mentor</p>
                        <p className="text-gray-500 text-sm">{userProfile?.city + ', ' + userProfile?.country}</p>
                    </div>

                    <section className="mb-8"> 
                        <h2 className="text-lg font-bold mb-2">About</h2>
                        <p >{userProfile?.bio || 'This section is empty.'}</p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-lg font-bold mb-2">Industry Focus</h2>
                        <div className="flex flex-wrap gap-2">
                            <div className="bg-gray-400 py-1 px-4 text-center rounded-xl">
                                Sustainable Tech
                            </div>
                            <div className="bg-gray-400 py-1 px-4 text-center rounded-xl">
                                Consumption
                            </div>
                            <div className="bg-gray-400 py-1 px-4 text-center rounded-xl">
                                Renewable Energy
                            </div>
                        </div>
                    </section>
                    {/* <section className="mb-8">
                        <h2 className="text-lg font-bold mb-2">Portofolio</h2>
                        <div className="flex gap-2 overflow-x-scroll">
                            <div className="flex flex-col gap-y-2 p-2">
                                <div className="w-[160px] h-[160px] bg-green-200 rounded-md"></div>
                                <p className="font-semibold">Portofolio title</p>
                                <p className="text-sm text-gray-600">Portofolio title</p>
                            </div>
                            <div className="flex flex-col gap-y-2 p-2">
                                <div className="w-[160px] h-[160px] bg-blue-200 rounded-md"></div>
                                <p className="font-semibold">Portofolio title</p>
                                <p className="text-sm text-gray-600">Portofolio title</p>
                            </div>
                            <div className="flex flex-col gap-y-2 p-2">
                                <div className="w-[160px] h-[160px] bg-red-200 rounded-md"></div>
                                <p className="font-semibold">Portofolio title</p>
                                <p className="text-sm text-gray-600">Portofolio title</p>
                            </div>
                        </div>
                    </section> */}
                    <section className="mb-8">
                        <h2 className="text-lg font-bold mb-2">Mentorship</h2>
                        <RateMentor></RateMentor>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-lg font-bold mb-2">Contact</h2>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex gap-x-4 items-center">
                                <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
                                <p>ethan.carter@email.com</p>
                            </div>
                            <div className="flex gap-x-4 items-center">
                                <FontAwesomeIcon className="text-xl" icon={faPhone} />
                                <p>+62 454-6565-6765</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}