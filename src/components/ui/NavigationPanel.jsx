import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function NavigationPanel({closeAction}) {

    return (
        <div className="bg-background h-[100vh] w-[70%] absolute right-0 z-30 p-3 pl-6">
            <div className="w-full flex justify-end pr-3">
                <button className="" onClick={closeAction}>
                    x
                </button>
            </div>
            <Link href={'/your-account'} className="flex gap-x-4 items-center mb-6">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <p>Profile</p>
            </Link>
            <p className="text-sm text-primary-foreground mb-4 mt-6">BrightPitch - STAGE</p>
            <Link href={'/your-pitch'} className="flex gap-x-4 items-center mb-6">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <p>Manage post</p>
            </Link>
            <Link href={'#'} className="flex gap-x-4 items-center mb-6">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <p>Bookmark</p>
            </Link>
            <p className="text-sm text-primary-foreground mb-4 mt-6">BrightPitch - STAGE</p>
            <Link href={'/courseList'} className="flex gap-x-4 items-center mb-6">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <p>Course</p>
            </Link>
            <Link href={'#'} className="flex gap-x-4 items-center mb-6">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <p>Mentoring</p>
            </Link>
        </div>
    )
}