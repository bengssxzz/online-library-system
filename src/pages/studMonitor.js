import { useState, useEffect } from 'react'
import Sidebar from "../components/sidebar"
import Searchbar from "../components/searchbar"

export default function Monitor() {
    const [credData, setCred] = useState([])
    useEffect(() => {
        fetch('https://online-library-system-api.onrender.com/reg-list')
            .then(res => res.json())
            .then(credData => setCred(credData))
            .catch(err => console.log(err));
    }, [])

    const [studData, setStud] = useState([])
    useEffect(() => {
        fetch('https://online-library-system-api.onrender.com/student-list')
            .then(res => res.json())
            .then(studData => setStud(studData))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div class="tw-flex tw-bg-gray-50 tw-min-h-dvh">
                <div>
                    <Sidebar />
                </div>
                <div class="tw-flex sm:tw-flex-wrap tw-flex-col tw-w-full md:tw-mx-20 md:tw-mt-[100px] sm:tw-m-5 tw-align-top">
                    <label class="tw-text-center tw-text-5xl tw-pb-[100px]">Enrolled Students</label>
                    <Searchbar />
                    <div class="category table-striped table-responsive tw-w-[100%] sm:tw-w-full tw-flex tw-align-center tw-flex-col">
                        <table class="table table-striped tw-text-center">
                            <thead class="tw-text-center">
                                <tr>
                                    <th scope="col">LRN</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Middle Initial</th>
                                    <th scope="col">Birthday</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {studData.map((d, i) => (
                                    <tr key={i}>
                                        <th>{d.lrn}</th>
                                        <td>{d.lastname}</td>
                                        <td>{d.firstname}</td>
                                        <td class="tw-w-[30px]">{(d.middlename)[0] + "."}</td>
                                        <td>{d.birthday}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}