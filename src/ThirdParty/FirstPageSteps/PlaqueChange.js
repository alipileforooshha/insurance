import React from 'react'

const PlaqueChange = ({postForm, setPostForm}) => {
    return (
        <div className='flex flex-row-reverse justify-center'>
            <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mx-4 flex-1'
            onClick={() => {
                setPostForm({
                    ...postForm,
                    plaque : 0
                })
            }}>
                تعویض پلاک نداشته ام
            </button>
            <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mx-4 flex-1'
            onClick={() => {
                setPostForm({
                    ...postForm,
                    plaque : 1
                })
            }}>
                تعویض پلاک داشته ام
            </button>
        </div>
    )
}

export default PlaqueChange
