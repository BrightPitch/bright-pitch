import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import AccountHeader from "@/components/AccountHeader"

export default function YourProfileEditPage() {

    return(
        <>
            <AccountHeader title={'Edit Your Profile'}></AccountHeader>
            <main className="w-[90%] max-w-[720px] mx-auto mb-24 p-4">
                    <div className="flex flex-col items-center w-[196px] mb-8 mx-auto">
                        <div className="rounded-full bg-gray-400 w-[96px] h-[96px]"></div>
                        <p className="font-semibold text-lg my-2">Username</p>
                        <p className="text-gray-500 text-sm">Investor, Inventor, Mentor</p>
                        <p className="text-gray-500 text-sm">Literal address</p>
                    </div>
                    <form className="flex flex-col" action="#" method="POST">
                        <p className="font-semibold mb-3">Role</p>
                        <div className="mb-4">
                            <input type="checkbox" name="role" id="role-investor" value={'investor'} />
                            <label htmlFor="role-investor">Investor</label>
                        </div>
                        <div>
                            <input type="checkbox" name="role" id="role-inventor" value={'inventor'} />
                            <label htmlFor="role-inventor">Inventor</label>
                        </div>
                    </form>
                    <form className="flex flex-col" id="profile-detail" action="#" method="POST">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="firstName" id="lastName" />
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" />
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" />
                        <label htmlFor="">Bio</label>
                        <textarea name="bio" id="bio" rows="10" placeholder="Explain about yourself"></textarea>
                        <label htmlFor="">Industry Focus</label>
                        <div className="flex gap-3">
                            <button className="border-accent border-2 rounded-full py-1 px-3 mr-4">
                                <span className="font-bold">+</span> Add item
                            </button>
                            <input type="text" name="interest" id="interest" defaultValue={'Renewable Energy'} className="rounded-full max-w-[128px]" />
                        </div>
                        <label htmlFor="email">Email</label> 
                        <input type="email" name="email" id="email" /> 
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" />
                    </form>
            </main>
            <footer className=" flex bg-background justify-between w-[90%] max-w-[720px] mx-auto h-[80px] fixed bottom-0 left-1/2 -translate-x-1/2 items-center">
                <button className="bg-secondary rounded-full min-w-[120px] p-3">Cancel</button>
                <button type="submit" form="profile-detail" className="bg-primary rounded-full min-w-[120px] p-3">Save</button>
            </footer>
        </>
    )
}