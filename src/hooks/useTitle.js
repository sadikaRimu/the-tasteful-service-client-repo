import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-The Tastful Service`;
    }, [title]);
}
export default useTitle;