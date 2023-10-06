import axios from "axios"
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext"
import { useQuery } from 'react-query'
import Loader from "../Loader"
import { ImPlus } from 'react-icons/im'
import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useNavigate } from "react-router-dom";
import { UserInterface } from '../../Types/UserTypes'

export default function DashboardBody() {

    const { currentUser } = useGeneralAppContext()
    const name = currentUser?.displayName?.split(' ')[0] || 'User'
    const navigateTo = useNavigate()

    async function fetchResumes() {
        const firebaseUid = currentUser?.uid;
        const resumesInfo = await axios.get(`${import.meta.env.VITE_SERVER_URL}userResume/resume`, {
            params: { firebaseUid } // Send firebaseUid as a query parameter
        })
        return resumesInfo.data.message as UserInterface[]
    }

    const { data, isLoading, error } = useQuery('resumes', fetchResumes)

    function createNewResume() {
        navigateTo('/templates')
    }

    console.log(data)

    function timeAgo(dateString: string) {
  const currentDate = new Date();
  const givenDate = new Date(dateString);
  const timeDifference: number = currentDate.getTime() - givenDate.getTime();

  // Calculate time difference in various units
  const secondsAgo = Math.floor(timeDifference / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const yearsAgo = Math.floor(daysAgo / 365);

  // Display the result based on the time difference
  if (yearsAgo > 1) {
    return `Edited ${yearsAgo} years ago`;
  } else if (daysAgo > 1) {
    return `Edited ${daysAgo} days ago`;
  } else if (hoursAgo > 1) {
    return `Edited ${hoursAgo} hours ago`;
  } else if (minutesAgo > 1) {
    return `Edited ${minutesAgo} minutes ago`;
  } else if (secondsAgo > 1) {
    return `Edited ${secondsAgo} seconds ago`;
  } else {
    return 'Edited Just now';
  }
}


    return (
        <section className=" w-full py-6 md:pt-16 px-8 md:px-16">
            <div className=" border-b-[1px] py-4">
                <h2 className="text-[#121212] text-[1.5rem] font-medium leading-[3rem] md:text-[2rem]">{`Hello ${name}`}</h2>
                <p className="text-[#9d9d9d] leading-6">Create your Resume</p>
            </div>
            <div className="mt-8">
                <h3 className="text-[121212] font-medium leading-8">My Resumes</h3>
                <div className='flex'>
                    {isLoading ? <Loader /> :
                        error ? <h4>There was an error fetching your resume</h4> :
                            <div className="w-full mt-4">
                                {data && data?.length > 0 ?
                                    <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-3 lg:grid-cols-5">
                                        {data.map((item) => {
                                            console.log(item.resumeName)
                                            return (
                                                <div key={item.id} className="flex flex-col gap-4">
                                                    <div className="bg-[#9d9d9d] min-h-[300px] shadow-md">

                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex items-center justify-between">
                                                            <p>{item.resumeName}</p>
                                                            <i className="text-[1.2rem]"><HiOutlineEllipsisHorizontal /></i>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-xs text-[#9d9d9d]">{timeAgo(item.updatedAt)}</p>
                                                            <i className="text-[#ff3d00]"><RiDeleteBinLine /></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div> :
                                    <div className=" h-[50vh] md:h-[40vh] w-full md:w-[50%] lg:w-[20%] flex flex-col gap-4">
                                        <div onClick={createNewResume} className='bg-[#e7e3e3de] p-6 w-full h-full flex items-center justify-center'>
                                            <i className='text-[6rem] text-[#19265751]'><ImPlus /></i>
                                        </div>
                                        <p className="font-medium text-[#192657]">Create New Resume</p>
                                    </div>
                                }
                            </div>
                    }
                </div>
            </div>
        </section>
    )
}
