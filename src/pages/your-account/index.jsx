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
