import { RateMentor } from "@/components/RateMentor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import AccountHeader from "@/components/AccountHeader"
import { useEffect, useState } from "react"
import supabase from "@/lib/db"



export default function YourProfilePage() {

    const [userProfile, setUserProfile] = useState()
    const [userInterests, setUserInterests] = useState([])
    const [userRoles, setUserRoles] = useState([])

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

            const { data: profile, error_profile } = await supabase
                .from('user_profiles')
                .select('*')
                .eq('id', session.user.id) // or `user_id`, depending on your schema
                .single()

            const { data: interests, error_area } = await supabase
                .from('user_area_of_interests')
                .select('*')
                .eq('id', session.user.id)

            const { data: roles, error_role } = await supabase
                .from('user_roles')
                .select('*')
                .eq('user_id', session.user.id)
            
            console.log(roles)


            if (error_profile || error_area || error_role) {
                console.error('Error fetching profile:', error_profile)
                console.error('Error fetching area:', error_area)
                console.error('Error fetching role:', error_role)
            } else {
                setUserProfile(profile)
                setUserInterests(interests)
                setUserRoles(roles)
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
                        <p className="text-gray-500 text-sm">
                            {
                                userRoles?.map(record => record.role + " ")
                            }
                        </p>
                        <p className="text-gray-500 text-sm">{userProfile?.city + ', ' + userProfile?.country}</p>
                    </div>

                    <section className="mb-8"> 
                        <h2 className="text-lg font-bold mb-2">About</h2>
                        <p >{userProfile?.bio || 'This section is empty.'}</p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-lg font-bold mb-2">Industry Focus</h2>
                        <div className="flex flex-wrap gap-2">
                            {
                                userInterests?.map(record => 
                                    <div className="bg-gray-400 py-1 px-4 text-center rounded-xl">
                                        {record.area}
                                    </div>
                                )
                            }
                            
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
                                <p>{userProfile?.email}</p>
                            </div>
                            <div className="flex gap-x-4 items-center">
                                <FontAwesomeIcon className="text-xl" icon={faPhone} />
                                <p>{userProfile?.phone_number}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
import { RateMentor } from "@/components/RateMentor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import AccountHeader from "@/components/AccountHeader";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";

export default function YourProfilePage() {
  const [userProfile, setUserProfile] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Session error:", sessionError);
        return;
      }

      if (!session) {
        console.warn("No session found");
        return;
      }

      const user = session.user;
      setUser(user);

      // Ambil dari user_profiles berdasarkan user_id
      const { data: profile, error: errorProfile } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (errorProfile) {
        console.error("Error fetching profile:", errorProfile.message);
        return;
      }

      setUserProfile(profile);
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <AccountHeader title="Your Profile" />
      <main className="p-4">
        <div className="w-[90%] max-w-[720px] mx-auto">
          <div className="flex flex-col items-center w-[196px] mb-8 mx-auto">
            <div className="rounded-full bg-gray-400 w-[96px] h-[96px]"></div>
            <p className="font-semibold text-lg my-2">
              {userProfile?.display_name ||
                user?.user_metadata?.name ||
                "No Name"}
            </p>
            <p className="text-gray-500 text-sm">
              {userProfile?.city}, {userProfile?.country}
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-2">About</h2>
            <p>{userProfile?.bio || "bio..."}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-2">Industry Focus</h2>
            {/* Add your interest mapping here */}
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-2">Mentorship</h2>
            <RateMentor />
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-4 items-center">
                <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
                <p>{user?.email}</p>
              </div>
              <div className="flex gap-x-4 items-center">
                <FontAwesomeIcon className="text-xl" icon={faPhone} />
                <p>{userProfile?.phone_number}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
