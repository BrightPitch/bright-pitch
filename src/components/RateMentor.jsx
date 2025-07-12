import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as solidStar, faThumbsUp as solidThumbsUp, faThumbsDown as solidThumbsDown } from "@fortawesome/free-solid-svg-icons"
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"

const RateMentor = function () {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-2 items-center">
                <div className="bg-gray-400 rounded-full w-[32px] h-[32px]"></div>
                <div className="flex flex-col justify-center">
                    <p>Sophia Bennet</p>
                    <p className="text-gray-500 text-sm">07/07/2024</p>                    
                </div>
            </div>
            <RateStar rate={3}>
            </RateStar>
            <p>Ethan's guidance was instrumental in refining my business plan and securing funding. His insights into the market and product development are invaluable.</p>
            <div className="flex gap-x-8">
                <span>
                    <FontAwesomeIcon icon={solidThumbsUp} className="text-green-600 mr-2"></FontAwesomeIcon>
                    2
                </span>
                <span>
                    <FontAwesomeIcon icon={solidThumbsDown} className="text-red-600 mr-2"></FontAwesomeIcon>
                    4
                </span>
            </div>
        </div>
    )
}

const RateStar = function ({rate}) {
    return (
        <div>
            {   
                [...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={(i < rate) ? solidStar : regularStar} />
              )
            }
        </div>
    )
}


export {RateMentor}

