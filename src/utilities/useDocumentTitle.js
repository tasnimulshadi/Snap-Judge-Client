// useDocumentTitle.js
import { useEffect } from 'react'

function useDocumentTitle(title = "Snap Judge") {

    useEffect(() => {
        document.title = title + " | Snap Judge";
    }, [title]);

}

export default useDocumentTitle