import axios from "axios"
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext"
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Loader from "../Loader"
import { ImPlus } from 'react-icons/im'
import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useNavigate } from "react-router-dom";
import { UserInterface } from '../../Types/UserTypes'
import { useState } from "react"
import { useUserDetails } from "../../Functions/useUserDetails"
import { useColorContext } from "../../Functions/useColorContext"
import { nanoid } from "nanoid"
import { color } from "../../Types/ColorTypes"

export default function DashboardBody() {

    const { currentUser } = useGeneralAppContext()
    const name = currentUser?.displayName?.split(' ')[0] || 'User'
    const navigateTo = useNavigate()
    const queryClient = useQueryClient()
    const [loading, setLoading] = useState(false)
    const { userDispatch } = useUserDetails()
    const { colorDispatch, currentColor, Istanbul, Porto, Lisbon, Madrid, Kyiv, Cardiff, Milan, Berlin } = useColorContext()


    async function fetchResumes() {
        const firebaseUid = currentUser?.uid;
        const resumesInfo = await axios.get(`${import.meta.env.VITE_SERVER_URL}userResume/resume`, {
            params: { firebaseUid } // Send firebaseUid as a query parameter
        })
        return resumesInfo.data.message.reverse() as UserInterface[]
    }

    const { data, isLoading, error } = useQuery('resumes', fetchResumes)

    function createNewResume() {

        userDispatch({
            type: 'setNewResume'
        })
        navigateTo('/templates')
    }

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

    const deleteResume = useMutation(async (objectId: string) => {
        setLoading(true)
        try {
            await axios.delete(`${import.meta.env.VITE_SERVER_URL}userResume/resume/${objectId}`);
        } catch (error) {
            // Handle the error, e.g., show a notification or log it
            console.error('Error deleting resume:', error);
        } finally {
            // Whether there's an error or not, invalidate the query
            queryClient.invalidateQueries('resumes');
            setLoading(false)
        }
    });

    function editResume(state: UserInterface) {
        navigateTo('/edit-template', { state })
        userDispatch({
            type: 'setResumeName',
            payload: {
                resumeNamePayload: state.resumeName
            }
        })
        userDispatch({
            type: 'setFirstName',
            payload: {
                firstNamePayload: state.firstName
            }
        })
        userDispatch({
            type: 'setLastName',
            payload: {
                lastNamePayload: state.lastName
            }
        })
        userDispatch({
            type: 'setProfession',
            payload: {
                professionPayload: state.profession
            }
        })
        userDispatch({
            type: 'setPhone',
            payload: {
                phoneNumberPayload: state.phoneNumber
            }
        })
        userDispatch({
            type: 'setEmail',
            payload: {
                emailPayload: state.email
            }
        })
        userDispatch({
            type: 'setCountry',
            payload: {
                countryPayload: state.country
            }
        })
        userDispatch({
            type: 'setState',
            payload: {
                statePayload: state.state
            }
        })
        userDispatch({
            type: 'setProfessionalSummary',
            payload: {
                professionalSummaryPayload: state.professionalSummary
            }
        })
        userDispatch({
            type: 'setWorkHistory',
            payload: {
                workHistoryPayload: state.workHistory
            }
        })
        userDispatch({
            type: 'setEducation',
            payload: {
                educationPayload: state.education
            }
        })
        userDispatch({
            type: 'setSkills',
            payload: {
                skillsPayload: state.skills
            }
        })
        userDispatch({
            type: 'setLanguages',
            payload: {
                languagesPayload: state.languages
            }
        })
        userDispatch({
            type: 'setObjectId',
            payload: {
                objectIdPayload: state.objectId
            }
        })

        const templates: { [key: string]: color[] } = {
            Istanbul,
            Porto,
            Lisbon,
            Madrid,
            Kyiv,
            Cardiff,
            Milan,
            Berlin,
        };

        if (state.templateInfo.template in templates) {
            // console.log(templates[state.templateInfo.template])
            const cityKey = `set${state.templateInfo.template}Colors`;
            const payloadKey = `${state.templateInfo.template.toLowerCase()}Payload`;
            const templates: { [key: string]: color[] } = {
                Istanbul,
                Porto,
                Lisbon,
                Madrid,
                Kyiv,
                Cardiff,
                Milan,
                Berlin,
            };

            const updatedColors = templates[state.templateInfo.template].map(cityColors => {
                if (cityColors.color === state.templateInfo.color) {
                    return {
                        ...cityColors,
                        isActive: true
                    }
                } else return {
                    ...cityColors,
                    isActive: false
                }
            });

            const payload = {
                [payloadKey]: updatedColors,
            };

            colorDispatch({
                type: cityKey,
                payload,
            });
        }
    }

    return (
        <section className=" w-full py-6 md:pt-10 px-8 md:px-[3rem] lg:px-[6rem]">
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
                                    <div className="grid grid-cols-1 min-[300px]:grid-cols-2 gap-4 lg:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                        {data.map((item) => {

                                            return (
                                                <div key={item.id} className="flex flex-col gap-4">
                                                    <div onClick={() => editResume(item)} className="bg-[#9d9d9d] h-[250px] md:h-[300px] max-w-[200px] shadow-md">
                                                        <img
                                                            className='h-full w-full'
                                                            src={item.imageUrl}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2 max-w-[200px]">
                                                        <div className="flex items-center justify-between">
                                                            <p>{item.resumeName}</p>
                                                            <i className="text-[1.2rem] cursor-pointer"><HiOutlineEllipsisHorizontal /></i>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-xs text-[#9d9d9d]">{timeAgo(item.updatedAt)}</p>
                                                            <i className="text-[#ff3d00] cursor-pointer" onClick={() => { deleteResume.mutate(item.objectId) }}><RiDeleteBinLine /></i>
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
