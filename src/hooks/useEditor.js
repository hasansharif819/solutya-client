import { useEffect, useState } from "react"

const useEditor = user => {
    const [editor, setEditor] = useState(false);
    const [editorLoading, setEditorLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://sleepy-hamlet-35110.herokuapp.com/editor/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setEditor(data.editor);
                setEditorLoading(false);
            })
        }
    }, [user])

    return [editor, editorLoading]
}

export default useEditor;