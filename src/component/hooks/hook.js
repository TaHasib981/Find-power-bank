import { useEffect, useState } from "react"

const useFeedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setFeedbacks(data))
    }, [])
    return [feedbacks, setFeedbacks]
}
export default useFeedbacks;